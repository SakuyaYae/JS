import Card from "./card.js";
import Bank from "./bank.js";

const card = new Card();
const machine = new Bank();

function main() {
  console.log("Welocome Insert card");
  console.log(machine.insertCard(card));
  console.log("Enter pin code");
  console.log(machine.enterPin("1234"));
  console.log(machine.enterPin("0123"));
  console.log("Enter amount to withdraw");
  console.log(machine.withdrawMoney(5000) + machine.ejectCard(card));

  console.log("Welocome Insert card");
  console.log(machine.insertCard(card));
  console.log("Enter pin code");
  console.log(machine.enterPin("0123"));
  console.log("Enter amount to withdraw");
  console.log(machine.withdrawMoney(7000));
  console.log(machine.withdrawMoney(6000) + machine.ejectCard(card));
}

main();