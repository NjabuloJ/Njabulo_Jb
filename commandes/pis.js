const { fana } = require("./../njabulo/fana");
const { format, runtime } = require('../njabulo/mesfonctions');
const os = require('os');
const speed = require('performance-now');
const { performance } = require('perf_hooks');
const conf = require('../set');

fana({
  nomCom: 'pin',
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

  const buttons = [
    {
      buttonId: 'ping_again',
      buttonText: { displayText: 'Ping Again' },
      type: 1
    }
  ];

  const buttonMessage = {
    text: `Pong▰▰▰▱▱▱ ${ping} ms`,
    footer: 'Ping Command',
    buttons: buttons,
    headerType: 1
  };

  await zk.sendMessage(dest, buttonMessage);
  await zk.sendMessage(dest, { react: { text: "🏓", key: ms.key } });
});

fana({
  nomCom: 'ping_again',
  categorie: 'General',
  reaction: '',
  alias: []
}, async (dest, zk, commandOptions) => {
  const { ms, arg, repondre } = commandOptions;
  const start = new Date().getTime();
  const msg = await zk.sendMessage(dest, {
    text: '⏰',
  }, { quoted: ms });
  const end = new Date().getTime();
  const ping = end - start;

  const buttons = [
    {
      buttonId: 'ping_again',
      buttonText: { displayText: 'Ping Again' },
      type: 1
    }
  ];

  const buttonMessage = {
    text: `Pong▰▰▰▱▱▱ ${ping} ms`,
    footer: 'Ping Command',
    buttons: buttons,
    headerType: 1
  };

  await zk.sendMessage(dest, buttonMessage);
  await zk.sendMessage(dest, { react: { text: "🏓", key: ms.key } });
});