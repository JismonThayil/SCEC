const header = document.querySelector('#site-header');
const footer = document.querySelector('#site-footer');
const currentPage = location.pathname.split('/').pop() || 'index.html';
const navItems = [
  ['index.html', 'Home'], ['about.html', 'About'], ['contact.html', 'Contact'], ['location.html', 'Location']
];

if (header) {
  header.innerHTML = `<nav class="navbar navbar-expand-lg site-nav"><div class="container"><a class="navbar-brand brand-lockup" href="index.html" aria-label="SCEC home"><span class="brand-symbol"><span></span><span></span><span></span></span><span class="brand-type"><strong>SCEC</strong><small>SANTHIGIRI COLLEGE</small></span></a><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="mainNav"><ul class="navbar-nav ms-auto align-items-lg-center">${navItems.map(([url, label]) => `<li class="nav-item"><a class="nav-link ${currentPage === url ? 'active' : ''}" ${currentPage === url ? 'aria-current="page"' : ''} href="${url}">${label}</a></li>`).join('')}<li class="nav-item ms-lg-3"><a class="nav-cta" href="contact.html">Get involved <i class="bi bi-arrow-up-right"></i></a></li></ul></div></div></nav>`;
}

if (footer) {
  footer.innerHTML = `<footer class="site-footer"><div class="container"><div class="footer-main row g-5"><div class="col-lg-5"><a class="brand-lockup footer-brand" href="index.html"><span class="brand-symbol"><span></span><span></span><span></span></span><span class="brand-type"><strong>SCEC</strong><small>SANTHIGIRI COLLEGE</small></span></a><p class="footer-intro">Building skills, developing professionals and creating careers.</p></div><div class="col-6 col-lg-3"><h3>Explore</h3><a href="about.html">About SCEC</a><a href="about.html#domains">Learning domains</a><a href="contact.html">Contact the club</a></div><div class="col-6 col-lg-4"><h3>Find us</h3><p>Santhigiri College<br>Vazhithala, Thodupuzha<br>Kerala, India</p><a class="footer-map-link" href="location.html">View location <i class="bi bi-arrow-up-right"></i></a></div></div><div class="footer-bottom"><span>© ${new Date().getFullYear()} Santhigiri Career Excellence Club</span><span>An academic initiative of Santhigiri College</span></div></div></footer>`;
}

const contactForm = document.querySelector('#contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', event => {
    event.preventDefault();
    if (!contactForm.reportValidity()) return;
    const values = new FormData(contactForm);
    const subject = encodeURIComponent(`SCEC enquiry: ${values.get('topic')}`);
    const body = encodeURIComponent(`Name: ${values.get('name')}\nEmail: ${values.get('email')}\nTopic: ${values.get('topic')}\n\n${values.get('message')}`);
    document.querySelector('#form-feedback').textContent = 'Opening your email app with your message…';
    location.href = `mailto:office@santhigiricollege.ac.in?subject=${subject}&body=${body}`;
  });
}
