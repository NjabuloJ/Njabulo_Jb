const { fana } = require("../njabulo/fana");

fana({
  nomCom: "hack",
  categorie: "Fun",
  reaction: "⚡",
}, async (jid, client, options) => {
  const { repondre, arg, prefixe } = options;

  try {
    await repondre("```⚡ lucky_md Injecting malware⚡```");
    await new Promise((resolve) => setTimeout(resolve, 2000));
    await repondre("```🔐 lucky into device```");
    await new Promise((resolve) => setTimeout(resolve, 2000));

    for (let i = 0; i <= 100; i++) {
      await repondre(````♻️ Loading... ${i}%````);
      await new Promise((resolve) => setTimeout(resolve, 50));
    }

    await repondre("```📲 System hijacking on process..```");
    await new Promise((resolve) => setTimeout(resolve, 2000));
    await repondre("```🔌 Device successfully connected...```");
    await new Promise((resolve) => setTimeout(resolve, 2000));
    await repondre("```💡 Data hijacked from device 100% completed```");
    await new Promise((resolve) => setTimeout(resolve, 2000));
    await repondre("```🔋 HACKING COMPLETED```");
    await new Promise((resolve) => setTimeout(resolve, 2000));
    await repondre("```📤 SENDING PHONE DOCUMENTS```");
    await new Promise((resolve) => setTimeout(resolve, 2000));
    await repondre("```🗂️ ALL FILES TRANSFERRED```");

    const countdown = ["10", "9", "8", "7", "6", "5", "4", "3", "2", "1"];
    for (const count of countdown) {
      await repondre("```❇️ SUCCESSFULLY SENT DATA AND Connection disconnected 📤```");
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }

    await repondre("😏 *VICTIM SYSTEM DEMOLISHED!* 🤔");
  } catch (error) {
    console.error("Critical error in prank script:", error);
    return await repondre("_😊 A critical error occurred during the prank 🤗_");
  }
});
