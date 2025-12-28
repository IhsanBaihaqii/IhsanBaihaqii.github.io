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

document.addEventListener("DOMContentLoaded", () => {
  populateCertifications();
});
