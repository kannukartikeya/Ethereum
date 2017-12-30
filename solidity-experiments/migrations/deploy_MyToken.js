var MyToken = artifacts.require("./MyToken.sol");
var Crowdsale = artifacts.require("./Crowdsale.sol");

module.exports = function(deployer) {
    deployer.deploy(MyToken,10000000,'Gadgets',0,'#').then(function() {
    })
};

