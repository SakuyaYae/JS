const prompt = require("prompt-sync")({ sigint: true });
const to_do_list = [];
const done_list = [];
const menu = "1 print to do list.\n 2 add to list.\n 3 remove from top. \n 4 remove from bottom. \n 5 remove somting based on index. \n 6 remove somting of chose \n 7 move to top. \n 8 move to bottom. \n e, exit, Exit quit program.\n"

var check = true;
var item;
var chose;
var item_name;
var index;
var item_temp;

function print(input) {
  console.log(input);
  console.log();
}

function print_to_do_list() {
  for (var i = 0; i < to_do_list.length; i++) {
    print(to_do_list[i]);
  }
}

function add_item() {
  var item_to_add = prompt("type item to add to the list: ");
  to_do_list.push(item_to_add);
}

function remove_from_top() {
  to_do_list.shift();
}

function remove_from_bottom() {
  to_do_list.pop();
}

function remove_based_on_index() {

  if (to_do_list.length > 0) {
    print((to_do_list.length - 1) + ": is the max index");
  }
  else {
    print("to do list is empty")
  }
  var index_to_remove = parseInt(prompt("chose index: "));
  if (isNaN(index_to_remove)) {
    return;
  }
  to_do_list.splice(index_to_remove, 1);
}

function remove_based_on_name() {
  var name_of_item = prompt("type name of item to remove: ");
  index = to_do_list.indexOf(name_of_item);
  if (index < 0) {
    print("no item found");
  }
  else {
    to_do_list.splice(index, 1);
  }
}

function move_to_top() {
  var item_to_top = prompt("type name of item to move: ");
  index = to_do_list.indexOf(item_to_top);
  if (index < 0) {
    print("no item found");
  }
  else {
    item = to_do_list.splice(index, 1);
    to_do_list.unshift(item[0]);
  }
}

function move_to_bottom() {
  var item_to_bottom = prompt("type name of item to move: ");
  index = to_do_list.indexOf(item_to_bottom);
  if (index < 0) {
    print("no item found");
  }
  else {
    item = to_do_list.splice(index, 1);
    to_do_list.push(item[0]);
  }
}


function move_down() {
  item_name = prompt("type name of item to move: ");
  index = to_do_list.indexOf(name_of_item);
  if (index < 0) {
    print("no item found");
  }
  else {
    if (index != 0) {
      item = to_do_list.splice(index, 1);
      item_temp = to_do_list.splice(index - 1, 1);
      to_do_list.splice(index - 1, 0, item[0]);
      to_do_list.splice(index, 0, item_temp);
    }
    else {
      print("Error: index is start index");
      return;
    }
  }
}

function move_up() {
  item_name = prompt("type name of item to move: ");
  index = to_do_list.indexOf(name_of_item);
  if (index < 0) {
    print("no item found");
  }
  else {
    if (index != to_do_list.length - 1) {
      item = to_do_list.splice(index, 1);
      item_temp = to_do_list.splice(index + 1, 1);
      to_do_list.splice(index + 1, 0, item[0]);
      to_do_list.splice(index, 0, item_temp);
    }
    else {
      print("Error: index is the last index of list")
      return;
    }
  }
}

while (check) {
  print(menu);
  chose = prompt("type your chose: ");

  switch (chose.trim()) {
    case "1":
      print_to_do_list();
      break;

    case "2":
      add_item();
      break;

    case "3":
      remove_from_top();
      break;

    case "4":
      remove_from_bottom();
      break;

    case "5":
      remove_based_on_index();
      break;

    case "6":
      remove_based_on_name();
      break;

    case "7":
      move_to_top();
      break;

    case "8":
      move_to_bottom();
      break;

    case "9":
      move_down();
      break;

    case "10":
      move_up();
      break;

    case "exit", "Exit", "e":
      check = false;
      break;

    default:
      print(menu);
      break;

  }
}

