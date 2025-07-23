const agricultureQuestions = [
  {
    question: "What is the primary function of soil in crop production?",
    answers: ["To provide water", "To provide nutrients", "To support plant growth", "To control pests"],
    correctAnswer: 2
  },
  {
    question: "Which of the following is a type of irrigation system?",
    answers: ["Drip irrigation", "Sprinkler irrigation", "Flood irrigation", "All of the above"],
    correctAnswer: 3
  },
  {
    question: "What is the purpose of crop rotation?",
    answers: ["To increase soil fertility", "To reduce pest and disease pressure", "To improve crop yields", "All of the above"],
    correctAnswer: 3
  },
  {
    question: "Which of the following is a common pest management practice?",
    answers: ["Crop rotation", "Pesticide application", "Biological control", "All of the above"],
    correctAnswer: 3
  },
  // Add more questions here...
];

const zokou = require(__dirname + "/../framework/zokou");

zokou({
  nomCom: "agriculture-test",
  categorie: "Agriculture",
  reaction: ""
}, async (dest, zk, commandeOptions) => {
  const { repondre, arg } = commandeOptions;
  const userMessage = arg.join(" ");

  if (userMessage.toLowerCase() === "agriculture-test") {
    const randomQuestion = agricultureQuestions[Math.floor(Math.random() * agricultureQuestions.length)];
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
      categorie: "Agriculture",
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
      repondre("Thanks for taking the agriculture test! Would you like to take another one? Type 'agriculture-test' to start again.");
    });
  }
});