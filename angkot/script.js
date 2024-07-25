function jumlahVolumeDuaKubus(a,b){
    var volumeA;
    var volumeB;
    var total;

    volumeA= a*a*a;
    volumeB=b*b*b;

    total=volumeA+volumeB;

    return total;
}
alert (jumlahVolumeDuaKubus(8,3));


// function tambah(a,b){
//     return a+b;
// }

// var a = parseInt(prompt('masukkan nilai 1 : '));
// var b = parseInt(prompt('masukkan nilai 2 : '));
// var hasil= tambah(a,b);
// console.log(hasil);


// function tambah(a,b){
//    return a+b;
// }
// function kali(a,b){
//     return a*b;
// }
// var hasil = kali(tambah(1,1),tambah(3,4));
// console.log(hasil);


// function tambah(){
//     var hasil =0;
//     for(var i = 0; i < arguments.length; i++){
//         hasil += arguments[i];
//     }
//     return hasil;
// }

// var coba = tambah(1,2,3,4,5);
// console.log (coba);
