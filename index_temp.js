const prompt = require("prompt-sync")({ sigint: true });

function print(input) {
  console.log(input);
  console.log();
};

const name = prompt("Type your name: ");
print("Rip and tear " + name);

const level = parseInt(prompt("What level are you? "));
if (isNaN(level)) {
  print("Your level is beond mortals");
}
else {
  print("Your level is: " + level);
}
