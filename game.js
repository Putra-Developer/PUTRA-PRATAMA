var player;
var computer = Math.round(Math.random()*10);

var main = confirm('Apakah kamu ingin Bermain?')
var nama = prompt('Silahkan Masukkan Nama Anda \n Jika Anda Tidak Bermain Cancel Saja');
while(main == true){
    alert('Tebak Angka 1-10 \n Jika Tebakan Anda Benar Maka Anda Menang! \n Sistem Akan Menyimpan Angka Random Dan Anda Harus Menebaknya Dengan Benar!!!');
    alert('Anda Hanya Diberikan Kesempatan Sebanyak 3 Kesempatan');
    alert('Selamat Bermain >_< \n Semoga Menang Ya');
    for(var i = 3; i > 0; i--){
        var k = i -1 ;
        player = prompt('Masukkan Angka Yang Ingin Ditebak');
        if(player == ''){
        i = 0;
        alert('Yang Anda Masukkan Bukan Angka!')
        }else if(player == null){
            i = 0;
            alert('Masukkan Angka!')
        }else if(player >= 11){
            i = 0
            alert('Anda Memasukkan Angka Yang Berlebihan!')
        }else {
            if(player == computer){
                alert('Wah '+nama + ' Kamu Hebat Sekali! \n Selamat Kamu Bisa Menebak Angkanya \n Angkanya Adalah '+ computer)
                i = 0;
            }else if(player < computer){
                if(k == 0){
                    alert('Kamu Sangat Lemah ' + nama+ '!!! \n Lawan Bot Saja Kalah Apalagi Lawan King Putra xixixixi ')
                }else{
                    alert('Wah Angkanya Hampir Ketebak,Sepertinya Kamu Sudah Mendekati! \n Kesempatan Kamu Tersisa '+k+ ' Lagi')
                }
            }else if(player > computer){
                if(k == 0){
                    alert('Kamu Sangat Lemah ' + nama+ '!!! \n Lawan Bot Saja Kalah Apalagi Lawan King Putra xixixixi ')
                }else{
                    alert('Wah Angkanya Hampir Ketebak,Sepertinya Kamu Sudah Mendekati! \n Kesempatan Kamu Tersisa '+k+ ' Lagi')
                }
            }else{
                i = 0;
                alert('Silahkan Masukkan Angka!!!')
            }
        }
    }
    main = confirm('Apakah Kamu Ingin Bermain Lagi?')
}