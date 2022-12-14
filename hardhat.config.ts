import {HardhatUserConfig} from "hardhat/types";
import "@nomiclabs/hardhat-waffle"
import "tsconfig-paths/register";
import "@typechain/hardhat"
import "@nomiclabs/hardhat-ethers"
import "hardhat-gas-reporter"

require("dotenv").config();

const privateKeys = (process.env.PRIVATE_KEYS ?? "0000000000000000000000000000000000000000000000000000000000000000").split(",")

const config: HardhatUserConfig = {
  solidity: "0.8.7",
  networks: {
    exzo: {
      url: process.env.JSONRPC_URL ?? "https://mainnet.exzo.technology",
      accounts: [
          ...privateKeys,
      ],
    },
    testexzo: {
      url: process.env.JSONRPC_URL ?? "https://testnet.exzo.technology",
      accounts: [
          ...privateKeys,
      ],
    },
  },
  gasReporter: {
    currency: "USD",
    gasPrice: 0
  },
  typechain: {
    outDir: "types",
    target: "ethers-v5",
    alwaysGenerateOverloads: false,
    externalArtifacts: ["externalArtifacts/*.json"],
  },
};

export default config;
