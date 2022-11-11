// ********** Merhaba Dunya Ornekleri ********** 

// Dokumana(document) Yazdirma Islemi ile Merhaba Dunya:
// document.write('Merhaba Dunya');

// Uyari Mesaji (Alert) ile Merhaba Dunya:
// alert("Merhaba Dunya")

// console.log ile Merhaba Dunya:
console.log("Merhaba Dunya")

var isim = prompt("Adınız nedir?","aliiii");
console.log("Merhaba, " + isim);


function istek{
    var a=prompt("hosgeldiniz","adınızı girin")
    document.write(a)
}

function myFunction() {
  
    var w = window.open();
    w.document.open();
    w.document.write("<h1>Hello World!</h1>");
    w.document.close();
  document.getElementById("btnClick").addEventListener("click", clicked);
function clicked(){
       alert("Butona Tıklandı");
       } 
  
}

let fullname=prompt("adınızı girin:")
let selam=document.querySelector("#giris")

selam.innerHTML=`${selam.innerHTML} <small style="color:red"> ${fullname}</small>`

