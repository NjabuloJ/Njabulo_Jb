const { zokou } = require(__dirname + "/../framework/zokou");
const nlp = require('compromise');

zokou({
  nomCom: "",
  categorie: "Science",
  reaction: ""
}, async (dest, zk, commandeOptions) => {
  const { repondre, arg } = commandeOptions;
  const userMessage = arg.join(" ");

  const doc = nlp(userMessage);
  const topics = doc.topics().out('array');

  if (topics.includes('physics')) {
    repondre("Physics is the study of the fundamental laws of the universe! What aspect of physics are you interested in?");
  } else if (topics.includes('biology')) {
    repondre("Biology is the study of living organisms! What topic in biology would you like to explore?");
  } else if (topics.includes('chemistry')) {
    repondre("Chemistry is the study of the properties and behavior of matter! What chemical reaction or concept are you curious about?");
  } else if (topics.includes('scientific method')) {
    repondre("The scientific method is a systematic approach to scientific inquiry! Would you like to learn more about it?");
  } else {
    repondre("I'm happy to help with science-related questions!");
  }
});