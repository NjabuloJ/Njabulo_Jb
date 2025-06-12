const { fana } = require('../njabulo/fana');
const getFBInfo = require("@xaviabot/fb-downloader");
const axios = require('axios');
const conf = require('../set');

fana({
  nomCom: "fook",
  categorie: "Download",
  reaction: "🪰"
}, async (dest, zk, commandeOptions) => {
  const { repondre, ms, arg } = commandeOptions;

  if (!arg[0]) {
     const text = alpha;

  try {
    const response = "Insert a public facebook video link!",

    await zk.sendMessage(dest, {
      text: response,
      contextInfo: {
         isForwarded: true,
         forwardedNewsletterMessageInfo: {
         newsletterJid: '120363345407274799@newsletter',
         newsletterName: "vw-golf",
         serverMessageId: 143,
        },
      },
    });
  } catch (error) {
    console.error("Error generating AI response:", error);
    await repondre("Sorry, I couldn't process your request.");
  }
};

  const queryURL = arg.join(" ");

  try {
    const result = await getFBInfo(queryURL);
    const caption = `Title: ${result.title}\nLink: ${result.url}`;
    const njabulom = "Video downloaded successfully!";

    await zk.sendMessage(dest, {
      image: { url: result.thumbnail },
      caption: caption
    }, { quoted: ms });

    await zk.sendMessage(dest, {
      video: { url: result.hd },
      caption: 'Powered by ☆ɴᴊᴀʙᴜʟᴏ-ᴊʙ✧'
    }, { quoted: ms });

    await zk.sendMessage(dest, {
      text: njabulom,
      contextInfo: {
        externalAdReply: {
          title: "Njabulo Jb",
          body: "WhatsApp status !",
          thumbnailUrl: conf.URL,
          sourceUrl: conf.GURL,
          mediaType: 1,
          showAdAttribution: true
        }
      }
    });
  } catch (error) {
    console.error('Error downloading Facebook video:', error);
    repondre('Error downloading video. Try fbdl2 on this link.');
  }
});
