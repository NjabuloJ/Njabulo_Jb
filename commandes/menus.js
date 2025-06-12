const util = require('util');
const fs = require('fs-extra');
const { fana } = require(__dirname + "/../njabulo/fana");
const { format } = require(__dirname + "/../njabulo/mesfonctions");
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");

fana({ nomCom: "menu4", categorie: "General" }, async (dest, zk, commandeOptions) => {
    let { ms, repondre, prefixe, nomAuteurMessage, mybotpic } = commandeOptions;
    let { cm } = require(__dirname + "/../njabulo//fana");
    var coms = {};
    var mode = s.MODE.toLowerCase() !== "yes" ? "private" : "public";

    cm.map(async (com) => {
        if (!coms[com.categorie]) coms[com.categorie] = [];
        coms[com.categorie].push(com.nomCom);
    });

    moment.tz.setDefault("Africa/Nairobi");
    const temps = moment().format('HH:mm:ss');
    const date = moment().format('DD/MM/YYYY');

    // Generate greeting based on time of day
    const hour = moment().hour();
    let greeting = "🌅Good Morning my brother 🌄";
    if (hour >= 12 && hour < 18) {
        greeting = "🌄Good afternnon! Stay energized! 🌿";
    } else if (hour >= 18) {
        greeting = "🌇Good Everning! Hope you had a great day! 🌙";
    } else if (hour >= 22 || hour < 5) {
        greeting = "Good Night 🌌";
    }

  let commandList = "\n\nAvailable Commands";
  for (let category in coms) {
    commandList += `\n\n*${category}*\n`;
    commandList += coms[category].map((cmd) => `- ${prefixe}${cmd}`).join("\n");
  }

  let infoMsg = ` ╭══════════════⊷❍
┇❍▸ ʙᴏᴛ ɴᴀᴍᴇ: *ᴄᴀsᴇʏʀʜᴏᴅᴇs ᴛᴇᴄʜ*
┇❍▸ ʙᴏᴛ ᴜsᴇʀ: *${nomAuteurMessage}*
┇❍▸ ᴍᴏᴅᴇ: *${mode}*
┇❍▸ ᴘʀᴇғɪx: *[ ${prefixe} ]*
┇❍▸ ᴘʟᴀᴛғᴏʀᴍ: *${os.platform()}*
┇❍▸ ᴅᴀᴛᴇ: *${date}*
┇❍▸ ᴛɪᴍᴇ: *${temps}*
┇❍▸ ᴄᴏᴍᴍᴀɴᴅs: *${cm.length}*
┇❍▸ ᴄᴀᴘᴀᴄɪᴛʏ: ${format(os.totalmem() - os.freemem())}/${format(os.totalmem())}
╰══════════════⊷❍
🌟 *${greeting}* 🌟 
${commandList}`;

  const extraImages1 = [
    "https://i.ibb.co/n6rw805/694affc7ca5a5fb0cb58c2b4533f962d.jpg",
    "https:                                                         
    "//i.ibb.co/n6rw805/694affc7ca5a5fb0cb58c2b4533f962d.jpg",
    "https://i.ibb.co/n6rw805/694affc7ca5a5fb0cb58c2b4533f962d.jpg"
  ];

  const extraImages2 = [
    "https:                                                         
    "//i.ibb.co/n6rw805/694affc7ca5a5fb0cb58c2b4533f962d.jpg",
    "https://i.ibb.co/n6rw805/694affc7ca5a5fb0cb58c2b4533f962d.jpg",
    "https://i.ibb.co/n6rw805/694affc7ca5a5fb0cb58c2b4533f962d.jpg"
  ];

  const isOriginalMenu = Math.random() > 0.5;
  let mediaUrl, thumbnail, renderType;
  if (isOriginalMenu) {
    mediaUrl = mybotpic();

try {
  if (mediaUrl.match(/\.(mp4|gif)$/i)) {
    await zk.sendMessage(dest, {
      video: { url: mediaUrl },
      caption: infoMsg,
      footer: "*CASEYRHODES-XMD*, developed by CASEYRHODES",
      gifPlayback: true,
      buttons: [
        {
          buttonId: `${prefixe}menu`,
          buttonText: { displayText: "Menu" },
          type: 1,
        },
        {
          buttonId: `${prefixe}help`,
          buttonText: { displayText: "Help" },
          type: 1,
        },
        {
          buttonId: `${prefixe}commands`,
          buttonText: { displayText: "Commands" },
          type: 1,
        },
      ],
      contextInfo: {
        externalAdReply: {
          title: "ᴄᴀsᴇʏʀʜᴏᴅᴇs ᴛᴇᴄʜ",
          body: "Tap here to Join our official channel!",
          mediaType: 1,
          thumbnailUrl: thumbnail,
          sourceUrl: "https:                                                 
          showAdAttribution: true,
          [renderType]: true,
        },
      },
    }, { quoted: ms });
  } else {
    await zk.sendMessage(dest, {
      image: { url: mediaUrl },
      caption: infoMsg,
      footer: "//whatsapp.com/channel/0029VakUEfb4o7qVdkwPk83E",
          showAdAttribution: true,
          [renderType]: true,
        },
      },
    }, { quoted: ms });
  } else {
    await zk.sendMessage(dest, {
      image: { url: mediaUrl },
      caption: infoMsg,
      footer: "*CASEYRHODES-XMD*, developed by CASEYRHODES",
      buttons: [
        {
          buttonId: `${prefixe}menu`,
          buttonText: { displayText: "Menu" },
          type: 1,
        },
        {
          buttonId: `${prefixe}help`,
          buttonText: { displayText: "Help" },
          type: 1,
        },
        {
          buttonId: `${prefixe}commands`,
          buttonText: { displayText: "Commands" },
          type: 1,
        },
      ],
      contextInfo: {
        externalAdReply: {
          title: "ᴄᴀsᴇʏʀʜᴏᴅᴇs ᴛᴇᴄʜ",
          body: "Tap here to Join our official channel!",
          mediaType: 1,
          thumbnailUrl: thumbnail,
          sourceUrl: "https://whatsapp.com/channel/0029VakUEfb4o7qVdkwPk83E",
          showAdAttribution: true,
          [renderType]: true,
        },
      },
    }, { quoted: ms });
  }
} catch (e) {
  console.log("Error sending menu: " + e);
  repondre("Error sending menu: " + e);
}