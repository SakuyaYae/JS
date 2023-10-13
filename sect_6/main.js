class PlayerStats {
  hp;
  str;
  mag;
  def;
  res;
  showStats() {
    console.log("HP: " + this.hp);
    console.log("Str: " + this.str);
    console.log("Mag: " + this.mag);
    console.log("Def: " + this.def);
    console.log("Res: " + this.res);
  }
}

class Mage {
  constructor(playerName) {
    this.playerName = playerName;
    this.stat = new PlayerStats();
    this.stat.hp = 100;
    this.stat.str = 20;
    this.stat.mag = 80;
    this.stat.def = 50;
    this.stat.res = 70;
  }
  castMagic() {
    console.log("Attack whit magic");
  }
}

class ShrineMaiden {
  constructor(playerName) {
    this.playerName = playerName;
    this.stat = new PlayerStats();
    this.stat.hp = 100;
    this.stat.str = 20;
    this.stat.mag = 70;
    this.stat.def = 40;
    this.stat.res = 80;
  }
  heal() {
    console.log("HP restored");
  }
}

const sakuya = new Mage("Sakuya");
const yuki = new ShrineMaiden("Yuki");


console.log(sakuya.playerName);
sakuya.stat.showStats();
sakuya.castMagic();

console.log();
console.log(yuki.playerName);
yuki.stat.showStats();
yuki.heal();