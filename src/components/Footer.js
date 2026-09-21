export function renderFooter() {
  return `
    <footer class="footer" id="contact">
      <div class="container">
        <div class="footer__card">
          <div>
            <h2 class="footer__title">
              Sip, Savor, Smile.<br />
              <em>It's coffee time!</em>
            </h2>

            <div class="socials">
              <a href="https://twitter.com/resourcecoffee" target="_blank" rel="noopener" aria-label="Twitter">🐦</a>
              <a href="https://instagram.com/resourcecoffee" target="_blank" rel="noopener" aria-label="Instagram">📷</a>
              <a href="https://facebook.com/resourcecoffee" target="_blank" rel="noopener" aria-label="Facebook">f</a>
            </div>
          </div>

          <div class="contacts">
            <h3 class="contacts__title">Contact us</h3>

            <a href="https://maps.google.com/?q=8558+Green+Rd.,+LA" target="_blank" rel="noopener" class="contacts__item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true">
                <path d="M12 21s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11z"/>
                <circle cx="12" cy="10" r="2.5"/>
              </svg>
              <span>8558 Green Rd., LA</span>
            </a>

            <a href="tel:+16035550123" class="contacts__item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true">
                <path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.6a2 2 0 0 1-.5 2.1L8.1 9.6a16 16 0 0 0 6.3 6.3l1.2-1.2a2 2 0 0 1 2.1-.5c.8.3 1.7.6 2.6.7a2 2 0 0 1 1.7 2z"/>
              </svg>
              <span>+1 (603) 555-0123</span>
            </a>

            <div class="contacts__item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true">
                <circle cx="12" cy="12" r="9"/>
                <path d="M12 7v5l3 2"/>
              </svg>
              <span>Mon-Sat: 9:00-23:00</span>
            </div>
          </div>
        </div>

        <div class="footer__bottom">
          <p>© 2026 Resource Coffee House. Made with ☕.</p>
          <p>Designed by RS School.</p>
        </div>
      </div>
    </footer>
  `;
}