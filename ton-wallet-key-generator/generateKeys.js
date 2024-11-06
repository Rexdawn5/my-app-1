import TonWebMnemonic from 'tonweb-mnemonic';

async function generateKeysFromMnemonic(mnemonic) {
  const keyPair = await TonWebMnemonic.mnemonicToKeyPair(mnemonic.split(' '));
  return { publicKey: keyPair.publicKey, secretKey: keyPair.secretKey };
}

// Example usage
const mnemonic = "apple banana cherry ...";  // Replace with actual 24-word mnemonic
generateKeysFromMnemonic(mnemonic).then(keys => {
  console.log("Public Key:", keys.publicKey.toString('hex'));
  console.log("Secret Key:", keys.secretKey.toString('hex'));  // Handle securely
});
