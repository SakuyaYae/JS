function print(input) {
  console.log(input);
  console.log();
};

var sakura = null;
var sakuya = "";

if (sakura > 10) {
  print(`${sakura} is greater than 10`);
}
else if (sakura == null || sakura == "") {
  print("sakura is null or empty");
}
else {
  print(`${sakura} is not greater than 10`);
}

switch (sakuya) {
  case "":
    print("sakuya is empty")
    break;

  case null:
    print("sakuya is null");
    break;

  default:
    print("sakuya holds some value");
}