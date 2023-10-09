import Card from "./card.js";

const card = new Card();

export default class Bank {
  cardInserted;
  validCard;
  machineBalance;

  constructor() {
    this.machineBalance = 11000;
    this.cardInserted = false;
    this.validCard = false;
  }

  insertCard(card) {
    this.cardInserted = true;
    return "Card inserted"
  }

  enterPin(pinCode) {
    return card.comparePin(pinCode);
  }

  withdrawMoney(amount) {
    if (amount <= this.machineBalance) {
      this.machineBalance -= amount;
      card.cardBalance += amount;
      return amount + " withdrawn.";
    }
    else {
      return "Amount is greater than the balance in machine. balance in machine: " + this.machineBalance;
    }
  }

  getBalance() {
    return "You have: " + card.getCardBalance() + " on your card.";
  }

  ejectCard(card) {
    this.cardInserted = false;
    return " card removed. Have a wonderful day.\n"
  }
}