let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
};

document.addEventListener("DOMContentLoaded", function () {
  let observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );
  document.querySelectorAll("img").forEach((section) => {
    observer.observe(section);
  });
});

function sendMsg() {
  var nama = document.getElementById("nama").value;
  var nohp = document.getElementById("nohp").value;
  var email = document.getElementById("email").value;
  var pesan = document.getElementById("pesan").value;

  window.open(
    "https://wa.me/6281938494548?text=" +
      encodeURIComponent(
        "Nama Customer : " +
          nama +
          "\n" +
          "No Hp : " +
          nohp +
          "\n" +
          "Email : " +
          email +
          "\n\n" +
          "Pesan :\n" +
          pesan +
          "\n"
      )
  );
}
