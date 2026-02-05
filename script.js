// Basic interactivity for phehello-portfolio
document.addEventListener('DOMContentLoaded', () => {
  // Year in footer
  document.getElementById('year').textContent = new Date().getFullYear();

  // Mobile nav toggle
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  hamburger?.addEventListener('click', () => navLinks?.classList.toggle('active'));

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (!href || href === '#') return;
      e.preventDefault();
      navLinks.classList.remove('active');
      const target = document.querySelector(href);
      if (!target) return;
      const offset = target.offsetTop - 80;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    });
  });

  // Reveal on scroll (fade-in elements)
  const fadeElems = document.querySelectorAll('.fade-in');
  const revealOnScroll = () => {
    const wh = window.innerHeight;
    fadeElems.forEach(el => {
      const top = el.getBoundingClientRect().top;
      if (top < wh - 100) el.classList.add('visible');
    });
  };

  // Timeline reveal with stagger
  const timelineItems = document.querySelectorAll('.timeline-item');
  const revealTimeline = () => {
    const wh = window.innerHeight;
    timelineItems.forEach((item, i) => {
      const top = item.getBoundingClientRect().top;
      // Staggered reveal for timeline items
      if (top < wh - 100) setTimeout(() => item.classList.add('visible'), i * 220);
    });
  };

  window.addEventListener('scroll', () => { revealOnScroll(); revealTimeline(); });
  window.addEventListener('load', () => { revealOnScroll(); revealTimeline(); });

  // Projects carousel buttons - UNCOMMENTED AND FIXED
  const carousel = document.getElementById('projectsCarousel');
  const prevBtn = document.getElementById('prevProject');
  const nextBtn = document.getElementById('nextProject');
  const cardWidth = 340; // Approximate card width + gap for smooth scroll

  prevBtn?.addEventListener('click', () => {
    carousel.scrollBy({ left: -cardWidth, behavior: 'smooth' });
  });
  nextBtn?.addEventListener('click', () => {
    carousel.scrollBy({ left: cardWidth, behavior: 'smooth' });
  });

  // Project modal data - UPDATED LINKS AND CONTENT
  const projects = {
    1: {
      title: "GitHub UserActivity",
      image: "assets/project-images/github-useractivity.png",
      tags: ["Python", "PostgreSQL", "FastAPI", "Docker", "CI/CD"],
      description: "This is a robust, containerized backend API built with FastAPI that tracks GitHub users and their activity. It uses SQLAlchemy to persist data in a PostgreSQL database, exposed via secure REST endpoints. Demonstrates clean architecture and API design principles.",
      technologies: "Python · FastAPI · PostgreSQL · SQLAlchemy · Docker",
      challenges: "Handling GitHub API rate limits and efficient data pagination; solved by implementing a focused caching layer and background job processing.",
      link: "https://github.com/pirlo47/Github-UserActivity", // Aligned with index.html
      live: "" // No live link provided, keeping empty
    },
    2: {
      title: "Trio Code",
      image: "assets/project-images/trio-code.png",
      tags: ["HTML", "CSS", "JavaScript", "Front-end"],
      description: "TrioCode is a lightweight, browser-based code editor and instant playground for HTML, CSS, and JavaScript. Designed for web development learners and quick prototyping, it compiles and displays output in real-time within the browser environment.",
      technologies: "HTML · CSS · Vanilla JavaScript · Browser APIs",
      challenges: "Securely rendering untrusted user code (sandboxing) and ensuring instant compilation feedback; solved using iframes and efficient event listeners.",
      link: "https://github.com/pirlo47/TrioCode", // Aligned with index.html
      live: ""
    },
    3: {
      title: "MoreMove",
      image: "assets/project-images/more_move.png",
      tags: ["Python", "Django", "Full-Stack", "Transport"],
      description: "MORE MOVE is a full-stack platform focused on unifying the African transport industry. Built with Python/Django, the platform aims to digitize and simplify public transport logistics for both merchants and users, turning a 'hustle into a lifestyle'.",
      technologies: "Python · Django · HTML · CSS · JavaScript · PowerShell (deployment scripts)",
      challenges: "Creating a scalable database schema to handle diverse African transport data and managing the complexity of merchant/user workflows.",
      link: "https://github.com/pirlo47/MoreMove---WarmHands", // Aligned with index.html
      live: ""
    }, 

    4: {
      title: "BrainDump",
      image: "assets/project-images/BrainDump_Image.png", 
      tags: ["JavaScript", , "MongoDB", "Express", "Node.js", "React"], 
      description: "A fully functional, responsive, and beginner-friendly full-stack note-taking application built using the MERN stack (MongoDB, Express, React, Node.js). This project covers everything from API development and database integration to frontend implementation and production deployment.",
      technologies: "JavaScript · MongoDB · Express · React · Node.js", 
      challenges: "Mastered the complexity of state synchronization and asynchronous data flow, ensuring your React frontend seamlessly reflects real-time changes from MongoDB/Express backend", 
      link: "https://github.com/pirlo47/BrainDump_app", 
      live: ""
    }
  };

  // Modal handling
  const projectCards = document.querySelectorAll('.project-card');
  const modal = document.getElementById('projectModal');
  const closeModal = document.querySelector('.close-modal');
  const modalTitle = document.getElementById('modalTitle');
  const modalImage = document.getElementById('modalImage');
  const modalTags = document.getElementById('modalTags');
  const modalDescription = document.getElementById('modalDescription');
  const modalTechnologies = document.getElementById('modalTechnologies');
  const modalChallenges = document.getElementById('modalChallenges');
  const modalLink = document.getElementById('modalLink');
  const modalLive = document.getElementById('modalLive');

  projectCards.forEach(card => {
    card.addEventListener('click', () => {
      const id = card.getAttribute('data-project');
      const p = projects[id];
      if (!p) return;

      modalTitle.textContent = p.title;
      // Note: Changed image path in JS to match index.html path for consistency
modalImage.src = p.image.includes('github-useractivity.png') 
  ? 'assets/project-images/github-useractivity.png' 
  : p.image.includes('trio-code.png') 
  ? 'assets/project-images/trio-code.png' 
  : p.image.includes('more_move.png') 
  ? 'assets/project-images/more_move.png' 
  : 'assets/project-images/BrainDump_Image.png'; // This is the final fallback      
      modalDescription.innerHTML = `<h3>Description</h3><p>${p.description}</p>`;
      modalTechnologies.innerHTML = `<h3>Technologies Used</h3><p>${p.technologies}</p>`;
      modalChallenges.innerHTML = `<h3>Challenges & Solutions</h3><p>${p.challenges}</p>`;

      // tags
      modalTags.innerHTML = '';
      p.tags.forEach(t => {
        const el = document.createElement('span');
        el.className = 'modal-tag';
        el.textContent = t;
        modalTags.appendChild(el);
      });

      // links
      modalLink.href = p.link || '#';
      modalLink.onclick = (e) => {
        if (!p.link) { e.preventDefault(); return; }
        // Let anchor tag handle opening, no custom JS redirect needed here.
      };

      if (p.live) {
        modalLive.style.display = 'inline-block';
        modalLive.href = p.live;
      } else {
        modalLive.style.display = 'none';
      }

      modal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    });
  });

  // close modal
  closeModal?.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  });
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });

  // Download CV button (in case you want to track or alter)
  const downloadCV = document.getElementById('downloadCV');
  downloadCV?.addEventListener('click', (e) => {
    // fallback behavior: let browser handle download
    console.log('CV download started');
  });

});