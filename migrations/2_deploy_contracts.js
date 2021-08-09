const Wallet = artifacts.require("Wallet");

module.exports = async (deployer, _network, accounts) => {
  await deployer.deploy(Wallet, [accounts[0], accounts[1], accounts[2]], 2);
  const wallet = await Wallet.deployed();
  web3.eth.sendTransaction({ from: accounts[0], to: wallet.address, value: 10000 });
};


// 0xdd2e07cF80e13e0A7160DCbC715C54bD228f4811