const { fana } = require("../njabulo/fana");
const {getAllSudoNumbers,isSudoTableNotEmpty} = require("../bdd/sudo")
const conf = require("../set");

fana({ nomCom: "ow", categorie: "General", reaction: "❣️" }, async (dest, zk, commandeOptions) => {
    const { ms , mybotpic } = commandeOptions;
    
  const thsudo = await isSudoTableNotEmpty()

  if (thsudo) {
     let msg = `*My Super-User*\n
     *Owner Number*\n :
- 🌟 @${conf.NUMERO_OWNER}

------ *other sudos* -----\n`
     
 let sudos = await getAllSudoNumbers()

   for ( const sudo of sudos) {
    if (sudo) { // Vérification plus stricte pour éliminer les valeurs vides ou indéfinies
      sudonumero = sudo.replace(/[^0-9]/g, '');
      msg += `- 💼 @${sudonumero}\n`;
    } else {return}

   }   const ownerjid = conf.NUMERO_OWNER.replace(/[^0-9]/g) + "@s.whatsapp.net";
   const mentionedJid = sudos.concat([ownerjid])
   console.log(sudos);
   console.log(mentionedJid)
      zk.sendMessage(
        dest,
        {
          image : { url : mybotpic() },
          caption : msg,
          mentions : mentionedJid,
            contextInfo: {
        isForwarded: true,
         forwardedNewsletterMessageInfo: {
          newsletterJid: '120363345407274799@newsletter',
          newsletterName: "╭••➤®Njabulo Jb",
          serverMessageId: 143,
           },
           forwardingScore: 999, // Score to indicate it has been forwarded
           externalAdReply: {
           title: conf.OWNER_NAME,
           body: "📃online is alwaysonline",
           thumbnailUrl: conf.URL,
           mediaType: 1,
          renderSmallThumbnail: true // Small thumbnail rendering
        }
      )
  } else {
    const vcard =
        'BEGIN:VCARD\n' + // metadata of the contact card
        'VERSION:3.0\n' +
        'FN:' + conf.OWNER_NAME + '\n' + // full name
        'ORG:undefined;\n' + // the organization of the contact
        'TEL;type=CELL;type=VOICE;waid=' + conf.NUMERO_OWNER + ':+' + conf.NUMERO_OWNER + '\n' + // WhatsApp ID + phone number
        'END:VCARD';
    zk.sendMessage(dest, {
       displayName: conf.OWNER_NAME,
       contacts: [{ vcard }],
    },{quoted:ms});
  }
});
