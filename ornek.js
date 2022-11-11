let name = prompt("ismini gir");
document.getElementById("myName").innerText = name;

function showTime() {
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var d = date.getDay(); // 0 - 6

    let days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];

    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("myClock").innerHTML = h + ":" + m + ":" + s + ": " + days[d];
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

setInterval(showTime, 100);
showTime();

