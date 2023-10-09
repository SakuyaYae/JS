const prompt = require("prompt-sync")({ sigint: true });
const menu = "1 numbers whit for.\n 2 numbers whit while.\n 3 odd number betwhin 0-20. \n 4 even num to choen num. \n 5 Muliplier. \n 6 Multiplier. \n 7 number of multples of three. \n 8 copare numbers for largest. \n 9 compare untill zero and exit \n e, exit, Exit quit program.\n"

var check = true;
var chose;

function print(input) {
  console.log(input);
  console.log();
}

function check_NaN(value_1, value_2 = 0) {
  if (isNaN(value_1) || isNaN(value_2)) {
    return true;
  }
  return false;
}

function numbers_for() {
  var number = parseFloat(prompt("Type a number: "));
  if (check_NaN(number)) {
    return;
  }
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
  if (check_NaN(number)) {
    return;
  }
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
  while (true) {
    var error = 0;
    var number = parseFloat(prompt("Type a number: "));
    if (check_NaN(number)) {
      return;
    }

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

function mulitples() {
  var count = parseInt(prompt("Type a count: "));
  var multiplier = parseInt(prompt("Type a multiplier: "));

  if (check_NaN(count, multiplier)) {
    return;
  }

  for (var i = 0; i <= count; i++) {
    print(i * multiplier);
  }
}

function num_multi_of_three() {
  var count = parseInt(prompt("Type a count: "));

  if (check_NaN(count)) {
    return;
  }

  for (var i = 0; i <= count; i++) {
    print(i * 3);
  }
}

function compare_num_for_largest() {
  var count = parseInt(prompt("Type a count: "));
  var temp_value = [];
  var largest = 0;

  if (check_NaN(count)) {
    return;
  }

  for (var i = 0; i <= count; i++) {

    var number = parseInt(prompt(i + ": Type a number: "));
    temp_value.push(number);
    if (check_NaN(number)) {
      return;
    }
  }
  for (var i = 0; i <= count; i++) {
    for (var j = 0; i < temp_value.length; j++) {
      if (temp_value[i] > temp_value[j]) {
        largest = temp_value[i];
      }
    }
  }
  print(largest);
}

function compare_untill_zero() {
  var zero_check = 1;
  var temp_value = [];
  var largest = 0;

  while (zero_check != 0) {

    var number = parseInt(prompt("counintes untill zero is typed: Type a number: "));
    temp_value.push(number);
    if (check_NaN(number)) {
      return;
    }
  }
  for (var i = 0; i <= count; i++) {
    for (var j = 0; i < temp_value.length; j++) {
      if (temp_value[i] > temp_value[j]) {
        largest = temp_value[i];
      }
    }
  }
  print(largest);
}

while (check) {
  print(menu);
  chose = prompt("type your chose: ");

  switch (chose.trim()) {
    case "1":
      numbers_for();
      break;

    case "2":
      numbers_while();
      break;

    case "3":
      odd_numbers_betwhin();
      break;

    case "4":
      even_num_to_choen_num();
      break;

    case "5":
      mulitples();
      break;

    case "6":
      mulitples();
      break;

    case "7":
      num_multi_of_three();
      break;

    case "8":
      compare_num_for_largest();
      break;

    case "9":
      compare_untill_zero();
      break;

    case "exit", "Exit", "e":
      check = false;
      break;

    default:
      print(menu);
      break;

  }
}

