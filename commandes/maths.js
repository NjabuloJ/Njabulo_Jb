const { zokou } = require(__dirname + "/../framework/zokou");

zokou({
  nomCom: "Math",
  categorie: "Math",
  reaction: ""
}, async (dest, zk, commandeOptions) => {
  const { repondre, arg } = commandeOptions;
  const userMessage = arg.join(" ");

  if (userMessage.includes("+")) {
    const numbers = userMessage.split("+");
    const result = parseFloat(numbers[0]) + parseFloat(numbers[1]);
    repondre(`The result is: ${result}`);
  } else if (userMessage.includes("-")) {
    const numbers = userMessage.split("-");
    const result = parseFloat(numbers[0]) - parseFloat(numbers[1]);
    repondre(`The result is: ${result}`);
  } else if (userMessage.includes("×") || userMessage.includes("*")) {
    const numbers = userMessage.includes("×") ? userMessage.split("×") : userMessage.split("*");
    const result = parseFloat(numbers[0]) * parseFloat(numbers[1]);
    repondre(`The result is: ${result}`);
  } else if (userMessage.includes("÷") || userMessage.includes("/")) {
    const numbers = userMessage.includes("÷") ? userMessage.split("÷") : userMessage.split("/");
    if (parseFloat(numbers[1]) !== 0) {
      const result = parseFloat(numbers[0]) / parseFloat(numbers[1]);
      repondre(`The result is: ${result}`);
    } else {
      repondre("Cannot divide by zero!");
    }
  } else {
    repondre("Invalid math operation");
  }
});