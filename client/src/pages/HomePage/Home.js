import React, { useState, useEffect }from 'react';
import Header from './../../components/Header.js';
import Transfer from './../../components/Transfer.js';
import { getWeb3, getWallet } from './../../utils/utils.js';
import TransferList from "./../../components/TransferList";



function Home() {
  const [web3, setWeb3] = useState(undefined);
  const [accounts, setAccounts] = useState(undefined);
  const [wallet, setWallet] = useState(undefined);
  const [approvers, setApprovers] = useState([]);
  const [quorum, setQuorum] = useState(undefined);
  const [transfers, setTransfers] = useState([]);

  useEffect(() => {
    const init = async () => {
      const web3 = await getWeb3();
      const accounts = await web3.eth.getAccounts();
      const wallet = await getWallet(web3);
      const approvers = await wallet.methods.getApprovers().call();
      const quorum = await wallet.methods.quorum().call();
      const transfers = await wallet.methods.getTransfers().call();
      setWeb3(web3);
      setAccounts(accounts);
      setWallet(wallet);
      setApprovers(approvers);
      setQuorum(quorum);
      setTransfers(transfers);
    }
    init();
  }, [transfers]);

  if(
    typeof web3 === 'undefined' || typeof accounts === 'undefined' || typeof wallet === 'undefined' || approvers.length === 0 || typeof quorum === 'undefined'
  ) {
    return <div>Loading...</div>;
  }

  const createTransfer = async (transfer) => {
    console.log(`transfer processed ${transfer.amount}`);
    await  wallet.methods.createTransfer(transfer.amount, transfer.to).send({from: accounts[0]})
  }

  const approveTransfer = async (transferId) => {
      wallet.methods.approveTransfer(transferId)
        .send({ from: accounts[0]});
  }
  return (
    <>
      <Header approvers={approvers} quorum={quorum} />
      <Transfer createTransfer={createTransfer}  approveTransfer={approveTransfer}  transfers={transfers}/>
      <TransferList transfers={transfers} approveTransfer={approveTransfer}/>
    </>
  );
}

export default Home;
