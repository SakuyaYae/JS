const player1 = {
  name: "Sakuya",
  level: 100,
  trait: "Summoner"
}

const player2 = {
  name: "Saya",
  level: 85,
  trait: "Warrior"
}

const player3 = {
  name: "Yui",
  level: 79,
  trait: "Paladin"
}

const player4 = {
  name: "Shiro",
  level: 94,
  trait: "Falcon knight"
}

const player_list = [player1, player2, player3, player4];

for (var i = 0; i < player_list.length; i++) {
  console.log("Player Name: " + player_list[i].name + "\n" + "Player level: " + player_list[i].level + "\n" + "player class: " + player_list[i].trait + "\n");

}
