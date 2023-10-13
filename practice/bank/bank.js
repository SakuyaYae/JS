import Card from "./card.js";

const card = new Card();

export default class Bank {
  cardInserted;
  validCard;
  machineBalance;
  pinTryCounter;

  constructor() {
    this.machineBalance = 11000;
    this.cardInserted = false;
    this.validCard = false;
    this.pinTryCounter = 3;
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
      this.pinTryCounter--;
      if (this.pinTryCounter === 0) {
        return "The machine will keap the card do to you typing the wrong pin code 3 times."
      }
      else {
        return "Wrong pin code. Try again. You have " + this.pinTryCounter + "more tries";
      }
    }
  }

  withdrawMoney(amount) {
    if (amount <= this.machineBalance) {
      this.machineBalance -= amount;
      card.cardBalance += amount;
      return amount + "kr withdrawn.";
    }
    else if (amount > card.getCardBalance()) {
      return "Amount is greater than the balance on your card. " + this.getBalance() + " Type a new amount.";
    }
    else {
      return "Amount is greater than the balance in machine. balance in machine: " + this.machineBalance + "kr";
    }
  }

  getBalance() {
    return "You have: " + card.getCardBalance() + "kr on your card.";
  }

  ejectCard() {
    this.cardInserted = "ejected";
    return card;
  }
}