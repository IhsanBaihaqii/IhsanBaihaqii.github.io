// Typing Effect
const typingText = document.querySelector(".typing-text");
const texts = ["Data Science", "Analisis Data", "Digital Marketing"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function type() {
  const currentText = texts[textIndex];

  if (isDeleting) {
    typingText.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
    typingSpeed = 50;
  } else {
    typingText.textContent = currentText.substring(0, charIndex + 1);
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

// Start typing effect
setTimeout(type, 1000);

// Skills Data
const skills = [
  { name: "HTML", icon: "fab fa-html5" },
  { name: "CSS", icon: "fab fa-css3-alt" },
  { name: "JavaScript", icon: "fab fa-js" },
  { name: "Java", icon: "fab fa-java" },
  { name: "SQL", icon: "fas fa-database" },
  { name: "C++", icon: "fas fa-code" },
  { name: "Cisco", icon: "fas fa-network-wired" },
  { name: "VB.NET", icon: "fab fa-windows" },
];

// Projects Data
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

// Education Data
const education = [
  {
    school: "Politeknik Ganesha Medan",
    degree: "Manajemen Informatika",
    years: "2024 - In Progress",
    image: "res/img/polgan.png",
    link: "https://polgan.ac.id",
  },
  {
    school: "SMK Negeri 1 Percut Sei Tuan",
    degree: "Elektronika Industri",
    years: "2022 - 2024 Complete",
    image: "res/img/smkn1.png",
    link: "#",
  },
  {
    school: "SMP Negeri 3 Percut Sei Tuan",
    degree: " ",
    years: "2020 - 2022 Complete",
    image: "res/img/smp.png",
    link: "#",
  },
  {
    school: "SD Negeri 104209 Saentis",
    degree: " ",
    years: "2014 - 2020 Complete",
    image: "res/img/sd.png",
    link: "#",
  },
];

// Certifications Data
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
];

// Populate Skills
const skillsContainer = document.getElementById("skillsContainer");
skills.forEach((skill) => {
  const skillItem = document.createElement("div");
  skillItem.className = "skill-item";
  skillItem.innerHTML = `
                <i class="${skill.icon}"></i>
                <span class="skill-name">${skill.name}</span>
            `;
  skillsContainer.appendChild(skillItem);
});

// Populate Projects
const projectsContainer = document.getElementById("projectsContainer");
projects.forEach((project) => {
  const projectCard = document.createElement("div");
  projectCard.className = "project-card";
  projectCard.innerHTML = `
              <div class="batas">
                <div class="project-img">
                    <img src="${project.image}" alt="${project.title}">
                </div>
                <div class="project-info">
                  <h3>${project.title}</h3>
                  <p>${project.description}</p>
                </div>
              </div>
                <div class="tombol">
                  <a href="${project.link}" class="btn" target="_blank">View Project</a>
                </div>
            `;
  projectsContainer.appendChild(projectCard);
});

// Populate Education
const educationContainer = document.getElementById("educationContainer");
education.forEach((edu) => {
  const eduCard = document.createElement("div");
  eduCard.className = "education-card";
  eduCard.innerHTML = `
                <div class="education-img">
                    <a href="${edu.link}" target="_blank"><img src="${edu.image}" alt="${edu.school}"></a>
                </div>
                <div class="education-info">
                    <h3><a href="${edu.link}" target="_blank" style="text-decoration: none; color: inherit;">${edu.school}</a></h3>
                    <p>${edu.degree}</p>
                    <p>${edu.years}</p>
                </div>
            `;
  educationContainer.appendChild(eduCard);
});

// Populate Certifications
const certificationsContainer = document.getElementById(
  "certificationsContainer"
);
certifications.forEach((cert) => {
  const certCard = document.createElement("div");
  certCard.className = "certification-card";
  certCard.innerHTML = `
                <div class="certification-img">
                    <img src="${cert.image}" alt="${cert.title}">
                </div>
                <div class="certification-info">
                    <h3>${cert.title}</h3>
                    <p>${cert.description}</p>
                    <p class="certification-year">${cert.year}</p>
                </div>
            `;
  certificationsContainer.appendChild(certCard);
});

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });

    // Update active nav link
    document.querySelectorAll(".nav-links a").forEach((link) => {
      link.classList.remove("active");
    });
    this.classList.add("active");
  });
});

// Change active nav link on scroll
window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;

  document.querySelectorAll("section").forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");

    if (
      scrollPosition >= sectionTop &&
      scrollPosition < sectionTop + sectionHeight
    ) {
      document.querySelectorAll(".nav-links a").forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active");
        }
      });
    }
  });
});
