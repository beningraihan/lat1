var item = prompt('masukkan makanan / minuman : \n (cth: nasi,daging,susu,hamburger,softdrink) ');

switch(item){
    case 'nasi':
    case'daging':
    case('susu'):
        alert('makanan/minuman SEHATT');
        break;
    case('hamburger'):
    case('softdrink'):
        alert('makanan/minuman tidak sehat');
        break;    
    default:
         alert('anda memasukkan nama makanan/minuman salah');
         break;
}