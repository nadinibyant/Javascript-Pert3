const mahasiswa = {
    nama: 'nadini', 
    umur: 20, 
    jurusan: 'sistem informasi',
    universitas: 'andalas',
    nilai: {
        mtk: 90,
        ipa: 50,
        fisika: 70,
        ips: {
            sejarah: 90,
            sosiologi: 100
        }
    }
}

console.log(mahasiswa.nama)
console.log(mahasiswa.umur)
console.log(mahasiswa.jurusan)
console.log(mahasiswa.nilai.fisika)
console.log(mahasiswa.nilai.ips.sosiologi)