// Allows us to use ES6 in our migrations and tests.
require('babel-register')

const HDWalletProvider = require('truffle-hdwallet-provider');
const infuraKey = "8399c03aaf3544c99ec1f9af8f1dd72e";

const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();
var HDWallet = require("truffle-hdwallet-provider");

module.exports = {
  networks: {
    development: {
      host: 'localhost',
      port: 8545,
      network_id: '*' // Match any network id
    },
        rinkeby : {
        provider: () => new HDWallet("profit vacuum smart surge clever broom tomorrow item hurry book neutral write",`https://rinkeby.infura.io/v3/${infuraKey}`),
        network_id: 4,
        gas: 5500000,
        },
  }
}
