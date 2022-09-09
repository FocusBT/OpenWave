require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.9",
  networks: {
    rinkeby: {
      url: "https://soft-maximum-thunder.rinkeby.discover.quiknode.pro/c17fa0dde4fd8bd74758d4a9c7a8e75307317fcd/",
      accounts: ["8fe530fc5ea9fa6e49bb5b63ffbc5a979c7fda4de5992266804bc87c06478178"]
    },
  },
};