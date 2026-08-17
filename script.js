

const D = window.PORTFOLIO_DATA;

function el(tag, opts = {}) {
  const node = document.createElement(tag);
  if (opts.class) node.className = opts.class;
  if (opts.html !== undefined) node.innerHTML = opts.html;
  if (opts.text !== undefined) node.textContent = opts.text;
  if (opts.attrs) Object.entries(opts.attrs).forEach(([k, v]) => node.setAttribute(k, v));
  return node;
}

function designator(text) {
  return el('div', { class: 'designator', text });
}

// ---------- Brand / Nav ----------
document.getElementById('brand-text').innerHTML =
  `${D.brand.shortName}<span style="color:var(--muted);font-weight:400;">${D.brand.suffix}</span>`;

// ---------- Hero ----------
document.getElementById('hero-designator').append(designator(D.hero.designator));
const nameParts = D.hero.name.trim().split(' ');
const lastWord = nameParts.pop();
document.getElementById('hero-name').innerHTML = `${nameParts.join(' ')} <span class="last">${lastWord}</span>`;
document.getElementById('hero-role').innerHTML = D.hero.roleLine
  .map(r => `<span>${r}</span>`).join('<span class="sep">/</span>');
document.getElementById('hero-lede').textContent = D.hero.lede;
document.getElementById('hero-cv').setAttribute('href', D.hero.cvFile);
document.getElementById('hero-photo').setAttribute('src', D.hero.photoFile);
document.getElementById('hero-photo').setAttribute('alt', 'Portrait of ' + D.hero.name);
document.getElementById('hero-phototag').textContent = D.hero.photoTag;
document.title = D.hero.name + ' — Portfolio';

// ---------- Focus Areas ----------
document.getElementById('focus-designator').append(designator(D.focusAreas.designator));
document.getElementById('focus-heading').textContent = D.focusAreas.heading;
const focusGrid = document.getElementById('focus-grid');
D.focusAreas.items.forEach((f, i) => {
  const card = el('div', { class: 'focus-card' });
  card.append(el('span', { class: 'focus-id', text: 'F0' + (i + 1) }));
  card.append(el('h3', { text: f.title }));
  card.append(el('p', { text: f.desc }));
  focusGrid.append(card);
});

// ---------- About ----------
document.getElementById('about-designator').append(designator(D.about.designator));
document.getElementById('about-heading').textContent = D.about.heading;
document.getElementById('about-text').textContent = D.about.text;
const specList = document.getElementById('about-specs');
D.about.specs.forEach(s => {
  specList.append(el('li', { html: `<span>${s.k}</span><span>${s.v}</span>` }));
});

// ---------- Skills (as tags) ----------
document.getElementById('skills-designator').append(designator(D.skills.designator));
document.getElementById('skills-heading').textContent = D.skills.heading;
document.getElementById('skills-sub').textContent = D.skills.subheading;
const skillWrap = document.getElementById('skills-groups');
D.skills.groups.forEach(g => {
  const group = el('div', { class: 'skill-group' });
  group.append(el('h3', { html: g.title }));
  const tagWrap = el('div', { class: 'skill-tags' });
  g.items.forEach(i => tagWrap.append(el('span', { class: 'skill-tag', text: i })));
  group.append(tagWrap);
  skillWrap.append(group);
});

// ---------- Experience ----------
document.getElementById('exp-designator').append(designator(D.experience.designator));
document.getElementById('exp-heading').textContent = D.experience.heading;
const timeline = document.getElementById('exp-timeline');
D.experience.items.forEach(item => {
  const t = el('div', { class: 't-item' });
  t.append(el('div', { class: 't-date', text: item.date }));
  t.append(el('div', { class: 't-title', text: item.title }));
  t.append(el('div', { class: 't-org', text: item.org }));
  t.append(el('div', { class: 't-desc', text: item.desc }));
  timeline.append(t);
});

// ---------- Projects ----------
document.getElementById('proj-designator').append(designator(D.projects.designator));
document.getElementById('proj-heading').textContent = D.projects.heading;
document.getElementById('proj-sub').textContent = D.projects.subheading;
const projGrid = document.getElementById('proj-grid');
D.projects.items.forEach(p => {
  const card = el('div', { class: 'proj-card' });
  card.append(el('span', { class: 'proj-year', text: p.year }));
  card.append(el('span', { class: 'proj-id', text: p.id }));
  card.append(el('h3', { text: p.title }));
  card.append(el('p', { text: p.desc }));
  const links = el('div', { class: 'proj-links' });
  if (p.github) links.append(el('a', { text: 'GitHub ↗', attrs: { href: p.github, target: '_blank', rel: 'noopener' } }));
  if (p.demo) links.append(el('a', { text: 'Demo ↗', attrs: { href: p.demo, target: '_blank', rel: 'noopener' } }));
  card.append(links);
  projGrid.append(card);
});

// ---------- Publications ----------
document.getElementById('pub-designator').append(designator(D.publications.designator));
document.getElementById('pub-heading').textContent = D.publications.heading;
const pubWrap = document.getElementById('pub-list');
D.publications.items.forEach(p => {
  const box = el('div', { class: 'pub' });
  box.append(el('span', { class: 'pub-tag', text: p.tag }));
  box.append(el('p', { class: 'cite', html: p.citationHtml }));
  box.append(el('a', { class: 'doi', html: p.doiText + '&nbsp;↗', attrs: { href: p.doiUrl, target: '_blank', rel: 'noopener' } }));
  pubWrap.append(box);
});

// ---------- Education ----------
document.getElementById('edu-designator').append(designator(D.education.designator));
document.getElementById('edu-heading').textContent = D.education.heading;
const eduList = document.getElementById('edu-list');
D.education.items.forEach(e => {
  const row = el('div', { class: 'edu-row' });
  row.append(el('div', { class: 'edu-year', text: e.year }));
  const mid = el('div');
  mid.append(el('div', { class: 'edu-name', text: e.name }));
  mid.append(el('div', { class: 'edu-school', text: e.school }));
  row.append(mid);
  eduList.append(row);
});

// ---------- Achievements & Interests ----------
document.getElementById('ach-designator').append(designator(D.achievements.designator));
document.getElementById('ach-heading').textContent = D.achievements.heading;
const achWrap = document.getElementById('ach-list');
D.achievements.items.forEach(a => {
  const card = el('div', { class: 'ach-card' });
  card.append(el('div', { class: 'ach-year', text: a.year }));
  card.append(el('div', { class: 'ach-text', text: a.text }));
  achWrap.append(card);
});
const pillWrap = document.getElementById('interest-pills');
D.achievements.interests.forEach(i => pillWrap.append(el('span', { class: 'pill', text: i })));

// ---------- Contact ----------
document.getElementById('contact-designator').append(designator(D.contact.designator));
document.getElementById('contact-heading').textContent = D.contact.heading;
document.getElementById('contact-text').textContent = D.contact.text;
const contactList = document.getElementById('contact-list');
contactList.append(el('li', { html: `<a href="mailto:${D.contact.email}"><span class="k">Email</span> ${D.contact.email}</a>` }));
contactList.append(el('li', { html: `<a href="tel:${D.contact.phoneHref}"><span class="k">Phone</span> ${D.contact.phone}</a>` }));
contactList.append(el('li', { html: `<a href="${D.contact.websiteUrl}" target="_blank" rel="noopener"><span class="k">Web</span> ${D.contact.website}</a>` }));
contactList.append(el('li', { html: `<a href="#"><span class="k">Base</span> ${D.contact.location}</a>` }));

if (D.contact.socials && D.contact.socials.length) {
  const socialWrap = document.getElementById('social-links');
  D.contact.socials.forEach(s => {
    socialWrap.append(el('a', { class: 'social-pill', text: s.label, attrs: { href: s.url, target: '_blank', rel: 'noopener' } }));
  });
}

// ---------- Contact form (Web3Forms — sends straight to inbox, no mail app) ----------
const form = document.getElementById('contact-form');
const statusEl = document.getElementById('cf-status');
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // honeypot spam check — real users never fill this hidden field
    if (form.botcheck && form.botcheck.value) return;

    const submitBtn = document.getElementById('cf-submit');
    const originalLabel = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';
    if (statusEl) { statusEl.textContent = ''; statusEl.className = 'form-status'; }

    const payload = {
      access_key: D.contact.web3formsKey,
      name: document.getElementById('cf-name').value,
      email: document.getElementById('cf-email').value,
      subject: document.getElementById('cf-subject').value || 'New message from portfolio site',
      message: document.getElementById('cf-message').value
    };

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json();

      if (data.success) {
        form.reset();
        submitBtn.textContent = 'Message sent ✓';
        if (statusEl) { statusEl.textContent = 'Thanks — your message has been sent.'; statusEl.className = 'form-status success'; }
      } else {
        throw new Error(data.message || 'Submission failed');
      }
    } catch (err) {
      submitBtn.textContent = 'Send Message';
      if (statusEl) { statusEl.textContent = "Something went wrong — please email me directly instead."; statusEl.className = 'form-status error'; }
    } finally {
      submitBtn.disabled = false;
      setTimeout(() => { submitBtn.textContent = originalLabel; }, 4000);
    }
  });
}

// ---------- Footer ----------
document.getElementById('footer-text').innerHTML = `<span class="tag">// </span>${D.footer.text}`;

// ---------- Mobile nav toggle ----------
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.textContent = isOpen ? '✕' : '☰';
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
  // close the menu after tapping a link
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.textContent = '☰';
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// ---------- Scroll reveal ----------
const items = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: 0.12 });
items.forEach(i => io.observe(i));
