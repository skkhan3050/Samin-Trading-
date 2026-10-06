import { showToast } from './Toast.js';

export function renderHeader(container) {
  if (!container) return;

  container.innerHTML = `
    <div class="container header-inner">
      <!-- Brand Logo -->
      <a href="/" class="brand-logo" id="header-brand-logo">
        <svg class="brand-logo-icon" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <!-- Candlestick Graphic -->
          <rect x="4" y="10" width="6" height="16" rx="1.5" fill="currentColor"/>
          <line x1="7" y1="4" x2="7" y2="10" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          <line x1="7" y1="26" x2="7" y2="32" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>

          <rect x="15" y="6" width="6" height="22" rx="1.5" fill="currentColor"/>
          <line x1="18" y1="2" x2="18" y2="6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          <line x1="18" y1="28" x2="18" y2="34" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>

          <rect x="26" y="14" width="6" height="12" rx="1.5" fill="currentColor"/>
          <line x1="29" y1="8" x2="29" y2="14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          <line x1="29" y1="26" x2="29" y2="30" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
        <span>TRADELAB</span>
        <span class="tag-badge" style="font-size: 0.65rem; padding: 2px 8px; margin-left: 4px; border-color: rgba(183, 255, 0, 0.4);">PRO V2.4</span>
      </a>

      <!-- Desktop Navigation -->
      <nav class="nav-desktop" aria-label="Main Navigation">
        <div class="nav-item">
          <a href="#market-strip" class="nav-link">Markets</a>
        </div>

        <div class="nav-item">
          <a href="/strategies.html" class="nav-link has-dropdown">
            <span>Strategies</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </a>
          <!-- Strategies Mega Menu -->
          <div class="mega-menu">
            <div>
              <div class="mega-col-title">By Trading Style</div>
              <a href="#strategy-products" class="mega-item">
                <span class="mega-item-title">Trend Trading Strategy</span>
                <span class="mega-item-desc">Momentum & multi-timeframe trend alignment</span>
              </a>
              <a href="#strategy-products" class="mega-item">
                <span class="mega-item-title">Breakout Trading Strategy</span>
                <span class="mega-item-desc">High volatility & range expansion setups</span>
              </a>
              <a href="#strategy-products" class="mega-item">
                <span class="mega-item-title">Market Structure Strategy</span>
                <span class="mega-item-desc">Order blocks, liquidity zones & sweeps</span>
              </a>
            </div>
            <div>
              <div class="mega-col-title">By Experience Level</div>
              <a href="#audience-cards" class="mega-item">
                <span class="mega-item-title">For Beginners</span>
                <span class="mega-item-desc">Chart analysis & risk management fundamentals</span>
              </a>
              <a href="#audience-cards" class="mega-item">
                <span class="mega-item-title">For Active Traders</span>
                <span class="mega-item-desc">Daily trade planning & structured setups</span>
              </a>
              <a href="#audience-cards" class="mega-item">
                <span class="mega-item-title">For Advanced Traders</span>
                <span class="mega-item-desc">Systematic frameworks & position sizing models</span>
              </a>
            </div>
            <div>
              <div class="mega-col-title">Strategy Frameworks</div>
              <a href="#featured-strategy" class="mega-item">
                <span class="mega-item-title">Trade Setup Architect</span>
                <span class="mega-item-desc">Entry, invalidation & take-profit mapping</span>
              </a>
              <a href="#trading-process" class="mega-item">
                <span class="mega-item-title">4-Step Execution Flow</span>
                <span class="mega-item-desc">Analyze, Plan, Manage Risk, Execute</span>
              </a>
              <a href="#premium-strategy" class="mega-item">
                <span class="mega-item-title">Complete Strategy Suite</span>
                <span class="mega-item-desc">Access all frameworks & checklists</span>
              </a>
            </div>
          </div>
        </div>

        <div class="nav-item">
          <a href="#trading-education" class="nav-link">Education</a>
        </div>

        <div class="nav-item">
          <a href="#market-analysis" class="nav-link">Analysis</a>
        </div>

        <div class="nav-item">
          <a href="#pricing" class="nav-link">Pricing</a>
        </div>

        <div class="nav-item">
          <a href="#faq" class="nav-link">Resources</a>
        </div>
      </nav>

      <!-- Right Action Items -->
      <div class="header-actions">
        <a href="#pricing" class="login-link" id="nav-login-btn">Log In</a>
        <a href="#strategy-products" class="btn btn-primary btn-sm" id="nav-explore-btn">Explore Strategies</a>
        <button class="mobile-menu-toggle" id="mobile-menu-toggle" aria-label="Open Navigation Menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Drawer -->
    <div class="mobile-drawer" id="mobile-drawer">
      <ul class="mobile-nav-list">
        <li><a href="#hero" class="mobile-nav-link">Home</a></li>
        <li><a href="#market-strip" class="mobile-nav-link">Markets</a></li>
        <li><a href="#strategy-products" class="mobile-nav-link">Strategies</a></li>
        <li><a href="#market-analysis" class="mobile-nav-link">Market Analysis</a></li>
        <li><a href="#trading-process" class="mobile-nav-link">How It Works</a></li>
        <li><a href="#trading-education" class="mobile-nav-link">Education</a></li>
        <li><a href="#pricing" class="mobile-nav-link">Strategy Plans</a></li>
        <li><a href="#community" class="mobile-nav-link">Community</a></li>
        <li><a href="#contact-form" class="mobile-nav-link">Contact & Inquiries</a></li>
      </ul>
      <div style="margin-top: auto; display: flex; flex-direction: column; gap: 12px;">
        <a href="#pricing" class="btn btn-secondary" style="width: 100%;">Log In</a>
        <a href="#strategy-products" class="btn btn-primary" style="width: 100%;">Explore Strategies</a>
      </div>
    </div>
  `;

  // Scroll detection & mobile menu handlers
  const headerEl = container;
  const toggleBtn = container.querySelector('#mobile-menu-toggle');
  const mobileDrawer = container.querySelector('#mobile-drawer');
  const mobileLinks = container.querySelectorAll('.mobile-nav-link');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      headerEl.classList.add('scrolled');
    } else {
      headerEl.classList.remove('scrolled');
    }
  });

  const toggleMobileMenu = () => {
    mobileDrawer.classList.toggle('open');
    const isOpen = mobileDrawer.classList.contains('open');
    toggleBtn.innerHTML = isOpen 
      ? `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`
      : `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`;
  };

  toggleBtn?.addEventListener('click', toggleMobileMenu);

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileDrawer.classList.remove('open');
      toggleBtn.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`;
    });
  });

  const loginBtn = container.querySelector('#nav-login-btn');
  loginBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    showToast('TRADELAB Portal', 'Member dashboard access gateway ready. Select a strategy plan below.');
    document.querySelector('#pricing')?.scrollIntoView({ behavior: 'smooth' });
  });
}
