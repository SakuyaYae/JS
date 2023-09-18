const prompt = require("prompt-sync")({ sigint: true });

function print(input) {
  console.log(input);
  console.log();
};


const menu = ["Add", "Subtract", "Multply", "Divide"];

for (var i = 0; i < menu.length; i++) {
  print(i + " " + menu[i]);
}
console.log();

const chose = parseInt(prompt("Chose action: "));

if (isNaN(chose)) {
  print("Error your chose must be a nummber");
}
if (chose == null) {
  print("Error null value found")
}

switch (chose) {
  case 0:
    print("type first nummber: ")
    const num_1 = parseInt(prompt("Nummber: "));

    if (isNaN(num_1)) {
      print("Error your chose must be a nummber");
    }

    print("type second nummber: ")
    const num_2 = parseInt(prompt("Nummber: "));

    if (isNaN(num_2)) {
      print("Error your chose must be a nummber");
    }

    print(`The sum of the nummbers is ${num_1 + num_2}`);
    break;

  case 1:
    print("type first nummber: ")
    const num_3 = parseInt(prompt("Nummber: "));

    if (isNaN(num_3)) {
      print("Error your chose must be a nummber");
    }

    print("type second nummber: ")
    const num_4 = parseInt(prompt("Nummber: "));

    if (isNaN(num_4)) {
      print("Error your chose must be a nummber");
    }

    print(`The sum of the nummbers is ${num_3 - num_4}`);
    break;

  case 2:
    print("type first nummber: ")
    const num_5 = parseInt(prompt("Nummber: "));

    if (isNaN(num_5)) {
      print("Error your chose must be a nummber");
    }

    print("type second nummber: ")
    const num_6 = parseInt(prompt("Nummber: "));

    if (isNaN(num_6)) {
      print("Error your chose must be a nummber");
    }

    print(`The sum of the nummbers is ${num_5 * num_6}`);
    break;

  case 3:
    print("type first nummber: ")
    const num_7 = parseInt(prompt("Nummber: "));

    if (isNaN(num_7)) {
      print("Error your chose must be a nummber");
    }

    print("type second nummber: ")
    const num_8 = parseInt(prompt("Nummbers: "));

    if (isNaN(num_8)) {
      print("Error your chose must be a nummber");
    }

    print(`The sum of the nummbers is ${num_7 / num_8}`);
    break;

  default:
    print("error!");
    break;
};