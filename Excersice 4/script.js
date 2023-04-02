// menginisialisasi variabel jumlahKlik dengan nilai awal 0
var jumlahKlik = 0;

// menampilkan konfirmasi pop up dengan teks 'Apakah anda mau mengulang'
var ulang = confirm('Apakah anda mau mengulang?');

// melakukan perulangan selama user memilih 'OK' pada konfirmasi pop up
while (ulang) {
  // menambahkan nilai jumlahKlik setiap kali user memilih 'OK'
  jumlahKlik++;
  // menampilkan konfirmasi pop up dengan teks 'Apakah anda mau mengulang'
  ulang = confirm('Apakah anda mau mengulang?');
}

// menampilkan pesan jika user memilih 'Cancel' pada konfirmasi pop up
console.log('Perulangan sudah dilakukan sebanyak ' + jumlahKlik + ' kali.');