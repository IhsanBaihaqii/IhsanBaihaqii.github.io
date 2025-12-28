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

document.addEventListener("DOMContentLoaded", () => {
  populateSkills();
});
