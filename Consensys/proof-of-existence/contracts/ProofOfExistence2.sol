pragma solidity ^0.5.0 ;

contract ProofOfExistence2 {

bytes32 [] public proofs;

function notarize ( string memory document) public 
{
	proofs.push(proofFor(document));
}

function proofFor( string memory document) pure public returns (bytes32 ) {
	return sha256(abi.encodePacked(document));
}


function checkDocument (string memory document) view public returns (bool) {
	for (uint256 i = 0 ; i<proofs.length; i ++)
	{	 
		if(proofs[i] == proofFor(document))
		return true;
	}
	return false;
}
}
