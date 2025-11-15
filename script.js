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
      if (top < wh - 100) setTimeout(() => item.classList.add('visible'), i * 220);
    });
  };

  window.addEventListener('scroll', () => { revealOnScroll(); revealTimeline(); });
  window.addEventListener('load', () => { revealOnScroll(); revealTimeline(); });

  // Projects carousel buttons
  const carousel = document.getElementById('projectsCarousel');
  const prevBtn = document.getElementById('prevProject');
  const nextBtn = document.getElementById('nextProject');
  const cardWidth = 340; // approximate card width + gap

  prevBtn?.addEventListener('click', () => {
    carousel.scrollBy({ left: -cardWidth, behavior: 'smooth' });
  });
  nextBtn?.addEventListener('click', () => {
    carousel.scrollBy({ left: cardWidth, behavior: 'smooth' });
  });

  // Project modal data
  const projects = {
    1: {
      title: "GitHub UserActivity",
      image: "assets/project-images/useractivity.png",
      tags: ["Python", "JavaScript", "APIs"],
      description: "Dashboard that visualizes a user's GitHub activity, contribution patterns and repository statistics. Useful for quick developer analytics and profiling.",
      technologies: "Python · Flask/Django · JS · Charting",
      challenges: "Diverse API rates and pagination; solved with caching and paginated fetching.",
      link: "https://github.com/pirlo47/UserActivity", // <-- UPDATED
      live: ""
    },
    2: {
      title: "Trio Code",
      image: "assets/project-images/trio-code.png",
      tags: ["Django", "WebSockets", "Realtime"],
      description: "Collaborative coding environment designed for pair and group exercises. Focused on feedback, simplicity and fast onboarding for workshop attendees.",
      technologies: "Django · Channels · Docker",
      challenges: "Realtime sync and conflict resolution; solved with structured patches.",
      link: "https://github.com/pirlo47/trio-code", // <-- UPDATED
      live: ""
    },
    3: {
      title: "MoreMove",
      image: "assets/project-images/moremove.png",
      tags: ["Java", "Algorithms", "Cloud"],
      description: "A routing and load optimization tool targeting small fleet logistics. Demonstrates algorithmic optimization combined with cloud-hosted map services.",
      technologies: "Java · Spring Boot · AWS",
      challenges: "Combining heuristics with practical constraints; solved with hybrid algorithms.",
      link: "https://github.com/pirlo47/moremove", // <-- UPDATED
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
      modalImage.src = p.image;
      modalDescription.innerHTML = `<h3>Description</h3><p>${p.description}</p>`;
      modalTechnologies.innerHTML = `<h3>Technologies</h3><p>${p.technologies}</p>`;
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
        window.open(p.link, '_blank');
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