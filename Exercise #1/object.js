let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

//1.
programming.languages.push("Go");

//2.
programming['difficulty'] = 7;

//3.
delete programming.jokes;

//4.
programming.isFun = true;

console.log(programming);
//5.

let languages = new Map();

languages.set(0, 'JavaScript');
languages.set(1, 'Python');
languages.set(2, 'Ruby');
languages.set(4, 'Go');

console.log(languages);