//import digunakanuntuk menggunakan variabel yang sudah di export dari module lainnya
//syntax : 
// import { data } from "./namaModul.js";

// import { dataUser, name, user1 } from "./user.js";
// dataUser();
// console.log(name);
// console.log(user1);

//Export AS
//import dengan nama variabel baru yang telah di assign
// import color from "./user";
// import person from "./user";
// import sayHello from "./user";

//Import AS
//memberi alias pada data yang di-export
// import {
//     warnaKesukaan as favoriteColor,
//     orangBaru as newPerson,
//     katakanHalo as sayHello,
//   } from "./user.js";

// console.log(favoriteColor);
// console.log(newPerson);
// sayHellrt export defaulto(newPerson);

//Cara import 'export default', kurung kurawalnya {} dihilangkan dan langsung memanggil nama data yang sudah di export sebelumnya.
//syntax : import data from "./namaModul.js";
// import sayHello from "./user.js";

// sayHello("Thoriq");

import sayHello, { FONTS } from "./user.js"

sayHello("Thoriq");