export function renderApp() {
  return `
    <section class="section app-section" id="app">
      <div class="container app">
        <div class="app__content">
          <h2 class="app__title"><em>Download</em> our app to start ordering</h2>
          <p class="app__text">
            Download the Resource app today and experience the comfort of ordering your
            favorite coffee from wherever you are.
          </p>

          <div class="stores">
            <a href="#" class="store-btn">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M16.365 1.43c0 1.14-.42 2.2-1.26 3.03-.87.87-1.9 1.37-3.02 1.28-.03-1.15.45-2.24 1.25-3.06.83-.86 2.03-1.42 3.03-1.25zm3.6 16.06c-.55 1.27-.82 1.83-1.53 2.95-.99 1.55-2.39 3.48-4.11 3.5-1.53.02-1.92-.99-4-.97-2.07.02-2.5 1-4.03.98-1.73-.02-3.05-1.77-4.04-3.32C-.2 17.24-.5 12.4 1.44 9.87c1.05-1.35 2.7-2.21 4.25-2.21 1.58 0 2.57 1 3.88 1 1.27 0 2.04-1 3.87-1 1.38 0 2.84.75 3.88 2.05-3.41 1.87-2.86 6.74.64 7.78z"/>
              </svg>
              <span>
                <small>Available on the</small>
                <b>App Store</b>
              </span>
            </a>

            <a href="#" class="store-btn">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M3.6 1.8 14.4 12 3.6 22.2c-.3-.2-.6-.6-.6-1.1V2.9c0-.5.3-.9.6-1.1zm12.5 8.8 2.9 2.6c.6.5.6 1.3 0 1.8l-2.9 2.6L13.4 12l2.7-1.4zm-1.9-1-9.6-9 10.6 9-1-.9zM4.6 22l9.6-9-1 .9L4.6 22z"/>
              </svg>
              <span>
                <small>Available on</small>
                <b>Google Play</b>
              </span>
            </a>
          </div>
        </div>

        <div class="app__phones">
          <img
            src="https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?auto=format&fit=crop&w=900&q=80"
            alt="App preview"
          />
        </div>
      </div>
    </section>
  `;
}