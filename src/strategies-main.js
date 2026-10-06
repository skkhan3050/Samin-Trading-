import { initTradingCanvas } from './components/CyberCanvas.js';
import { renderFooter } from './components/Footer.js';
import {
  renderStrategiesHeader,
  renderStrategiesHero,
  renderStrategiesTicker,
  renderStrategiesIntro,
  renderStrategiesCatalog,
  renderFeaturedProcess,
  renderStrategiesSteps,
  renderStrategyCategoryFilter,
  renderStrategiesEducation,
  renderTradingTools,
  renderStrategiesPurchase,
  renderStrategiesTestimonials,
  renderResourceBanner,
  renderStrategiesContact,
  renderStrategiesFAQ,
  renderStrategiesDisclaimer
} from './components/StrategiesPageComponents.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Subtle Background Matrix Canvas
  initTradingCanvas();

  // 2. Render all Strategies page sections
  renderStrategiesHeader(document.getElementById('site-header'));
  renderStrategiesHero(document.getElementById('strategy-hero'));
  renderStrategiesTicker(document.getElementById('strategy-ticker'));
  renderStrategiesIntro(document.getElementById('strategy-intro'));
  renderStrategiesCatalog(document.getElementById('strategy-catalog'));
  renderFeaturedProcess(document.getElementById('featured-process'));
  renderStrategiesSteps(document.getElementById('strategy-framework'));
  renderStrategyCategoryFilter(document.getElementById('strategy-filter-section'));
  renderStrategiesEducation(document.getElementById('strategy-education'));
  renderTradingTools(document.getElementById('trading-tools'));
  renderStrategiesPurchase(document.getElementById('strategy-pricing'));
  renderStrategiesTestimonials(document.getElementById('strategy-testimonials'));
  renderResourceBanner(document.getElementById('resource-banner'));
  renderStrategiesContact(document.getElementById('strategy-contact'));
  renderStrategiesFAQ(document.getElementById('strategy-faq'));
  renderStrategiesDisclaimer(document.getElementById('strategy-disclaimer'));
  renderFooter(document.getElementById('site-footer'));

  // 3. Smooth scrolling for internal anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          targetEl.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });

  // 4. Subtle scroll observer for animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.strategy-card, .featured-strategy-card, .process-card, .education-card, .why-card, .pricing-card, .audience-card, .demo-form-card, .faq-item').forEach(el => {
    observer.observe(el);
  });
});
