let name = "Jeremy Taylor";
let age = 28;
let birthday = "December 7th";
let detroitGC = true;
let lifeEvents = [
  "Born in Detroit, Michigan",
  "I have 2 Kids",
  "I coached Soccer the YMCA in Southgate",
  "I started working at the age of 13"
];

if (detroitGC === true) {
  console.log(
    `My name is ${name} and I am a student at Grand Circus in Detroit, Michigan.I am currently ${age} years old and my birthday is on ${birthday}.`
  );
} else {
  console.log(`
    My name is ${name} and I am a student at Grand Circus in Grand Rapids,
    Michigan. I am currently ${age} years old and my birthday is on ${birthday}.`);
}

for (let i = 0; i < lifeEvents.length; i++) {
  console.log(lifeEvents[i]);
}

let randomNumber = Math.floor(Math.random() * 10);

let counter = 0;

while (true) {
  if (randomNumber != 5) {
    console.log(`${randomNumber} !== 5`);
    randomNumber = Math.floor(Math.random() * 10 + 1);
    counter++;
  } else {
    counter++;
    console.log(`
      5 === 5. It took ${counter}
      iterations to randomly generate the number 5.`);
    break;
  }
}
