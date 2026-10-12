// All page content lives here so the components stay presentational.

export const person = {
  name: 'Phehello Ntoahae',
  role: 'Software Engineer',
  location: 'Johannesburg, South Africa',
  timeZone: 'Africa/Johannesburg',
  email: 'ntoahaep108@gmail.com',
  github: 'https://github.com/pirlo47',
  linkedin: 'https://www.linkedin.com/in/phehello-ntoahae',
  photo: '/assets/phehello.jpg',
  resume: { href: '/assets/Phehello_Ntoahae_General_Resume.pdf', size: 'PDF 57kb' },
  cv: { href: '/assets/PHEHELLO_Professional_Resume(v2).pdf', size: 'PDF 50kb' },
};

export const hero = {
  status: 'Open to Cloud & DevOps roles · freelance welcome',
  headline: 'Resilient systems, built for the cloud and made to last.',
  lead: 'I’m a software engineer building APIs, web apps and the pipelines that ship them, from Johannesburg.',
};

// "Currently levelling up" carousel (sits where testimonials would be)
export const levellingUp = [
  {
    title: 'CI/CD pipelines',
    text: 'Every push should be tested, built and shipped without anyone touching a server. I’m automating that path end to end with GitHub Actions.',
    meta: 'GitHub Actions · automated tests · deploy previews',
  },
  {
    title: 'Docker & containers',
    text: 'If it runs on my machine, it should run everywhere. I package services into small, reproducible containers, from local dev to production.',
    meta: 'Dockerfiles · Compose · image hygiene',
  },
  {
    title: 'Infrastructure as code',
    text: 'Clicking around a console doesn’t scale. I’m learning to describe infrastructure in version-controlled code that can be reviewed and rebuilt on demand.',
    meta: 'Declarative infra · repeatable environments',
  },
  {
    title: 'AWS cloud development',
    text: 'Building on the AWS Cloud Practitioner foundation: deploying, automating and securing real workloads through the AWS Educate Cloud Developer track.',
    meta: 'AWS Educate · Cloud Developer track',
  },
];

// slug = simple-icons export name; text-only entries have no slug
export const stackWeb = [
  { name: 'Python', slug: 'siPython' },
  { name: 'FastAPI', slug: 'siFastapi' },
  { name: 'Django', slug: 'siDjango' },
  { name: 'Node.js', slug: 'siNodedotjs' },
  { name: 'Express', slug: 'siExpress' },
  { name: 'React', slug: 'siReact' },
  { name: 'JavaScript', slug: 'siJavascript' },
  { name: 'Java', slug: 'siOpenjdk' },
  { name: 'PostgreSQL', slug: 'siPostgresql' },
  { name: 'MongoDB', slug: 'siMongodb' },
  { name: 'Redis', slug: 'siRedis' },
  { name: 'HTML', slug: 'siHtml5' },
  { name: 'CSS', slug: 'siCss' },
];

export const stackCloud = [
  { name: 'AWS' },
  { name: 'Docker', slug: 'siDocker' },
  { name: 'GitHub Actions', slug: 'siGithubactions' },
  { name: 'Git', slug: 'siGit' },
];

// Wordmark strip under the overview grid
export const organisations = [
  'Safety IO',
  'WeThinkCode_',
  'AWS Educate',
  'Google',
  'Tshwane University of Technology',
  'Microsoft',
  'LinkedIn Learning',
  'O’Reilly',
  'IT Varsity',
];

export const statement = {
  label: 'Approach',
  paragraphs: [
    'I build software that keeps working when things go wrong: clean APIs, sensible data models and deployments that are automated rather than remembered.',
    'Whether it’s a backend service, a full-stack web app or the pipeline that ships it, I focus on reliability, security and code the next person can pick up.',
  ],
};

export const projectsIntro =
  'A selection of things I’ve designed and built, from containerised APIs to full-stack apps. Each one taught me something new about building for the real world.';

export const projects = [
  {
    name: 'GitHub UserActivity',
    text: 'A containerised API that tracks GitHub users and their recent activity. Built using Python, FastAPI, PostgreSQL, SQLAlchemy and Docker.',
    image: '/assets/project-images/github-useractivity.png',
    href: 'https://github.com/pirlo47/Github-UserActivity',
  },
  {
    name: 'TrioCode',
    text: 'A browser-based HTML, CSS and JavaScript playground that runs untrusted code safely in sandboxed iframes. No install required.',
    image: '/assets/project-images/trio-code.png',
    href: 'https://github.com/pirlo47/TrioCode',
  },
  {
    name: 'MoreMove',
    text: 'A full-stack platform working towards unity in African public transport, for merchants and commuters alike. Built using Python and Django.',
    image: '/assets/project-images/more_move.png',
    href: 'https://github.com/pirlo47/MoreMove---WarmHands',
  },
  {
    name: 'BrainDump',
    text: 'A responsive note-taking app, from API design to production deployment. Built using React, Node.js, Express, MongoDB and Redis.',
    image: '/assets/project-images/BrainDump_Image.png',
    href: 'https://github.com/pirlo47/BrainDump_app',
  },
];

export const certCategories = {
  cloud: 'Cloud & Security',
  node: 'Node.js & Backend',
  ux: 'UX & Design',
  dev: 'Dev & AI',
} as const;

export const certs: { title: string; issuer: string; cat: keyof typeof certCategories }[] = [
  { title: 'AWS Certified Cloud Practitioner', issuer: 'Amazon Web Services', cat: 'cloud' },
  { title: 'Google Cybersecurity Specialization', issuer: 'Google', cat: 'cloud' },
  { title: 'AWS Educate: Cloud Computing Badges', issuer: 'AWS Educate', cat: 'cloud' },
  { title: 'Network Basics', issuer: 'O’Reilly', cat: 'cloud' },
  { title: 'Node.js Essential Training', issuer: 'LinkedIn Learning', cat: 'node' },
  { title: 'Learning npm: A Package Manager', issuer: 'LinkedIn Learning', cat: 'node' },
  { title: 'Express Essentials: Build Powerful Web Apps with Node.js', issuer: 'LinkedIn Learning', cat: 'node' },
  { title: 'Building RESTful APIs with Node.js and Express', issuer: 'LinkedIn Learning', cat: 'node' },
  { title: 'Node.js: Securing RESTful APIs', issuer: 'LinkedIn Learning', cat: 'node' },
  { title: 'Databases for Node.js Developers', issuer: 'LinkedIn Learning', cat: 'node' },
  { title: 'Node.js: Web Servers, Tests, and Deployment', issuer: 'LinkedIn Learning', cat: 'node' },
  { title: 'Node.js: Testing and Code Quality', issuer: 'LinkedIn Learning', cat: 'node' },
  { title: 'Getting Started in User Experience', issuer: 'LinkedIn Learning', cat: 'ux' },
  { title: 'UX Foundations: Research', issuer: 'LinkedIn Learning', cat: 'ux' },
  { title: 'UX Foundations: Usability Testing', issuer: 'LinkedIn Learning', cat: 'ux' },
  { title: 'User Experience for Web Design', issuer: 'LinkedIn Learning', cat: 'ux' },
  { title: 'Design Thinking: Understanding the Process', issuer: 'LinkedIn Learning', cat: 'ux' },
  { title: 'Design Thinking: Implementing the Process', issuer: 'LinkedIn Learning', cat: 'ux' },
  { title: 'Design Patterns in TypeScript', issuer: 'O’Reilly', cat: 'dev' },
  { title: 'Use Git Like A Pro', issuer: 'O’Reilly', cat: 'dev' },
  { title: 'Full Stack Development Certificate', issuer: 'IT Varsity', cat: 'dev' },
  { title: 'Gen AI Course Certificate', issuer: 'WeThinkCode_', cat: 'dev' },
  { title: 'AI Fluency Course Certificate', issuer: 'Microsoft', cat: 'dev' },
];

export const journey = [
  { when: 'Mar 2026 — Present', title: 'Software Developer Intern', where: 'Safety IO', text: 'Applying cloud and web engineering skills in a professional team.' },
  { when: 'Sep 2025 — Present', title: 'Technical Mentor', where: 'WeThinkCode_', text: 'Mentoring first-year students in debugging, best practices and project workflow.' },
  { when: '2025', title: 'Cloud Developer track', where: 'AWS Educate', text: 'Training in deploying and automating cloud resources.' },
  { when: 'Sep 2024 — Dec 2025', title: 'Software Engineering', where: 'WeThinkCode_ · Occupational Certificate', text: 'Hands-on projects in web and cloud development.' },
  { when: 'Oct 2024 — Nov 2025', title: 'Event Coordinator (Volunteer)', where: 'WeThinkCode_', text: 'Organised student well-being initiatives and built a supportive campus environment.' },
  { when: 'Feb 2020 — Dec 2023', title: 'Diploma in Information Technology', where: 'Tshwane University of Technology', text: 'Computer networking, virtualisation and information systems.' },
];
