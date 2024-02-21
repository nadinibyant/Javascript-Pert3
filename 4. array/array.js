const array1 = ['nadini', 20, true, ['nadini']]

console.log(array1.length);
console.log(array1[0]);
console.log(array1[1]);
console.log(array1[2]);
console.log(array1[3]);

//push ->menambahkan elemen baru posisinya belakang
const namaBaru = 'galid'
array1.push('rahul')
console.log(array1);
array1.push(namaBaru)
console.log(array1);

//unshift -> menambahkan nilai baru di posisi awal
array1.unshift(namaBaru)
console.log(array1);

//undefined -> membuat suatu elemen array itu menjadi undefine
array1[3] = undefined
console.log(array1);

//pop -> menghapus elemen terakhir
array1.pop()
console.log(array1);

//shift -> menghapus elemen awal
array1.shift()
console.log(array1);

//slice -> mengambil beberapa nilai dari suatu array
const array2 = array1.slice(1,3)
console.log(array2);

//splice -> menyisipkan elemen di suatu index
array2.splice(0,1,'nadini')
console.log(array2);

