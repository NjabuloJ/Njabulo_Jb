const { fana } = require("../njabulo/fana");
const {getAllSudoNumbers,isSudoTableNotEmpty} = require("../bdd/sudo")
const conf = require("../set");

fana({ nomCom: "owners", categorie: "General", reaction: "❣️" }, async (dest, zk, commandeOptions) => {
    const { ms , mybotpic } = commandeOptions;
    const thsudo = await isSudoTableNotEmpty()

    if (thsudo) {
        let msg = `*My Super-User*\n *Owner Number*\n : - 🌟 @${conf.NUMERO_OWNER} ------ *other sudos* -----\n`
        let sudos = await getAllSudoNumbers()

        for (const sudo of sudos) {
            if (sudo) {
                sudonumero = sudo.replace(/[^0-9]/g, '');
                msg += `- 💼 @${sudonumero}\n`;
            } else {
                return;
            }
        }

        const ownerjid = conf.NUMERO_OWNER.replace(/[^0-9]/g) + "@s.whatsapp.net";
        const mentionedJid = sudos.concat([ownerjid])

        const buttons = [
            {
                "buttonId": "help",
                "buttonText": {
                    "displayText": "Help"
                },
                "type": 1
            },
            {
                "buttonId": "about",
                "buttonText": {
                    "displayText": "About"
                },
                "type": 1
            }
        ];

        const buttonMessage = {
            image: { url: mybotpic() },
            caption: msg,
            mentions: mentionedJid,
            footer: "VW Golf Bot",
            buttons: buttons,
            headerType: 4
        };

        zk.sendMessage(dest, buttonMessage);
    } else {
        const vcard = 'BEGIN:VCARD\n' +
            'VERSION:3.0\n' +
            'FN:' + conf.OWNER_NAME + '\n' +
            'ORG:undefined;\n' +
            'TEL;type=CELL;type=VOICE;waid=' + conf.NUMERO_OWNER + ':+' + conf.NUMERO_OWNER + '\n' +
            'END:VCARD';

        const buttons = [
            {
                "buttonId": "contact",
                "buttonText": {
                    "displayText": "Contact Owner"
                },
                "type": 1
            }
        ];

        zk.sendMessage(dest, {
            contacts: {
                displayName: conf.OWNER_NAME,
                contacts: [{ vcard }],
            },
            footer: "VW Golf Bot",
            buttons: buttons,
            headerType: 1
        }, { quoted: ms });
    }

    // Send audio with caption
    await zk.sendMessage(dest, {
        audio: { url: "https:                                 
        mimetype: 'audio/mp4',
        ptt: true,
        caption: "//files.catbox.moe/3o8hia.mp3" },
        mimetype: 'audio/mp4',
        ptt: true,
        caption: "NJABULO-JB SONG",
        contextInfo: {
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: "120363345407274799@newsletter",
                newsletterName: "vw golf",
                serverMessageId: -1
            },
            forwardingScore: 999,
            externalAdReply: {
                body: "vw golf",
                thumbnailUrl: "https://files.catbox.moe/8oy1du.jpg",
                sourceUrl: 'https://whatsapp.com/channel/0029VawO6hgF6sn7k3SuVU3z',
                rendersmallThumbnail: false
            }
        }
    });
} catch (e) {
    console.log("Error fetching data:", e);
    repondre("❌ Error fetching repository data. Please try again later.");
}
});