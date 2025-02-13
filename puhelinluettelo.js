const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let phonebook = [];

function addPerson(name, number) {
  phonebook.push({ name, number });
  console.log(`${name} lisätty puhelinluetteloon.`);
}

function searchNumber(phonebook, name) {
  const person = phonebook.find(
    (p) => p.name.toLowerCase() === name.toLowerCase()
  );
  return person ? person.number : "Numeroa ei löytynyt.";
}

function start() {
  console.log("Haluatko lisätä (L) vai hakea (H) numeron?");
  rl.question("Valitse (L/H): ", (answer) => {
    if (answer.toLowerCase() === "l") {
      rl.question("Anna nimi: ", (name) => {
        rl.question("Anna puhelinnumero: ", (number) => {
          addPerson(name, number);
          start();
        });
      });
    } else if (answer.toLowerCase() === "h") {
      rl.question("Anna haettava nimi: ", (name) => {
        console.log(`Puhelinnumero: ${searchNumber(phonebook, name)}`);
        start();
      });
    } else {
      console.log("Virheellinen valinta. Yritä uudelleen...");
      start();
    }
  });
}

console.log("Tervetuloa puhelinluetteloon!");
setTimeout(start, 500);
