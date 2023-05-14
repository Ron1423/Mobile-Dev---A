
//Promise
//A
function helloWorld () {
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve("Hello World!");
        },2000);
    });
}
//B
const messages = async() => {
    let msg = await helloWorld();
    console.log(msg);
}
//C
messages();


//Fetch
// function ambilDataUser() {                          //a
//     fetch("https://reqres.in/api/users")            //b
//     .then((response) => response.json())            //c
//     .then((users) => console.log(users.data));       //d
// }

// ambilDataUser();

//Async Await
// const ambilDataUser = async () => {
//     try{
//         const response = await fetch("https://reqres.in/api/users");
//         const users = await response.json();
//         console.log(users.data);
//     }catch(err){
//         console.log(`Gagal Mengambil Data : ${err.message}`);
//     }
// };

// ambilDataUser();

//Axios
const axios = require("axios");
const ambilDataUser = async () => {
    try{
        const response = await axios.get("https://reqres.in/api/users");
        console.log(response.data);
    }catch (error) {
        console.log(`Gagal Mengambil Data : ${error}`);
    }
};

ambilDataUser();