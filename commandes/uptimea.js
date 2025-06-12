const { fana } = require("../njabulo/fana");
const moment = require("moment-timezone");
const { getBuffer } = require("../njabulo/dl/Function");
const { default: axios } = require('axios');

const runtime = function (seconds) {
  seconds = Number(seconds);
  var d = Math.floor(seconds / (3600 * 24));
  var h = Math.floor((seconds % (3600 * 24)) / 3600);
  var m = Math.floor((seconds % 3600) / 60);
  var s = Math.floor(seconds % 60);
  var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " d, ") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " h, ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " m, ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " second" : " s") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
}

fana({
  nomCom: 'uptimes',
  desc: 'To check runtime',
  Categorie: 'General',
  reaction: '⚙️',
  fromMe: 'true',
}, async (dest, zk, commandeOptions) => {
  const { ms, arg, repondre } = commandeOptions;
  const button = {
    "buttonText": "System Info",
    "type": 1,
    "sections": [
      {
        "title": "Njabulo JB Bot",
        "rows": [
          {
            "title": "Uptime",
            "description": "Check the uptime of Njabulo JB Bot",
            "rowId": "uptime"
          },
          {
            "title": "Ping",
            "description": "Check the ping of Njabulo JB Bot",
            "rowId": "ping"
          }
        ]
      }
    ]
  };
  await zk.sendMessage(dest, {
    text: `*_Uptime of Njabulo JB Bot is: ${runtime(process.uptime())}_*`,
    footer: "Njabulo JB Bot",
    buttons: `${[button]`;
  }, { quoted: ms });
});

fana({
  nomCom: 'pings',
  desc: 'To check ping',
  Categorie: 'General',
  reaction: '⚡️',
  fromMe: 'true',
}, async (dest, zk, commandeOptions) => {
  const { ms, arg, repondre } = commandeOptions;
  const ping = Date.now() - ms.messageTimestamp;
  const button = {
    "buttonText": "System Info",
    "type": 1,
    "sections": [
      {
        "title": "Njabulo JB Bot",
        "rows": [
          {
            "title": "Uptime",
            "description": "Check the uptime of Njabulo JB Bot",
            "rowId": "uptime"
          },
          {
            "title": "Ping",
            "description": "Check the ping of Njabulo JB Bot",
            "rowId": "ping"
          }
        ]
      }
    ]
  };
  await zk.sendMessage(dest, {
    text: `*_Ping: ${ping}ms_*`,
    footer: "Njabulo JB Bot",
    buttons: [button],
  }, { quoted: ms });
});
