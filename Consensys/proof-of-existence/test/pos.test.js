
var ProofOfExistence2 = artifacts.require('ProofOfExistence2')

contract('ProofOfExistence2', function(accounts) {

    //const bank = accounts[0]
    //const bank2 = accounts[1]
    //const bank3 = accounts[2]
    //const bank4 = accounts[3]
    //const bank5 = accounts[4]
    var uname
    //const regNum = "1000"

    it("should notarize a memory string", async() => {
        const posinstance = await ProofOfExistence2.deployed()

      //  var eventEmitted = false
     //   const name = "bank1"
	
	const tx = await posinstance.notarize("kartik")
	
//	if (tx.logs[0].event) {
//		uname = tx.logs[0].args.uname
//		eventEmitted = true
//	}
        
       const result = await posinstance.checkDocument("kartik")
//console.log(result);
//	const returnVal = "0"

        assert.equal(result,true, 'the return of checkdocument matches expected values')
        //assert.equal(eventEmitted, true, 'adding a bank should emit a For addBank event')
    })
});
