const data = require("./data.json");
const fs = require("fs");

console.log(data[0].player.name + "\n" + data[0].player.level + "\n" + data[0].player.inv.atk + "\n" + data[0].player.inv.item_name + "\n");

data[0].player.inv.atk = 200;

console.log(data[0].player.name + "\n" + data[0].player.level + "\n" + data[0].player.inv.atk + "\n" + data[0].player.inv.item_name + "\n");

console.log(data);

fs.writeFile("./data.json", JSON.stringify(data, null, 2), (err) => {
  if (err) throw err;
  console.log("Sakuya");
});
