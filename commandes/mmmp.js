const { fana } = require("./../njabulo/fana");
const { format, runtime } = require('../njabulo/mesfonctions');
const os = require('os');
const speed = require('performance-now');
const { performance } = require('perf_hooks');
const conf = require('../set');

fana({
  nomCom: 'hl',
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

  const njabulom = `Pong▰▰▰▱▱▱ ${ping} ms`;
  await zk.sendMessage(dest, {
    text: njabulom,
    edit: { id: msg.key.id, remoteJid: dest },
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
  await zk.sendMessage(dest, { react: { text: "🏓", key: ms.key } });
});