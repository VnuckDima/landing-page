export function renderAbout() {
  return `
    <section class="section about" id="about">
      <div class="container">
        <h2 class="about__title">
          Resource is <em>the perfect and cozy place</em> where you can enjoy a variety
          of hot beverages, relax, catch up with friends, or get some work done.
        </h2>

        <div class="gallery">
          <div class="gallery__col">
            <div class="gallery__item gallery__item--tall">
              <img src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=800&q=80" alt="" />
            </div>
            <div class="gallery__item">
              <img src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=800&q=80" alt="" />
            </div>
          </div>
          <div class="gallery__col">
            <div class="gallery__item">
              <img src="https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=80" alt="" />
            </div>
            <div class="gallery__item gallery__item--tall">
              <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}