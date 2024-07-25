// this

//membuat object

//cara 1 - function declaration
// function halo(){
//     console.log(this);
//     console.log('woyyyyyyy'); 
// }
// this.halo();
//this mengembalikan object global

// cara 2 - object literal
// var obj={a:10, nama:'Raihan'};
// obj.halo = function(){
//     console.log(this);
//     console.log('haii');
// }
// obj.halo();
// this mengembalikan object yang bersangkutan


// cara 3 -constructor
function Halo(){
    console.log(this);
    console.log('gw ganteng'); 
}
var obj1= new Halo();
var obj2= new Halo();
// this mengambalikan object yang baru dibuat