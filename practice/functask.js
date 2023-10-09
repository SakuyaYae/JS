function print(value) {
  console.log(value);
  console.log();
}

function masterName() {
  return "Sakuya";
}

function great(userName, age) {
  print("Hello i am " + userName + " and have lived for " + age + " years");
}

function addNum(value1, value2) {
  return value1 + value2;
}

function multiNum(value1, value2) {
  return value1 * value2;
}

function divideNum(value1, value2) {
  return value1 / value2;
}

function checkValue(value) {
  if (value === 55) {
    return "Value is 55";
  }
  else if (value < 55) {
    return "Value is less than 55";
  }
  else {
    return "value is greater than 55";
  }
}

print(masterName());
print(addNum(-40, -40));
print(multiNum(824376354, 64856338765));
print(divideNum(23, 236663485686378));
great("Sakuya", 23);
print(checkValue(divideNum(-55, 1)));