require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks:{
    goerli:{
      url:"https://gateway.tenderly.co/public/goerli",
      accounts:[process.env.WALLET_ADDRESS]
    },
    mumbai:{
      url:"https://polygon-mumbai-bor.publicnode.com",
      accounts:[process.env.WALLET_ADDRESS]
    }
  }
};
