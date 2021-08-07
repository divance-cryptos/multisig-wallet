const { expectRevert } = require('@openzeppelin/test-helpers');
const { web3 } = require('@openzeppelin/test-helpers/src/setup');
const { expect } = require('chai');

const Wallet = artifacts.require('Wallet');

contract('Wallet', (accounts) => {
    let wallet;

    beforeEach(async () => {
        wallet = await Wallet.new([accounts[0],accounts[1],accounts[2]], 2);
        web3.eth.sendTransaction({from: accounts[0], to: wallet.address, value: 1000})
    })

    // test the constructor
    it('should have correct approvers and quorum', async () => {
        const approvers = await wallet.getApprovers();
        const quorum = await wallet.quorum();

        assert(approvers.length === 3);
        assert(approvers[0] === accounts[0]);
        assert(approvers[1] === accounts[1]);
        assert(approvers[2] === accounts[2]);
        assert(quorum.toNumber() === 2);
    })

    it.only('should create transfers ', async () => {
        await wallet.createTransfer(100, accounts[5], { from: accounts[0] });
        const transfers = await wallet.getTransfers();

        assert(transfers.length === 1);
        assert(transfers[0].id === '1');
        assert(transfers[0].amount === '100');
        expect(transfers[0].to).to.eql(accounts[5]);
        assert(transfers[0].approvals === '0');
        assert(transfers[0].sent === false );
    })

    it('should Not create transfers if user is not approved', async () => {
        // test unhappy path without test open zeppelin helper
        try {
            await wallet.createTransfer(100, accounts[5], { from: accounts[7] });
            const transfers = await wallet.getTransfers();
        } catch (err) {
            const key = Object.keys(err.data)[0];
            assert(err.data[key].reason === 'only approver allowed' );
        }
    })

    it('should Not create transfers if user is not approved', async () => {
        await expectRevert(wallet.createTransfer(100, accounts[5], { from: accounts[7] }) , 'only approver allowed');
    })

    it('should approve transfers', async () => {
        await wallet.createTransfer(100, accounts[5], { from: accounts[0] });
        await wallet.approveTransfer(0, { from: accounts[1] });
        const transfers = await wallet.getTransfers();
        const balance = await web3.eth.getBalance(wallet.address);

        expect(transfers.length).to.eql(1);
        expect(balance).to.eql('1000');
        expect(transfers[0].approvals).to.eql('1');
        expect(transfers[0].sent).to.be.equal(false);
    })

    it('should transfer if quorum reached', async () => {
        const balanceBefore  = web3.utils.toBN(await web3.eth.getBalance(accounts[6]));
        await wallet.createTransfer(100, accounts[6], { from: accounts[0] });
        await wallet.approveTransfer(0, { from: accounts[0] });
        await wallet.approveTransfer(0, { from: accounts[1] });
        const transfers = await wallet.getTransfers();
        const walletBalance = await web3.eth.getBalance(wallet.address);
        const quorum = await wallet.quorum();
        const balanceAfter = web3.utils.toBN(await web3.eth.getBalance(accounts[6]));
        const diffBalance = balanceAfter.sub(balanceBefore);

        expect(transfers.length).to.eql(1);
        expect(walletBalance).to.eql('900');
        expect(transfers[0].approvals).to.eql('2');
        expect(transfers[0].sent).to.be.equal(true);
        expect(quorum.toNumber()).to.eql(2);
        expect(diffBalance.toNumber()).to.eql(100);
    })

})