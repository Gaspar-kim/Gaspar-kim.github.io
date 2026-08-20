import { siteData } from "./data/site-data.js";

const selfName = siteData.profile.name;

const escapeHtml = (value = "") =>
  String(value).replace(/[&<>'"]/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;"
  })[character]);

const formatBold = (value = "") =>
  escapeHtml(value).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");

const externalAttributes = (href) =>
  /^https?:\/\//.test(href) ? ' target="_blank" rel="noopener noreferrer"' : "";

function renderLink(link, className = "text-link") {
  if (!link.href || link.placeholder) {
    return `<span class="${className} placeholder-link" title="URL needed" aria-label="${escapeHtml(link.label)} URL needed">${escapeHtml(link.label)}</span>`;
  }
  return `<a class="${className}" href="${escapeHtml(link.href)}"${externalAttributes(link.href)}>${escapeHtml(link.label)}</a>`;
}

function renderNavigation() {
  document.querySelector("#navigation").innerHTML = siteData.navigation
    .map((item) => `<a href="${escapeHtml(item.href)}"${externalAttributes(item.href)}>${escapeHtml(item.label)}</a>`)
    .join("");
}

function renderProfile() {
  const { profile } = siteData;
  document.querySelector("#hero-position").textContent = profile.position;
  document.querySelector("#hero-fields").textContent = profile.fields.join(" · ");
  const advisorName = profile.advisor.name;
  const [bioBeforeAdvisor, bioAfterAdvisor = ""] = profile.bio.split(advisorName);
  document.querySelector("#hero-bio").innerHTML = `${escapeHtml(bioBeforeAdvisor)}<a class="bio-link" href="${escapeHtml(profile.advisor.href)}"${externalAttributes(profile.advisor.href)}>${escapeHtml(advisorName)}</a>${escapeHtml(bioAfterAdvisor)}`;
  document.querySelector("#social-links").innerHTML = profile.socialLinks
    .map((link) => renderLink(link))
    .join('<span class="link-separator" aria-hidden="true">/</span>');
  const portrait = document.querySelector("#portrait");
  portrait.src = profile.portrait;
  portrait.alt = profile.portraitAlt;
}

function renderResearch() {
  const research = siteData.researchIntroduction;
  document.querySelector("#research-lead").innerHTML = formatBold(research.lead);
  document.querySelector("#research-goal").innerHTML = formatBold(research.goal);

  document.querySelector("#research-stages").innerHTML = research.stages
    .map((stage, index) => `
      <article class="research-stage">
        ${index < research.stages.length - 1 ? '<span class="stage-arrow" aria-hidden="true">→</span>' : ""}
        <h3>${escapeHtml(stage.title)}</h3>
        <p>${escapeHtml(stage.description)}</p>
      </article>
    `).join("");

  document.querySelector("#research-loop").innerHTML = research.loop
    .map((step, index) => `
      <span>${escapeHtml(step)}</span>
      ${index < research.loop.length - 1 ? '<span class="loop-arrow" aria-hidden="true">→</span>' : ""}
    `).join("");
}

function renderNews() {
  document.querySelector("#news-list").innerHTML = siteData.news
    .map((item) => `
      <div class="news-item">
        <time>${escapeHtml(item.date)}</time>
        <p>${escapeHtml(item.text)}</p>
      </div>
    `).join("");
}

function renderAuthors(authors, equalContributionAuthors = []) {
  return authors.map((author) => {
    const name = author === selfName
      ? `<strong>${escapeHtml(author)}</strong>`
      : escapeHtml(author);
    const contributionMark = equalContributionAuthors.includes(author)
      ? '<sup class="contribution-mark" aria-label="equal contribution">†</sup>'
      : "";
    return `${name}${contributionMark}`;
  }).join(", ");
}

function renderPublications() {
  document.querySelector("#publication-list").innerHTML = siteData.publications
    .map((publication) => `
      <article class="publication">
        <a class="publication-media" href="${escapeHtml(publication.links[0]?.href || publication.image)}"${externalAttributes(publication.links[0]?.href || "")} aria-label="Open ${escapeHtml(publication.title)}">
          <img src="${escapeHtml(publication.image)}" alt="${escapeHtml(publication.imageAlt)}" width="560" height="340" loading="lazy" decoding="async">
        </a>
        <div class="publication-copy">
          <h3>${escapeHtml(publication.title)}</h3>
          <p class="authors">${renderAuthors(publication.authors, publication.equalContributionAuthors)}</p>
          ${publication.authorRole ? `<p class="author-role">${escapeHtml(publication.authorRole)}</p>` : ""}
          <p class="venue"><cite>${escapeHtml(publication.venue)}</cite>, ${escapeHtml(publication.year)}</p>
          ${publication.links.length ? `<div class="publication-links">${publication.links.map((link) => renderLink(link, "paper-link")).join("")}</div>` : ""}
          <p class="publication-summary">${escapeHtml(publication.summary)}</p>
        </div>
      </article>
    `).join("");
}

function renderRecords(target, records, type) {
  document.querySelector(target).innerHTML = records.map((record) => {
    const title = type === "education" ? record.institution : record.organization;
    const subtitle = type === "education" ? record.degree : record.role;
    return `
      <article class="record">
        <div class="record-main">
          <h3>${escapeHtml(title)}</h3>
          <p class="record-role">${escapeHtml(subtitle)}</p>
          ${record.details.length ? `<ul>${record.details.map((detail) => `<li>${escapeHtml(detail)}</li>`).join("")}</ul>` : ""}
        </div>
        <div class="record-meta">
          <time>${escapeHtml(record.date)}</time>
          ${record.location ? `<p>${escapeHtml(record.location)}</p>` : ""}
        </div>
      </article>
    `;
  }).join("");
}

function renderAwards() {
  document.querySelector("#awards-list").innerHTML = siteData.awards.map((award) => `
    <article class="simple-item">
      <div>
        <h3>${award.href ? `<a href="${escapeHtml(award.href)}"${externalAttributes(award.href)}>${escapeHtml(award.title)}</a>` : escapeHtml(award.title)}</h3>
        <p>${escapeHtml(award.detail)}</p>
      </div>
      <time>${escapeHtml(award.date)}</time>
    </article>
  `).join("");
}

function renderPatents() {
  document.querySelector("#patents-list").innerHTML = siteData.patents.map((patent) => `
    <article class="simple-item patent-item">
      <div>
        <h3>${escapeHtml(patent.title)}</h3>
        <p>${escapeHtml(patent.inventors)}</p>
        <p class="patent-status">${escapeHtml(patent.status)}</p>
      </div>
      <time>${escapeHtml(patent.year)}</time>
    </article>
  `).join("");
}

function initializeHeader() {
  const header = document.querySelector("#site-header");
  const updateHeader = () => header.classList.toggle("is-scrolled", window.scrollY > 12);
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });
}

function initialize() {
  renderNavigation();
  renderProfile();
  renderResearch();
  renderNews();
  renderPublications();
  renderRecords("#experience-list", siteData.experience, "experience");
  renderRecords("#education-list", siteData.education, "education");
  renderAwards();
  renderPatents();
  initializeHeader();
  document.querySelector("#year").textContent = new Date().getFullYear();
}

initialize();
