
const { fana } = require('../njabulo/fana');
const fs = require('fs');
const getFBInfo = require("@xaviabot/fb-downloader");
const { default: axios } = require('axios');

fana({
  nomCom: "faceb",
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
        let caption = ` titre: ${result.title} Lien: ${result.url} `;
        const button = {
          "buttonText": "Download Video",
          "type": 1,
          "sections": [
            {
              "title": "Facebook Video Downloader",
              "rows": [
                {
                  "title": "Download HD Video",
                  "description": "Download video in HD quality",
                  "rowId": "fbdl " + queryURL
                },
                {
                  "title": "Download SD Video",
                  "description": "Download video in SD quality",
                  "rowId": "fbdl2 " + queryURL
                }
              ]
            }
          ]
        };
        zk.sendMessage(dest, {
          image: { url: result.thumbnail },
          caption: caption,
          footer: "Facebook Video Downloader",
          buttons: [button]
        }, { quoted: ms });
      })
      .catch((error) => {
        console.log("Error:", error)
        repondre('try fbdl2 on this link')
      });
  } catch (error) {
    console.error('Erreur lors du téléchargement de la vidéo :', error);
    repondre('Erreur lors du téléchargement de la vidéo.', error);
  }
});
