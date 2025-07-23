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
  {
    question: "What is 9 × 8?",
    answer: 72
  },
  {
    question: "If a car travels 250 miles in 5 hours, how many miles does it travel per hour?",
    answer: 50
  },
  {
    question: "What is 24 ÷ 4?",
    answer: 6
  },
  {
    question: "If a book costs $15 and you have a 20% discount coupon, how much will you pay for the book?",
    answer: 12
  },
  {
    question: "What is 11 × 9?",
    answer: 99
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

  if (userMessage.toLowerCase() === "math-test") {
    const randomQuestion = mathQuestions[Math.floor(Math.random() * mathQuestions.length)];
    repondre(randomQuestion.question);
    // Wait for user response...
    zokou({
      nomCom: "",
      categorie: "Math",
      reaction: ""
    }, async (dest, zk, commandeOptions) => {
      const { repondre, arg } = commandeOptions;
      const userAnswer = arg.join(" ");
      if (parseInt(userAnswer) === randomQuestion.answer) {
        repondre("Correct! Well done!");
      } else {
        repondre(`Sorry, the correct answer is ${randomQuestion.answer}. Better luck next time!`);
      }
      repondre("Thanks for taking the math test! Would you like to take another one? Type 'math-test' to start again.");
    });
  }
});