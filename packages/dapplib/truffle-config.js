require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drip flock tooth guard render remember hole guess nasty flower seat'; 
let testAccounts = [
"0x5626e7d87521b3d5592fe1b3d40de9fdaf2e96363d7f97254516b372adeaa6b6",
"0x56fe0d236be30eed0f2e7b293c4ad7b6eb346d6eb9b505ed78197dbf67bac003",
"0xabbe4534f735c8cc6c8a66123c00538a4e81bd9662da511f5ef01c3de2401386",
"0x81bda45dab0896e1bbe5bf8fd70e6692a1521247e70a75b7de27847c9f2ccca7",
"0xbae5622627a4232daafec37d405e5786c3f634a15b45ccb539584c043397419e",
"0x79b3b8aa1df0bda791d615ccb84fdda09953fbd9bfdae7b11bf48f2ab8eda238",
"0x017c6d81ad23a787cebfe6aaf65f6182626784408c6f104aa09349071b618aff",
"0x5916dfb2cdd3f24e1780f37887905a93c9d378cc786fa56a3dc1d9fa2bf4d7fd",
"0x3dbcf8a9efb98abbb867eaf1c68177030ea912d6cd023297bb197dc777e0333d",
"0xd514bc2d2278c3439f633021c4d1adbaaa5f30be019f48872a323ee8cb292d29"
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
