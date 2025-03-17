



const axios = require('axios');
const config = require('../config');
const { cmd, commands } = require('../command');
const { fetchJson } = require('../lib/functions');



cmd({
  pattern: 'version',
  react: '✔️',
  desc: 'Check the bot\'s version',
  category: 'info',
  filename: __filename
}, async (conn, mek, m, {
  from,
  quoted,
  body,
  isCmd,
  command,
  args,
  q,
  isGroup,
  sender,
  senderNumber,
  botNumber2,
  botNumber,
  pushname,
  isMe,
  isOwner,
  groupMetadata,
  groupName,
  participants,
  groupAdmins,
  isBotAdmins,
  isAdmins,
  reply
}) => {
  try {
    const packageName = require('../package.json');
    const currentVersion = packageName.version;

    const apiUrl = 'https://raw.githubusercontent.com/caseyweb/CASEYRHODES-XMD/master/package.json';
    const response = await axios.get(apiUrl);
    const data = response.data;
    const latestVersion = data.version;

    let message = '';
    if (currentVersion === latestVersion) {
      message = `Your ℂ𝔸𝕊𝔼𝕐ℝℍ𝕆𝔻𝔼𝕊-𝕏𝕄𝔻  bot is up-to-date! 😊\n Current version is: ${currentVersion}`;
    } else {
      message = `Your ℂ𝔸𝕊𝔼𝕐ℝℍ𝕆𝔻𝔼𝕊-𝕏𝕄𝔻  bot is outdated 😵!\n\n  Current version: ${currentVersion} \n Latest version: ${latestVersion}`;
    }

   // await reply(message);
    
 // } catch (error) {
  //  console.error('Error fetching version:', error);
   // await reply('Error fetching version. Please try again later.');
//  }
//});
       // Send the status message with an image
        await conn.sendMessage(from, { 
            image: { url: `https://i.ibb.co/Pvn4pKtJ/mrfrankofc.jpg` },  // Image URL
            caption: message,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363302677217436@newsletter',
                    newsletterName: '『 ℂ𝔸𝕊𝔼𝕐ℝℍ𝕆𝔻𝔼𝕊-𝕏𝕄𝔻 』',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (e) {
        console.error("Error checking Version:", e);
        reply(`An error Occured Fetching Version 😕`);
    }
});
