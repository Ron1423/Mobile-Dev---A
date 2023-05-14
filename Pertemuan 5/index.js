//spread operator
//memecah array
//let numbers = [1,2,3,4,5];
//console.log(numbers);
//console.log(...numbers); //spread operator

//Kegunaan : 
//1. Duplikasi array 
//let numbers2 = [...numbers];
//console.log(numbers2);
//2. Menggabungkan array
// let numbers1 = [1,2,3];
// let numbers2 = [5,6,7];
// let numbers3 = [8,9,10];
// let combineNumbers = numbers1.concat(4,numbers2,numbers3); //cara pertama
// console.log(combineNumbers);
// let combineNumbers6 = [...numbers1,4,...numbers2,...numbers3];
// console.log(combineNumbers6);

// let obj1 = {a:1,b:2};
// let obj2 = {a:3,b:4};
// let combineObject = {...obj1,...obj2};
// console.log(combineObject);

//Desturcturing
let numbers = [1,2,3,4,5]
let [a,b,c,d,e] = numbers; //akan selalu melihat urutan
console.log(a);