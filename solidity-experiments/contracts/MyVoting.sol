pragma solidity ^0.4.4;

//https://medium.com/@mvmurthy/full-stack-hello-world-voting-ethereum-dapp-tutorial-part-1-40d2d0d807c2
contract MyVoting
{
  mapping (bytes32 => uint8)  public voteReceived;


 bytes32[] public candidateList;

  //function MyVoting(bytes32[] list) { 
  function MyVoting(bytes32[] list) { 
        candidateList = list;
    // constructor
  }


function getVotes( bytes32 candidate) view public returns (uint8) {
        require(validateCandidate(candidate));
        return voteReceived[candidate];
}

function voteCandidate(bytes32 candidate) public
{
        require(validateCandidate(candidate));
        voteReceived[candidate] += 1;
}


function validateCandidate( bytes32 candidate) view public returns (bool) {
        for(uint i=0;i<candidateList.length;i++)
        {
                if(candidate==candidateList[i]){
                return true;
		}
        }
        return false;
}

}

