/* hardhat.config.js */
require("@nomiclabs/hardhat-waffle");
require("hardhat-contract-sizer");
const fs = require("fs");
// const privateKey = fs.readFileSync("secret").toString();
const privateKey = fs.readFileSync(".secret").toString().trim();

const projectId = "xxx";

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337,
      allowUnlimitedContractSize: true,
    },

    theta: {
      url: "https://eth-rpc-api-testnet.thetatoken.org/rpc",
      accounts: [privateKey],
      network_id: 51,
    },
  },
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1,
      },
    },
    outputSelection: {
      "*": {
        "*": ["metadata", "evm.bytecode", "evm.bytecode.sourceMap"],
      },
    },
  },
};
