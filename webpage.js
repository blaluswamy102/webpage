
function details() {
    var res = document.getElementById('leftmenu');

    var date = document.getElementById('date');
    var d = new Date();


    if (res.style.display === "none") {
        res.style.display = "block";
        date.innerHTML = d;
    }

    else {
        res.style.display = "none";
    }
}
function closemenu() {
    var close = document.getElementById('leftmenu');
    close.style.display = "none";


}
