// Initialisation du carrousel
let currentProjectIndex = 0;
const projects = document.querySelectorAll('.project');
const totalProjects = projects.length;

// Afficher un projet spécifique
function showProject(index) {
  projects.forEach((project, i) => {
    project.style.display = i === index ? 'flex' : 'none';
  });
}

// Passer au projet suivant
function navigateCarousel(direction) {
  currentProjectIndex = (currentProjectIndex + direction + totalProjects) % totalProjects;
  showProject(currentProjectIndex);
}

// Afficher le premier projet au démarrage
showProject(currentProjectIndex);

// Navigation au clic
document.querySelector('.carousel-container').addEventListener('click', () => {
  navigateCarousel(1); // Passe au projet suivant
});
