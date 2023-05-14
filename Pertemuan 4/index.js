const john = {
    fullName : "John Doe",
    age : 35,
    address : "Manado",
};

const kalimatEs5 = "Halo, nama saya " + john.fullName + ", umur saya " + john.age + " tahun saya tinggal di " + john.address;

console.log(kalimatEs5);

const kalimatEs6 = `Halo, nama saya ${john.fullName}, umur saya ${john.age} tahun, saya tinggal di ${john.address}.`;

console.log(kalimatEs6);

//arrow function
function greetingsEs5(){
    return `Hello World`;
}

const greetingsEs6 = (fullName) => {
    return `Hello ${fullName}`;
};

let numbers = [1,2,3,4,5];
let output3 = numbers.map((item) => item * 2);

console.log(output3);

//default parameter

let login = (username, password = "12345")=>{
    console.log(`username : ${username}, password ${password}`);
};

login("Dicky")

//rest parameter dan spread operator

//1. Rest Parameter
let arrayFunc = (a,b,c,d) => {
    let arr = [a,b,c,d];
    arr.forEach((item) => console.log(item));
}; //old way
let arrayFuncEs6 = (...params) => {
    params.forEach((item) => console.log(item));
}; //new way

arrayFuncEs6(1,2,3,4,5,6);
