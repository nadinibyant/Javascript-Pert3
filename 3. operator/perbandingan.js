//sama dengan (==) -> (==) (===)
const angka1 = '10'
const angka2 = 10
const nonIdentik = angka1 == angka2
console.log(`Hasil non identik adalah : ${nonIdentik}`);

const identik = angka1 === angka2
console.log(`Hasil identik adalah : ${identik}`);


//tidak sama dengan (!=) (!==)
const nonIdentikTidakSama = angka1 != angka2
console.log(`Hasil tidak sama non identik adalah : ${nonIdentikTidakSama}`);

const identikTidakSama = angka1 !== angka2
console.log(`Hasil tidak sama identik adalah : ${identikTidakSama}`);


//kecil sama (<)
const number1 = 10
const number2 = 8
const kecilSama = number1 < number2
console.log(`Hasil kecil sama adalah : ${kecilSama} `);

//kecil sama dengan (<=)
const kecilSamaDengan = number1 <= number2
console.log(`Hasil kecil sama dnegan adalah : ${kecilSamaDengan}`);

//besar sama (>)
const besarSama = number1 > number2
console.log(`Hasil Besar adalah : ${besarSama}`);

//besar sama dengan (>=)
const besarSamaDengan = number1 >= number2
console.log(`Hasil besar sama dengan adalah : ${besarSamaDengan}`);