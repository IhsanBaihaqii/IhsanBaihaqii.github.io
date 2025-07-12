//toggle class active hamburger
const navbar = document.querySelector(".navbar");
const hamburger = document.querySelector("#hamburger");
hamburger.onclick = () => {
  navbar.classList.toggle("active");
};

// toggle class active search
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");
const searchBtn = document.querySelector("#search-btn");
searchBtn.onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault(); //Mematikan aksi link pada href
};

// toggle class active shooping
const shoopingBtn = document.querySelector("#shooping-btn");
const shoopingCart = document.querySelector(".shopping");
shoopingBtn.onclick = (e) => {
  shoopingCart.classList.toggle("active");
  e.preventDefault(); //Mematikan aksi link pada href
};

// klik diluar elemen
document.addEventListener("click", function (e) {
  //navbar
  if (!hamburger.contains(e.target) && !navbar.contains(e.target)) {
    navbar.classList.remove("active");
  }
  //search button
  if (!searchBtn.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
  //Shooping
  if (!shoopingBtn.contains(e.target) && !shoopingCart.contains(e.target)) {
    shoopingCart.classList.remove("active");
  }
});

// Detail Produk
const detailBtns = document.querySelectorAll(".produk-detail-btn");
const itemModal = document.querySelector("#modal");

detailBtns.forEach((btn) => {
  btn.onclick = (e) => {
    itemModal.style.display = "flex";
    e.preventDefault(); //Mematikan aksi link pada href
  };
});
// Klik tombol X (Close)
document.querySelector(".bi.bi-x").onclick = (e) => {
  itemModal.style.display = "none";
  e.preventDefault(); //Mematikan aksi link pada href
};
// Klik diluar modal
window.onclick = (e) => {
  if (e.target === itemModal) {
    itemModal.style.display = "none";
  }
};
