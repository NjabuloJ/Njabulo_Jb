const {fana} = require('../njabulo/fana');
const fs = require('fs');
const getFBInfo = require("@xaviabot/fb-downloader");
const { default: axios } = require('axios');

fana({
  nomCom: "fbs",
  categorie: "Download",
  reaction: "📽️"
}, async (dest, zk, commandeOptions) => {
  const { repondre, ms, arg } = commandeOptions;

  if (!arg[0]) {
    await zk.sendMessage(dest, {
      text: 'Insert a public facebook video link!',
      contextInfo: {
        externalAdReply: {
          title: "Lucky-MD",
          body: "Facebook video downloader",
          thumbnailUrl: conf.URL,
          sourceUrl: conf.GURL,
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    }, { quoted: ms });
    return;
  }

  try {
    const queryURL = arg.join(" ");
    getFBInfo(queryURL)
      .then((result) => {
        let caption = ` titre: ${result.title} Lien: ${result.url} `;
        zk.sendMessage(dest, {
          image: { url: result.thumbnail },
          caption,
          contextInfo: {
            externalAdReply: {
              title: "Lucky-MD",
              body: "Facebook video",
              thumbnailUrl: conf.URL,
              sourceUrl: conf.GURL,
              mediaType: 1,
              renderLargerThumbnail: true
            }
          }
        }, { quoted: ms });
        zk.sendMessage(dest, {
          video: { url: result.hd },
          caption: 'facebook video downloader powered by *LUCKY-MD*',
          contextInfo: {
            externalAdReply: {
              title: "Lucky-MD",
              body: "Facebook video downloader",
              thumbnailUrl: conf.URL,
              sourceUrl: conf.GURL,
              mediaType: 1,
              renderLargerThumbnail: true
            }
          }
        }, { quoted: ms });
      })
      .catch((error) => {
        console.log("Error:", error);
        await zk.sendMessage(dest, {
          text: 'try fbdl2 on this link',
          contextInfo: {
            externalAdReply: {
              title: "Lucky-MD",
              body: "Error",
              thumbnailUrl: conf.URL,
              sourceUrl: conf.GURL,
              mediaType: 1,
              renderLargerThumbnail: true
            }
          }
        }, { quoted: ms });
      });
  } catch (error) {
    console.error('Erreur lors du téléchargement de la vidéo :', error);
    await zk.sendMessage(dest, {
      text: 'Erreur lors du téléchargement de la vidéo.',
      contextInfo: {
        externalAdReply: {
          title: "Lucky-MD",
          body: "Error",
          thumbnailUrl: conf.URL,
          sourceUrl: conf.GURL,
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    }, { quoted: ms });
  }
});
