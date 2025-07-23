const { zokou } = require(__dirname + "/../framework/zokou");
const nlp = require('compromise');

zokou({
  nomCom: "",
  categorie: "Agriculture",
  reaction: ""
}, async (dest, zk, commandeOptions) => {
  const { repondre, arg } = commandeOptions;
  const userMessage = arg.join(" ");

  const doc = nlp(userMessage);
  const topics = doc.topics().out('array');

  if (topics.includes('crop')) {
    repondre("Crop production is an essential part of agriculture. What specific crop are you interested in?");
  } else if (topics.includes('livestock')) {
    repondre("Livestock production is another important aspect of agriculture. What type of livestock are you interested in?");
  } else if (topics.includes('irrigation')) {
    repondre("Irrigation is crucial for crop growth. What irrigation method are you using?");
  } else if (topics.includes('pest management')) {
    repondre("Pest management is vital to prevent crop damage. What pest management methods are you using?");
  } else {
    repondre("I'm happy to help with agriculture-related questions!");
  }
});