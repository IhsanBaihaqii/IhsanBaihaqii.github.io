<<<<<<< HEAD
=======
<<<<<<< HEAD
const translations = {
  en: {
    home: "Home",
    about: "About",
    skills: "Skills",
    education: "Education",
    work: "Work",
    experience: "Experience",
    contact: "Contact",
    greeting: "Hi There, I'm Asep Surahman Sulaeman",
    description: "I am into <span class='typing-text'></span>",
    aboutMe: "About Me",
    myEducation: "My Education",
    getInTouch: "Get in Touch",
  },
  id: {
    home: "Beranda",
    about: "Tentang",
    skills: "Keahlian",
    education: "Pendidikan",
    work: "Pekerjaan",
    experience: "Pengalaman",
    contact: "Kontak",
    greeting: "<h2>Hai,<br/> saya <span>Ihsan Baihaqi</span></h2>",
    description: "Saya tertarik pada <span class='typing-text'></span>",
    aboutMe: "Tentang Saya",
    myEducation: "Pendidikan Saya",
    getInTouch: "Hubungi Saya",
  },
};

// Fungsi untuk mengubah bahasa
function changeLanguage(lang) {
  document.querySelector('a[href="#home"]').textContent =
    translations[lang].home;
  document.querySelector('a[href="#about"]').textContent =
    translations[lang].about;
  document.querySelector('a[href="#skills"]').textContent =
    translations[lang].skills;
  document.querySelector('a[href="#education"]').textContent =
    translations[lang].education;
  //document.querySelector('a[href="#work"]').textContent =
  //translations[lang].work;
  //document.querySelector('a[href="#experience"]').textContent =
  //translations[lang].experience;
  document.querySelector('a[href="#contact"]').textContent =
    translations[lang].contact;
  document.querySelector(".content h2").innerHTML = translations[lang].greeting;
  // document.querySelector('.content p').innerHTML = translations[lang].description;
  document.querySelector(
    ".heading"
  ).innerHTML = `<i class="fas fa-user-alt"></i> ${translations[lang].aboutMe}`;
  document.querySelector(
    ".education .heading"
  ).innerHTML = `<i class="fas fa-graduation-cap"></i> ${translations[lang].myEducation}`;
  document.querySelector(
    ".contact .heading"
  ).innerHTML = `<i class="fas fa-headset"></i> ${translations[lang].getInTouch}`;
}

// Event listener untuk dropdown bahasa
document
  .getElementById("languageSwitcher")
  .addEventListener("change", function () {
    changeLanguage(this.value);
  });

// Set default bahasa saat halaman pertama kali dimuat
document.addEventListener("DOMContentLoaded", function () {
  changeLanguage("id"); // Ubah ke "id" jika ingin Bahasa Indonesia sebagai default
});

$(document).ready(function () {
  $("#menu").click(function () {
    $(this).toggleClass("fa-times");
    $(".navbar").toggleClass("nav-toggle");
  });

  $(window).on("scroll load", function () {
    $("#menu").removeClass("fa-times");
    $(".navbar").removeClass("nav-toggle");

    if (window.scrollY > 60) {
      document.querySelector("#scroll-top").classList.add("active");
    } else {
      document.querySelector("#scroll-top").classList.remove("active");
    }

    // scroll spy
    $("section").each(function () {
      let height = $(this).height();
      let offset = $(this).offset().top - 200;
      let top = $(window).scrollTop();
      let id = $(this).attr("id");

      if (top > offset && top < offset + height) {
        $(".navbar ul li a").removeClass("active");
        $(".navbar").find(`[href="#${id}"]`).addClass("active");
      }
    });
  });

  // smooth scrolling
  $('a[href*="#"]').on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top,
      },
      500,
      "linear"
    );
  });

  // <!-- emailjs to mail contact form data -->
  $("#contact-form").submit(function (event) {
    emailjs.init("user_TTDmetQLYgWCLzHTDgqxm");

    emailjs
      .sendForm("contact_service", "template_contact", "#contact-form")
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          document.getElementById("contact-form").reset();
          alert("Form Submitted Successfully");
        },
        function (error) {
          console.log("FAILED...", error);
          alert("Form Submission Failed! Try Again");
        }
      );
    event.preventDefault();
  });
  // <!-- emailjs to mail contact form data -->
});

document.addEventListener("visibilitychange", function () {
  if (document.visibilityState === "visible") {
    document.title = "Portfolio | Ihsan Baihaqi";
    $("#favicon").attr("href", "assets/images/favicon.png");
  } else {
    document.title = "Come Back To Portfolio";
    $("#favicon").attr("href", "assets/images/favhand.png");
  }
});

// <!-- typed js effect starts -->
var typed = new Typed(".typing-text", {
  strings: [
    "website development",
    "Digital Marketing",
    "IT Business Development",
    "Data Science",
    "Game Hacking",
  ],
  loop: true,
  typeSpeed: 50,
  backSpeed: 30,
  backDelay: 500,
});
// <!-- typed js effect ends -->

async function fetchData(type = "skills") {
  let response;
  type === "skills"
    ? (response = await fetch("skills.json"))
    : (response = await fetch("./projects/projects.json"));
  const data = await response.json();
  return data;
}

function showSkills(skills) {
  let skillsContainer = document.getElementById("skillsContainer");
  let skillHTML = "";
  skills.forEach((skill) => {
    skillHTML += `
        <div class="bar">
              <div class="info">
                <img src=${skill.icon} alt="skill" />
                <span>${skill.name}</span>
              </div>
            </div>`;
  });
  skillsContainer.innerHTML = skillHTML;
}

function showProjects(projects) {
  let projectsContainer = document.querySelector("#work .box-container");
  let projectHTML = "";
  projects
    .slice(0, 10)
    .filter((project) => project.category != "android")
    .forEach((project) => {
      projectHTML += `
        <div class="box tilt">
      <img draggable="false" src="/assets/images/projects/${project.image}.png" alt="project" />
      <div class="content">
        <div class="tag">
        <h3>${project.name}</h3>
        </div>
        <div class="desc">
          <p>${project.desc}</p>
          <div class="btns">
            <a href="${project.links.view}" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a>
            <a href="${project.links.code}" class="btn" target="_blank">Code <i class="fas fa-code"></i></a>
          </div>
        </div>
      </div>
    </div>`;
    });
  projectsContainer.innerHTML = projectHTML;

  // <!-- tilt js effect starts -->
  VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 15,
  });
  // <!-- tilt js effect ends -->

  /* ===== SCROLL REVEAL ANIMATION ===== */
  const srtop = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 1000,
    reset: true,
  });

  /* SCROLL PROJECTS */
  srtop.reveal(".work .box", { interval: 200 });
}

fetchData().then((data) => {
  showSkills(data);
});

fetchData("projects").then((data) => {
  showProjects(data);
});

// <!-- tilt js effect starts -->
VanillaTilt.init(document.querySelectorAll(".tilt"), {
  max: 15,
});
// <!-- tilt js effect ends -->

// pre loader start
// function loader() {
//     document.querySelector('.loader-container').classList.add('fade-out');
// }
// function fadeOut() {
//     setInterval(loader, 500);
// }
// window.onload = fadeOut;
// pre loader end

// disable developer mode
document.onkeydown = function (e) {
  if (e.keyCode == 123) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "C".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.keyCode == "U".charCodeAt(0)) {
    return false;
  }
};

/* ===== SCROLL REVEAL ANIMATION ===== */
const srtop = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 1000,
  reset: true,
});

/* SCROLL HOME */
srtop.reveal(".home .content h3", { delay: 200 });
srtop.reveal(".home .content p", { delay: 200 });
srtop.reveal(".home .content .btn", { delay: 200 });

srtop.reveal(".home .image", { delay: 400 });
srtop.reveal(".home .linkedin", { interval: 600 });
srtop.reveal(".home .github", { interval: 800 });
srtop.reveal(".home .twitter", { interval: 1000 });
srtop.reveal(".home .telegram", { interval: 600 });
srtop.reveal(".home .instagram", { interval: 600 });
srtop.reveal(".home .dev", { interval: 600 });

/* SCROLL ABOUT */
srtop.reveal(".about .content h3", { delay: 200 });
srtop.reveal(".about .content .tag", { delay: 200 });
srtop.reveal(".about .content p", { delay: 200 });
srtop.reveal(".about .content .box-container", { delay: 200 });
srtop.reveal(".about .content .resumebtn", { delay: 200 });

/* SCROLL SKILLS */
srtop.reveal(".skills .container", { interval: 200 });
srtop.reveal(".skills .container .bar", { delay: 400 });

/* SCROLL EDUCATION */
srtop.reveal(".education .box", { interval: 200 });

/* SCROLL PROJECTS */
srtop.reveal(".work .box", { interval: 200 });

/* SCROLL EXPERIENCE */
srtop.reveal(".experience .timeline", { delay: 400 });
srtop.reveal(".experience .timeline .container", { interval: 400 });

/* SCROLL CONTACT */
srtop.reveal(".contact .container", { delay: 400 });
srtop.reveal(".contact .container .form-group", { delay: 400 });
=======
>>>>>>> 15de4a8 (Update Polling)
const translations = {
  en: {
    home: "Home",
    about: "About",
    skills: "Skills",
    education: "Education",
    work: "Work",
    experience: "Experience",
    contact: "Contact",
    greeting: "Hi There, I'm Asep Surahman Sulaeman",
    description: "I am into <span class='typing-text'></span>",
    aboutMe: "About Me",
    myEducation: "My Education",
    getInTouch: "Get in Touch",
  },
  id: {
    home: "Beranda",
    about: "Tentang",
    skills: "Keahlian",
    education: "Pendidikan",
    work: "Pekerjaan",
    experience: "Pengalaman",
    contact: "Kontak",
    greeting: "<h2>Hai,<br/> saya <span>Ihsan Baihaqi</span></h2>",
    description: "Saya tertarik pada <span class='typing-text'></span>",
    aboutMe: "Tentang Saya",
    myEducation: "Pendidikan Saya",
    getInTouch: "Hubungi Saya",
  },
};

// Fungsi untuk mengubah bahasa
function changeLanguage(lang) {
  document.querySelector('a[href="#home"]').textContent =
    translations[lang].home;
  document.querySelector('a[href="#about"]').textContent =
    translations[lang].about;
  document.querySelector('a[href="#skills"]').textContent =
    translations[lang].skills;
  document.querySelector('a[href="#education"]').textContent =
    translations[lang].education;
  //document.querySelector('a[href="#work"]').textContent =
  //translations[lang].work;
  //document.querySelector('a[href="#experience"]').textContent =
  //translations[lang].experience;
  document.querySelector('a[href="#contact"]').textContent =
    translations[lang].contact;
  document.querySelector(".content h2").innerHTML = translations[lang].greeting;
  // document.querySelector('.content p').innerHTML = translations[lang].description;
  document.querySelector(
    ".heading"
  ).innerHTML = `<i class="fas fa-user-alt"></i> ${translations[lang].aboutMe}`;
  document.querySelector(
    ".education .heading"
  ).innerHTML = `<i class="fas fa-graduation-cap"></i> ${translations[lang].myEducation}`;
  document.querySelector(
    ".contact .heading"
  ).innerHTML = `<i class="fas fa-headset"></i> ${translations[lang].getInTouch}`;
}

// Event listener untuk dropdown bahasa
document
  .getElementById("languageSwitcher")
  .addEventListener("change", function () {
    changeLanguage(this.value);
  });

// Set default bahasa saat halaman pertama kali dimuat
document.addEventListener("DOMContentLoaded", function () {
  changeLanguage("id"); // Ubah ke "id" jika ingin Bahasa Indonesia sebagai default
});

$(document).ready(function () {
  $("#menu").click(function () {
    $(this).toggleClass("fa-times");
    $(".navbar").toggleClass("nav-toggle");
  });

  $(window).on("scroll load", function () {
    $("#menu").removeClass("fa-times");
    $(".navbar").removeClass("nav-toggle");

    if (window.scrollY > 60) {
      document.querySelector("#scroll-top").classList.add("active");
    } else {
      document.querySelector("#scroll-top").classList.remove("active");
    }

    // scroll spy
    $("section").each(function () {
      let height = $(this).height();
      let offset = $(this).offset().top - 200;
      let top = $(window).scrollTop();
      let id = $(this).attr("id");

      if (top > offset && top < offset + height) {
        $(".navbar ul li a").removeClass("active");
        $(".navbar").find(`[href="#${id}"]`).addClass("active");
      }
    });
  });

  // smooth scrolling
  $('a[href*="#"]').on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top,
      },
      500,
      "linear"
    );
  });

  // <!-- emailjs to mail contact form data -->
  $("#contact-form").submit(function (event) {
    emailjs.init("user_TTDmetQLYgWCLzHTDgqxm");

    emailjs
      .sendForm("contact_service", "template_contact", "#contact-form")
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          document.getElementById("contact-form").reset();
          alert("Form Submitted Successfully");
        },
        function (error) {
          console.log("FAILED...", error);
          alert("Form Submission Failed! Try Again");
        }
      );
    event.preventDefault();
  });
  // <!-- emailjs to mail contact form data -->
});

document.addEventListener("visibilitychange", function () {
  if (document.visibilityState === "visible") {
    document.title = "Portfolio | Ihsan Baihaqi";
    $("#favicon").attr("href", "assets/images/favicon.png");
  } else {
    document.title = "Come Back To Portfolio";
    $("#favicon").attr("href", "assets/images/favhand.png");
  }
});

// <!-- typed js effect starts -->
var typed = new Typed(".typing-text", {
  strings: [
    "website development",
    "Digital Marketing",
    "IT Business Development",
    "Data Science",
    "Game Hacking",
  ],
  loop: true,
  typeSpeed: 50,
  backSpeed: 30,
  backDelay: 500,
});
// <!-- typed js effect ends -->

async function fetchData(type = "skills") {
  let response;
  type === "skills"
    ? (response = await fetch("skills.json"))
    : (response = await fetch("./projects/projects.json"));
  const data = await response.json();
  return data;
}

function showSkills(skills) {
  let skillsContainer = document.getElementById("skillsContainer");
  let skillHTML = "";
  skills.forEach((skill) => {
    skillHTML += `
        <div class="bar">
              <div class="info">
                <img src=${skill.icon} alt="skill" />
                <span>${skill.name}</span>
              </div>
            </div>`;
  });
  skillsContainer.innerHTML = skillHTML;
}

function showProjects(projects) {
  let projectsContainer = document.querySelector("#work .box-container");
  let projectHTML = "";
  projects
    .slice(0, 10)
    .filter((project) => project.category != "android")
    .forEach((project) => {
      projectHTML += `
        <div class="box tilt">
      <img draggable="false" src="/assets/images/projects/${project.image}.png" alt="project" />
      <div class="content">
        <div class="tag">
        <h3>${project.name}</h3>
        </div>
        <div class="desc">
          <p>${project.desc}</p>
          <div class="btns">
            <a href="${project.links.view}" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a>
            <a href="${project.links.code}" class="btn" target="_blank">Code <i class="fas fa-code"></i></a>
          </div>
        </div>
      </div>
    </div>`;
    });
  projectsContainer.innerHTML = projectHTML;

  // <!-- tilt js effect starts -->
  VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 15,
  });
  // <!-- tilt js effect ends -->

  /* ===== SCROLL REVEAL ANIMATION ===== */
  const srtop = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 1000,
    reset: true,
  });

  /* SCROLL PROJECTS */
  srtop.reveal(".work .box", { interval: 200 });
}

fetchData().then((data) => {
  showSkills(data);
});

fetchData("projects").then((data) => {
  showProjects(data);
});

// <!-- tilt js effect starts -->
VanillaTilt.init(document.querySelectorAll(".tilt"), {
  max: 15,
});
// <!-- tilt js effect ends -->

// pre loader start
// function loader() {
//     document.querySelector('.loader-container').classList.add('fade-out');
// }
// function fadeOut() {
//     setInterval(loader, 500);
// }
// window.onload = fadeOut;
// pre loader end

// disable developer mode
document.onkeydown = function (e) {
  if (e.keyCode == 123) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "C".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.keyCode == "U".charCodeAt(0)) {
    return false;
  }
};

/* ===== SCROLL REVEAL ANIMATION ===== */
const srtop = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 1000,
  reset: true,
});

/* SCROLL HOME */
srtop.reveal(".home .content h3", { delay: 200 });
srtop.reveal(".home .content p", { delay: 200 });
srtop.reveal(".home .content .btn", { delay: 200 });

srtop.reveal(".home .image", { delay: 400 });
srtop.reveal(".home .linkedin", { interval: 600 });
srtop.reveal(".home .github", { interval: 800 });
srtop.reveal(".home .twitter", { interval: 1000 });
srtop.reveal(".home .telegram", { interval: 600 });
srtop.reveal(".home .instagram", { interval: 600 });
srtop.reveal(".home .dev", { interval: 600 });

/* SCROLL ABOUT */
srtop.reveal(".about .content h3", { delay: 200 });
srtop.reveal(".about .content .tag", { delay: 200 });
srtop.reveal(".about .content p", { delay: 200 });
srtop.reveal(".about .content .box-container", { delay: 200 });
srtop.reveal(".about .content .resumebtn", { delay: 200 });

/* SCROLL SKILLS */
srtop.reveal(".skills .container", { interval: 200 });
srtop.reveal(".skills .container .bar", { delay: 400 });

/* SCROLL EDUCATION */
srtop.reveal(".education .box", { interval: 200 });

/* SCROLL PROJECTS */
srtop.reveal(".work .box", { interval: 200 });

/* SCROLL EXPERIENCE */
srtop.reveal(".experience .timeline", { delay: 400 });
srtop.reveal(".experience .timeline .container", { interval: 400 });

/* SCROLL CONTACT */
srtop.reveal(".contact .container", { delay: 400 });
srtop.reveal(".contact .container .form-group", { delay: 400 });
<<<<<<< HEAD
=======
>>>>>>> 8979754 (Voting)
>>>>>>> 15de4a8 (Update Polling)
