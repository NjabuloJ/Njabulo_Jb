const englishQuestions = [
  {
    question: "What is the meaning of the word 'ubiquitous'?",
    answers: ["Existing everywhere", "Existing nowhere", "Existing sometimes", "Existing rarely"],
    correctAnswer: 0
  },
  {
    question: "Which of the following sentences is grammatically correct?",
    answers: ["The dog chase the cat.", "The dog chases the cat.", "The dog chasing the cat.", "The dog chase the cats."],
    correctAnswer: 1
  },
  {
    question: "What is the synonym of the word 'happy'?",
    answers: ["Sad", "Angry", "Joyful", "Bored"],
    correctAnswer: 2
  },
  {
    question: "Read the correct passage and answer the question: 'The sun rises in the east.' What direction does the sun rise in?",
    answers: ["West", "East", "North", "South"],
    correctAnswer: 1
  },
  // Add more questions here...
];

const zokou = require(__dirname + "/../framework/zokou");

zokou({
  nomCom: "english-test",
  categorie: "English",
  reaction: ""
}, async (dest, zk, commandeOptions) => {
  const { repondre, arg } = commandeOptions;
  const userMessage = arg.join(" ");

  if (userMessage.toLowerCase() === "english-test") {
    const randomQuestion = englishQuestions[Math.floor(Math.random() * englishQuestions.length)];
    repondre(randomQuestion.question);
    repondre("A) " + randomQuestion.answers[0]);
    repondre("B) " + randomQuestion.answers[1]);
    repondre("C) " + randomQuestion.answers[2]);
    if (randomQuestion.answers[3]) {
      repondre("D) " + randomQuestion.answers[3]);
    }
    repondre("Please type A, B, C, or D to answer.");
  } else if (["A", "B", "C", "D"].includes(userMessage.toUpperCase())) {
    const randomQuestion = englishQuestions.find(q => q.question === " dummy question"); // dummy question to be replaced
    // find the last question asked
    const lastQuestion = englishQuestions.find(q => q.question === "What is the meaning of the word 'ubiquitous'?"); // replace with last question asked
    if (lastQuestion) {
      if (userMessage.toUpperCase() === ["A", "B", "C", "D"][lastQuestion.correctAnswer]) {
        repondre("Correct! Well done!");
      } else {
        repondre(`Sorry, the correct answer is ${["A", "B", "C", "D"][lastQuestion.correctAnswer]}. Better luck next time!`);
      }
    } else {
      repondre("You haven't been asked a question yet. Type 'english-test' to start.");
    }
    repondre("Thanks for taking the English test! Would you like to take another one? Type 'english-test' to start again.");
  }
});