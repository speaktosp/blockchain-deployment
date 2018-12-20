module.exports = {
  rpc: {
    host: "localhost",

    port: 8081
  },

  networks: {
    development: {
      host: "localhost", //our network is running on localhost

      port: 8081, // port where your blockchain is running

      network_id: "21",

      from: "0x10d78b02406f32792f7c4bd8c90ee354d2921f45", // use the account-id generated during the setup process

      gas: 20000000
    }
  }
};
