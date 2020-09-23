import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import '@chainlink/hardhat-chainlink';

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    hardhat: {
      mining: {
        interval: 2500
      }
    },
  }
};

export default config;
