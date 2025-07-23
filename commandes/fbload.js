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
    let loadingMessage = `*Loading...* [░░░░░░░░░░] 0%`;
    repondre(loadingMessage);

    let progress = 0;
    let loadingInterval = setInterval(() => {
      progress += 10;
      let loadingBar = '';
      for (let i = 0; i < progress / 10; i++) {
        loadingBar += '█';
      }
      for (let i = 0; i < 10 - progress / 10; i++) {
        loadingBar += '░';
      }
      repondre(`*Loading...* [${loadingBar}] ${progress}%`);
      if (progress >= 100) {
        clearInterval(loadingInterval);
      }
    }, 500);

    getFBInfo(queryURL)
      .then((result) => {
        clearInterval(loadingInterval);
        repondre(`*Loading...* [██████████] 100%`);
        let caption = `*Facebook Video Downloader*\n` +
          `*Title:* ${result.title}\n` +
          `Reply With: *1* To Download HD Video *2* To Download SD Video `;
        repondre(caption);
        zk.on('message', async (msg) => {
          if (msg.body === '1') {
            zk.sendMessage(dest, { video: { url: result.hd }, caption: 'HD Video Downloaded' }, { quoted: ms });
            repondre(`*Download Complete!*`);
          } else if (msg.body === '2') {
            zk.sendMessage(dest, { video: { url: result.sd }, caption: 'SD Video Downloaded' }, { quoted: ms });
            repondre(`*Download Complete!*`);
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