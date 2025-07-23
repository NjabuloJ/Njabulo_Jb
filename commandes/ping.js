const util = require('util');
const fs = require('fs-extra');
const axios = require('axios');
const { zokou } = require(__dirname + "/../framework/zokou");
const os = require("os");
const moment = require("moment-timezone");
const set = require(__dirname + "/../set");

moment.tz.setDefault(`${set.TZ}`);

const getTimeAndDate = () => {
  return { 
    time: moment().format('HH:mm:ss'), 
    date: moment().format('DD/MM/YYYY') 
  };
};

zokou({ 
  nomCom: "ping", 
  categorie: "General" 
}, async (dest, zk, commandeOptions) => {
  let { ms, repondre } = commandeOptions;

  const message = `*Pong!* 🏓\n` +
    `Reply With: *1* To Get Ping Time 📊 *2* To Get Uptime ⏰`;

  repondre(message);

  zk.on('message', async (msg) => {
    if (msg.body === '1') {
      const ping = Math.floor(Math.random() * 100) + 1;
      repondre(`*Ping Time:* ${ping}ms`);
    } else if (msg.body === '2') {
      const uptime = process.uptime();
      const days = Math.floor(uptime / (24 * 3600));
      const hours = Math.floor((uptime % (24 * 3600)) / 3600);
      const minutes = Math.floor((uptime % 3600) / 60);
      const seconds = Math.floor(uptime % 60);

      const uptimeString = `${days}d ${hours}h ${minutes}m ${seconds}s`;
      repondre(`*Uptime:* ${uptimeString}`);
    }
  });
});