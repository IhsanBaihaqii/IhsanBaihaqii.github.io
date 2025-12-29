const projectsData = [
  {
    title: "itshanApp",
    description: "Asistant AI yang mampu membantu anda (Demo)",
    image:
      "https://raw.githubusercontent.com/IhsanBaihaqii/itshanApp/refs/heads/main/image.png",
    link: "itshanApp",
    tags: ["HTML", "CSS", "JavaScript", "AI"],
  },
  {
    title: "Jam Analog",
    description: "Jam Analog Dengan Foto Beliau Yang Sedang Menunjuk",
    image: "res/img/projects/Jam-Analog.png",
    link: "Jam-Analog",
    tags: ["HTML", "CSS", "JavaScript", "Jam Analog"],
  },
  {
    title: "Kopi Kenangan Senja",
    description: "Website Kopi Kenangan Senja",
    image:
      "https://raw.githubusercontent.com/IhsanBaihaqii/Kenangan-Senja/refs/heads/main/screenshoot/hasil/Screenshot%202025-06-24%20104133.png",
    link: "Kenangan-Senja",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "alpine JS",
      "Bootstrap",
      "Kopi Kenangan Senja",
    ],
  },
];

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
              <p class="text-gray-300 mb-4 text-sm">${project.description}</p>
              <div class="flex flex-wrap gap-2 mb-4">
                ${project.tags
                  .map(
                    (tag) =>
                      `<span class="px-3 py-1 bg-purple-900/30 text-purple-300 rounded-full text-sm">${tag}</span>`
                  )
                  .join("")}
              </div>
              <div class="flex gap-4">
                <a href="https://github.com/ihsanbaihaqii/${project.link}"
                target="_blank"
                class="inline-block bg-transparent border border-gray-600 hover:border-white text-gray-400 hover:text-white px-6 py-2 rounded-2xl font-semibold text-sm hover:shadow-lg transition-all duration-300">
                    View Code
                </a>
                <a href="http://ihsanbaihaqii.github.io/${project.link}"
                target="_blank"
                class="inline-block bg-transparent border border-purple-800 hover:border-purple-500 text-gray-400 hover:text-white px-6 py-2 rounded-2xl font-semibold text-sm hover:shadow-lg hover:shadow-purple-900/30 transition-all duration-300">
                    View Project
                </a>
               </div>
            </div>
          `;
    container.appendChild(projectElement);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  populateProjects();
});
