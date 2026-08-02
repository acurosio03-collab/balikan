const musik = document.getElementById("musik");
const lagu = document.getElementById("lagu");


// mulai lagu countdown
setTimeout(()=>{

musik.play();

},500);



// ganti lagu

function gantiLagu(nama){

musik.pause();

lagu.src = nama;

musik.load();

musik.play();

}



// setelah countdown selesai
// masuk pertanyaan balikan

setTimeout(()=>{

gantiLagu("bunga.mp3");

},4000);




// saat YES ditekan

document.getElementById("yes").onclick=()=>{


// ganti ke lagu bahagia

gantiLagu("melukis.mp3");


// tampilkan hasil

document.getElementById("hasil").style.display="block";

document.getElementById("popupLove").style.display="flex";


// efek hati

for(let i=0;i<50;i++){

buatConfetti();

}


};
