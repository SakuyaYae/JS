class Player {
  hp = 100;
  showHp() {
    console.log("HP: " + this.hp);
  }
}

class Mage extends Player {

  castMagic() {
    console.log("Attack whit magic");
  }
}

class ShrineMaiden extends Player {
  heal() {
    console.log("HP restored");
  }
}

const sakuya = new Mage();
const yuki = new ShrineMaiden();

sakuya.showHp();
sakuya.castMagic();

yuki.showHp();
yuki.heal();