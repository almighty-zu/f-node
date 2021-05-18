const fs = require('fs');

const genders = ['f', 'm'];
const maleNames = ['jan', 'tomek', 'marek', 'józek', 'franek', 'paweł'];
const femaleNames = ['ola', 'basia', 'kasia', 'ania', 'zosia', 'lusia'];
const lastNames = ['Kowalski', 'Frycz', 'Wir', 'Bukowski', 'Tomala', 'Werner'];

const randChoice = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
}

const people = [];

for (let i=0; i<20; i++) {

    let person = {};

    person.gender = randChoice(genders);

    if(person.gender === 'f') {
        person.name = randChoice(femaleNames);
    } else {
        person.name = randChoice(maleNames);
    }

    person.lastName = randChoice(lastNames);
    
    person.age = (Math.floor(Math.random * 60 + 18));

    people.push(person);
};

const data = JSON.stringify(people);

fs.writeFile('outputfile.txt', data, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});