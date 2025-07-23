const { fana } = require('../njabulo/fana');
const fs = require('fs');
const getFBInfo = require("@xaviabot/fb-downloader");
const { default: axios } = require('axios');

fana({ 
  nomCom: "facebook", 
  categorie: "Download", 
  reaction: "📽️" 
}, async (dest, zk, commandeOptions) => {
  const { repondre, ms, arg } = commandeOptions;

  if (!arg[0]) {
    repondre('Insert a public facebook video link!');
    return;
  }

  const queryURL = arg.join(" ");

  try {
    getFBInfo(queryURL)
      .then((result) => {
        let caption = `*Facebook Video Downloader*\n` +
          `*Title:* ${result.title}\n` +
          `Reply With: *1* To Download HD Video 📹 *2* To Download SD Video 📹`;

        repondre(caption);

        zk.on('message', async (msg) => {
          if (msg.body === '1') {
            zk.sendMessage(dest, { video: { url: result.hd }, caption: 'HD Video Downloaded' }, { quoted: ms });
          } else if (msg.body === '2') {
            zk.sendMessage(dest, { video: { url: result.sd }, caption: 'SD Video Downloaded' }, { quoted: ms });
          }
        });
      })
      .catch((error) => {
        console.log("Error:", error);
        repondre('try fbdl2 on this link');
      });
  } catch (error) {
    console.error('Erreur lors du téléchargement de la vidéo :', error);
    repondre('Erreur lors du téléchargement de la vidéo.', error);
  }
});