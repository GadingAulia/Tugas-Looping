# Tugas-Looping
# Javascript Dasar Looping

### Exercise 1
###### Program JavaScript menggunakan loop for yang untuk menampilkan tulisan "User ke - " diikuti dengan nomor dari 1 hingga 100 di halaman web menggunakan method document.write().
###### Langkah awal yaiut inisialisasi variable i dengan nilai awal 1 menggunakan "var". Loop akan berjalan apabila nilai i kurang dari atau sama dengan 100, dan setiap iterasi nilai i akan ditambahkan 1.
###### Method document.write() digunakan untuk menampilkan teks "User ke - " diikuti dengan nilai i dan tag "br" untuk membuat baris baru. Ini akan menghasilkan daftar "User ke - 1" hingga "User ke - 100".

### Exercise 2
###### Inisialisasi variable dengan nilaiAwal = 0.
###### Perulangan akan dijalankan sebanyak 10 kali dengan menggunakan variabel i sebagai penghitung loop. Setiap kali perulangan dijalankan, nilai nilaiAwal akan ditambahkan dengan 2 dan hasilnya akan ditampilkan di console menggunakan fungsi console.log.
###### Program di atas akan menampilkan hasil penambahan pada setiap pengulangan sehingga output yang ditampilkan adalah 
###### Pengulangan ke-1: 2
###### Pengulangan ke-2: 4
###### Pengulangan ke-3: 6
###### Pengulangan ke-4: 8
###### Pengulangan ke-5: 10
###### Pengulangan ke-6: 12
###### Pengulangan ke-7: 14
###### Pengulangan ke-8: 16
###### Pengulangan ke-9: 18
###### Pengulangan ke-10: 20

### Exercise 3
###### Inisialisasi variable i dengan nilai 0.
###### Program ini menggunakan perulangan FOR untuk melakukan iterasi dari 0 hingga 20 dan menampilkan keterangan ganjil atau genap pada setiap nilai yang diiterasi. Dilakukan diperiksa untuk menentukan apakah itu bilangan ganjil atau genap menggunakan operator modulus %
###### Program di atas akan menampilkan keterangan ganjil atau genap pada setiap nilai yang diiterasi.
###### Setiap nilai yang diiterasi akan diberikan keterangan ganjil atau genap, tergantung pada hasil dari pengecekan apakah nilai tersebut habis dibagi 2 atau tidak.

### Exercise 4
###### Inisialisasi variabel jumlahKlik dengan nilai awal 0
###### Menampilkan konfirmasi pop up dengan teks 'Apakah anda mau mengulang, program akan menambahkan nilai variabel jumlahKlik dan menampilkan konfirmasi pop up lagi. 
###### Jika user memilih 'Cancel', program akan menampilkan pesan "Perulangan sudah dilakukan sebanyak [jumlahKlik] kali." di konsol.
###### Program ini menggunakan perulangan while untuk terus menampilkan konfirmasi pop up selama user memilih 'OK'. Variabel ulang digunakan sebagai kondisi perulangan, dengan nilai awal yang sama dengan hasil dari confirm(). Setiap kali user memilih 'OK', variabel jumlahKlik akan ditambahkan dengan 1. Jika user memilih 'Cancel', program akan keluar dari perulangan dan menampilkan pesan di konsol.

### Exercise 5
###### Inisialisasi variabel jawaban dengan nilai 'Impact Byte'
###### Program di atas akan menampilkan prompt() dengan teks "Sebutkan kepanjangan dari nama IB (Impact Byte)?" dan menunggu input dari user. Jawaban yang benar disimpan dalam variabel jawaban. Program akan melakukan perulangan selama jawaban dari user belum benar, dengan menampilkan prompt() yang sama jika jawaban salah. Jika user memilih 'Cancel' atau mengosongkan jawaban, program akan keluar dari perulangan.
###### Setelah jawaban dari user benar, program akan menampilkan alert "Selamat jawaban kamu benar!". Jika user memilih 'Cancel' atau mengosongkan jawaban sebelum jawaban benar, program akan keluar dari perulangan tanpa menampilkan alert.
