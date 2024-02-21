//if (1 kondisi)
const angka1 = 10
const angka2 = 20
if (angka1 > angka2) {
    console.log('nadini annisa byant')
}

//if else (2 kondisi)
if (angka1 > angka2) {
    console.log('nadini annisa byant')
} else {
    console.log('arieska')
}


// if else if (> 2 kondisi)
if(angka1 > angka2){
    console.log('angka 1 itu besar dari angka 2')
} else if(angka1 < angka2){
    console.log('angak 1 itu kecil dari angka 2')
} else if (angka1 == angka2) {
    console.log('angka 1 itu sama dengan angka 2');
} else {
    console.log('angka tidak ada yang memenuhi')
}

const hasilUjian = 90

switch (hasilUjian) {
    case 90:
        console.log('Anda mendapatkan nilai A')
        break;
    case 80:
        console.log('Anda mendapatkan nilai B');
        break;
    case 60: 
        console.log('Anda mendapatkan nilai c')
        break;
    default:
        console.log('Anda mengulang mata kuliah ini')
        break;
}

