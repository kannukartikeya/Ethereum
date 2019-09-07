pragma solidity ^0.5.0;

contract ProofOfExistence3 {
    
    event ProofCreated(
        uint256 indexed id,
        bytes32 documentHash
    );

    event ProofCreatedByName(
        string name,
        bytes32 documentHash
    );
    uint public totalRecords;

    address public owner;
  
    mapping (uint256 => bytes32) hashesById;
    mapping (string => bytes32) hashesByName;

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner is allowed to access this function.");
        _;
    }

    modifier noHashExistsYet(uint256 id) {
        require(hashesById[id] == "", "No hash exists for this id.");
        _;
    }

    constructor() public {
        owner = msg.sender;
    }

    function notarizeHash(uint256 id, bytes32 documentHash) public onlyOwner noHashExistsYet(id) {
        hashesById[id] = documentHash;
	totalRecords = totalRecords+1;

        emit ProofCreated(id, documentHash);
    }
    function notarizeDocument(uint256 id, string memory document) public onlyOwner noHashExistsYet(id) {
        bytes32 documentHash = sha256(abi.encodePacked(document));
        //hashesById[id] = sha256(abi.encodePacked(document));
        hashesById[id] = documentHash;
	totalRecords = totalRecords+1;

        emit ProofCreated(id, documentHash);
    }

    function notarizeDocumentByName(string memory name, string memory document) public onlyOwner {
        bytes32 documentHash = sha256(abi.encodePacked(document));
        hashesByName[name] = documentHash;
        emit ProofCreatedByName(name, documentHash);
    }

    function doesProofExist(uint256 id, bytes32 documentHash) public view returns (bool) {
        return hashesById[id] == documentHash;
    }
    
    function getProof(uint256 id) public view returns ( bytes32 ) { 
	return hashesById[id];
    }

    function getProofByName(string memory name ) public view returns ( bytes32 ) { 
	return hashesByName[name];
    }

    function getAllProofs() public view returns (bytes32[] memory ) {
    	bytes32[] memory ret = new bytes32[](totalRecords);
    	for (uint i = 1; i < 3; i++) {
        	ret[i] = hashesById[i];
    	}
    return ret;
    }

}
