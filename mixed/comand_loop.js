const prompt = require("prompt-sync")({ sigint: true });

var exit = "";
var count = 0;

while (true) {
  count++;
  console.log("Anime");
  console.log("type exit to quit");
  exit = prompt();
  if (exit.toLowerCase().trim() == "exit") {
    break;
  }
}
console.log("loop ran: " + count + " times");