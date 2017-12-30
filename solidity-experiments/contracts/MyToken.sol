pragma solidity ^0.4.11;
contract MyToken {
    /* This creates an array with all balances */
	
    string public name;
    string public symbol;
    uint8 public decimals;
    mapping (address => uint256) public balanceOf;

    event Transfer(address indexed from , address indexed to, uint256 value);

    /* Initializes contract with initial supply tokens to the creator of the contract */
    function MyToken(
        uint256 initialSupply, string tokenName,uint8 decimalUnits, string tokenSymbol
        ) {
        if(initialSupply == 0 ) initialSupply = 1000000;
        balanceOf[msg.sender] = initialSupply;              // Give the creator all initial tokens
        name  = tokenName;
	symbol = tokenSymbol;
        decimals = decimalUnits;
    }

    /* Send coins */
    function transfer(address _to, uint256 _value) {
        require(balanceOf[msg.sender] >= _value);           // Check if the sender has enough

        require(balanceOf[_to] + _value >= balanceOf[_to]); // Check for overflows
        balanceOf[msg.sender] -= _value;                    // Subtract from the sender
        balanceOf[_to] += _value;                           // Add the same to the recipient
	Transfer(msg.sender,_to,_value);
    }

  function totalCoinsFor(address _sender) view public returns (uint256) {
    return balanceOf[_sender];
  }

    function abc() constant returns (uint) {
        return 1;
    }

  function tokenDetails(address user) view public returns (uint256, string,string) {
    return (balanceOf[user],name,symbol);
  }

}

