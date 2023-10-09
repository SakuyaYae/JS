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
    this.cardInserted = card;
    return "Card inserted"
  }

  enterPin(pinCode) {
    if (card.comparePin(pinCode)) {
      return "Valid pin code.";
    }
    else {
      return "Wrong pin code. Try again.";
    }
  }

  withdrawMoney(amount) {
    if (amount <= this.machineBalance) {
      this.machineBalance -= amount;
      card.cardBalance += amount;
      return amount + "kr withdrawn.";
    }
    else {
      return "Amount is greater than the balance in machine. balance in machine: " + this.machineBalance + "kr";
    }
  }

  getBalance() {
    return "You have: " + card.getCardBalance() + " on your card.";
  }

  ejectCard() {
    this.cardInserted = "ejected";
    return card;
  }
}