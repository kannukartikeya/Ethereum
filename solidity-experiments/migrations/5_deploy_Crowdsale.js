var MyToken = artifacts.require("./MyToken.sol");
var Crowdsale = artifacts.require("./Crowdsale.sol");

module.exports = function(deployer) {
    deployer.deploy(MyToken,10000000,'Gadgets',0,'#').then(function() {
 
        return deployer.deploy(Crowdsale,'0x5aeda56215b167893e80b4fe645ba6d5bab767de',250,5,5, MyToken.address);
        
    }).then(function() { })
};

