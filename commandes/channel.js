const { fana } = require('../njabulo/fana');

fana({
  nomCom: "createchannel",
  categorie: "channel",
  reaction: "📺"
}, async (dest, zk, commandeOptions) => {
  const { repondre, ms, arg } = commandeOptions;

  try {
    if (!arg[0]) return repondre(`Please provide the channel name`);

    const channelName = arg.join(" ");
    const channelDescription = `Channel Name: ${channelName}\nCreated By: ${ms.pushName}\nDate: ${new Date().toLocaleDateString()}\nTime: ${new Date().toLocaleTimeString()}\n\nJoin our WhatsApp channel: https:                                      

    const channel = await zk.createChannel(channelName, channelDescription);
    const channelJid = channel.id + '@newsletter';
    const channelLink = `https//whatsapp.com/channel/${channel.id}`;

    const channel = await zk.createChannel(channelName, channelDescription);
    const channelJid = channel.id + '@newsletter';
    const channelLink = `https://whatsapp.com/channel/${channel.id}`;
    repondre(`Channel created successfully!\n\n*Channel Details:*\nName: ${channelName}\nJID: ${channelJid}\nOwner: ${ms.push(ms.pushName}\nDate: ${new Date().toLocaleDateString()}\nTime: ${new Date().toLocaleTimeString()}\n\nJoin our WhatsApp channel: ${channelLink}`);
  } catch (error) {
    console.error('Error creating channel:', error);
    repondre('Error creating channel.');
  }
});