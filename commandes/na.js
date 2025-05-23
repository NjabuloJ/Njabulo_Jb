const util = require('util');
const fs = require('fs-extra');
const { fana } = require(__dirname + "/../njabulo/fana");
const { format } = require(__dirname + "/../njabulo/mesfonctions");
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");

fana({ nomCom: "me", categorie: "General" }, async (dest, zk, commandeOptions) => {
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
    let greeting = "Good Morning";
    if (hour >= 12 && hour < 18) {
        greeting = "Good afternnon!";
    } else if (hour >= 18) {
        greeting = "Good Everning!";
    } else if (hour >= 22 || hour < 5) {
        greeting = "Good Night 🌌";
    }

    let infoMsg = `*╭─❖*
*┋ɴᴀᴍᴇ : ɴᴊᴀʙᴜʟᴏ ᴊʙ*
*┋ᴅᴀᴛᴇ:* ${date}
*┋ ᴛɪᴍᴇ:* ${temps}
*┋ᴘʀᴇғɪx: [ ${prefixe} ]*
*┋ᴘʟᴜɢɪɴs ᴄᴍᴅ:* ${cm.length}
*╰─❖*
*╭─❖*
*┋    ❍[0]* •MENULIST
*┋    ❍[1]* •MENU-AI
*┋    ❍[2]* •MENU-GENERAL
*┋    ❍[3]* •MENU-DONLOAD
*┋    ❍[4]* •MENU-USE
*┋    ❍[5]* •MENU-MOD
*┋    ❍[6]* •MENU-FUN
*┋    ❍[7]* •MENU-BOOKS
*┋    ❍[8]* •MENU-SEARCH
*┋    ❍[9]* •MENU-GROUP
*┋    ❍[10]* •CONTROL
*╰─┬❖*
*╭─┴❖ʀᴇᴘʟʏ ɴᴀᴍᴇ ᴄᴏᴍᴍᴀɴᴅs 1ᴛᴏ10*
*╰┬───────❖⳹*
┌┤🌇 *Am say : ${greeting}*
*┋╰─────────────⊷*
*╰⊷••ɴנαʙυʟσ ᴊв••──────⊷* `;

    // Two sets of images to display randomly
    const extraImages1 = [
        "https://files.catbox.moe/du66sc.jpg",
        "https://files.catbox.moe/149p1r.jpg",
        "https://files.catbox.moe/8te9a3.jpg"
    ];

    const extraImages2 = [
        "https://files.catbox.moe/8te9a3.jpg",
        "https://files.catbox.moe/149p1r.jpg",
        "https://files.catbox.moe/du66sc.jpg"
    ];

    // Randomly select which menu to show
    const isOriginalMenu = Math.random() > 0.5; // 50% chance for either menu

    let mediaUrl, thumbnail, renderType;
    if (isOriginalMenu) {
        mediaUrl = mybotpic(); // Use bot’s original picture
        thumbnail = extraImages1[Math.floor(Math.random() * extraImages1.length)];
        renderType = "renderLargerThumbnail";
    } else {
        mediaUrl = extraImages2[Math.floor(Math.random() * extraImages2.length)];
        thumbnail = mediaUrl; // Use the same image as media
        renderType = "renderSmallThumbnail";
    }

    try {
        if (mediaUrl.match(/\.(mp4|gif)$/i)) {
            await zk.sendMessage(dest, {
                video: { url: mediaUrl },
                caption: infoMsg,
                contextInfo: {
                 forwardingScore: 999,
                 isForwarded: true,
                 forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363345407274799@newsletter',
                  newsletterName: '╭••➤®Njabulo Jb',
                  serverMessageId: 143},
                    externalAdReply: {
                        title: "Njabulo Jb",
                        body: "ɴᴊᴀʙᴜʟᴏ ᴊʙ ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ",
                        mediaType: 1,
                        thumbnailUrl: thumbnail,
                        sourceUrl: "https://github.com/NjabuloJ/Njabulo-Jb",
                        showAdAttribution: true,
                        [renderType]: true, // Apply correct thumbnail size
                    },
                },
            }, { quoted: ms });
        } else {
            await zk.sendMessage(dest, {
                image: { url: mediaUrl },
                caption: infoMsg,
                contextInfo: {
                 forwardingScore: 999,
                 isForwarded: true,
                  forwardedNewsletterMessageInfo: {
                   newsletterJid: '120363345407274799@newsletter',
                   newsletterName: '╭••➤®Njabulo Jb',
                   serverMessageId: 143},
                    externalAdReply: {
                        title: "Njabulo Jb",
                        body: "ɴᴊᴀʙᴜʟᴏ ᴊʙ ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ",
                        mediaType: 1,
                        thumbnailUrl: thumbnail,
                        sourceUrl: "https://github.com/NjabuloJ/Njabulo-Jb",
                        showAdAttribution: true,
                        [renderType]: true, // Apply correct thumbnail size
                    },
                },
            }, { quoted: ms });
        }
    } catch (e) {
        console.log("🥵🥵 Error sending menu: " + e);
        repondre("🥵🥵 Error sending menu: " + e);
    }

    // List of audio URLs
    const audioUrls = [
        "https://files.catbox.moe/6x0rb7.mp3" // New song added
    ];

    // Select a random audio file
    const randomAudioUrl = audioUrls[Math.floor(Math.random() * audioUrls.length)];

    try {
        await zk.sendMessage(dest, {
            audio: { url: randomAudioUrl },
            mimetype: 'audio/mpeg',
            ptt: true, // Send as a voice note
             contextInfo: {
             forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
              newsletterJid: '120363345407274799@newsletter',
              newsletterName: '╭••➤®Njabulo Jb',
              serverMessageId: 143},
               externalAdReply: {
               title: "song menu",
               body: "ɴᴊᴀʙᴜʟᴏ ᴊʙ ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ",
               mediaType: 1,
               thumbnailUrl: thumbnail,
               sourceUrl: "https://github.com/NjabuloJ/Njabulo-Jb",
               showAdAttribution: true,
              [renderType]: true, // Apply correct thumbnail size
              },
            },
        }, { quoted: ms });
    } catch (e) {
        console.log("🥵🥵 Error sending audio: " + e);
        repondre("🥵🥵 Error sending audio: " + e);
    }
});



                  
