/**
 Buatlah algoritma dan implementasi di javascript untuk kasus berikut: Seorang pengajar 
 sedang memeriksa ujian mahasiswa dan akan memberikan desc nilai dari A-E dengan ketentuan sebagai berikut:
    Nilai 80 - 100: A
    Nilai 65 - 79: B
    Nilai 50 - 64: C
    Nilai 35 - 49: D
    Nilai 0 - 34: E Tampilkan desc nilai dan nama siswa saat pengajar tersebut memasukkan nilai 
    dan nama yang dia inginkan.
NOTED: Jika nilai mahasiswa kurang dari 0 atau lebih dari 100 maka tampilkan 'Nilai Invalid'
 */

/**PSUDOCODE
STORE nilai WITH number

IF nilai EQUAL TO 0 and LESS THAN EQUAL TO 34
SET WITH nilai D 
ELSE IF nilai MORE THAN EQUAL TO 35 and LESS THAN EQUAL TO 64
SET WITH nilai C
ELSE IF nilai MORE THAN EQUAL TO 65 and LESS THAN EQUAL TO 79
SET WITH nilai B
ELSE IF nilai MORE THAN EQUAL TO 80 and LESS THAN EQUAL TO 100
SET WITH nilai A

END IF */

var nama = "agus";
var nilai = 77;

if(nilai >= 0 && nilai <= 34){
    console.log("nama: " + nama +"  D");
} else if (nilai >= 35 && nilai <= 64){
    console.log("nama: " + nama +"  C");
} else if (nilai >= 65 && nilai <= 79){
    console.log("nama: " + nama +"  B");
} else if (nilai >= 80 && nilai <= 100){
    console.log("nama: " + nama +"  A");
}
