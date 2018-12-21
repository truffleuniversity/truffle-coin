const HDWalletProvider = require('truffle-hdwallet-provider');
const infuraKey = "ktSpeXTL5DRPjaJ087hh";

const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  compilers: {
    solc: {
      version: "^0.4.18"
    }
  },
  networks: {
    ropsten: {
      provider: () => new HDWalletProvider(mnemonic, `https://ropsten.infura.io/${infuraKey}`),
      network_id: 3
  	}
  }
}