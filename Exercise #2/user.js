// //Export pada Variabel
// export let name = "Toriq";
// //tidak bisa langsung export tanpa simpan dalam variabel : export 'Thoriq';
// //export pada object javascript
// export let user1 = {
//     nama : "Bagas",
//     umur : 21,
//     alamat : "Airmadidi",
// };
// //export function
// export let dataUser = () => {
//     console.log(`Hello, nama saya Aaron!`);
// };

// //metode export secara terpisah
// let user2 = "Bagus";
// let dataUser2 = {
//     nama : "Bagus",
//     umur : 22,
//     alamat : "Airmadidi Atas",
// };
// let login = (username, password = "12345")=>{
//     console.log(`username : ${username}, password ${password}`);
// };

// export { user2, dataUser2, login };

// //Export AS
// //Syntax : export namaVariabelLama as namaVariabelBaru;
// const warna = "Merah";


// let orang = {
//   nama: "Thoriq",
//   umur: 25,
//   alamat: "Jl. Kemang Raya",
// };


// function katakanHalo(user) {
//   console.log(`Hello, ${user}!`);
// }
// //assign nama variabel baru, mengganti nama variabel lama
// //penggunaan export as hanya bisa dilakukan dengan export secara sekaligus di akhir code
// export { warna as color, orang as person, katakanHalo as sayHello };

// export const warnaKesukaan = "Merah";

// export let orangBaru = {
//   nama: "Thoriq",
//   umur: 25,
//   alamat: "Jl. Kemang Raya",
// };


// export function katakanHalo(user) {
//   console.log(`Hello, ${user}!`);
// }

////Export default
////Dengan menggunakan export default, kode yang di export hanya boleh satu saja dalam satu module.
////export default juga bisa digunakan jika hanya ada satu variabel pada suatu module.
////syntax : export default data;
// function sayHello(user) {
//     console.log(`Hello, ${user}!`);
// }

// export default sayHello;

//Export default  juga dapat bersamaan dengan export reguler :
export const FONTS = {
    small: 10, 
    medium: 14, 
    normal: 16, 
    big: 20, 
}
  

export default function sayHello(user){
    console.log(`Hello, ${user}!`);
}
