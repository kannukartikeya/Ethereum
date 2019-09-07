var proofOfExistence = artifacts.require("./ProofOfExistence1.sol");

module.exports = function(deployer){
deployer.deploy(proofOfExistence);
}
