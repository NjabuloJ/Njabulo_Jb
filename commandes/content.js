const { zokou } = require(__dirname + "/../framework/zokou");
const nlp = require('compromise');

zokou({
  nomCom: "",
  categorie: "Content",
  reaction: ""
}, async (dest, zk, commandeOptions) => {
  const { repondre, arg } = commandeOptions;
  const userMessage = arg.join(" ");

  const doc = nlp(userMessage);
  const topics = doc.topics().out('array');

  if (topics.includes('writing')) {
    repondre("Writing is a great way to create content! What kind of content are you trying to write?");
  } else if (topics.includes('video')) {
    repondre("Video content is very popular! What kind of video content are you interested in creating?");
  } else if (topics.includes('marketing')) {
    repondre("Content marketing is a great way to promote your product or service! What kind of content marketing strategy are you using?");
  } else {
    repondre("I'm happy to help with content-related questions!");
  }
});