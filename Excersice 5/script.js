// menginisialisasi variabel jawaban dengan nilai 'Impact Byte'
var jawaban = 'Impact Byte';

// menampilkan prompt() dengan teks 'Sebutkan kepanjangan dari nama IB (Impact Byte)?'
var tebakan = prompt('Sebutkan kepanjangan dari nama IB (Impact Byte)?');

// melakukan perulangan selama jawaban dari user belum benar
while (tebakan !== jawaban) {
  // menampilkan prompt() dengan teks yang sama jika jawaban salah
  tebakan = prompt('Maaf, jawaban kamu salah. Coba lagi!');

  // jika user memilih 'Cancel' atau mengosongkan jawaban, keluar dari perulangan
  if (tebakan === null || tebakan === '') {
    break;
  }
}

// menampilkan alert jika jawaban sudah benar
if (tebakan === jawaban) {
  alert('Selamat jawaban kamu benar!');
}
