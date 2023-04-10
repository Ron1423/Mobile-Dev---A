// //object

// let john = {
//     fullName : "John Doe",
//     age : 35,
//     isMarried : true,
//     grade : [80,90,100],
//     greetings : function (){
//         console.log("Hello World!")
//     }
// };

// console.log(john.fullName); //dot notation
// console.log(john['fullName']); //bracket notation
// john.greetings();

// Array BUilt-in method
// let numbers = [1,2,3,4,5]

// // old way
// for (i=0; i<numbers.length; i++){
//     console.log(numbers[i]);
// }

//new way
// numbers.forEach(function (value) {
//     console.log(value);
// });

// //return new array
// let numbers2 = numbers.map(function(value){
//     return value;
// });

// let students = [
//     {
//         fullName: "John",
//         age: 24,
//         address: "Minut",
//     },
//     {
//         fullName: "Bob",
//         age: 25,
//         address: "Manado",
//     },
//     {
//         fullName: "Jane",
//         age: 26,
//         address: "Minahasa",
//     },
// ];

// students.forEach(function (valueFN){
//     console.log(valueFN.fullName); //console.log(valueFN['fullName']);
// });

// //filter array

// let studentsFullName = students.filter(function(value){
//     return value.age >= 25;
// });

// console.log(studentsFullName);

//Group Exercise
let people = ["Greg", "Mary", "Devon", "James"];
//console.log(people);
// //nomor 1
// for (i=0; i<people.length; i++){
//     console.log(people[i]);
// }
// //nomor 2
// people.forEach(function (valueName){
//     console.log(valueName);
// })
// //nomor 3
// people.shift();
// console.log(people);
// //nomor 4
// people.pop();
// console.log(people);
// //nomor 5
// people.unshift("Matt");
// console.log(people);
// //nomor 6
// people.push("Pelle");
// console.log(people);
//nomor 7
for(i=0; i<people.length; i++){
    if(i > 1){
        break;
    }
    console.log(people[i]);
}
//nomor 8


