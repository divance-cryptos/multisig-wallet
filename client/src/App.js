import React, { useEffect, useState } from "react";
import { getWeb3, getWallet } from './utils/utils';
import { Header } from './components/Header';

function App() {
  const [web3, setWeb3] = useState(undefined);
  const [accounts, setAccounts] = useState(undefined);
  const [wallet, setWallet] = useState(undefined);
  const [approvers, setApprovers] = useState([]);
  const [quorum, setQuorum] = useState([]);


  useEffect(() => {
    const init = async () => {
      const web3 = await getWeb3();
      const accounts = await web3.eth.getAccounts();
      const wallet = await getWallet(web3);
      const approvers = await wallet.methods.getApprovers().call();
      const quorum = await wallet.methods.quorum().call();
      setWeb3(web3);
      setAccounts(accounts);
      setWallet(wallet);
      setApprovers(approvers);
      setQuorum(quorum)
      console.log(quorum)
    };
    init();
  }, []);

  const isInfraNotReady = web3 === undefined || accounts === undefined || wallet === undefined;
  const isContractDataReady = approvers.length === 0 || quorum === undefined

  if(
    typeof web3 === 'undefined'
    || typeof accounts === 'undefined'
    || typeof wallet === 'undefined'
    || approvers.length === 0
    || typeof quorum === 'undefined'
  ) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      Multisig Dapp
      <Header approvers={approvers} quorum={quorum}></Header>
    </div>
  );
}

export default App;
