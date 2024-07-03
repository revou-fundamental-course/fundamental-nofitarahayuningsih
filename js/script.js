//UNTUK SLIDE SHOW

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n){
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var imgList = document.getElementsByClassName("img-slideshow");
    if (n > imgList.length) slideIndex = 1;
    else if (n < 1) slideIndex = imgList.length;
    
    for(i =0; i < imgList.length; i++) {
        imgList[i].style.display = "none";
      
    }

    imgList[slideIndex -1].style.display = "block";
   
    }

//row function
                
    setInterval (() => {
        plusDivs(1);
            }, 2000);

//UNTUK PORTOFOLIO
var slidePort = 1;
showDiv(slidePort);

function plusDiv(n){
    showDiv(slidePort += n);
}

function showDiv(n) {
    var x;
    var portList = document.getElementsByClassName("img-port");
    if (n > portList.length) slidePort = 1;
    else if (n < 1) slidePort = portList.length;
    
    for(x =0; x<portList.length; x++) {
        portList[x].style.display = "none";
    }

    portList[slidePort -1].style.display = "block";
    }


// UNTUK MENAMPILKAN DATA MESSAGE US
function tampilkanPesan() {

    var nama = document.getElementById('nama').value;
    if (nama == "") {
        alert('Nama wajib diisi');
        return false;
    }

    var email = document.getElementById('email').value;
    if (email == "") {
        alert('Email wajib diisi');
        return false;
    }
    var tanggalLahir = document.getElementById('tanggal-lahir').value;
    var jenisKelamin = '';
    if (document.getElementById('laki-laki').checked) {
        jenisKelamin = 'Laki-Laki';
    } else if (document.getElementById('perempuan').checked) {
        jenisKelamin = 'Perempuan';
    }
    var pesan = document.getElementById('pesan').value;

    var currentTime = new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' });

    document.getElementById('current-time').innerText = 'Waktu saat ini: ' + currentTime;
    document.getElementById('output-nama').innerText = 'Nama: ' + nama;
    document.getElementById('output-email').innerText = 'Email: ' + email;
    document.getElementById('output-tanggal-lahir').innerText = 'Tanggal Lahir: ' + tanggalLahir;
    document.getElementById('output-jenis-kelamin').innerText = 'Jenis Kelamin: ' + jenisKelamin;
    document.getElementById('output-pesan').innerText = 'Pesan: ' + pesan;

    setName(nama);
    return false;
    function setName(name) {
        document.getElementById("name").innerHTML = name;
        document.getElementById("error-name").innerHTML = "";
    }

}

