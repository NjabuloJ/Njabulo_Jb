const { fana } = require("../njabulo/fana");
const s = require("../set");
const fs = require('fs');
const Heroku = require('heroku-client');

// Function to get a description of an environment variable
function getDescriptionFromEnv(varName) {
  const filePath = "./app.json";
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const config = JSON.parse(fileContent);
  return config.env[varName]?.description || "The environment variable description was not found.";
}

// Anti-call function setup
fana({
  nomCom: 'anticalls',
  categorie: "HEROKU-CLIENT"
}, async (chatId, zk, context) => {
  const { ms, repondre, superUser, auteurMessage, arg } = context;

  if (!superUser) {
    return await zk.sendMessage(chatId, {
      text: "*This command is restricted to the bot owner or Dullah owner.* 💀,,idiot",
      contextInfo: {
        externalAdReply: {
          title: conf.BOT,
          body: "Access Denied",
          thumbnailUrl: conf.URL,
          sourceUrl: conf.GURL,
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    }, { quoted: ms });
const { zokou } = require("../framework/zokou");
const s = require("../set");
const fs = require('fs');
const Heroku = require('heroku-client');

// Function to get a description of an environment variable
function getDescriptionFromEnv(varName) {
  const filePath = "./app.json";
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const config = JSON.parse(fileContent);
  return config.env[varName]?.description || "The environment variable description was not found.";
}

// Anti-call function setup
fana({
  nomCom: 'anticalls',
  categorie: "HEROKU-CLIENT"
}, async (chatId, zk, context) => {
  const { ms, repondre, superUser, auteurMessage, arg } = context;

  if (!superUser) {
    return await zk.sendMessage(chatId, {
      text: "*This command is restricted to the bot owner or Dullah owner.* 💀,,idiot",
      contextInfo: {
        externalAdReply: {
          title: conf.BOT,
          body: "Access Denied",
          thumbnailUrl: conf.URL,
          sourceUrl: conf.GURL,
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    }, { quoted: ms });
  }

  if (!arg[0]) {
    return await zk.sendMessage(chatId, {
      text: 'Instructions:\n\nType "anticall yes" to enable or "anticall no" to disable.',
      contextInfo: {
        externalAdReply: {
          title: conf.BOT,
          body: "Anti-call Settings",
          thumbnailUrl: conf.URL,
          sourceUrl: conf.GURL,
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    }, { quoted: ms });
  }

  const option = arg.join(' ').toLowerCase();
  let responseMessage;

  switch (option) {
    case "yes":
      s.ANTICALL = 'yes';
      responseMessage = 'Anti-call has been enabled.';
      break;
    case "no":
      s.ANTICALL = 'no';
      responseMessage = 'Anti-call has been disabled.';
      break;
    default:
      return await zk.sendMessage(chatId, {
        text: "Please don't invent an option. Type 'anticall yes' or 'anticall no'.",
        contextInfo: {
          externalAdReply: {
            title: conf.BOT,
            body: "Invalid Option",
            thumbnailUrl: conf.URL,
            sourceUrl: conf.GURL,
            mediaType: 1,
            renderLargerThumbnail: true
          }
        }
      }, { quoted: ms });
  }

  try {
    await zk.sendMessage(chatId, {
      text: responseMessage,
      contextInfo: {
        externalAdReply: {
          title: conf.BOT,
          body: "Settings Updated",
          thumbnailUrl: conf.URL,
          sourceUrl: conf.GURL,
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    }, { quoted: ms });
  } catch (error) {
    console.error("Error processing your request:", error);
    await zk.sendMessage(chatId, {
      text: 'Error processing your request.',
      contextInfo: {
        externalAdReply: {
          title: conf.BOT,
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

// Other commands heroku by Njabulo Jb￼Enter  }

  if (!arg[0]) {
    return await zk.sendMessage(chatId, {
      text: 'Instructions:\n\nType "anticall yes" to enable or "anticall no" to disable.',
      contextInfo: {
        externalAdReply: {
          title: conf.BOT,
          body: "Anti-call Settings",
          thumbnailUrl: conf.URL,
          sourceUrl: conf.GURL,
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    }, { quoted: ms });
  }

  const option = arg.join(' ').toLowerCase();
  let responseMessage;

  switch (option) {
    case "yes":
      s.ANTICALL = 'yes';
      responseMessage = 'Anti-call has been enabled.';
      break;
se "no":
      s.ANTICALL = 'no';
      responseMessage = 'Anti-call has been disabled.';
      break;
    default:
      return await zk.sendMessage(chatId, {
        text: "Please don't invent an option. Type 'anticall yes' or 'anticall no'.",
        contextInfo: {
          externalAdReply: {
            title: conf.BOT,
            body: "Invalid Option",
            thumbnailUrl: conf.URL,
            sourceUrl: conf.GURL,
            mediaType: 1,
            renderLargerThumbnail: true
          }
        }
      }, { quoted: ms });
  }

  try {
    await zk.sendMessage(chatId, {
      text: responseMessage,
      contextInfo: {
        externalAdReply: {
          title: conf.BOT,
            body: "Invalid Option",
            thumbnailUrl: conf.URL,
            sourceUrl: conf.GURL,
            mediaType: 1,
            renderLargerThumbnail: true
          }
        }
      }, { quoted: ms });
  }
});
