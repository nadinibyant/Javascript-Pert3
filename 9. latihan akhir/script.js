function penjumlahan(angka1, angka2){
    return angka1 + angka2
}

function pengurangan(angka1, angka2) {
    return angka1 - angka2
}

function Pembagian(angka1, angka2) {
    return angka1 / angka2
}

function Perkalian(angka1, angka2) {
    return angka1*angka2
}

let hasilRiwayat = []


function tampilRiwayat (){
    let hasil = "";
    for (let index = 0; index < hasilRiwayat.length; index++) {
        hasil += `\nJenis: ${hasilRiwayat[index].Jenis} \nTanggal: ${hasilRiwayat[index].Tanggal} \nHasil: ${hasilRiwayat[index].hasil}\n -----------------------------------------------`;
    }
    return hasil;
}


function Riwayat(Jenis, Tanggal, hasil) {
    this.Jenis = Jenis,
    this.Tanggal = Tanggal,
    this.hasil = hasil
}

let welcome = confirm('Halo Apakah anda ingin menggunakan kalkulator ini?')
if (welcome == true) {
    const date = new Date()
    const Tanggal = date.getDate()   
    let jawabanKonfirmasi 
    do {
        const angka1 = prompt("Inputkan angka pertama")
        const angka1Int = parseInt(angka1)
        const angka2 = prompt('Inputkan angka kedua')
        const angka2Int = parseInt(angka2)
        let menuKalkulator = prompt("Silahkan pilih perhitungan yang anda mau : \n1. Penjumlahan \n2. Pengurangan \n3. Pembagian \n4. Perkalian \n5. Riyawat Perhitungan")    

        switch (menuKalkulator) {
            case '1':
                const jumlah = penjumlahan(angka1Int, angka2Int);
                let riwayat = new Riwayat("Penjumlahan", Tanggal, jumlah);
                hasilRiwayat.push(riwayat)
                alert(`Hasil penjumlahan adalah : ${jumlah}`);
                break;
            case '2':
                const penguranganResult = pengurangan(angka1Int, angka2Int);
                let riwayat2 = new Riwayat("Pengurangan", Tanggal, penguranganResult);
                hasilRiwayat.push(riwayat2)
                alert(`Hasil pengurangan adalah : ${penguranganResult}`);
                break;
            case '3':
                const pembagianResult = Pembagian(angka1Int, angka2Int);
                let riwayat3 = new Riwayat("Pembagian", Tanggal, pembagianResult);
                hasilRiwayat.push(riwayat3)
                alert(`Hasil pembagian adalah : ${pembagianResult}`);
                break;
            case '4':
                const perkalianResult = Perkalian(angka1Int, angka2Int);
                let riwayat4 = new Riwayat("Perkalian", Tanggal, perkalianResult);
                hasilRiwayat.push(riwayat4)
                alert(`Hasil perkalian adalah : ${perkalianResult}`);
                break;
            case '5':
                alert(tampilRiwayat())
                break;
            default:
                alert('Pilihan menu anda tidak tersedia');
                break;
        }    
        jawabanKonfirmasi = confirm('Apakah anda masih ingin menggunakan aplikasi ini :')
        if (!jawabanKonfirmasi) {
            alert('Terimakasih sudah menggunakan aplikasi ini')
        }

    } while (jawabanKonfirmasi == true);
    
} else {
    alert('Terimakasih sudah mengunjugi aplikasi kami')
}