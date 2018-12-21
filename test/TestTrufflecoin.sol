pragma solidity ^0.4.2;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/TruffleCoin.sol";

contract TestTrufflecoin {

  function testInitialBalanceUsingDeployedContract() public {
    TruffleCoin truffle = TruffleCoin(DeployedAddresses.TruffleCoin());

    uint expected = 10000;

    Assert.equal(truffle.getBalance(tx.origin), expected, "Owner should have 10000 TruffleCoin initially");
  }

  function testInitialBalanceWithNewTruffleCoin() public {
    TruffleCoin truffle = new TruffleCoin();

    uint expected = 10000;

    Assert.equal(truffle.getBalance(tx.origin), expected, "Owner should have 10000 TruffleCoin initially");
  }

}
