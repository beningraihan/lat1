//manipulasi array

//1. Menambah isi array
// var arr=[];
// arr[0] = "Bening";
// arr[1]="Raihan";
// arr[2]="Jati";
// console.log(arr);


//2. Menghapus isi array
// var arr=["Bening","Raihan","Jati"];
// arr[1]=undefined;
// console.log(arr);


//3.Menampilkan isi array
// var arr=["Bening","Raihan","Jati","umar","yype"];

// for(var i = 0; i<arr.length; i++){
//     console.log('Mahasiswa ke-' +(i+1)+':'+arr[i]);
// }


//Method pada array
//1.join
// var arr= ['Bening','Raihan','Jati'];
// console.log(arr.join(' - '));


//2. PUSH & POP
// var arr= ['Bening','Raihan','Jati'];
// arr.push('Yupe');
// arr.pop();
// console.log(arr.join(' - '));


//3.UNSHIFT & SHIFT
// var arr= ['Bening','Raihan','Jati'];
// arr.unshift('Umar');
// console.log(arr.join(' - '));



//4.SPLICE
// splice (indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2,...)
// var arr= ['Bening','Raihan','Jati'];
// arr.splice(0,1,'Denny',);
// console.log(arr.join(' - '));


//5. SLICE
// slice(awal,akhir);
// var arr= ['Bening','Raihan','Jati','Umar','Yupe'];
// var arr2= arr.slice(1,3);
// console.log(arr2.join(' - '));


//6.FOREACH
// var angka=[1,2,3,4,5,6,7,8];
// var nama= ['Bening','Raihan','Jati','Umar','Yupe'];
// for(var i = 0; i< angka.length;i++){
//     console.log(angka[i]);
// }

// angka.forEach(function(e){
//     console.log(e);
// });

// nama.forEach(function(e,i){
//     console.log('Mahasiswa ke-'+(i+1)+'adalah :'+ e);
// })


//7.MAP
// var angka=[1,2,3,4,5,6,7,8];
// var angka2 = angka.map(function(e){
//     return e*2;
// });
// console.log(angka2.join('-'));


//8.SORT
// var angka=[1,2,20,10,4,8,6,9,3,5,7];
// angka.sort(function(a,b){
//     return a-b;//untuk membuat sort urutannya benar
// });
// console.log(angka.join('-'));


//9.FILTER & FIND
var angka=[1,2,20,10,4,8,6,9,3,5,7];
var angka2= angka.find(function(x){
    return x > 5;
});
console.log(angka2);
