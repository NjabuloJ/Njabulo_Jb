const mathQuestions = [
  {
    question: "What is 2 + 2?",
    answer: 4
  },
  {
    question: "If x + 5 = 11, what is x?",
    answer: 6
  },
  {
    question: "What is 4 × 9?",
    answer: 36
  },
  {
    question: "If a bakery sells 250 loaves of bread per day, and each loaf costs $2, how much money does the bakery make in a day?",
    answer: 500
  },
  {
    question: "What is 7 - 3?",
    answer: 4
  },
  // Add more questions here...
];

const zokou = require(__dirname + "/../framework/zokou");

zokou({
  nomCom: "math-test",
  categorie: "Math",
  reaction: ""
}, async (dest, zk, commandeOptions) => {
  const { repondre, arg } = commandeOptions;
  const userMessage = arg.join(" ");

  if (userMessage === "start test") {
    const randomQuestion = mathQuestions[Math.floor(Math.random() * mathQuestions.length)];
    repondre(randomQuestion.question);
    const userAnswer = await getUserAnswer();
    if (parseInt(userAnswer) === randomQuestion.answer) {
      repondre("Correct!");
    } else {
      repondre(`Sorry, the correct answer is ${randomQuestion.answer}.`);
    }
  }

  async function getUserAnswer() {
    // Wait for user response...
    return new Promise((resolve) => {
      zokou({
        nomCom: "",
        categorie: "Math",
        reaction: ""
      }, async (dest, zk, commandeOptions) => {
        const { repondre, arg } = commandeOptions;
        const userAnswer = arg.join(" ");
        resolve(userAnswer);
      });
    });
  }
});