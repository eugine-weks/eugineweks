/* Reusable UI builders — rendered into placeholder mount points. */

import { icon } from "./icons.js";
import { navLinks, profile, socials, stats, skills, journey, services, experience, projects } from "./data.js";

const currentPage = () => {
  const file = window.location.pathname.split("/").pop();
  return !file || file === "" ? "index.html" : file;
};

/* ---------- Navigation ---------- */

export function renderNav() {
  const mount = document.querySelector("[data-nav]");
  if (!mount) return;
  const page = currentPage();
  const links = () =>
    navLinks
      .map(
        (l) =>
          `<li><a href="${l.href}"${l.href === page ? ' aria-current="page"' : ""}>${l.label}</a></li>`,
      )
      .join("");

  mount.innerHTML = `
    <nav class="site-nav" aria-label="Main navigation">
      <div class="container nav-inner">
        <a class="brand" href="index.html" aria-label="${profile.name} — home">
          <span class="brand-mark" aria-hidden="true">EJ</span>
          <span>Eugine<span class="gradient-text"> </span>Weks</span>
        </a>
        <div class="nav-right">
          <ul class="nav-links">${links()}</ul>
          <button class="icon-btn" type="button" data-theme-toggle aria-label="Toggle colour theme">
            <span class="theme-icon-dark">${icon("sun", 20)}</span>
            <span class="theme-icon-light">${icon("moon", 20)}</span>
          </button>
          <button class="icon-btn nav-toggle" type="button" data-menu-toggle aria-expanded="false" aria-controls="mobile-menu" aria-label="Open menu">
            <span data-menu-icon>${icon("menu", 20)}</span>
          </button>
        </div>
      </div>
      <div class="mobile-menu" id="mobile-menu">
        <div class="container"><ul>${links()}</ul></div>
      </div>
    </nav>`;

  const nav = mount.querySelector(".site-nav");
  const menu = mount.querySelector(".mobile-menu");
  const toggle = mount.querySelector("[data-menu-toggle]");
  const iconSlot = mount.querySelector("[data-menu-icon]");

  toggle.addEventListener("click", () => {
    const open = menu.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    iconSlot.innerHTML = icon(open ? "close" : "menu", 20);
  });

  menu.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      menu.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      iconSlot.innerHTML = icon("menu", 20);
    }),
  );

  const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 8);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

/* ---------- Socials ---------- */

export function renderSocials() {
  document.querySelectorAll("[data-socials]").forEach((mount) => {
    mount.innerHTML = socials
      .map(
        (s) =>
          `<a class="social-link" href="${s.url}" target="_blank" rel="noopener noreferrer" aria-label="${s.name}">${icon(s.icon, 20)}</a>`,
      )
      .join("");
  });
}

/* ---------- Stats ---------- */

export function renderStats() {
  document.querySelectorAll("[data-stats]").forEach((mount) => {
    mount.innerHTML = stats
      .map(
        (s, i) => `
        <div class="card stat card-hover" data-reveal="zoom" style="--delay:${i * 90}ms">
          <div class="stat-value gradient-text"><span data-count="${s.value}">0</span>${s.suffix}</div>
          <div class="stat-label">${s.label}</div>
        </div>`,
      )
      .join("");
  });
}

/* ---------- Skills ---------- */

export function renderSkills() {
  const mount = document.querySelector("[data-skills]");
  if (!mount) return;

  const skillCards = skills
    .map(
      (s, i) => `
      <article class="card card-hover" data-reveal style="--delay:${i * 90}ms">
        <div class="icon-badge">${icon(s.icon)}</div>
        <h3>${s.title}</h3>
        <p class="lead" style="font-size:.95rem;margin-top:10px">${s.description}</p>
        <div class="meter"><span data-meter="${s.level}"></span></div>
        <div class="meter-label"><span>${s.proficiency}</span><span>${s.level}%</span></div>
        <div class="chip-row" style="margin-top:16px">${s.stack.map((t) => `<span class="chip"><i class="${t.icon}"></i>${t.name}</span>`).join("")}</div>
      </article>`,
    )
    .join("");

  const integrationCard = `
    <div class="integration-card">
      <div class="card-header">
        <div class="card-icon">
          <i class="fa-solid fa-code-branch"></i>
        </div>
        <h2 class="card-title">API &amp; Architecture Integration</h2>
      </div>

      <div class="skills-grid">
        <!-- 1. REST APIs -->
        <div class="skill-item" data-target-percent="95">
          <div class="progress-box">
            <svg viewBox="0 0 120 120">
              <circle class="circle-bg" cx="60" cy="60" r="50"></circle>
              <circle class="circle-progress color-rest" cx="60" cy="60" r="50"></circle>
            </svg>
            <div class="percentage-text">0%</div>
          </div>
          <span class="skill-pill">REST APIs</span>
        </div>

        <!-- 2. GraphQL -->
        <div class="skill-item" data-target-percent="85">
          <div class="progress-box">
            <svg viewBox="0 0 120 120">
              <circle class="circle-bg" cx="60" cy="60" r="50"></circle>
              <circle class="circle-progress color-graphql" cx="60" cy="60" r="50"></circle>
            </svg>
            <div class="percentage-text">0%</div>
          </div>
          <span class="skill-pill">GraphQL</span>
        </div>

        <!-- 3. M-Pesa Integration -->
        <div class="skill-item" data-target-percent="90">
          <div class="progress-box">
            <svg viewBox="0 0 120 120">
              <circle class="circle-bg" cx="60" cy="60" r="50"></circle>
              <circle class="circle-progress color-mpesa" cx="60" cy="60" r="50"></circle>
            </svg>
            <div class="percentage-text">0%</div>
          </div>
          <span class="skill-pill">M-Pesa API</span>
        </div>

        <!-- 4. AI Gateways & Routing -->
        <div class="skill-item" data-target-percent="80">
          <div class="progress-box">
            <svg viewBox="0 0 120 120">
              <circle class="circle-bg" cx="60" cy="60" r="50"></circle>
              <circle class="circle-progress color-gateway" cx="60" cy="60" r="50"></circle>
            </svg>
            <div class="percentage-text">0%</div>
          </div>
          <span class="skill-pill">AI Gateways</span>
        </div>

        <!-- 5. WebSockets & Async -->
        <div class="skill-item" data-target-percent="85">
          <div class="progress-box">
            <svg viewBox="0 0 120 120">
              <circle class="circle-bg" cx="60" cy="60" r="50"></circle>
              <circle class="circle-progress color-websockets" cx="60" cy="60" r="50"></circle>
            </svg>
            <div class="percentage-text">0%</div>
          </div>
          <span class="skill-pill">WebSockets</span>
        </div>

        <!-- 6. OAuth 2.0 & JWT Security -->
        <div class="skill-item" data-target-percent="90">
          <div class="progress-box">
            <svg viewBox="0 0 120 120">
              <circle class="circle-bg" cx="60" cy="60" r="50"></circle>
              <circle class="circle-progress color-oauth" cx="60" cy="60" r="50"></circle>
            </svg>
            <div class="percentage-text">0%</div>
          </div>
          <span class="skill-pill">OAuth &amp; JWT</span>
        </div>
      </div>
    </div>`;

  mount.innerHTML = skillCards + integrationCard;
}

/* ---------- Journey timeline ---------- */

export function renderJourney() {
  const mount = document.querySelector("[data-journey]");
  if (!mount) return;
  mount.innerHTML = journey
    .map(
      (j, i) => `
      <div class="timeline-item" data-reveal="left" style="--delay:${i * 90}ms">
        <div class="card card-hover">
          <span class="timeline-year">${j.year}</span>
          <h3>${j.title}</h3>
          <p>${j.description}</p>
        </div>
      </div>`,
    )
    .join("");
}

/* ---------- Services ---------- */

export function renderServices() {
  const mount = document.querySelector("[data-services]");
  if (!mount) return;
  mount.innerHTML = services
    .map(
      (s, i) => `
      <article class="card card-hover" data-reveal style="--delay:${(i % 3) * 90}ms">
        <div class="icon-badge">${icon(s.icon)}</div>
        <h3>${s.title}</h3>
        <p class="lead" style="font-size:.95rem;margin-top:10px">${s.description}</p>
      </article>`,
    )
    .join("");
}

/* ---------- Experience timeline ---------- */

export function renderExperience() {
  const mount = document.querySelector("[data-experience]");
  if (!mount) return;
  mount.innerHTML = experience
    .map(
      (e, i) => `
      <div class="timeline-item" data-reveal="left" style="--delay:${i * 90}ms">
        <div class="card card-hover">
          <span class="timeline-year">${e.duration}</span>
          <h3>${e.role}</h3>
          <p style="margin-top:4px"><strong style="color:var(--text)">${e.company}</strong></p>
          <ul class="duties">${e.responsibilities.map((r) => `<li>${r}</li>`).join("")}</ul>
          <div class="chip-row" style="margin-top:16px">${e.tech.map((t) => `<span class="chip">${t}</span>`).join("")}</div>
        </div>
      </div>`,
    )
    .join("");
}

/* ---------- Projects + filters ---------- */

export function renderProjects(limit) {
  const mount = document.querySelector("[data-projects]");
  if (!mount) return;
  const list = typeof limit === "number" ? projects.slice(0, limit) : projects;

  mount.innerHTML = list
    .map(
      (p, i) => `
      <article class="card card-hover project-card" data-category="${p.category}" data-reveal="zoom" style="--delay:${(i % 3) * 90}ms">
        <div class="project-media">
          <img src="${p.image}" alt="${p.title} interface preview" width="1280" height="800" loading="lazy" />
          <div class="project-overlay">
            <a class="btn btn-ghost" href="${p.github}" target="_blank" rel="noopener noreferrer">${icon("code", 18)} Code</a>
            <a class="btn btn-primary" href="${p.demo}" target="_blank" rel="noopener noreferrer">${icon("external", 18)} Live Demo</a>
          </div>
        </div>
        <div class="project-body">
          <span class="project-cat">${p.category}</span>
          <h3>${p.title}</h3>
          <p>${p.description}</p>
          <div class="chip-row" style="margin-top:auto">${p.tech.map((t) => `<span class="chip">${t}</span>`).join("")}</div>
        </div>
      </article>`,
    )
    .join("");

  const filters = document.querySelector("[data-filters]");
  if (!filters) return;
  const cats = ["All", "Frontend", "Backend", "Full Stack"];
  filters.innerHTML = cats
    .map(
      (c) =>
        `<button class="filter-btn${c === "All" ? " is-active" : ""}" type="button" data-filter="${c}" aria-pressed="${c === "All"}">${c}</button>`,
    )
    .join("");

  filters.addEventListener("click", (event) => {
    const btn = event.target.closest("[data-filter]");
    if (!btn) return;
    const cat = btn.dataset.filter;
    filters.querySelectorAll(".filter-btn").forEach((b) => {
      const active = b === btn;
      b.classList.toggle("is-active", active);
      b.setAttribute("aria-pressed", String(active));
    });
    mount.querySelectorAll(".project-card").forEach((card) => {
      const show = cat === "All" || card.dataset.category === cat;
      card.classList.toggle("is-hidden", !show);
    });
  });
}

/* ---------- Contact info ---------- */

export function renderContactInfo() {
  const mount = document.querySelector("[data-contact-info]");
  if (!mount) return;
  const rows = [
    { icon: "mail", label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { icon: "call", label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
    { icon: "pin", label: "Location", value: profile.location, href: null },
  ];
  mount.innerHTML = rows
    .map(
      (r) => `
      <div class="info-row">
        <div class="icon-badge">${icon(r.icon, 22)}</div>
        <div>
          <strong>${r.label}</strong>
          ${r.href ? `<a href="${r.href}">${r.value}</a>` : `<span>${r.value}</span>`}
        </div>
      </div>`,
    )
    .join("");
}

/* ---------- Footer ---------- */

export function renderFooter() {
  const mount = document.querySelector("[data-footer]");
  if (!mount) return;
  mount.innerHTML = `
    <footer class="site-footer">
      <div class="container footer-inner">
        <div>
          <div class="footer-name">${profile.name}</div>
          <div class="footer-role">${profile.role}</div>
        </div>
        <div class="powered">
          <div class="powered-text">Powered by <b>Fixera</b></div>
          <img src="images/logo.jpeg" alt="Fixera logo" width="42" height="38" loading="lazy" />
        </div>
      </div>
    </footer>`;
}
