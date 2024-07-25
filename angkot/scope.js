// var a = 1;
// function tes(a){
//     console.log(a);
// }
// tes();

function tampilAngka(n){
    if(n === 0) return; 
    console.log(n);
    return tampilAngka(n-1);
}
tampilAngka(60);