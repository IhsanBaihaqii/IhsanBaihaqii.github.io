// Data untuk website
const skillsData = [
  { name: "HTML", icon: "fab fa-html5", color: "text-orange-500" },
  { name: "CSS", icon: "fab fa-css3-alt", color: "text-blue-500" },
  { name: "JavaScript", icon: "fab fa-js", color: "text-yellow-500" },
  { name: "Java", icon: "fab fa-java", color: "text-red-500" },
  { name: "SQL", icon: "fas fa-database", color: "text-blue-400" },
  { name: "C++", icon: "fas fa-code", color: "text-purple-500" },
  { name: "Cisco", icon: "fas fa-network-wired", color: "text-blue-600" },
  { name: "VB.NET", icon: "fab fa-windows", color: "text-green-500" },
  { name: "Lua", icon: "fas fa-file-code", color: "text-blue-500" },
  { name: "Electronic", icon: "fas fa-robot", color: "text-green-500" },
];

const projectsData = [
  {
    title: "Saan Project",
    description:
      "Saan Project memungkinkan kamu melihat beberapa rencana project yang akan dibuat oleh Ihsan Baihaqi",
    image: "res/img/projects/saan-project.png",
    link: "#",
    tags: ["Web", "Planning"],
  },
  {
    title: "Saan GPT",
    description:
      "AI chatbot project dengan kemampuan conversation yang advanced",
    image: "res/img/projects/saan-gpt.png",
    link: "#",
    tags: ["AI", "Chatbot"],
  },
  {
    title: "Ihsan AI",
    description: "Artificial Intelligence platform untuk berbagai kebutuhan",
    image: "res/img/projects/ihsan-ai.png",
    link: "#",
    tags: ["AI", "Platform"],
  },
  {
    title: "UMKM Rumah Makan",
    description:
      "Website untuk UMKM rumah makan dengan sistem pemesanan online",
    image: "res/img/projects/rumah-minang.png",
    link: "#",
    tags: ["Web", "UMKM"],
  },
];

const educationData = [
  {
    school: "Politeknik Ganesha Medan",
    degree: "Manajemen Informatika",
    years: "2024 - Sekarang",
    image: "res/img/polgan.png",
    link: "https://polgan.ac.id",
  },
  {
    school: "SMK Negeri 1 Percut Sei Tuan",
    degree: "Elektronika Industri",
    years: "2022 - 2024",
    image: "res/img/smkn1.png",
    link: "#",
  },
  {
    school: "SMP Negeri 3 Percut Sei Tuan",
    degree: "",
    years: "2020 - 2022",
    image: "res/img/smp.png",
    link: "#",
  },
  {
    school: "SD Negeri 104209 Saentis",
    degree: "",
    years: "2014 - 2020",
    image: "res/img/sd.png",
    link: "#",
  },
];

const certificationsData = [
  {
    title: "Introduction MySQL",
    description: "Sololearn",
    year: "28 Mei 2025",
    image:
      "https://api2.sololearn.com/v2/certificates/CC-EBHMMIJH/image/png?t=638839987292660800",
  },
  {
    title: "Intermediate MySQL",
    description: "Sololearn",
    year: "10 Juni 2025",
    image:
      "https://api2.sololearn.com/v2/certificates/CC-QESVGTAL/image/png?t=638851371745931050",
  },
  {
    title: "Introduction C++",
    description: "Sololearn",
    year: "1 Juni 2025",
    image:
      "https://api2.sololearn.com/v2/certificates/CC-CC138JHG/image/png?t=638843461624385220",
  },
  {
    title: "Introduction HTML",
    description: "Sololearn",
    year: "7 Juni 2025",
    image:
      "https://api2.sololearn.com/v2/certificates/CC-PT7QSOVQ/image/png?t=638848904916917360",
  },
];

// Mobile menu toggle
const hamburgerBtn = document.getElementById("hamburger-btn");
const mobileMenu = document.getElementById("mobile-menu");

hamburgerBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Close mobile menu when clicking a link
document.querySelectorAll("#mobile-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
  });
});

// Typing Effect
const typingText = document.querySelector(".typing-text");
const texts = [
  "Web Development",
  "Digital Marketing",
  "Data Science",
  "Analisis Data",
];
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
    typingSpeed = 1500;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % texts.length;
    typingSpeed = 500;
  }

  setTimeout(type, typingSpeed);
}

// Populate Skills
function populateSkills() {
  const container = document.getElementById("skillsContainer");
  skillsData.forEach((skill) => {
    const skillElement = document.createElement("div");
    skillElement.className =
      "flex flex-col items-center p-6 rounded-2xl hover-lift dark-card dark-card-hover";
    skillElement.innerHTML = `
            <i class="${skill.icon} ${skill.color} text-5xl mb-4"></i>
            <span class="font-semibold text-gray-200">${skill.name}</span>
          `;
    container.appendChild(skillElement);
  });
}

// Populate Projects
function populateProjects() {
  const container = document.getElementById("projectsContainer");
  projectsData.forEach((project) => {
    const projectElement = document.createElement("div");
    projectElement.className =
      "rounded-2xl overflow-hidden hover-lift dark-card dark-card-hover";
    projectElement.innerHTML = `
            <div class="h-48 overflow-hidden">
              <img src="${project.image}" alt="${
      project.title
    }" class="w-full h-full object-cover transition-transform duration-500 hover:scale-110">
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2 text-gray-100">${
                project.title
              }</h3>
              <p class="text-gray-300 mb-4">${project.description}</p>
              <div class="flex flex-wrap gap-2 mb-4">
                ${project.tags
                  .map(
                    (tag) =>
                      `<span class="px-3 py-1 bg-purple-900/30 text-purple-300 rounded-full text-sm">${tag}</span>`
                  )
                  .join("")}
              </div>
              <a href="${
                project.link
              }" class="inline-block bg-gradient-to-r from-purple-600 to-violet-600 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-900/30 transition-all duration-300">
                View Project
              </a>
            </div>
          `;
    container.appendChild(projectElement);
  });
}

// Populate Education
function populateEducation() {
  const container = document.getElementById("educationContainer");
  educationData.forEach((edu) => {
    const eduElement = document.createElement("div");
    eduElement.className =
      "p-6 text-center hover-lift dark-card dark-card-hover";
    eduElement.innerHTML = `
            <div class="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden border-4 border-gray-800 shadow-lg">
              <img src="${edu.image}" alt="${edu.school}" class="w-full h-full object-cover">
            </div>
            <h3 class="font-bold text-lg mb-2 text-gray-100">${edu.school}</h3>
            <p class="text-purple-300 font-semibold mb-2">${edu.degree}</p>
            <p class="text-gray-400 text-sm">${edu.years}</p>
          `;
    container.appendChild(eduElement);
  });
}

// Populate Certifications
function populateCertifications() {
  const container = document.getElementById("certificationsContainer");
  certificationsData.forEach((cert) => {
    const certElement = document.createElement("div");
    certElement.className =
      "rounded-2xl overflow-hidden hover-lift dark-card dark-card-hover";
    certElement.innerHTML = `
            <div class="h-48 overflow-hidden">
              <img src="${cert.image}" alt="${cert.title}" class="w-full h-full object-cover">
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2 text-gray-100">${cert.title}</h3>
              <p class="text-gray-300 mb-2">${cert.description}</p>
              <p class="text-purple-300 font-semibold">${cert.year}</p>
            </div>
          `;
    container.appendChild(certElement);
  });
}

// Scroll Animation
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("section-visible");
    }
  });
}, observerOptions);

// Smooth scroll and active nav link
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

      // Update active nav link
      document.querySelectorAll(".nav-link").forEach((link) => {
        link.classList.remove("active", "bg-purple-900/30", "text-purple-300");
      });
      this.classList.add("active", "bg-purple-900/30", "text-purple-300");
    }
  });
});

// Update active nav link on scroll
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (scrollY >= sectionTop - 100) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active", "bg-purple-900/30", "text-purple-300");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active", "bg-purple-900/30", "text-purple-300");
    }
  });
});

// Initialize everything when DOM loads
document.addEventListener("DOMContentLoaded", () => {
  // Start typing effect
  setTimeout(type, 1000);

  // Populate all sections
  populateSkills();
  populateProjects();
  populateEducation();
  populateCertifications();

  // Observe all sections for animation
  document.querySelectorAll(".section-hidden").forEach((section) => {
    observer.observe(section);
  });

  // Add animation to home section
  document.getElementById("home").classList.add("section-visible");
});
