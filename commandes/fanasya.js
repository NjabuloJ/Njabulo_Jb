const googleTTS = require('google-tts-api');
const {fana} = require("../njabulo/fana");

fana( {
  nomCom : "say",
 categorie : "tts",
  reaction : "👄" },
      async(dest,zk, commandeOptions)=> {
 
const {ms,arg,repondre} = commandeOptions;
      if (!arg[0]) {repondre("Insert a word");return} ;
 const mots = arg.join(" ")

const url = googleTTS.getAudioUrl( mots, {
  lang: 'en',
  slow: false,
  host: 'https://translate.google.com',
});
console.log(url); 
      zk.sendMessage(dest, { 
       audio: { url:url},
       mimetype:'audio/mp4',
       ptt: true, // Send as a voice note
        isForwarded: true,
         forwardedNewsletterMessageInfo: {
         newsletterJid: '120363345407274799@newsletter',
         newsletterName: "NJABULO JB",
         serverMessageId: 143,
         },
        }, 
      }, { quoted: ms});      
    }
});

  
