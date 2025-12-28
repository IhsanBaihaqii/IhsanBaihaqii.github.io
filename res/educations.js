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

document.addEventListener("DOMContentLoaded", () => {
  populateEducation();
});
