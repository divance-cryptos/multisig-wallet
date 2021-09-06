# MultiSig Wallet


![image](https://user-images.githubusercontent.com/3521485/131924357-51ff1cd3-bd33-4540-aefc-eeee359c6f67.png)

This is a multisig wallet. The purpose of this repo is to have this project as portfolio and try to mantain and keep refactoring with best practices about solidity programing.

Warning / Disclaimer

This smart contracts have never been audited if you have an idea and need a project with similar contracts audited, you can contact me via PM on @servatj.

### Deploy in local

Bootstrap Smarts contracts in local with truffle develop console.

```
   npx truffle develop
```

In truffle console migrate the smart contracts in order to deploy them in your tesnet blockchain

```
  migrate --reset
```

![image](https://user-images.githubusercontent.com/3521485/131921749-b8cbb30b-f7b0-4722-8496-701984a7d819.png)

once you migrate you can pick address from there and add your playground accounts in your local in metamask

#### run test in truffle console

Running smartcontract tests inside truffle, just type test

![image](https://user-images.githubusercontent.com/3521485/131922483-42d58307-9579-4f7e-93cb-f84a597b0b9a.png)

### Setup metamask

In order to be able to run this Ethereum Dapp you have to install metamask to use it in your browser. (you can use other ethereum compatible ethereum wallet)

Install Metamask extension https://metamask.io/ if you got stuck in the FAQ you will find how to install metamask then in the footer you can get the docs. Create an issue if you don't know what to do I will try to help you ASAP.

![image](https://user-images.githubusercontent.com/3521485/131923366-bcc47670-d3c2-4204-9279-300af316f85a.png)

They you can add some accounts to metamask from the copy keys you generated in truffle console. Only approvers can do transfers, the approvers by default are the ones from 0 to 2 address, the ones that truffle uses when we deploy the smart contract in local.

https://medium.com/publicaio/how-import-a-wallet-to-your-metamask-account-dcaba25e558d

### Start the client

 ```
  cd client
  yarn start
 ```

### Deploy on testnet

In this repo we are using Infura so you need to set some configuration and get the kovan endpoint.
Generate fakes keys for kovan.

https://vanity-eth.tk/

```
  truffle migrate --reset --network kovan
```

### Deploy on mainnet

Recall that this smart contracts hadn't been audited.

### Contribute
