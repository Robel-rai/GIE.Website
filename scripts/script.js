window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 20) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});


document.getElementById("serv1").onclick = function () {
    location.href = "/pages/serviceDetailes.html";
};

document.getElementById("serv2").onclick = function () {
    location.href = "#"
}

document.getElementById("serv3").onclick = function () {
    location.href = "#"
}

document.getElementById("serv4").onclick = function () {
    location.href = "#"
}