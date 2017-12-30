var EthVotingContract = artifacts.require("./EthVoting.sol");

module.exports = function(deployer) {
  // Pass 42 to the contract as the first constructor parameter
  deployer.deploy(EthVotingContract, 1000,web3.toWei('0.1','ether'), ['Kartik','Rama','Jose']);
};
