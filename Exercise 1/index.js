let people = ["Greg", "Mary", "Devon", "James"];

//1.
for(let i=0; i<people.length; i++){
    console.log(people[i]);
};

//2.
people.forEach(function(value){
    console.log(people);
});

//3.
people.shift();

//4.
people.pop();

//5.
people.unshift("Matt");

//6.
people.push("Helsinki");

//7.
for(let i =0; i< people.length; i++){
    if(i > 1){
        break;
    }
    console.log(people[i]);
}

//8.
people.slice(2);

//9.
people = ["Greg", "Mary", "Devon", "James"];

people.splice(2,1,"Elizabeth", "Artie", "Helsinki");   
    console.log(people);
    
//10.
let withBob = people.concat("Bob");
    console.log(withBob);