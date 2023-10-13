import Account from "./account.js";

const account = new Account();

export default class Card {
  pin = "0123";

  constructor() {
  }

  getCardBalance() {
    return account.getBalance();
  }

  comparePin(pinCheck) {
    if (pinCheck === this.pin) {
      return true;
    }
    else {
      return false;
    }
  }

}