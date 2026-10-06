import { showToast } from './Toast.js';

export function renderContactForm(container) {
  if (!container) return;

  container.innerHTML = `
    <div class="container">
      <div class="demo-grid">
        <!-- Left Column: Form -->
        <div class="demo-form-card">
          <div class="form-header">
            <h2 class="form-header-title">Get More Information About Our Trading Strategies</h2>
            <p class="form-header-desc">
              Connect with our strategy team to receive detailed sample modules, framework documentation, and custom package advice.
            </p>
          </div>

          <form id="crypto-contact-form" class="cyber-form" novalidate>
            <div class="form-row-2">
              <div class="form-group">
                <label for="firstName" class="form-label">First Name *</label>
                <input type="text" id="firstName" name="firstName" class="form-input" placeholder="Jordan" required />
              </div>
              <div class="form-group">
                <label for="lastName" class="form-label">Last Name *</label>
                <input type="text" id="lastName" name="lastName" class="form-input" placeholder="Miller" required />
              </div>
            </div>

            <div class="form-row-2">
              <div class="form-group">
                <label for="email" class="form-label">Email Address *</label>
                <input type="email" id="email" name="email" class="form-input" placeholder="jordan.miller@example.com" required />
              </div>
              <div class="form-group">
                <label for="phone" class="form-label">Phone Number</label>
                <input type="tel" id="phone" name="phone" class="form-input" placeholder="+1 (555) 342-9102" />
              </div>
            </div>

            <div class="form-row-2">
              <div class="form-group">
                <label for="tradingExp" class="form-label">Trading Experience *</label>
                <select id="tradingExp" name="tradingExp" class="form-select" required>
                  <option value="" disabled selected>Select Experience</option>
                  <option value="beginner">Beginner (0 - 1 years)</option>
                  <option value="intermediate">Intermediate (1 - 3 years)</option>
                  <option value="advanced">Advanced (3+ years)</option>
                </select>
              </div>
              <div class="form-group">
                <label for="primaryMarket" class="form-label">Primary Market *</label>
                <select id="primaryMarket" name="primaryMarket" class="form-select" required>
                  <option value="" disabled selected>Select Market Focus</option>
                  <option value="bitcoin">Bitcoin (BTC)</option>
                  <option value="ethereum">Ethereum (ETH)</option>
                  <option value="altcoins">Altcoins / Micro-caps</option>
                  <option value="multiple">Multiple / All Markets</option>
                </select>
              </div>
            </div>

            <div class="form-group">
              <label for="strategyInterest" class="form-label">Interested Strategy *</label>
              <select id="strategyInterest" name="strategyInterest" class="form-select" required>
                <option value="" disabled selected>Select Strategy Framework</option>
                <option value="trend">Trend Trading Strategy</option>
                <option value="breakout">Breakout Trading Strategy</option>
                <option value="structure">Market Structure Strategy</option>
                <option value="risk">Risk Management & Position Sizing</option>
                <option value="complete">Complete Strategy Package (All-Inclusive)</option>
              </select>
            </div>

            <div class="form-group">
              <label for="message" class="form-label">Trading Goals & Questions</label>
              <textarea id="message" name="message" class="form-textarea" placeholder="Tell us about your current trading style, challenges, or specific questions..."></textarea>
            </div>

            <button type="submit" class="btn btn-primary form-submit-btn" id="contact-submit-btn">
              <span>Request Details</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </form>
        </div>

        <!-- Right Column: Value Prop & Trust -->
        <div class="demo-info-col">
          <span class="tag-label">
            <span class="tag-dot"></span>
            DISCIPLINED EXECUTION
          </span>

          <h2 class="demo-info-title">
            Everything You Need to Build a More Structured Trading Process
          </h2>

          <p class="demo-info-desc">
            Stop letting emotion dictate trade entries and exits. Build consistency with institutional-grade technical analysis and risk parameters.
          </p>

          <ul class="demo-benefits-list">
            <li class="demo-benefit-item">
              <div class="benefit-icon-badge">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9DD82B" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                  <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                  <polyline points="2 17 12 22 22 17"></polyline>
                  <polyline points="2 12 12 17 22 12"></polyline>
                </svg>
              </div>
              <div class="benefit-content">
                <strong class="benefit-title">Practical Strategy Frameworks</strong>
                <p class="benefit-desc">Step-by-step setup rules for trending and range-bound crypto markets.</p>
              </div>
            </li>

            <li class="demo-benefit-item">
              <div class="benefit-icon-badge">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00E5FF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  <polyline points="9 12 11 14 15 10"></polyline>
                </svg>
              </div>
              <div class="benefit-content">
                <strong class="benefit-title">Rigorous Risk Management Concepts</strong>
                <p class="benefit-desc">Preserve your capital with mathematical position sizing and stop-loss logic.</p>
              </div>
            </li>

            <li class="demo-benefit-item">
              <div class="benefit-icon-badge">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#38E879" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <div class="benefit-content">
                <strong class="benefit-title">Trading Psychology &amp; Journaling</strong>
                <p class="benefit-desc">Master emotional discipline and document setups with repeatable audit routines.</p>
              </div>
            </li>
          </ul>

          <div style="border-top: 1px solid var(--border-subtle); padding-top: 24px; margin-top: 8px;">
            <div style="font-size: 0.75rem; font-family: var(--font-mono); text-transform: uppercase; color: var(--text-muted); margin-bottom: 12px;">
              Integrated Technical & Charting Compatibility:
            </div>
            <div style="display: flex; flex-wrap: wrap; gap: 10px;">
              <span style="padding: 6px 14px; background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle); border-radius: 4px; font-size: 0.85rem; font-weight: 600; color: var(--text-secondary);">TradingView</span>
              <span style="padding: 6px 14px; background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle); border-radius: 4px; font-size: 0.85rem; font-weight: 600; color: var(--text-secondary);">Binance Data</span>
              <span style="padding: 6px 14px; background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle); border-radius: 4px; font-size: 0.85rem; font-weight: 600; color: var(--text-secondary);">Bybit Feeds</span>
              <span style="padding: 6px 14px; background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle); border-radius: 4px; font-size: 0.85rem; font-weight: 600; color: var(--text-secondary);">Coinbase Pro</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  // Attach submit handler
  const form = container.querySelector('#crypto-contact-form');
  const submitBtn = container.querySelector('#contact-submit-btn');

  form?.addEventListener('submit', (e) => {
    e.preventDefault();

    const firstName = form.querySelector('#firstName').value.trim();
    const email = form.querySelector('#email').value.trim();
    const tradingExp = form.querySelector('#tradingExp').value;
    const strategyInterest = form.querySelector('#strategyInterest').value;

    if (!firstName || !email || !tradingExp || !strategyInterest) {
      showToast('Please complete all required fields', 'First name, email, experience level, and strategy are required.', 'error');
      return;
    }

    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="animation: geo-spin 1s linear infinite;">
        <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
        <path d="M12 2a10 10 0 0 1 10 10" stroke-linecap="round"></path>
      </svg>
      <span>Processing Request...</span>
    `;

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = `
        <span>Request Details</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      `;
      form.reset();
      showToast('Strategy Details Sent!', `Thank you, ${firstName}. Our strategy team has dispatched your strategy overview package to ${email}.`);
    }, 1200);
  });
}
