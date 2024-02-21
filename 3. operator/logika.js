//and (kedua nilai nya itu bernilai true (benar)) -> (&&)
const nilai1 = 10
const nilai2 = 20

const perbandinganAnd = ((nilai1 < nilai2) && (nilai1 > nilai2) )
console.log(`Hasil perbandingan and : ${perbandinganAnd}`);

//or (salah satu nilai nya itu bernilai benar) => (||)
const perbandinganOr = ((nilai1 < nilai2) || (nilai1 > nilai2) )
console.log(`Hasil perbandingan Or : ${perbandinganOr}`);

//not -> (!)
const perbandinganNot = (!(nilai1 < nilai2))
console.log(`Hasil perbandingan not : ${perbandinganNot}`);