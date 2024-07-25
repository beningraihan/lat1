//MEMBUAT OBJECT
// Object Literal
var mhs1 = {
    nama :"Raihan Jati",
    umur :16,
    ips : [ 4.00,3.45,2.50],
    alamat :{
        jalan:"jalan kauman",
        kota:"semarang",
        provinsi:"Jawa Tengah",
    }
};

var mhs2={
    nama : "Umar Yupe",
    email:"umarhahahhha",
    jurusan:"Pengembangan Perangkat Lunak & Gim",
};


//FUNCTION DECLARATION
function buatObjectMahasiswa(nama,kelas,email,jurusan){
    var mhs ={};
    mhs.nama= nama;
    mhs.kelas= kelas;
    mhs.email= email;
    mhs.jurusan= jurusan;
    return mhs;
}

var mhs3= buatObjectMahasiswa('Bening Jattt','XI PPLG 1','bening@hhhh','PPLG');


//Constructor
function Mahasiswa(nama,kelas,email,jurusan){
    // var this = {};
    this.nama = nama;
    this.kelas=kelas;
    this.email=email;
    this.jurusan=jurusan;
    // return this; 
}
var mhs4= new Mahasiswa('Pandu Dasuki','XI PPLG 1','pandu@gagag','PPLG');