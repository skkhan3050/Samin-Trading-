import { renderHeader } from './components/Header.js';
import { renderHero } from './components/Hero.js';
import { renderMarketTicker } from './components/MarketTicker.js';
import { renderTrustedBrands } from './components/TrustedBrands.js';
import { renderAudienceCards } from './components/AudienceCards.js';
import { renderFeaturedStrategy } from './components/FeaturedStrategy.js';
import { renderStrategyProducts } from './components/StrategyProducts.js';
import { renderAccountPricing } from './components/AccountPricing.js';
import { renderMarketAnalysis } from './components/MarketAnalysis.js';
import { renderTradingProcess } from './components/TradingProcess.js';
import { renderEducation } from './components/Education.js';
import { renderLeaderboard } from './components/Leaderboard.js';
import { renderStrategyProduct } from './components/StrategyProduct.js';
import { renderWhyPlatform } from './components/WhyPlatform.js';
import { renderResidentialProxies } from './components/ResidentialProxies.js';
import { renderHumanSupportMap } from './components/HumanSupportMap.js';
import { renderPricing } from './components/Pricing.js';
import { renderCommunity } from './components/Community.js';
import { renderContactForm } from './components/ContactForm.js';
import { renderFAQ } from './components/FAQ.js';
import { renderRiskDisclaimer } from './components/RiskDisclaimer.js';
import { renderFooter } from './components/Footer.js';
import { initTradingCanvas } from './components/CyberCanvas.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize subtle background financial matrix canvas
  initTradingCanvas();

  // 2. Render all modular sections into their designated containers
  renderHeader(document.getElementById('site-header'));
  renderHero(document.getElementById('hero'));
  renderMarketTicker(document.getElementById('market-strip'));
  renderTrustedBrands(document.getElementById('trusted-brands'));
  renderHumanSupportMap(document.getElementById('human-support'));
  renderAudienceCards(document.getElementById('audience-cards'));
  renderFeaturedStrategy(document.getElementById('featured-strategy'));
  renderStrategyProducts(document.getElementById('strategy-products'));
  renderAccountPricing(document.getElementById('account-pricing'));
  renderMarketAnalysis(document.getElementById('market-analysis'));
  renderTradingProcess(document.getElementById('trading-process'));
  renderEducation(document.getElementById('trading-education'));
  renderLeaderboard(document.getElementById('leaderboard'));
  renderStrategyProduct(document.getElementById('premium-strategy'));
  renderWhyPlatform(document.getElementById('why-platform'));
  renderResidentialProxies(document.getElementById('residential-proxies'));
  renderPricing(document.getElementById('pricing'));
  renderCommunity(document.getElementById('community'));
  renderContactForm(document.getElementById('contact-form'));
  renderFAQ(document.getElementById('faq'));
  renderRiskDisclaimer(document.getElementById('risk-disclaimer'));
  renderFooter(document.getElementById('site-footer'));

  // 3. Smooth scroll handler for anchor links
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

  // 4. Subtle reveal on scroll using IntersectionObserver
  const observerOptions = {
    threshold: 0.08,
    rootMargin: '0px 0px -40px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  }, observerOptions);

  const interactiveCards = document.querySelectorAll(
    '.audience-card, .featured-strategy-card, .strategy-card, .price-card-flip-wrap, .analysis-panel, .process-card, .education-card, .premium-product-card, .stats-card-banner, .why-card, .proxy-hero-container, .map-sec-wrap, .pricing-card, .community-card, .demo-form-card, .faq-item, .price-card-face'
  );

  interactiveCards.forEach(el => {
    observer.observe(el);

    // Dynamic Glossy Spotlight Tracking on Every Card
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      el.style.setProperty('--mouse-x', `${x}px`);
      el.style.setProperty('--mouse-y', `${y}px`);
    });
  });
});
