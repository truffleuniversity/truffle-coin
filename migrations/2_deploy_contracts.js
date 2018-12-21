var ConvertLib = artifacts.require("./ConvertLib.sol");
var TruffleCoin = artifacts.require("./TruffleCoin.sol");

module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, TruffleCoin);
  deployer.deploy(TruffleCoin);
};
