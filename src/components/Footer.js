export function renderFooter(container) {
  if (!container) return;

  container.innerHTML = `
    <div class="container">
      <!-- 5-Column Grid -->
      <div class="footer-top-grid">
        <!-- Col 1: Brand -->
        <div class="footer-brand-col">
          <a href="#" class="brand-logo">
            <svg class="brand-logo-icon" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
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
          </a>

          <p class="footer-brand-desc">
            Structured crypto trading strategies, technical market analysis, and disciplined risk management education for serious traders.
          </p>

          <a href="#strategy-products" class="btn btn-primary btn-sm" style="align-self: flex-start;">
            <span>Explore Strategies</span>
          </a>

          <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-top: 8px;">
            <span style="font-family: var(--font-mono); font-size: 0.7rem; color: var(--text-muted); background: rgba(255,255,255,0.03); padding: 4px 8px; border-radius: 4px; border: 1px solid var(--border-subtle);">📊 Price Action</span>
            <span style="font-family: var(--font-mono); font-size: 0.7rem; color: var(--text-muted); background: rgba(255,255,255,0.03); padding: 4px 8px; border-radius: 4px; border: 1px solid var(--border-subtle);">🛡️ Risk-First</span>
            <span style="font-family: var(--font-mono); font-size: 0.7rem; color: var(--text-muted); background: rgba(255,255,255,0.03); padding: 4px 8px; border-radius: 4px; border: 1px solid var(--border-subtle);">⚡ Systematic</span>
          </div>
        </div>

        <!-- Col 2: Trading -->
        <div>
          <div class="footer-col-title">Trading</div>
          <ul class="footer-links-list">
            <li><a href="#market-strip" class="footer-link">Markets</a></li>
            <li><a href="#strategy-products" class="footer-link">Trading Strategies</a></li>
            <li><a href="#market-analysis" class="footer-link">Market Analysis</a></li>
            <li><a href="#strategy-products" class="footer-link">Trend Trading</a></li>
            <li><a href="#strategy-products" class="footer-link">Breakout Models</a></li>
            <li><a href="#strategy-products" class="footer-link">Market Structure</a></li>
            <li><a href="#premium-strategy" class="footer-link">Trading Tools</a></li>
          </ul>
        </div>

        <!-- Col 3: Education -->
        <div>
          <div class="footer-col-title">Education</div>
          <ul class="footer-links-list">
            <li><a href="#audience-cards" class="footer-link">Trading Basics</a></li>
            <li><a href="#trading-education" class="footer-link">Technical Analysis</a></li>
            <li><a href="#trading-education" class="footer-link">Risk Management</a></li>
            <li><a href="#trading-education" class="footer-link">Trading Psychology</a></li>
            <li><a href="#trading-education" class="footer-link">Trade Management</a></li>
            <li><a href="#trading-process" class="footer-link">4-Step Execution Flow</a></li>
            <li><a href="#education" class="footer-link">Checklist Library</a></li>
          </ul>
        </div>

        <!-- Col 4: Resources -->
        <div>
          <div class="footer-col-title">Resources</div>
          <ul class="footer-links-list">
            <li><a href="#featured-strategy" class="footer-link">Market Insights</a></li>
            <li><a href="#trading-education" class="footer-link">Trading Guides</a></li>
            <li><a href="#faq" class="footer-link">FAQ</a></li>
            <li><a href="#market-analysis" class="footer-link">Bitcoin Briefings</a></li>
            <li><a href="#market-analysis" class="footer-link">Ethereum Research</a></li>
            <li><a href="#community" class="footer-link">Trader Network</a></li>
            <li><a href="#contact-form" class="footer-link">Strategy Inquiries</a></li>
          </ul>
        </div>

        <!-- Col 5: Company -->
        <div>
          <div class="footer-col-title">Company</div>
          <ul class="footer-links-list">
            <li><a href="#why-platform" class="footer-link">About TRADELAB</a></li>
            <li><a href="#why-platform" class="footer-link">Our Methodology</a></li>
            <li><a href="#pricing" class="footer-link">Strategy Plans</a></li>
            <li><a href="#contact-form" class="footer-link">Contact Us</a></li>
            <li><a href="#risk-disclaimer" class="footer-link">Risk Disclaimer</a></li>
            <li><a href="#faq" class="footer-link">Privacy Policy</a></li>
            <li><a href="#faq" class="footer-link">Terms of Service</a></li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="footer-bottom">
        <div class="footer-social-links">
          <!-- Twitter / X -->
          <a href="#" class="social-icon-link" aria-label="X / Twitter">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
            </svg>
          </a>
          <!-- YouTube -->
          <a href="#" class="social-icon-link" aria-label="YouTube">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
              <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
            </svg>
          </a>
          <!-- Telegram -->
          <a href="#" class="social-icon-link" aria-label="Telegram">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </a>
          <!-- Instagram -->
          <a href="#" class="social-icon-link" aria-label="Instagram">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
          <!-- LinkedIn -->
          <a href="#" class="social-icon-link" aria-label="LinkedIn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
        </div>

        <div class="footer-legal-links">
          <a href="#faq">Privacy Policy</a>
          <a href="#faq">Terms of Use</a>
          <a href="#risk-disclaimer">Risk Disclosure</a>
          <a href="#faq">Cookie Preferences</a>
        </div>

        <div class="footer-copyright">
          © 2026 TRADELAB Technologies Inc. All rights reserved.
        </div>
      </div>
    </div>
  `;
}
