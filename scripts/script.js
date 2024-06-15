window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 20) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});


document.getElementById("knowMore").onclick = function () {
    location.href = "/pages/serviceDetailes.html";
};


document.getElementById("contactus").onclick = function () {
    location.href = "/pages/contactUs.html";
};