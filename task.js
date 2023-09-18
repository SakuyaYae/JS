const prompt = require("prompt-sync")({ sigint: true });

function print(input) {
  console.log(input);
  console.log();
}

function numbers_for() {
  var number = parseFloat(prompt("Type a number: "));
  if (number < 0) {
    number = 0;
    print("Your number was to low: " + number);
    return;
  }
  for (var i = 0; i <= number; i++) {
    print(i);
  }
}

function numbers_while() {
  var number = parseFloat(prompt("Type a number: "));
  if (number < 0) {
    number = 0;
    print("Your number was to low: " + number);
  }
  var num = 0
  while (number >= num) {
    num++;
    print(num);
  }
}

function odd_numbers_betwhin() {
  for (var i = 1; i < 20; i += 2) {
    print(i);
  }
}

function even_num_to_choen_num() {
  var number = parseFloat(prompt("Type a number: "));
  while (true) {
    var error = 0;

    if (number < 0) {
      print("Your number was to low");
      error = 1;
    }

    var even = number % 2;
    if (even != 0) {
      print("number is not even");
      error = 1;
    }

    if (error != 1) {
      break;
    }
  }
  for (var i = 0; i <= number; i += 2) {
    print(i);
  }
}

function mulitples(multiplier) {
  var count = parseInt(prompt("Type a count: "));
  var multiplier = parseInt(prompt("Type a multiplier: "));
  for (var i = 0; i <= count; i++) {
    print(i * multiplier);
  }
}

var check = true;
var chose;

var menu = "1 numbers whit for.\n 2 numbers whit while.\n 3 odd number betwhin 0-20. \n 4 even num to choen num. \n 5 Mulupleier"

while (check) {
  print(menu);
  chose = prompt("type your chose: ");

  switch (chose.trim()) {
    case "1":
      numbers_for();

    case "2":
      numbers_while();

    case "3":
      odd_numbers_betwhin();

    case "4":
      even_num_to_choen_num();

    case "5":
      mulitples();

    case "exit", "Exit", "e":
      check = false;
    default:
      print(menu);

  }
}

