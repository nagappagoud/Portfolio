// Data Source (Strictly verified against resume)
const PROJECTS = [
  {
    id: 'nexo',
    title: 'NEXO – Smart Attendance System',
    category: 'Full-Stack Web & AI Verification',
    shortDesc: 'A smart attendance management application engineered to streamline classroom attendance tracking with authentication and face verification.',
    problem: 'Manual classroom attendance processes are time-consuming and prone to proxy entries or administrative errors.',
    implementation: 'Built a responsive frontend web interface integrated with Supabase for authentication and database management, deployed on Vercel.',
    functionality: [
      'Secure user authentication & role-based workflows',
      'Face verification workflow for attendance validation',
      'Structured attendance tracking dashboard'
    ],
    tech: ['Frontend Web Development', 'Supabase', 'Vercel'],
    githubUrl: 'https://github.com/nagappagoud',
    githubLabel: 'GitHub Profile (Add Repo URL)',
    liveUrl: '',
    accent: 'from-cyan-500/20 via-blue-600/20 to-slate-900',
    icon: 'scan-face'
  },
  {
    id: 'rupee-sentinel',
    title: 'Rupee Sentinel',
    category: 'FinTech & Predictive Insights',
    shortDesc: 'A personal financial analysis web application built during the 24-hour BMSCE Built Beyond 26 hackathon.',
    problem: 'Individuals struggle to turn raw bank statements into actionable spending categories and short-term cash-flow projections.',
    implementation: 'Developed the web interface and connected Supabase storage with AI-assisted parsing workflows during BMSCE Built Beyond 26.',
    functionality: [
      'Automated bank statement transaction analysis',
      'Categorized expense breakdown & financial insights',
      'Predictive spending trend visualization'
    ],
    tech: ['Web Technologies', 'Supabase', 'AI-Assisted Development'],
    githubUrl: 'https://github.com/nagappagoud',
    githubLabel: 'GitHub Profile (Add Repo URL)',
    liveUrl: '',
    accent: 'from-blue-600/25 via-indigo-600/20 to-slate-900',
    icon: 'wallet'
  },
  {
    id: 'battery-red-flag',
    title: 'Battery Red Flag',
    category: 'Diagnostics Prototype',
    shortDesc: 'A battery health and diagnostics prototype built during a hackathon to surface early battery risk indicators.',
    problem: 'Users often miss early warning signs of battery degradation until sudden performance drops or safety risks occur.',
    implementation: 'Prototyped a diagnostic web frontend using AI-assisted rapid prototyping workflows to visualize cell health metrics.',
    functionality: [
      'Clear battery health & status indicators',
      'Potential battery risk factor identification',
      'Clean diagnostic inspection interface'
    ],
    tech: ['Web Frontend', 'AI-Assisted Prototyping', 'UI/UX Design'],
    githubUrl: 'https://github.com/nagappagoud',
    githubLabel: 'GitHub Profile (Add Repo URL)',
    liveUrl: '',
    accent: 'from-emerald-500/20 via-cyan-600/20 to-slate-900',
    icon: 'battery-warning'
  },
  {
    id: 'naptrack',
    title: 'NapTrack',
    category: 'Student Productivity & UI/UX',
    shortDesc: 'A student time-management and productivity prototype designed around clean daily time blocking and schedule tracking.',
    problem: 'Students balancing lectures, coding practice, and hackathons need a distraction-free planner tailored to daily study blocks.',
    implementation: 'Designed the user experience and built a functional frontend prototype using HTML and Lovable AI.',
    functionality: [
      'Structured daily time-blocking planner',
      'Task & schedule progress tracking',
      'Minimalist student-focused UI/UX'
    ],
    tech: ['UI/UX Design', 'HTML', 'Lovable AI'],
    githubUrl: 'https://github.com/nagappagoud',
    githubLabel: 'GitHub Profile (Add Repo URL)',
    liveUrl: '',
    accent: 'from-sky-500/20 via-blue-700/20 to-slate-900',
    icon: 'clock'
  }
];

const CERTIFICATIONS = [
  { title: 'Prompt Engineering Specialization', issuer: 'Vanderbilt University', category: 'ai', date: 'Jan 2026' },
  { title: 'Prompt Engineering for ChatGPT', issuer: 'Vanderbilt University', category: 'ai', date: 'Dec 2025' },
  { title: 'ChatGPT Advanced Data Analysis', issuer: 'Vanderbilt University', category: 'ai', date: 'Jan 2026' },
  { title: 'Trustworthy Generative AI', issuer: 'Vanderbilt University', category: 'ai', date: 'Jan 2026' },
  { title: 'AI for Everyone', issuer: 'DeepLearning.AI', category: 'ai', date: 'Mar 2026' },
  { title: 'Introduction to AI', issuer: 'Google', category: 'ai', date: 'Feb 2026' },
  { title: 'AI Tools Workshop', issuer: 'Be10x', category: 'ai', date: 'Mar 2026' },
  { title: 'Programming in C#', issuer: 'University of Michigan', category: 'programming', date: 'Jun 2026' },
  { title: 'Concepts in Python: Loops, Functions and Returns', issuer: 'Coursera', category: 'programming', date: 'Jan 2026' },
  { title: 'Python for Beginners: Data Structures', issuer: 'Coursera', category: 'programming', date: 'Jan 2026' },
  { title: 'Introduction to Unix', issuer: 'Infosys', category: 'systems', date: 'Oct 2026' }
];

// Render Featured Projects
function renderProjects() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  grid.innerHTML = PROJECTS.map((p) => `
    <article class="project-card glass-card rounded-2xl border border-white/10 overflow-hidden flex flex-col justify-between reveal-on-scroll" data-tilt>
      <div>
        <!-- Visual Thumbnail Header -->
        <div class="relative h-48 bg-gradient-to-br ${p.accent} p-6 flex flex-col justify-between border-b border-white/10 overflow-hidden group">
          <div class="flex items-center justify-between">
            <span class="px-3 py-1 rounded-full text-[11px] font-semibold bg-bgPrimary/70 text-accentCyan border border-accentCyan/25 backdrop-blur-md">
              ${p.category}
            </span>
            <div class="w-10 h-10 rounded-xl bg-bgPrimary/70 border border-white/10 flex items-center justify-center text-accentCyan group-hover:scale-110 transition-transform">
              <i data-lucide="${p.icon}" class="w-5 h-5"></i>
            </div>
          </div>
          <div>
            <h3 class="font-heading text-2xl font-bold text-textPrimary group-hover:text-accentCyan transition-colors">${p.title}</h3>
          </div>
        </div>

        <!-- Card Body -->
        <div class="p-6 space-y-4">
          <p class="text-sm text-textSecondary leading-relaxed">${p.shortDesc}</p>
          <div class="flex flex-wrap gap-2">
            ${p.tech.map((t) => `<span class="px-2.5 py-1 rounded-md text-xs font-medium bg-white/5 text-textPrimary border border-white/10">${t}</span>`).join('')}
          </div>
        </div>
      </div>

      <!-- Card Actions -->
      <div class="px-6 pb-6 pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-white/5">
        <button onclick="openProjectModal('${p.id}')" class="inline-flex items-center gap-1.5 text-xs font-semibold text-accentCyan hover:underline">
          <span>Inspect Architecture</span>
          <i data-lucide="arrow-up-right" class="w-3.5 h-3.5"></i>
        </button>

        <div class="flex items-center gap-2">
          <a href="${p.githubUrl}" target="_blank" rel="noopener noreferrer" title="${p.githubLabel}" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-white/5 hover:bg-white/10 text-textPrimary border border-white/10 transition-colors">
            <i data-lucide="github" class="w-3.5 h-3.5 text-accentCyan"></i>
            <span>GitHub</span>
          </a>
          <button onclick="openProjectModal('${p.id}')" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-accentCyan/10 hover:bg-accentCyan/20 text-accentCyan border border-accentCyan/30 transition-colors">
            <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
            <span>Demo Info</span>
          </button>
        </div>
      </div>
    </article>
  `).join('');
}

// Render Certifications with Filtering
function renderCertifications(filter = 'all') {
  const grid = document.getElementById('cert-grid');
  if (!grid) return;

  const filtered = filter === 'all'
    ? CERTIFICATIONS
    : CERTIFICATIONS.filter((c) => c.category === filter);

  const badgeLabels = {
    ai: 'AI & GenAI',
    programming: 'Programming',
    systems: 'Cloud & Systems'
  };

  grid.innerHTML = filtered.map((c) => `
    <div class="glass-card rounded-2xl p-5 border border-white/10 hover:border-accentCyan/40 transition-all flex flex-col justify-between gap-4">
      <div>
        <div class="flex items-center justify-between gap-2 mb-3">
          <span class="px-2.5 py-0.5 rounded-md text-[11px] font-semibold bg-accentCyan/10 text-accentCyan border border-accentCyan/25">
            ${badgeLabels[c.category]}
          </span>
          <span class="text-[11px] text-textSecondary">${c.date}</span>
        </div>
        <h3 class="font-heading text-base font-semibold text-textPrimary leading-snug">${c.title}</h3>
      </div>
      <div class="flex items-center justify-between pt-3 border-t border-white/5 text-xs text-textSecondary">
        <span class="flex items-center gap-1.5">
          <i data-lucide="award" class="w-3.5 h-3.5 text-accentCyan"></i>
          ${c.issuer}
        </span>
        <span class="text-[11px] text-textSecondary/70">Verified</span>
      </div>
    </div>
  `).join('');

  if (window.lucide) window.lucide.createIcons();
}

// Project Modal Controls
function openProjectModal(projectId) {
  const project = PROJECTS.find((p) => p.id === projectId);
  const modal = document.getElementById('project-modal');
  const body = document.getElementById('modal-body');
  if (!project || !modal || !body) return;

  body.innerHTML = `
    <span class="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-accentCyan/15 text-accentCyan border border-accentCyan/30 mb-3">
      ${project.category}
    </span>
    <h3 class="font-heading text-2xl sm:text-3xl font-bold text-textPrimary mb-2">${project.title}</h3>
    <p class="text-sm text-textSecondary mb-6">${project.shortDesc}</p>

    <div class="space-y-4 text-sm">
      <div class="p-4 rounded-xl bg-bgPrimary/80 border border-white/10">
        <h4 class="font-heading font-semibold text-accentCyan text-xs uppercase tracking-wider mb-1">Problem Statement</h4>
        <p class="text-textSecondary">${project.problem}</p>
      </div>

      <div class="p-4 rounded-xl bg-bgPrimary/80 border border-white/10">
        <h4 class="font-heading font-semibold text-accentCyan text-xs uppercase tracking-wider mb-1">Implementation</h4>
        <p class="text-textSecondary">${project.implementation}</p>
      </div>

      <div class="p-4 rounded-xl bg-bgPrimary/80 border border-white/10">
        <h4 class="font-heading font-semibold text-accentCyan text-xs uppercase tracking-wider mb-2">Key Functionality</h4>
        <ul class="space-y-1.5 text-textSecondary list-disc list-inside">
          ${project.functionality.map((f) => `<li>${f}</li>`).join('')}
        </ul>
      </div>

      <div class="flex flex-wrap gap-2 pt-1">
        ${project.tech.map((t) => `<span class="px-3 py-1 rounded-lg text-xs font-medium bg-white/5 text-textPrimary border border-white/10">${t}</span>`).join('')}
      </div>

      <div class="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
        <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-accentCyan to-accentBlue text-bgPrimary">
          <i data-lucide="github" class="w-4 h-4"></i>
          <span>Visit GitHub (@nagappagoud)</span>
        </a>
        <span class="text-xs text-textSecondary">
          Placeholder: Replace <code class="text-accentCyan">liveUrl</code> in <code class="text-accentCyan">script.js</code> with your Vercel deployment link.
        </span>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
  modal.classList.add('flex');
  if (window.lucide) window.lucide.createIcons();
}

function closeProjectModal() {
  const modal = document.getElementById('project-modal');
  if (!modal) return;
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}

// Resume Modal Controls
function openResumeModal() {
  const modal = document.getElementById('resume-modal');
  if (!modal) return;
  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function closeResumeModal() {
  const modal = document.getElementById('resume-modal');
  if (!modal) return;
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}

// Role Rotator Animation
function initRoleRotator() {
  const el = document.getElementById('role-rotator');
  if (!el) return;
  const roles = ['Frontend Developer', 'UI/UX Designer', 'AI Enthusiast', 'Technology Explorer'];
  let idx = 0;

  setInterval(() => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(6px)';
    setTimeout(() => {
      idx = (idx + 1) % roles.length;
      el.textContent = roles[idx];
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 250);
  }, 2800);
}

// Subtle Particle Background Canvas (Performance-Aware)
function initParticles() {
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  const ctx = canvas.getContext('2d');
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  const count = width < 768 ? 24 : 52;
  const particles = Array.from({ length: count }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.35,
    vy: (Math.random() - 0.5) * 0.35,
    r: Math.random() * 1.8 + 0.6
  }));

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  function draw() {
    ctx.clearRect(0, 0, width, height);
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(0, 229, 255, 0.45)';
      ctx.fill();

      for (let j = i + 1; j < particles.length; j++) {
        const q = particles[j];
        const dx = p.x - q.x;
        const dy = p.y - q.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 130) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.strokeStyle = `rgba(37, 99, 235, ${0.18 * (1 - dist / 130)})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  }
  draw();
}

// Mouse Spotlight & 3D Card Tilt
function initInteractiveEffects() {
  const glow = document.getElementById('cursor-glow');
  if (glow && window.innerWidth >= 768) {
    window.addEventListener('mousemove', (e) => {
      glow.style.opacity = '1';
      glow.style.background = `radial-gradient(500px circle at ${e.clientX}px ${e.clientY}px, rgba(0, 229, 255, 0.06), transparent 45%)`;
    });
  }

  document.querySelectorAll('[data-tilt]').forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `perspective(900px) rotateX(${(-y * 6).toFixed(2)}deg) rotateY(${(x * 6).toFixed(2)}deg)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg)';
    });
  });
}

// Scroll Reveal & Active Nav Highlighting
function initScrollObservers() {
  const navbar = document.getElementById('navbar');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    let current = '';
    sections.forEach((sec) => {
      const top = sec.offsetTop - 140;
      if (window.scrollY >= top) current = sec.getAttribute('id');
    });

    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll('.reveal-on-scroll').forEach((el) => observer.observe(el));
}

// Contact Form Validation + Mailto Launch
function initContactForm() {
  const form = document.getElementById('contact-form');
  const feedback = document.getElementById('form-feedback');
  if (!form || !feedback) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const subject = form.subject.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !subject || !message) {
      feedback.className = 'rounded-xl p-3.5 text-xs font-medium bg-red-500/15 border border-red-500/30 text-red-300';
      feedback.textContent = 'Please complete all required fields before sending.';
      feedback.classList.remove('hidden');
      return;
    }

    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailValid) {
      feedback.className = 'rounded-xl p-3.5 text-xs font-medium bg-red-500/15 border border-red-500/30 text-red-300';
      feedback.textContent = 'Please enter a valid email address.';
      feedback.classList.remove('hidden');
      return;
    }

    feedback.className = 'rounded-xl p-3.5 text-xs font-medium bg-emerald-500/15 border border-emerald-500/30 text-emerald-300';
    feedback.textContent = 'Validation passed! Opening your email client with pre-filled message details...';
    feedback.classList.remove('hidden');

    const mailto = `mailto:nagappagouda1925@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
    window.location.href = mailto;
  });
}

// Initialize Everything on Load
window.addEventListener('DOMContentLoaded', () => {
  renderProjects();
  renderCertifications('all');
  if (window.lucide) window.lucide.createIcons();

  // Certification Filter Click Handlers
  document.querySelectorAll('.cert-filter-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.cert-filter-btn').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      renderCertifications(btn.getAttribute('data-filter'));
    });
  });

  // Mobile Menu Toggle
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
    document.querySelectorAll('.mobile-nav-link').forEach((link) => {
      link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
    });
  }

  // Close Modals on Escape or Backdrop Click
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeProjectModal();
      closeResumeModal();
    }
  });
  document.getElementById('project-modal')?.addEventListener('click', (e) => {
    if (e.target.id === 'project-modal') closeProjectModal();
  });
  document.getElementById('resume-modal')?.addEventListener('click', (e) => {
    if (e.target.id === 'resume-modal') closeResumeModal();
  });

  initRoleRotator();
  initParticles();
  initInteractiveEffects();
  initScrollObservers();
  initContactForm();

  // Smooth Loader Dismissal & Hero Stagger Entrance
  const bar = document.getElementById('loader-bar');
  const loader = document.getElementById('loader');
  if (bar) bar.style.width = '100%';
  setTimeout(() => {
    if (loader) {
      loader.style.opacity = '0';
      setTimeout(() => loader.remove(), 500);
    }
    document.querySelectorAll('.hero-stagger').forEach((el, i) => {
      setTimeout(() => el.classList.add('visible'), i * 110);
    });
  }, 450);
});
