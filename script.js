// Phehello Ntoahae — portfolio
document.documentElement.classList.add('js');
document.addEventListener('DOMContentLoaded', () => {
  const $ = (id) => document.getElementById(id);
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  $('year').textContent = new Date().getFullYear();

  // mobile menu
  const burger = document.querySelector('.burger'), menu = $('menu');
  const setMenu = (o) => { menu.classList.toggle('open', o); burger.setAttribute('aria-expanded', o); burger.innerHTML = `<i class="fas fa-${o ? 'xmark' : 'bars'}"></i>`; };
  burger.addEventListener('click', () => setMenu(!menu.classList.contains('open')));
  menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setMenu(false)));
  addEventListener('keydown', (e) => e.key === 'Escape' && setMenu(false));

  // cursor spotlight
  if (!reduce) addEventListener('pointermove', (e) => {
    document.documentElement.style.setProperty('--mx', e.clientX + 'px');
    document.documentElement.style.setProperty('--my', e.clientY + 'px');
  }, { passive: true });

  // typing roles
  const roles = ['Cloud-Focused Software Engineer', 'Backend & API Developer', 'DevOps in Training', 'Technical Mentor'];
  const t = $('typed'); let r = 0, c = 0, del = false;
  (function tick() {
    if (reduce) { t.textContent = roles[0]; return; }
    const w = roles[r];
    t.textContent = w.slice(0, c += del ? -1 : 1);
    let d = del ? 28 : 65;
    if (!del && c === w.length) { del = true; d = 1700; }
    else if (del && c === 0) { del = false; r = (r + 1) % roles.length; d = 350; }
    setTimeout(tick, d);
  })();

  // reveal + count-up
  const io = new IntersectionObserver((es) => es.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  }), { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
  document.querySelectorAll('[data-n]').forEach((el) => {
    const n = +el.dataset.n; if (reduce) { el.textContent = n; return; }
    let v = 0; const s = setInterval(() => { el.textContent = ++v; if (v >= n) clearInterval(s); }, 1000 / n + 25);
  });

  // active nav
  const links = [...menu.querySelectorAll('a')];
  const spy = new IntersectionObserver((es) => es.forEach((e) => {
    if (e.isIntersecting) links.forEach((l) => l.classList.toggle('on', l.getAttribute('href') === '#' + e.target.id));
  }), { rootMargin: '-40% 0px -55% 0px' });
  document.querySelectorAll('main section[id]').forEach((s) => spy.observe(s));

  // certifications: [title, issuer, category, icon, featured]
  const certs = [
    ['AWS Certified Cloud Practitioner', 'Amazon Web Services', 'cloud', 'fa-brands fa-aws', 1],
    ['Google Cybersecurity Specialization', 'Google', 'cloud', 'fa-brands fa-google', 1],
    ['AWS Educate: Cloud Computing Badges', 'AWS Educate', 'cloud', 'fa-brands fa-aws'],
    ['Network Basics', "O'Reilly", 'cloud', 'fa-solid fa-network-wired'],
    ['Node.js Essential Training', 'LinkedIn Learning', 'node', 'fa-brands fa-node-js'],
    ['Learning npm: A Package Manager', 'LinkedIn Learning', 'node', 'fa-brands fa-npm'],
    ['Express Essentials: Build Powerful Web Apps with Node.js', 'LinkedIn Learning', 'node', 'fa-solid fa-bolt'],
    ['Building RESTful APIs with Node.js and Express', 'LinkedIn Learning', 'node', 'fa-solid fa-plug'],
    ['Node.js: Securing RESTful APIs', 'LinkedIn Learning', 'node', 'fa-solid fa-lock'],
    ['Databases for Node.js Developers', 'LinkedIn Learning', 'node', 'fa-solid fa-database'],
    ['Node.js: Web Servers, Tests, and Deployment', 'LinkedIn Learning', 'node', 'fa-solid fa-server'],
    ['Node.js: Testing and Code Quality', 'LinkedIn Learning', 'node', 'fa-solid fa-vial-circle-check'],
    ['Getting Started in User Experience', 'LinkedIn Learning', 'ux', 'fa-solid fa-compass-drafting'],
    ['UX Foundations: Research', 'LinkedIn Learning', 'ux', 'fa-solid fa-magnifying-glass-chart'],
    ['UX Foundations: Usability Testing', 'LinkedIn Learning', 'ux', 'fa-solid fa-users-viewfinder'],
    ['User Experience for Web Design', 'LinkedIn Learning', 'ux', 'fa-solid fa-pen-ruler'],
    ['Design Thinking: Understanding the Process', 'LinkedIn Learning', 'ux', 'fa-solid fa-lightbulb'],
    ['Design Thinking: Implementing the Process', 'LinkedIn Learning', 'ux', 'fa-solid fa-diagram-project'],
    ['Design Patterns in TypeScript', "O'Reilly", 'dev', 'fa-solid fa-shapes'],
    ['Use Git Like A Pro', "O'Reilly", 'dev', 'fa-brands fa-git-alt'],
    ['Full Stack Development Certificate', 'IT Varsity', 'dev', 'fa-solid fa-layer-group'],
    ['Gen AI Course Certificate', 'WeThinkCode_', 'dev', 'fa-solid fa-robot'],
    ['AI Fluency Course Certificate', 'Microsoft', 'dev', 'fa-brands fa-microsoft'],
  ];
  const cats = { all: 'All', cloud: 'Cloud & Security', node: 'Node.js & Backend', ux: 'UX & Design', dev: 'Dev & AI' };
  const wall = $('wall'), fl = $('filters');
  const draw = (k) => {
    wall.innerHTML = certs.filter((x) => k === 'all' || x[2] === k).map((x, i) =>
      `<article class="cert${x[4] ? ' star' : ''}" style="animation-delay:${i * 25}ms"><i class="${x[3]}" aria-hidden="true"></i><div><h4>${x[0]}</h4><p>${x[1]}</p></div></article>`).join('');
  };
  fl.innerHTML = Object.entries(cats).map(([k, l]) =>
    `<button data-k="${k}" class="${k === 'all' ? 'on' : ''}" aria-pressed="${k === 'all'}">${l}<span>${k === 'all' ? certs.length : certs.filter((x) => x[2] === k).length}</span></button>`).join('');
  fl.addEventListener('click', (e) => {
    const b = e.target.closest('button'); if (!b) return;
    fl.querySelectorAll('button').forEach((x) => { x.classList.toggle('on', x === b); x.setAttribute('aria-pressed', x === b); });
    draw(b.dataset.k);
  });
  draw('all');
});