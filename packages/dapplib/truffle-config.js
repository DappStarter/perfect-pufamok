require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea clog office skull dance birth scrub proud gesture hidden suspect gift'; 
let testAccounts = [
"0xe42cec9448956c4a81b14c896415959802e3885e5df9888fe23380964d0a0f25",
"0x16bde07add240fe62f9058c03568cdeab95fab35b472bea6c9451e2f14f917ab",
"0x543b7cf6ad128246435065666801878f3e6c9955947ed4dd9449fb00fd5a4e27",
"0x2321bc5a80d5bb0b01ff416f2500d96bc185953868550061f01b5d3cc7fd7f6b",
"0x620554a1d8624c0c873b623a6d50628b7cf2037c28482ef1096ee993a5d34a16",
"0xde8cd7351a5ae68f946d5f06897ebd34d47db2d4837114b82c154b60883d6f1c",
"0x45950651e186d01b1522848720efa38f86d63b62eba913a1f0480f002ce59fa0",
"0x46f16a07d502149d07d9785c24a176b6e7439bad908c7898fb636f48ad6e2f4b",
"0x17287d70ed828276fa4f5939690b7dae7d5fd3479d00f0037bc02cd4983c36cd",
"0x58a8ef83012ef7af5d8af1c02612b2b1d5a7f6eb34ab34176adf8bc2a69986c9"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
