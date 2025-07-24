const { fana } = require('../njabulo/fana');
const pkg from "@whiskeysockets/baileys";
const gis = require('g-i-s');
const axios = require('axios');
const conf = require(__dirname + '/../set');

fana({
  nomCom: "imgs",
  aliases: ["image", "images"],
  categorie: "Images",
  reaction: "🖼️"
}, async (dest, zk, commandeOptions) => {
  const { repondre, ms, arg, prefix } = commandeOptions;

  if (!arg[0]) {
    repondre('Which image?');
    return;
  }

  const searchTerm = arg.join(" ");
  gis(searchTerm, (error, results) => sendImage(error, results));

  function sendImage(error, results) {
    if (error) {
      repondre("Oops, an error occurred.");
      return;
    }

    if (!results || results.length === 0) {
      repondre("No images found.");
      return;
    }

    const buttons = [
      {
        name: "quick_reply",
        buttonParamsJson: JSON.stringify({
          display_text: "Next Image",
          id: `${prefix}img ${searchTerm}`
        })
      },
      {
        name: "quick_reply",
        buttonParamsJson: JSON.stringify({
          display_text: "Alive",
          id: `${prefix}alive`
        })
      },
      {
        name: "cta_url",
        buttonParamsJson: JSON.stringify({
          display_text: "Join Our Community",
          url: `https://whatsapp.com/channel/0029VbAckOZ7tkj92um4KN3u`
        })
      },
      {
        name: "cta_url",
        buttonParamsJson: JSON.stringify({
          display_text: "More Images",
          url: `https://www.google.com/search?q=${searchTerm}&tbm=isch`
        })
      }
    ];

    for (let i = 0; i < Math.min(results.length, 1); i++) {
      zk.sendMessage(dest, {
        image: { url: results[i].url },
        caption: `• ${searchTerm}`,
        footer: 'Powered by Ethix MD',
        buttons: buttons,
        contextInfo: {
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
            newsletterJid: '120363345407274799@newsletter',
            newsletterName: "_many_",
            serverMessageId: 143,
          }
        }
      }, { quoted: ms });
    }
  }
});
