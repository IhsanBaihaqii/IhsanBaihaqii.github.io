// Starfield Background
const canvas = document.getElementById("starfield");
const ctx = canvas.getContext("2d");
let width, height;

// Stars array
let stars = [];
const STAR_COUNT = 20;

// Shooting stars container
const shootingStarsContainer = document.getElementById(
  "shooting-stars-container"
);

function resize() {
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;

  // Reinitialize stars when resizing
  initStars();
}

function initStars() {
  stars = [];
  for (let i = 0; i < STAR_COUNT; i++) {
    stars.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.5,
      vx: Math.floor(Math.random() * 50) - 25,
      vy: Math.floor(Math.random() * 50) - 25,
    });
  }
}

function drawStars() {
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "white";

  stars.forEach((star) => {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fill();

    // Twinkle effect
    if (Math.random() > 0.95) {
      star.radius = star.radius * 1.2;
      if (star.radius > 2) star.radius = Math.random() * 1.5;
    }
  });
}

function animateStars() {
  drawStars();
  requestAnimationFrame(animateStars);
}

// Shooting stars animation
function createShootingStar() {
  const shootingStar = document.createElement("div");
  shootingStar.className = "shooting-star";

  // Random starting position (top part of the screen)
  const startX = Math.random() * window.innerWidth;
  const startY = Math.random() * window.innerHeight * 0.5;

  // Random ending position (bottom part of the screen)
  const endX = startX + (Math.random() * 400 - 200);
  const endY = startY + (Math.random() * 300 + 200);

  shootingStar.style.left = `${startX}px`;
  shootingStar.style.top = `${startY}px`;

  shootingStarsContainer.appendChild(shootingStar);

  // Animate the shooting star
  const duration = Math.random() * 2000 + 6000;

  const animation = shootingStar.animate(
    [
      {
        transform: "translate(0, 0) scale(1)",
        opacity: 0.5,
      },
      {
        transform: "translate(0, 0) scale(1)",
        opacity: 1,
      },
      {
        transform: `translate(${endX - startX}px, ${
          endY - startY
        }px) scale(0.1)`,
        opacity: 0.5,
      },
    ],
    {
      duration: duration,
      easing: "cubic-bezier(0.1, 0.8, 0.2, 1)",
    }
  );

  animation.onfinish = () => {
    shootingStar.remove();
  };
}

// Typing animation
const typingElement = document.getElementById("typing");
const texts = ["Data Science", "Analisis Data", "Digital Marketing"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function type() {
  const currentText = texts[textIndex];

  if (isDeleting) {
    typingElement.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
    typingSpeed = 50;
  } else {
    typingElement.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;
    typingSpeed = 100;
  }

  if (!isDeleting && charIndex === currentText.length) {
    isDeleting = true;
    typingSpeed = 1500; // Pause at end of word
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % texts.length;
    typingSpeed = 500; // Pause before typing next word
  }

  setTimeout(type, typingSpeed);
}

// Mobile menu toggle
const hamburgerBtn = document.getElementById("hamburger-btn");
const navMenu = document.getElementById("nav-menu");

hamburgerBtn.addEventListener("click", () => {
  hamburgerBtn.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Close menu when clicking on a link
document.querySelectorAll("#nav-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburgerBtn.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    }
  });
});

// Skills data
const skills = [
  { name: "HTML", icon: "fab fa-html5", color: "#E44D26" },
  { name: "CSS", icon: "fab fa-css3-alt", color: "#264DE4" },
  { name: "JavaScript", icon: "fab fa-js", color: "#F0DB4F" },
  { name: "Java", icon: "fab fa-java", color: "#007396" },
  { name: "SQL", icon: "fas fa-database", color: "#336791" },
  { name: "C++", icon: "fas fa-code", color: "#00599C" },
  { name: "Cisco", icon: "fas fa-network-wired", color: "#1BA0D7" },
  { name: "VB.NET", icon: "fas fa-laptop-code", color: "#512BD4" },
];

// Projects data
const projects = [
  {
    title: "Saan Project",
    description:
      "Saan Project memungkinkan kamu melihat beberapa rencana project yang akan dibuat oleh Ihsan Baihaqi",
    image: "res/img/projects/saan-project.png",
    link: "#",
  },
  {
    title: "Saan GPT",
    description: "Lorem ipsum nyak nyik nyok",
    image: "res/img/projects/saan-gpt.png",
    link: "#",
  },
  {
    title: "Ihsan AI",
    description: "Lorem ipsum nyak nyik nyok",
    image: "res/img/projects/ihsan-ai.png",
    link: "#",
  },
  {
    title: "UMKM Rumah Makan",
    description: "Lorem ipsum nyak nyik nyok",
    image: "res/img/projects/rumah-minang.png",
    link: "#",
  },
];

// Education data
const education = [
  {
    school: "Politeknik Ganesha Medan",
    degree: "Manajemen Informatika",
    years: "2024 - In Progress",
    logo: "res/img/polgan.png",
    link: "#",
  },
  {
    school: "SMK Negeri 1 Percut Sei Tuan",
    degree: "Elektronika Industri",
    years: "2022 - 2024 Complete",
    logo: "res/img/smkn1.png",
    link: "#",
  },
  {
    school: "SMP Negeri 3 Percut Sei Tuan",
    degree: " ",
    years: "2020 - 2022 Complete",
    logo: "res/img/smp.png",
    link: "#",
  },
  {
    school: "SD Negeri 104209 Saentis",
    degree: " ",
    years: "2014 - 2020 Complete",
    logo: "res/img/sd.png",
    link: "#",
  },
];

// Certifications data
const certifications = [
  {
    title: "Introduction MySQL",
    description: "Sololearn",
    year: "28 Mei 2025 - Sekarang",
    image:
      "https://api2.sololearn.com/v2/certificates/CC-EBHMMIJH/image/png?t=638839987292660800",
  },
  {
    title: "Introduction C++",
    description: "Sololearn",
    year: "1 Juni 2025 - Sekarang",
    image:
      "https://api2.sololearn.com/v2/certificates/CC-CC138JHG/image/png?t=638843461624385220",
  },
  {
    title: "Introduction Html",
    description: "Sololearn",
    year: "7 Juni 2025 - Sekarang",
    image:
      "https://api2.sololearn.com/v2/certificates/CC-PT7QSOVQ/image/png?t=638848904916917360",
  },
];

// Populate skills
function populateSkills() {
  const container = document.getElementById("skills-container");

  skills.forEach((skill) => {
    const skillItem = document.createElement("div");
    skillItem.className = "skill-item";
    skillItem.innerHTML = `
            <i class="${skill.icon}" style="color: white; text-shadow: 0 0 1px cyan"></i>
            <span class="skill-name">${skill.name}</span>
          `;
    container.appendChild(skillItem);
  });
}

// Populate projects
function populateProjects() {
  const container = document.getElementById("projects-container");

  projects.forEach((project) => {
    const projectCard = document.createElement("div");
    projectCard.className = "project-card";
    projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="project-img">
            <div class="project-info">
              <h3>${project.title}</h3>
              <p>${project.description}</p>
              <a href="${project.link}" class="project-btn">View Project</a>
            </div>
          `;
    container.appendChild(projectCard);
  });
}

// Populate education
function populateEducation() {
  const container = document.getElementById("education-container");

  education.forEach((edu) => {
    const eduCard = document.createElement("div");
    eduCard.className = "education-card";
    eduCard.innerHTML = `
            <a href="${edu.link}" target="_blank">
              <img src="${edu.logo}" alt="${edu.school}" class="education-logo">
            </a>
            <div class="education-info">
              <h3>${edu.school}</h3>
              <p>${edu.degree}</p>
              <p>${edu.years}</p>
            </div>
          `;
    container.appendChild(eduCard);
  });
}

// Populate certifications
function populateCertifications() {
  const container = document.getElementById("certifications-container");

  certifications.forEach((cert) => {
    const certCard = document.createElement("div");
    certCard.className = "certification-card";
    certCard.innerHTML = `
            <img src="${cert.image}" alt="${cert.title}" class="certification-img">
            <div class="certification-info">
              <h3>${cert.title}</h3>
              <p>${cert.description}</p>
              <p class="certification-year">${cert.year}</p>
            </div>
          `;
    container.appendChild(certCard);
  });
}

// Initialize everything
window.addEventListener("load", () => {
  resize();
  animateStars();
  type();
  populateSkills();
  populateProjects();
  populateEducation();
  populateCertifications();

  // Start shooting stars at intervals
  setInterval(createShootingStar, 1000);
});

window.addEventListener("resize", resize);
