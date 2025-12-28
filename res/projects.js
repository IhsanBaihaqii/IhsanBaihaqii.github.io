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

document.addEventListener("DOMContentLoaded", () => {
  populateProjects();
});
