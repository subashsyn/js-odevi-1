let username=prompt("---ADINIZ--");
document.getElementById("username").innerHTML=username;


 
function zaman(){

    var zmn=new Date()
    var h=zmn.getHours()
    var m=zmn.getMinutes()
    var s=zmn.getSeconds()
    var day=zmn.getDay()
    let days=["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]
    document.getElementById("zamann").innerHTML=h + ":"+m+":"+s+"  "+days[day];
}
setInterval(zaman,1000);
zaman();