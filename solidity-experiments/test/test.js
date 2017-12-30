var Banker = artifacts.require("./Banker.sol");
contract('Banker', function(accounts) {
    it("should return 0", function() {
            return Banker.deployed().then(function(instance) {
                return instance.abc_1.call();
            }).then(function (result) {
                assert.equal(result.toNumber(), 0, " must be 0");
            });
    });
});
