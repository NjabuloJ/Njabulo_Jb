const { fana } = require("../njabulo/fana");

fana({
  nomCom: "xor",
  categorie: 'General'
}, async (dest, zk, commandeOptions) => {
  const { repondre, arg } = commandeOptions;
  const key = 'mysecretkey';
  const plaintext = arg.join(" ");
  const ciphertext = xorCipher(plaintext, key);
  repondre(`Ciphertext: ${ciphertext}`);
});

function xorCipher(plaintext, key) {
  let ciphertext = '';
  for (let i = 0; i < plaintext.length; i++) {
    ciphertext += String.fromCharCode(plaintext.charCodeAt(i) ^ key.charCodeAt(i % key.length));
  }
  return ciphertext;
}