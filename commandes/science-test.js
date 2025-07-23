const scienceQuestions = [
  {
    question: "What is the largest planet in our solar system?",
    answers: ["Earth", "Saturn", "Jupiter", "Uranus"],
    correctAnswer: 2
  },
  {
    question: "What is the process by which plants make their own food?",
    answers: ["Respiration", "Photosynthesis", "Decomposition", "Fermentation"],
    correctAnswer: 1
  },
  {
    question: "What is the scientific term for the 'building blocks of life'?",
    answers: ["Cells", "Molecules", "Tissues", "Organisms"],
    correctAnswer: 0
  },
  // Add more questions here...
];

const zokou = require(__dirname + "/../framework/zokou");

zokou({
  nomCom: "science-test",
  categorie: "Science",
  reaction: ""
}, async (dest, zk, commandeOptions) => {
  const { repondre, arg } = commandeOptions;
  const userMessage = arg.join(" ");

  if (userMessage.toLowerCase() === "science-test") {
    const randomQuestion = scienceQuestions[Math.floor(Math.random() * scienceQuestions.length)];
    repondre(randomQuestion.question);
    repondre("A) " + randomQuestion.answers[0]);
    repondre("B) " + randomQuestion.answers[1]);
    repondre("C) " + randomQuestion.answers[2]);
    if (randomQuestion.answers[3]) {
      repondre("D) " + randomQuestion.answers[3]);
    }
    // Wait for user response...
    zokou({
      nomCom: "",
      categorie: "Science",
      reaction: ""
    }, async (dest, zk, commandeOptions) => {
      const { repondre, arg } = commandeOptions;
      const userAnswer = arg.join(" ").toUpperCase();
      if (userAnswer === "A" && randomQuestion.correctAnswer === 0) {
        repondre("Correct! Well done!");
      } else if (userAnswer === "B" && randomQuestion.correctAnswer === 1) {
        repondre("Correct! Well done!");
      } else if (userAnswer === "C" && randomQuestion.correctAnswer === 2) {
        repondre("Correct! Well done!");
      } else if (userAnswer === "D" && randomQuestion.correctAnswer === 3) {
        repondre("Correct! Well done!");
      } else {
        repondre(`Sorry, the correct answer is ${["A", "B", "C", "D"][randomQuestion.correctAnswer]}. Better luck next time!`);
      }
      repondre("Thanks for taking the science test! Would you like to take another one? Type 'science-test' to start again.");
    });
  }
});