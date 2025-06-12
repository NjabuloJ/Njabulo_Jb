const JavaScriptObfuscator = require("javascript-obfuscator");
const { fana } = require("../njabulo/fana");

fana({
  'nomCom': "ot",
  'categorie': 'General'
}, async (dest, zk, commandeOptions) => {
  const {
    ms,
    arg,
    repondre,
    auteurMessage,
    nomAuteurMessage,
    msgRepondu,
    auteurMsgRepondu
  } = commandeOptions;

  try {
    let code = arg.join(" ");
    if (!arg[0]) {
      wait zk.sendMessage(dest, {
        text: "After the command, provide a valid JavaScript code for encryption",
        contextInfo: {
          externalAdReply: {
            title: "Njabulo Jb",
            body: "Encryption command !",
            thumbnailUrl: conf.URL,
            sourceUrl: conf.GURL,
            mediaType: 1,
            showAdAttribution: true
          }
        }
      });
      return;
    };

    const obfuscatedCode = JavaScriptObfuscator.obfuscate(code, {
      'compact': true,
      'controlFlowFlattening': true,
      'controlFlowFlatteningThreshold': 1,
      'numbersToExpressions': true,
      'simplify': true,
      'stringArrayShuffle': true,
      'splitStrings': true,
      'stringArrayThreshold': 1
    });

     zk.sendMessage(dest, {
      text: obfuscatedCode.getObfuscatedCode(),
      contextInfo: {
        externalAdReply: {
          title: "Njabulo Jb",
          body: "Obfuscated code !",
          thumbnailUrl: conf.URL,
          sourceUrl: conf.GURL,
          mediaType: 1,
          showAdAttribution: true
        }
      }
    });
  } catch {
     zk.sendMessage(dest, {
      text: "Something is wrong, check if your code is logical and has the correct syntax",
      contextInfo: {
        externalAdReply: {
          title: "Njabulo Jb",
          body: "Error !",
          thumbnailUrl: conf.URL,
          sourceUrl: conf.GURL,
          mediaType: 1,
          showAdAttribution: true
        }
      }
    });
  }
});
