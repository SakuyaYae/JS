/*const personList = [
  {
    name: "Sakuya",
    age: 23,
    job: "Game dev",
    skills: ["Gaming", "Knowlageble", "Creative"]
  },
  {
    name: "Sakuya",
    age: 100,
    job: "Maid",
    skills: ["Fast", "acuret", "therow"]
  },
  {
    name: "Goro",
    age: 40,
    job: "Night club owner",
    skills: ["Strong", "Good in a fight", "Knowlageable"]
  },
  {
    name: "Lif",
    age: 45,
    job: "General",
    skills: ["Strong", "Good in a fight", "Knowlageable", "great leader"]
  },
  {
    name: "Sayaka",
    age: 27,
    job: "Supermaket worker",
    skills: ["Hard working", "friendly", "Knowlageable"]
  },
  {
    name: "Makoto",
    age: 18,
    job: "Casher",
    skills: ["Hard working", "friendly"]
  },
  {
    name: "Kiriya",
    age: 57,
    job: "Teacher",
    skills: ["Hard working", "friendly", "Knowlageable", "strong"]
  },
  {
    name: "Saya",
    age: 20,
    job: "Game dev",
    skills: ["Hard working", "Knowlageable"]
  },
  {
    name: "Saryn",
    age: 22,
    job: "Game desiner",
    skills: ["friendly", "Knowlageable"]
  },
  {
    name: "Raiden",
    age: 30,
    job: "Securety offcer",
    skills: ["Hard working", "Agresive", "Strong"]
  },
  {
    name: "Reimu",
    age: 25,
    job: "Shrine maiden",
    skills: ["friendly", "strong"]
  },
  {
    name: "Inori",
    age: 21,
    job: "Singer",
    skills: ["Hard working", "shy"]
  },
  {
    name: "Sakura",
    age: 23,
    job: "Game dev",
    skills: ["Gaming", "Knowlageble", "Creative"]
  },
  {
    name: "Nox",
    age: 24,
    job: "Military officer",
    skills: ["Hard working", "Agresive", "Strong", "tactics specialist"]
  },
  {
    name: "Athos",
    age: 80,
    job: "child caregiver",
    skills: ["friendly", "wise", "experiensed"]
  }
];

for (var i = 0; i < personList.length; i++) {
  if (personList[i].age > 25) {
    console.log("Name: " + personList[i].name + "\n Job: " + personList[i].job + "\n");
    console.log("skills:");
    personList[i].skills.forEach(element => {
      console.log(element);
    });
    console.log("=====================================");
  }
}
*/
const personsList = [
  {
    name: "Sakuya",
    age: 23,
    job: "Game dev",
    adress: {
      street: "Unknown road",
      city: "Unknown",
      country: "Sweden"
    },
    hobbies: ["Gameing", "Anime watching", "Cosplaying", "Manga reading"]
  },
  {
    name: "Sakuya",
    age: 100,
    job: "Maid",
    adress: {
      street: "Unknown road",
      city: "Unknown",
      country: "Gensokyo"
    },
    hobbies: ["Cleaning", "Cooking"]
  },
  {
    name: "Goro",
    age: 40,
    job: "Night club owner",
    adress: {
      street: "Unknown",
      city: "Osaka",
      country: "Japan"
    },
    hobbies: ["Batting", "Drinking"]
  },
  {
    name: "Lif",
    age: 45,
    job: "General",
    adress: {
      street: "Hell road",
      city: "Unknown",
      country: "Land of the dead"
    },
    hobbies: ["Golfing", "Reading"]
  },
  {
    name: "Sayaka",
    age: 27,
    job: "Supermaket worker",
    adress: {
      street: "Unknown",
      city: "Tokyo",
      country: "Japan"
    },
    hobbies: ["Danceing", "Manga reading"]
  },
  {
    name: "Makoto",
    age: 18,
    job: "Casher",
    adress: {
      street: "Unknown road",
      city: "Kyoto",
      country: "Japan"
    },
    hobbies: ["Gameing", "Anime watching"]
  },
  {
    name: "Kiriya",
    age: 57,
    job: "Teacher",
    adress: {
      street: "Unknown",
      city: "Unknown",
      country: "Japan"
    },
    hobbies: ["Training", "Reading"]
  },
  {
    name: "Saya",
    age: 20,
    job: "Game dev",
    adress: {
      street: "Unknown",
      city: "Ronneby",
      country: "Sweden"
    },
    hobbies: ["Gameing", "Anime watching"]
  },
  {
    name: "Saryn",
    age: 22,
    job: "Game desiner",
    adress: {
      street: "Kungsgatan",
      city: "Ronneby",
      country: "Sweden"
    },
    hobbies: ["Gameing", "Anime watching", "Cosplaying"]
  },
  {
    name: "Raiden",
    age: 30,
    job: "Securety offcer",
    adress: {
      street: "Unknown road",
      city: "Former blazing hell",
      country: "Gensokyo"
    },
    hobbies: ["Gameing", "Swimming", "running"]
  },
  {
    name: "Reimu",
    age: 25,
    job: "Shrine maiden",
    adress: {
      street: "Unknown road",
      city: "Unknown",
      country: "Gensokyo"
    },
    hobbies: ["Relaxing"]
  },
  {
    name: "Inori",
    age: 21,
    job: "Singer",
    adress: {
      street: "Unknown",
      city: "Unknown",
      country: "Unknown"
    },
    hobbies: ["Singing", "Anime watching", "Manga reading"]
  },
  {
    name: "Sakura",
    age: 23,
    job: "Game dev",
    adress: {
      street: "Unknown road",
      city: "Unknown",
      country: "Sweden"
    },
    hobbies: ["Gameing", "Anime watching", "Cosplaying", "Manga reading"]
  },
  {
    name: "Nox",
    age: 24,
    job: "Military officer",
    adress: {
      street: "Unknown",
      city: "Unknown",
      country: "Rome"
    },
    hobbies: ["Decimating", "Cleaning"]
  },
  {
    name: "Athos",
    age: 80,
    job: "child caregiver",
    adress: {
      street: "Unknown",
      city: "Arcadia",
      country: "Nabata"
    },
    hobbies: ["Stydying", "Reading"]
  }
];

var index;

for (var x = 0; x < personsList.length; x++) {
  if (personsList[x].age > 25) {
    console.log("Name: " + personsList[x].name + "\n Job: " + personsList[x].job + "\n" + personsList[x].adress.street + "\n" + personsList[x].adress.city);
    if (personsList[x].hobbies.includes("Reading")) {
      index = personsList[x].hobbies.indexOf("Reading")
      console.log(personsList[x].hobbies[index]);
    }
    console.log("=======================")
  }
}