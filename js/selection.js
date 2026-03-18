import { courseRegistry } from '../data/registry.js';

// DOM Elements
const domainView = document.getElementById('domainView');
const subjectView = document.getElementById('subjectView');
const domainGrid = document.getElementById('domainGrid');
const subjectGrid = document.getElementById('subjectGrid');
const backBtn = document.getElementById('backBtn');
const pageSubtitle = document.getElementById('pageSubtitle');
const selectedDomainHeader = document.getElementById('selectedDomainHeader');

// Setup Domain Icons and Colors configuration
const domainConfig = {
  coding: { icon: 'fa-code', color: 'var(--domain-coding)' },
  science: { icon: 'fa-flask', color: 'var(--domain-science)' },
  humanities: { icon: 'fa-landmark', color: 'var(--domain-humanities)' },
  finance: { icon: 'fa-chart-line', color: 'var(--domain-finance)' },
  arts: { icon: 'fa-palette', color: 'var(--domain-arts)' },
  health: { icon: 'fa-heart-pulse', color: 'var(--domain-health)' },
  default: { icon: 'fa-book', color: 'var(--accent)' }
};

// Render initial domains
function renderDomains() {
  domainGrid.innerHTML = '';
  
  Object.values(courseRegistry).forEach((domain, index) => {
    const config = domainConfig[domain.id] || domainConfig.default;
    
    const card = document.createElement('div');
    card.className = 'card';
    card.style.setProperty('--card-color', config.color);
    card.style.animation = `slideInUp 0.5s ease forwards ${index * 0.1}s`;
    card.style.opacity = '0';
    
    card.innerHTML = `
      <div class="card-icon-wrapper">
        <i class="fa-solid ${config.icon}"></i>
      </div>
      <div class="card-content">
        <h3>${domain.title}</h3>
        <p>${domain.description}</p>
      </div>
    `;
    
    card.addEventListener('click', () => {
      showSubjects(domain);
    });
    
    domainGrid.appendChild(card);
  });
}

// Render subjects for selected domain
function showSubjects(domain) {
  // Update Header
  const config = domainConfig[domain.id] || domainConfig.default;
  selectedDomainHeader.style.setProperty('--domain-color', config.color);
  selectedDomainHeader.innerHTML = `
    <i class="fa-solid ${config.icon} domain-icon"></i>
    <h2>${domain.title}</h2>
  `;
  
  // Populate Subjects
  subjectGrid.innerHTML = '';
  const subjects = Object.values(domain.subjects);
  
  if (subjects.length === 0) {
    subjectGrid.innerHTML = `<p style="color: var(--text-muted); grid-column: 1/-1;">Coming soon! No subjects available yet.</p>`;
  } else {
    subjects.forEach((subject, index) => {
      const card = document.createElement('div');
      card.className = 'card';
      card.style.setProperty('--card-color', config.color);
      card.style.animation = `slideInUp 0.5s ease forwards ${index * 0.1}s`;
      card.style.opacity = '0';
      
      card.innerHTML = `
        <div class="card-icon-wrapper">
          <span style="font-weight:bold; font-size: 1.2rem;">${subject.iconText}</span>
        </div>
        <div class="card-content">
          <h3>${subject.title}</h3>
          <p>${subject.description}</p>
        </div>
      `;
      
      card.addEventListener('click', () => {
        window.location.href = `course?domain=${domain.id}&subject=${subject.id}`;
      });
      
      subjectGrid.appendChild(card);
    });
  }
  
  // Switch Views
  domainView.classList.remove('active');
  setTimeout(() => {
    subjectView.classList.add('active');
    pageSubtitle.textContent = `Select a subject in ${domain.title}`;
  }, 200); // small delay for transition
}

// Back button handler
backBtn.addEventListener('click', () => {
  subjectView.classList.remove('active');
  setTimeout(() => {
    domainView.classList.add('active');
    pageSubtitle.textContent = 'Select what you want to learn';
  }, 200);
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  renderDomains();
});
