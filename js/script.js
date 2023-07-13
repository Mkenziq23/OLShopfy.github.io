// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");

// Ketika hamburger-menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//Klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) navbarNav.classList.remove("active");
});

document.getElementById("search").addEventListener("click", function () {
  var searchBox = document.getElementById("search-box");
  if (searchBox.style.display === "none") {
    searchBox.style.display = "block";
  } else {
    searchBox.style.display = "none";
  }
});
