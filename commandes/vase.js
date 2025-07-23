const zokou = require(__dirname + "/../framework/zokou");

const bibleVerses = [
  // Old Testament
  { book: "Genesis", chapter: 1, verse: 1, text: "In the beginning, God created the heavens and the earth." },
  { book: "Exodus", chapter: 20, verse: 3, text: "You shall have no other gods before Me." },
  { book: "Psalms", chapter: 23, verse: 4, text: "Even though I walk through the darkest valley, I will fear no evil, for you are with me; your rod and your staff, they comfort me." },
  // New Testament
  { book: "Matthew", chapter: 5, verse: 3, text: "Blessed are the poor in spirit, for theirs is the kingdom of heaven." },
  { book: "John", chapter: 3, verse: 16, text: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life." },
  // Add more verses...
];

zokou({
  nomCom: "bible-verse",
  categorie: "Spirituality",
  reaction: ""
}, async (dest, zk, commandeOptions) => {
  const { repondre, arg } = commandeOptions;
  const randomVerse = bibleVerses[Math.floor(Math.random() * bibleVerses.length)];
  repondre(`Book: ${randomVerse.book}`);
  repondre(`Chapter: ${randomVerse.chapter}`);
  repondre(`Verse: ${randomVerse.verse}`);
  repondre(`Text: ${randomVerse.text}`);
});