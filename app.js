const pages = [
  { href: "index.html", label: "Home", id: "home" },
  { href: "interests.html", label: "Ideas", id: "interests" },
  { href: "projects.html", label: "Projects", id: "projects" },
  { href: "hobbies.html", label: "Hobbies", id: "hobbies" },
];

const iconPaths = {
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  "book-open": '<path d="M2 5.5A3.5 3.5 0 0 1 5.5 2H11v18H5.5A3.5 3.5 0 0 0 2 23.5zM22 5.5A3.5 3.5 0 0 0 18.5 2H13v18h5.5a3.5 3.5 0 0 1 3.5 3.5z"/>',
  camera: '<path d="M14.5 4 16 7h4a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h4l1.5-3z"/><circle cx="12" cy="13" r="3"/>',
  footprints: '<path d="M4 16v-2.5C4 10 6 8 8 8s3 1.5 3 3.5S9.5 15 7 16s-3 2-3 4c0 1.1.9 2 2 2 2 0 4-2.5 5-5M20 8V5.5C20 2 18 0 16 0s-3 1.5-3 3.5S14.5 7 17 8s3 2 3 4c0 1.1-.9 2-2 2-2 0-4-2.5-5-5"/>',
  "cooking-pot": '<path d="M2 12h20M4 12v5a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4v-5M8 7c0-1 .5-2 1.5-3M12 7c0-1 .5-2 1.5-3M16 7c0-1 .5-2 1.5-3"/>',
  palette: '<path d="M12 2a10 10 0 1 0 10 10c0-1.9-1.1-3.3-2.7-3.3H15a2.5 2.5 0 0 1-2.5-2.5V7.5A2.5 2.5 0 0 0 10 5H8.5A2.5 2.5 0 0 0 6 7.5v1.1A2.5 2.5 0 0 1 8.5 11H9a3 3 0 0 1 3 3v.9A3 3 0 0 1 9 18H8.5A2.5 2.5 0 0 1 6 15.5V14M9 8h.01M15 8h.01M12 12h.01"/>',
  leaf: '<path d="M19 3c-8 0-14 6-14 14 0 2.5 1 6 4 8 3-2 6-5 8-9 2-4 2-9 2-13Z"/><path d="M8 16c2.5-1.5 5-4.5 7-8"/>',
  music: '<path d="M9 18V6l11-2v12"/><circle cx="9" cy="18" r="3"/><circle cx="20" cy="16" r="3"/>',
  fitness: '<path d="M4 12h3l2-4 4 8 2-4h5"/><path d="M2 9v6M22 9v6M6 5h3M15 5h3M6 19h3M15 19h3"/>',
};

function icon(name) {
  return `<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${iconPaths[name] || iconPaths.arrow}</svg>`;
}

function renderChrome() {
  const currentPage = document.body.dataset.page;
  const header = document.querySelector("[data-site-header]");
  const footer = document.querySelector("[data-site-footer]");

  header.innerHTML = `
    <a class="skip-link" href="#main-content">Skip to content</a>
    <header class="site-header">
      <div class="nav-shell">
        <a class="wordmark" href="index.html">${SITE_DATA.person.name}</a>
        <button class="menu-button" type="button" aria-label="Open navigation" aria-expanded="false">${icon("menu")}</button>
        <nav class="site-nav" aria-label="Main navigation" data-open="false">
          ${pages.map((page) => `<a href="${page.href}" ${page.id === currentPage ? 'aria-current="page"' : ""}>${page.label}</a>`).join("")}
          <a href="${SITE_DATA.resume.url}" target="_blank" rel="noreferrer">${SITE_DATA.resume.label}</a>
        </nav>
      </div>
    </header>`;

  footer.innerHTML = `
    <footer class="site-footer">
      <div class="shell footer-inner">
        <span>&copy; ${new Date().getFullYear()} ${SITE_DATA.person.name}</span>
        <span>Made with curiosity in ${SITE_DATA.person.location}</span>
      </div>
    </footer>`;

  const menuButton = document.querySelector(".menu-button");
  const navigation = document.querySelector(".site-nav");
  menuButton.addEventListener("click", () => {
    const isOpen = navigation.dataset.open === "true";
    navigation.dataset.open = String(!isOpen);
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
  });
}

function renderHome() {
  document.querySelector("[data-home]").innerHTML = `
    <section class="shell hero">
      <div class="hero-copy reveal">
        <p class="eyebrow">${SITE_DATA.person.role}</p>
        <h1>${SITE_DATA.person.headline}</h1>
        <p class="lede">${SITE_DATA.person.intro}</p>
        <div class="hero-actions">
          <a class="button" href="projects.html">Explore my work ${icon("arrow")}</a>
          <a class="button secondary" href="interests.html">See what I’m learning</a>
        </div>
      </div>
      <div class="portrait-wrap reveal reveal-delay">
        <img class="portrait" src="${SITE_DATA.person.photo}" alt="${SITE_DATA.person.photoAlt}">
        <div class="availability">${SITE_DATA.person.availability}</div>
      </div>
    </section>
    <section class="intro-band">
      <div class="shell intro-grid">
        <div><h2>About me</h2></div>
        <div>
          <p class="lede">${SITE_DATA.person.shortBio}</p>
          <div class="social-links">${SITE_DATA.socialLinks.map((link) => `<a href="${link.url}">${link.label}</a>`).join("")}</div>
        </div>
      </div>
    </section>
    <section class="shell home-section">
      <div class="section-heading">
        <div><p class="eyebrow">Research interests</p><h2>Questions guiding my work</h2></div>
        <p class="lede">I am interested in how structured knowledge and evidence-grounded retrieval can make language models more reliable, evaluable, and useful.</p>
      </div>
      <div class="interest-list">
        ${SITE_DATA.researchInterests.map((interest, index) => `
          <article class="interest-row">
            <span>0${index + 1}</span>
            <h3>${interest.title}</h3>
            <p>${interest.description}</p>
          </article>`).join("")}
      </div>
    </section>
    <section class="work-band">
      <div class="shell home-section">
        <div class="section-heading">
          <div><p class="eyebrow">Selected work</p><h2>Research & engineering</h2></div>
          <a class="text-link" href="projects.html">View all projects ${icon("arrow")}</a>
        </div>
        <div class="project-grid compact-grid">${SITE_DATA.projects.slice(0, 3).map(projectCard).join("")}</div>
      </div>
    </section>
    <section class="shell home-section">
      <div class="section-heading">
        <div><p class="eyebrow">Selected ideas</p><h2>Directions I am exploring</h2></div>
        <a class="text-link" href="interests.html">Explore all ideas ${icon("arrow")}</a>
      </div>
      <div class="article-grid">${SITE_DATA.articles.slice(0, 2).map(ideaCard).join("")}</div>
    </section>`;
}

function renderHobbies() {
  document.querySelector("[data-hobbies]").innerHTML = SITE_DATA.hobbies.map((hobby) => {
    const imageList = Array.isArray(hobby.images)
      ? hobby.images
      : typeof hobby.image === "string" && hobby.image
        ? [hobby.image]
        : [];
    const displayImages = imageList.slice(0, 9);

    const imageMarkup = displayImages.length
      ? `<div class="hobby-gallery">${displayImages.map((image) => `<img src="${image}" alt="${hobby.title}" loading="lazy" />`).join("")}</div>`
      : "";

    return `
      <article class="hobby-card text-card ${imageMarkup ? "has-gallery" : ""}">
        ${imageMarkup}
        <div class="hobby-text">
          <span class="hobby-icon">${icon(hobby.icon)}</span>
          <h3>${hobby.title}</h3>
          <p class="card-copy">${hobby.description}</p>
          <p class="card-detail">${hobby.caption || hobby.detail}</p>
        </div>
      </article>`;
  }).join("");
}

function renderInterests() {
  const { introduction, themes } = SITE_DATA.research;
  const introductionText = typeof introduction === "string" ? introduction : introduction.description;
  const introductionHeadline = typeof introduction === "object" ? introduction.headline : "";
  document.querySelector("[data-research-introduction]").textContent = introductionText;
  if (introductionHeadline) {
    document.querySelector(".page-heading h1").textContent = introductionHeadline;
  }
  document.querySelector("[data-research-themes]").innerHTML = themes.map((theme, index) => `
    <article class="research-theme" data-theme="${theme.id}">
      <p class="theme-number">Theme 0${index + 1}</p>
      <h3>${theme.title}</h3>
      <p class="theme-description">${theme.description}</p>
      <ul class="theme-topics">${theme.topics.map((topic) => `<li>${topic}</li>`).join("")}</ul>
      <a class="theme-link" href="#directions-${theme.id}">Explore directions</a>
    </article>`).join("");

  document.querySelector("[data-research-directions]").innerHTML = themes.map((theme) => `
    <section class="direction-theme" id="directions-${theme.id}" aria-labelledby="heading-${theme.id}">
      <h3 id="heading-${theme.id}">${theme.title}</h3>
      <div class="direction-list">
        ${theme.directions.map((direction) => `
          <article class="research-direction">
            <div class="direction-meta">
              <span class="direction-status" data-status="${direction.status.toLowerCase()}">${direction.status.charAt(0).toUpperCase()}${direction.status.slice(1)}</span>
              <span>${direction.type}</span>
            </div>
            <h4>${direction.title}</h4>
            <p class="direction-subtitle">${direction.subtitle}</p>
            <p class="direction-overview">${direction.overview}</p>
            <details>
              <summary>Read research outline</summary>
              <div class="direction-details">
                <h5>Motivation</h5>
                <p>${direction.motivation}</p>
                <h5>Research questions</h5>
                <ul>${direction.researchQuestions.map((question) => `<li>${question}</li>`).join("")}</ul>
                <h5>Potential approaches</h5>
                <ul>${direction.potentialApproaches.map((approach) => `<li>${approach}</li>`).join("")}</ul>
                ${direction.evaluation ? `<h5>Evaluation considerations</h5><p>${direction.evaluation}</p>` : ""}
              </div>
            </details>
          </article>`).join("")}
      </div>
    </section>`).join("");
}

function ideaCard(article) {
  return `
    <article class="article-card idea-card">
      <div class="article-meta"><span>${article.type}</span><span>${article.date}</span></div>
      <h3>${article.title}</h3>
      <p class="idea-subtitle">${article.subtitle}</p>
      <p class="card-copy">${article.summary}</p>
      <details>
        <summary>Research outline</summary>
        <div class="idea-details">
          <h4>Problem</h4><p>${article.problem}</p>
          <h4>Proposed direction</h4><p>${article.direction}</p>
          <h4>Evaluation</h4><p>${article.evaluation}</p>
        </div>
      </details>
    </article>`;
}

function projectCard(project) {
  const hasProjectUrl = typeof project.url === "string" && project.url && project.url !== "#";
  const hasRepositoryUrl = typeof project.repository === "string" && project.repository && project.repository !== "#";
  const hasAdvisor = typeof project.advisor === "string" && project.advisor.trim();

  const links = [
    hasProjectUrl ? `<a class="text-link" href="${project.url}">View source</a>` : "",
    hasRepositoryUrl ? `<a class="text-link" href="${project.repository}">Source</a>` : "",
  ].filter(Boolean).join("");

  const detailContent = Array.isArray(project.bullets) && project.bullets.length
    ? `<ul class="project-bullets">${project.bullets.map((item) => `<li>${item}</li>`).join("")}</ul>`
    : `<p class="card-copy">${project.description}</p>`;

  return `
    <article class="project-card">
      <p class="project-status">${project.status}</p>
      <h3>${project.title}</h3>
      ${links ? `<div class="project-links">${links}</div>` : ""}
      <details class="project-details">
        <summary>View description</summary>
        ${hasAdvisor ? `<p class="project-advisor">Advisor: ${project.advisor}</p>` : ""}
        ${detailContent}
        <div class="tags">${project.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
      </details>
    </article>`;
}

function renderProjects() {
  document.querySelector("[data-projects]").innerHTML = SITE_DATA.projects.map(projectCard).join("");
}

renderChrome();
const pageRenderers = {
  home: renderHome,
  hobbies: renderHobbies,
  interests: renderInterests,
  projects: renderProjects,
};
pageRenderers[document.body.dataset.page]?.();
