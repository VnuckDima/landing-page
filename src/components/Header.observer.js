export function initNavObserver() {
  const navLinks = document.querySelectorAll('.nav a[href^="#"]');
  const sections = [...navLinks]
    .map((a) => document.querySelector(a.getAttribute('href')))
    .filter(Boolean);

  if (!sections.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((a) =>
            a.classList.toggle(
              'is-active',
              a.getAttribute('href') === `#${entry.target.id}`
            )
          );
        }
      });
    },
    { rootMargin: '-40% 0px -55% 0px' }
  );

  sections.forEach((s) => observer.observe(s));

  return {
    destroy() {
      sections.forEach((s) => observer.unobserve(s));
      observer.disconnect();
    }
  };
}