export default class Player {
  name;
  level;
  trait;
  constructor(name, level, trait) {
    this.name = name;
    this.level = level;
    this.trait = trait;
    console.log();
  }

  printTrait() {
    console.log(this.name + " is a level " + this.level + " " + this.trait + ".");
  }
}