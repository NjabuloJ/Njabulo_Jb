const {
  fana
} = require("./../njabulo/fana");
const {
  format,
  runtime
} = require('../njabulo/mesfonctions');
const os = require('os');
const speed = require('performance-now');
const {
  performance
} = require('perf_hooks');
const conf = require('../set');
fana({

  nomCom: 'ping',
  categorie: 'General',
  reaction: '📟',
  alias: ['p']
}, async (dest, zk, commandOptions) => {
  const { ms, arg, repondre } = commandOptions;
  const start = new Date().getTime();
  const msg = await zk.sendMessage(dest, {
    text: '⏰',
  }, { quoted: ms });
  const end = new Date().getTime();
  const ping = end - start;
  await zk.sendMessage(dest, {
    text: `Pong▰▰▰▱▱▱ ${ping} ms`,
    buttons: [
      {
        buttonId: "ping",
        buttonText: {
          displayText: "Ping Again"
        }
      }
    ],
    edit: { id: msg.key.id, remoteJid: dest }
  });
  await zk.sendMessage(dest, {
    react: { text: "🏓", key: ms.key }
  })
})
