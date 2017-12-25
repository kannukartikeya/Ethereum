var votingContract = artifacts.require("./MyVoting.sol");

module.exports = function(deployer) {
  // Pass 42 to the contract as the first constructor parameter
  deployer.deploy(votingContract, ['Kartik','Rama','Jose'])
};
