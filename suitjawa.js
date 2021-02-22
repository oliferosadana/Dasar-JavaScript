var tanya = true;
while (tanya) {
    //menangkap pilihan player
    var p = prompt('pilih : GAJAH, SEMUT, ORANG');

    //menangkap pilihan computer
    //membangkitkan bilangan random
    var comp = Math.random();

    if( comp < 0.34 ) {
        comp = 'gajah';
    } else if (comp >= 0.34 && comp < 0.67) {
        comp = 'orang';
    } else {
        comp = 'semut';
    }

    //menentukan rules
    var hasil = '';

    if ( p == comp ) {
        hasil = 'SERI';
    } else if ( p == 'GAJAH' ) {
        // if ( comp == 'ORANG' ) {
        //     hasil = 'menang';
        // } else {
        //     hasil = 'KALAH';
        // }
        hasil = (comp == 'ORANG') ? 'MENANG' : 'KALAH';
    } else if (p == 'ORANG') {
        hasil = (comp == 'GAJAH') ? 'KALAH' : 'MENANG';
    } else if (p == 'SEMUT') {
        hasil = (comp == 'ORANG') ? 'KALAH' : 'MENANG';
    } else {
        hasil = 'memasukkan pilihan yang salah';
    }

    //tampilkan hasilnya
    alert('kamu memilih : ' + p + ' dan komputer memilih : ' + comp + '\nMaka hasilnya : Kamu ' + hasil); 

tanya = confirm('lanjut ?');
}

alert('Terimakasih sudah bermain')