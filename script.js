{\rtf1\ansi\ansicpg1252\cocoartf2818
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 let currentProjectIndex = 0;\
const projects = document.querySelectorAll('.project');\
const totalProjects = projects.length;\
\
// Afficher un projet sp\'e9cifique\
function showProject(index) \{\
  projects.forEach((project, i) => \{\
    project.style.display = i === index ? 'flex' : 'none';\
  \});\
\}\
\
// Passer au projet suivant ou pr\'e9c\'e9dent\
function navigateCarousel(direction) \{\
  currentProjectIndex = (currentProjectIndex + direction + totalProjects) % totalProjects;\
  showProject(currentProjectIndex);\
\}\
\
// \'c9couter les clics sur le carrousel\
document.querySelector('.carousel-container').addEventListener('click', () => \{\
  navigateCarousel(1); // Passe au projet suivant au clic\
\});\
\
// Afficher le premier projet au d\'e9marrage\
showProject(currentProjectIndex);\
}