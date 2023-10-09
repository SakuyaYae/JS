export default class Card {
  cardBalance = 15000;
  pin = "0123";

  constructor() {
  }

  getCardBalance() {
    return this.cardBalance;
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