require("@nomicfoundation/hardhat-toolbox");

const INFURIA_URL_AND_API_KEY = "https://sepolia.infura.io/v3/429c8115cb0c49bfa6484cd963fdbb49";
const SEPOLIA_PRIVATE_KEY = "32f65908b83ed28301f59322808bdf8e1356be85214df1d841728adc2e83fdb";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
 solidity: "0.8.24",
 networks: {
  sepolia: {
   url: INFURIA_URL_AND_API_KEY,
   accounts: [
    "ea7047c82a0729d8dcdae08938a424ba9865e32a20e4e45cc35abba43ea96356",
   ],
  },
 },
};