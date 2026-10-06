import { showToast } from './Toast.js';

// 1. Header for Strategies Page (Highlights Strategies nav item in neon green)
export function renderStrategiesHeader(container) {
  if (!container) return;

  container.innerHTML = `
    <div class="container header-inner">
      <!-- Brand Logo -->
      <a href="${import.meta.env.BASE_URL}" class="brand-logo" id="header-brand-logo">
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

      <!-- Desktop Navigation -->
      <nav class="nav-desktop" aria-label="Main Navigation">
        <div class="nav-item">
          <a href="${import.meta.env.BASE_URL}#market-strip" class="nav-link">Markets</a>
        </div>

        <div class="nav-item active">
          <a href="${import.meta.env.BASE_URL}strategies.html" class="nav-link" style="color: var(--neon-green); font-weight: 700;">
            <span>Strategies</span>
          </a>
        </div>

        <div class="nav-item">
          <a href="${import.meta.env.BASE_URL}#trading-education" class="nav-link">Education</a>
        </div>

        <div class="nav-item">
          <a href="${import.meta.env.BASE_URL}#market-analysis" class="nav-link">Analysis</a>
        </div>

        <div class="nav-item">
          <a href="#strategy-pricing" class="nav-link">Pricing</a>
        </div>

        <div class="nav-item">
          <a href="#strategy-faq" class="nav-link">Resources</a>
        </div>
      </nav>

      <!-- Right Action Items -->
      <div class="header-actions">
        <a href="#strategy-pricing" class="login-link" id="nav-login-btn">Log In</a>
        <a href="#strategy-catalog" class="btn btn-primary btn-sm">Start Trading Education</a>
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
        <li><a href="${import.meta.env.BASE_URL}" class="mobile-nav-link">Home</a></li>
        <li><a href="${import.meta.env.BASE_URL}strategies.html" class="mobile-nav-link" style="color: var(--neon-green);">Strategies (Active)</a></li>
        <li><a href="${import.meta.env.BASE_URL}#market-strip" class="mobile-nav-link">Markets</a></li>
        <li><a href="${import.meta.env.BASE_URL}#trading-education" class="mobile-nav-link">Education</a></li>
        <li><a href="${import.meta.env.BASE_URL}#market-analysis" class="mobile-nav-link">Analysis</a></li>
        <li><a href="#strategy-pricing" class="mobile-nav-link">Pricing</a></li>
        <li><a href="#strategy-faq" class="mobile-nav-link">FAQ & Resources</a></li>
      </ul>
      <div style="margin-top: auto; display: flex; flex-direction: column; gap: 12px;">
        <a href="#strategy-pricing" class="btn btn-secondary" style="width: 100%;">Log In</a>
        <a href="#strategy-catalog" class="btn btn-primary" style="width: 100%;">Start Trading Education</a>
      </div>
    </div>
  `;

  // Attach handlers
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
}

// 2. Strategies Page Hero
export function renderStrategiesHero(container) {
  if (!container) return;

  container.innerHTML = `
    <div class="container">
      <div class="hero-grid">
        <div class="hero-content">
          <div class="hero-badge-wrap">
            <span class="tag-badge">
              <span class="tag-dot"></span>
              CRYPTO TRADING STRATEGIES
            </span>
          </div>

          <h1 class="heading-xl hero-title">
            Trade With a Plan.<br/>
            <span style="color: var(--neon-green);">Not With Emotion.</span>
          </h1>

          <p class="text-lead hero-description">
            Structured crypto trading strategies built around market analysis, technical setups and disciplined risk management.
          </p>
          <p class="text-body" style="color: var(--text-secondary); margin-top: -12px;">
            Explore practical strategy frameworks designed to help traders understand market conditions, plan trades and manage risk with a structured process.
          </p>

          <div class="hero-cta-group">
            <a href="#strategy-catalog" class="btn btn-primary btn-lg">
              <span>Explore Strategies</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
            <a href="#strategy-framework" class="btn btn-secondary btn-lg">
              <span>How It Works</span>
            </a>
          </div>
        </div>

        <!-- Hero Right: Original Crypto Strategy Visual -->
        <div class="hero-visual-card">
          <div class="hero-visual-header">
            <div class="hero-terminal-dots">
              <span class="terminal-dot dot-red"></span>
              <span class="terminal-dot dot-yellow"></span>
              <span class="terminal-dot dot-green"></span>
            </div>
            <div class="hero-terminal-title">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#B7FF00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                <polyline points="16 7 22 7 22 13"></polyline>
              </svg>
              <span>BTC/USDT & ETH/USDT // STRATEGY_ENGINE</span>
            </div>
            <div style="font-size: 0.7rem; font-family: var(--font-mono); color: var(--neon-green);">
              [● VERIFIED MODEL]
            </div>
          </div>

          <div class="hero-chart-container">
            <svg viewBox="0 0 540 320" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: auto; display: block;">
              <rect width="540" height="320" fill="#08111F"/>
              <line x1="30" y1="60" x2="510" y2="60" stroke="rgba(255,255,255,0.04)" stroke-width="1"/>
              <line x1="30" y1="120" x2="510" y2="120" stroke="rgba(255,255,255,0.04)" stroke-width="1"/>
              <line x1="30" y1="180" x2="510" y2="180" stroke="rgba(255,255,255,0.04)" stroke-width="1"/>
              <line x1="30" y1="240" x2="510" y2="240" stroke="rgba(255,255,255,0.04)" stroke-width="1"/>

              <!-- Trendline & Channel -->
              <path d="M40 250 L140 180 L230 210 L340 110 L420 140 L490 60" stroke="#00E5FF" stroke-width="2.5" fill="none"/>

              <!-- Entry Setup Box -->
              <rect x="200" y="145" width="160" height="40" rx="4" fill="rgba(183, 255, 0, 0.12)" stroke="#B7FF00" stroke-width="1.5"/>
              <text x="280" y="165" fill="#B7FF00" font-family="monospace" font-size="9" font-weight="bold" text-anchor="middle">EXECUTION TRIGGER: 4H CONFIRM</text>
              <text x="280" y="178" fill="#FFFFFF" font-family="monospace" font-size="8" text-anchor="middle">RISK BUDGET: 1.0% MAX</text>

              <!-- Invalidation Level -->
              <line x1="180" y1="230" x2="400" y2="230" stroke="#FF3B69" stroke-width="2" stroke-dasharray="3 3"/>
              <text x="290" y="245" fill="#FF3B69" font-family="monospace" font-size="8" font-weight="bold" text-anchor="middle">INVALIDATION LEVEL (STOP LOSS)</text>

              <!-- Profit Target -->
              <line x1="320" y1="70" x2="510" y2="70" stroke="#38E879" stroke-width="2" stroke-dasharray="3 3"/>
              <text x="415" y="85" fill="#38E879" font-family="monospace" font-size="8" font-weight="bold" text-anchor="middle">TAKE PROFIT (TP1 / TP2)</text>
            </svg>

            <div class="hero-floating-stat">
              <div class="stat-item-badge">
                <span class="stat-item-label">Strategy Methodology</span>
                <span class="stat-item-val">MULTI-TIMEFRAME</span>
              </div>
              <div class="stat-item-badge">
                <span class="stat-item-label">Execution Process</span>
                <span class="stat-item-val" style="color: #00E5FF;">RULE-BASED ONLY</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// 3. Market Ticker
export function renderStrategiesTicker(container) {
  if (!container) return;

  const pairs = [
    { name: "BTC/USDT", tag: "Market Analysis", type: "up" },
    { name: "ETH/USDT", tag: "Technical Setup", type: "up" },
    { name: "SOL/USDT", tag: "Trend Analysis", type: "up" },
    { name: "BNB/USDT", tag: "Risk Framework", type: "neutral" },
    { name: "XRP/USDT", tag: "Market Structure", type: "up" }
  ];

  container.innerHTML = `
    <div class="container">
      <div class="trust-title">
        STRATEGY COVERAGE ACROSS MAJOR CRYPTO MARKETS
      </div>

      <div class="market-ticker-grid">
        ${pairs.map(p => `
          <div class="ticker-item">
            <span class="ticker-pair">${p.name}</span>
            <span style="font-size: 0.8rem; color: var(--neon-green); font-weight: 600;">[${p.tag}]</span>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// 4. Intro Section
export function renderStrategiesIntro(container) {
  if (!container) return;

  container.innerHTML = `
    <div class="container intro-content">
      <span class="tag-label">
        <span class="tag-dot"></span>
        TRADING STRATEGIES
      </span>
      <h2 class="intro-heading">
        Structured Strategies for Different Market Conditions
      </h2>
      <p class="text-lead intro-desc">
        Every strategy is built around defined market conditions, entry logic, risk management and trade execution principles.
      </p>
    </div>
  `;
}

// 5. Strategy Catalog (3 Main Cards)
export function renderStrategiesCatalog(container) {
  if (!container) return;

  const catalog = [
    {
      category: "DIRECTIONAL MOMENTUM",
      title: "Trend Trading Strategy",
      desc: "Learn a structured framework for identifying trends, planning entries and managing trades in directional markets.",
      points: [
        "Trend identification & MA alignment",
        "Market structure confirmation",
        "Pullback entry framework",
        "Stop-loss planning & trailing rules",
        "Active trade management"
      ],
      cta: "View Strategy"
    },
    {
      category: "RANGE EXPANSION",
      title: "Breakout Trading Strategy",
      desc: "Learn how to evaluate breakout conditions, confirmation signals and risk before entering a trade.",
      points: [
        "Breakout identification & ranges",
        "Volume & delta confirmation",
        "Entry planning & retest criteria",
        "Risk/reward ratio optimization",
        "Systematic exit framework"
      ],
      cta: "View Strategy"
    },
    {
      category: "INSTITUTIONAL LIQUIDITY",
      title: "Market Structure Strategy",
      desc: "Build a structured approach to reading price action, support, resistance and market structure.",
      points: [
        "Support & resistance mapping",
        "Market structure shifts (BOS)",
        "Liquidity concepts & sweeps",
        "Limit entry planning",
        "Capital preservation & management"
      ],
      cta: "View Strategy"
    }
  ];

  container.innerHTML = `
    <div class="container">
      <div class="strategy-grid">
        ${catalog.map(c => `
          <div class="strategy-card">
            <span class="strategy-badge">${c.category}</span>
            <h3 class="strategy-card-title">${c.title}</h3>
            <p class="text-body" style="font-size: 0.9rem;">${c.desc}</p>
            
            <ul class="strategy-features-list">
              ${c.points.map(p => `
                <li class="strategy-feature-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>${p}</span>
                </li>
              `).join('')}
            </ul>

            <a href="#strategy-pricing" class="btn btn-primary" style="margin-top: 12px; width: 100%;">
              <span>${c.cta}</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// 6. Featured Strategy (Repeatable Process)
export function renderFeaturedProcess(container) {
  if (!container) return;

  container.innerHTML = `
    <div class="container">
      <div class="section-header-tag">
        <span class="tag-label">
          <span class="tag-dot"></span>
          FEATURED STRATEGY
        </span>
        <div class="line"></div>
      </div>

      <div class="featured-strategy-card">
        <div class="featured-content">
          <h3 class="featured-title">
            Build a Repeatable Trading Process
          </h3>
          <p class="featured-desc">
            Learn how to move from market analysis to trade planning with a structured framework. Follow a defined sequence on every trade setup:
          </p>

          <div style="background: rgba(8, 17, 31, 0.7); border: 1px solid var(--border-subtle); border-radius: 8px; padding: 18px 20px; font-family: var(--font-mono); font-size: 0.85rem; color: var(--text-main); display: flex; flex-direction: column; gap: 8px;">
            <div style="color: var(--neon-green);">01. Market Analysis</div>
            <div style="color: var(--text-muted); font-size: 0.75rem;">↓</div>
            <div style="color: #00E5FF;">02. Trade Setup Identification</div>
            <div style="color: var(--text-muted); font-size: 0.75rem;">↓</div>
            <div style="color: #FFFFFF;">03. Risk Assessment & Position Sizing</div>
            <div style="color: var(--text-muted); font-size: 0.75rem;">↓</div>
            <div style="color: var(--neon-green);">04. Planned Entry Execution</div>
            <div style="color: var(--text-muted); font-size: 0.75rem;">↓</div>
            <div style="color: #38E879;">05. Trade Management & Systematic Exit</div>
          </div>

          <a href="#strategy-pricing" class="btn btn-primary" style="align-self: flex-start; margin-top: 8px;">
            <span>Explore Featured Strategy</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>

        <!-- Dashboard Visual -->
        <div class="featured-visual">
          <svg viewBox="0 0 500 320" fill="none" xmlns="http://www.w3.org/2000/svg" class="featured-3d-chart-svg" style="width:100%; height:100%;">
            <defs>
              <!-- 3D Curved Outer Border Gradients -->
              <linearGradient id="border3dOuterGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#9DD82B" stop-opacity="0.85"/>
                <stop offset="35%" stop-color="#38E879" stop-opacity="0.5"/>
                <stop offset="70%" stop-color="#00E5FF" stop-opacity="0.3"/>
                <stop offset="100%" stop-color="#040C04" stop-opacity="0.9"/>
              </linearGradient>
              <linearGradient id="border3dInnerGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#9DD82B" stop-opacity="0.6"/>
                <stop offset="50%" stop-color="#00E5FF" stop-opacity="0.2"/>
                <stop offset="100%" stop-color="#9DD82B" stop-opacity="0.4"/>
              </linearGradient>
              <radialGradient id="featChartGlow2" cx="65%" cy="40%" r="55%">
                <stop offset="0%" stop-color="#9DD82B" stop-opacity="0.25"/>
                <stop offset="60%" stop-color="#00E5FF" stop-opacity="0.08"/>
                <stop offset="100%" stop-color="#060C18" stop-opacity="0"/>
              </radialGradient>
              <linearGradient id="volSpikeGrad2" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#9DD82B"/>
                <stop offset="100%" stop-color="#10E76F"/>
              </linearGradient>
            </defs>

            <!-- 3D Beveled Outer Curved Frame -->
            <rect x="2" y="2" width="496" height="316" rx="20" fill="#050A14" stroke="url(#border3dOuterGrad2)" stroke-width="2" filter="drop-shadow(0 0 12px rgba(157, 216, 43, 0.25))"/>
            <!-- 3D Inset Curved Rim -->
            <rect x="7" y="7" width="486" height="306" rx="15" fill="none" stroke="url(#border3dInnerGrad2)" stroke-width="1.2" opacity="0.75"/>
            
            <circle cx="330" cy="140" r="140" fill="url(#featChartGlow2)" class="svg-ambient-pulse"/>

            <!-- Cyber Floor Grid Pattern -->
            <g opacity="0.15">
              <line x1="20" y1="70" x2="480" y2="70" stroke="#00E5FF" stroke-width="0.8" stroke-dasharray="2 4"/>
              <line x1="20" y1="130" x2="480" y2="130" stroke="#00E5FF" stroke-width="0.8" stroke-dasharray="2 4"/>
              <line x1="20" y1="190" x2="480" y2="190" stroke="#00E5FF" stroke-width="0.8" stroke-dasharray="2 4"/>
              <line x1="20" y1="250" x2="480" y2="250" stroke="#00E5FF" stroke-width="0.8" stroke-dasharray="2 4"/>
            </g>

            <!-- Candlestick Floor Shadows (for 3D depth) -->
            <ellipse cx="42" cy="235" rx="7" ry="2.5" fill="#000000" opacity="0.6"/>
            <ellipse cx="65" cy="225" rx="7" ry="2.5" fill="#000000" opacity="0.6"/>
            <ellipse cx="90" cy="215" rx="7" ry="2.5" fill="#000000" opacity="0.6"/>
            <ellipse cx="114" cy="230" rx="7" ry="2.5" fill="#000000" opacity="0.6"/>
            <ellipse cx="140" cy="245" rx="7" ry="2.5" fill="#000000" opacity="0.6"/>
            <ellipse cx="168" cy="220" rx="8" ry="3" fill="#000000" opacity="0.6"/>
            <ellipse cx="200" cy="205" rx="8" ry="3" fill="#000000" opacity="0.6"/>
            <ellipse cx="230" cy="175" rx="8" ry="3" fill="#000000" opacity="0.6"/>
            <ellipse cx="260" cy="185" rx="8" ry="3" fill="#000000" opacity="0.6"/>
            <ellipse cx="295" cy="195" rx="8" ry="3" fill="#000000" opacity="0.6"/>
            <ellipse cx="335" cy="155" rx="9" ry="3.5" fill="#000000" opacity="0.6"/>
            <ellipse cx="375" cy="130" rx="9" ry="3.5" fill="#000000" opacity="0.6"/>

            <!-- Candlesticks Array -->
            <!-- Candle 1 (Green) -->
            <line x1="42" y1="200" x2="42" y2="230" stroke="#38E879" stroke-width="1.5"/>
            <rect x="37" y="206" width="10" height="18" rx="1.5" fill="#38E879" class="svg-candle-pulse"/>

            <!-- Candle 2 (Green) -->
            <line x1="65" y1="168" x2="65" y2="218" stroke="#38E879" stroke-width="1.5"/>
            <rect x="60" y="174" width="10" height="36" rx="1.5" fill="#38E879" class="svg-candle-pulse-alt"/>

            <!-- Candle 3 (Red Pullback) -->
            <line x1="90" y1="140" x2="90" y2="195" stroke="#FF3B69" stroke-width="1.5"/>
            <rect x="85" y="146" width="10" height="40" rx="1.5" fill="#FF3B69" class="svg-candle-pulse"/>

            <!-- Candle 4 (Red Dip) -->
            <line x1="114" y1="155" x2="114" y2="210" stroke="#FF3B69" stroke-width="1.5"/>
            <rect x="109" y="162" width="10" height="32" rx="1.5" fill="#FF3B69" class="svg-candle-pulse-alt"/>

            <!-- Candle 5 (Green Higher Low Reversal) -->
            <line x1="140" y1="170" x2="140" y2="225" stroke="#38E879" stroke-width="1.5"/>
            <rect x="135" y="176" width="10" height="35" rx="1.5" fill="#38E879" class="svg-candle-pulse"/>

            <!-- Candle 6 (Green Expansion) -->
            <line x1="168" y1="130" x2="168" y2="195" stroke="#38E879" stroke-width="1.5"/>
            <rect x="163" y="138" width="10" height="44" rx="1.5" fill="#38E879" class="svg-candle-pulse-alt"/>

            <!-- Candle 7 (Green Breakout Peak / BOS) -->
            <line x1="200" y1="90" x2="200" y2="160" stroke="#38E879" stroke-width="1.5"/>
            <rect x="195" y="98" width="10" height="48" rx="1.5" fill="#38E879" class="svg-candle-pulse"/>

            <!-- Candle 8 (Red Retest into OTE) -->
            <line x1="230" y1="78" x2="230" y2="135" stroke="#FF3B69" stroke-width="1.5"/>
            <rect x="225" y="85" width="10" height="36" rx="1.5" fill="#FF3B69" class="svg-candle-pulse-alt"/>

            <!-- Candle 9 (Red Dip to Entry Zone) -->
            <line x1="260" y1="95" x2="260" y2="160" stroke="#FF3B69" stroke-width="1.5"/>
            <rect x="255" y="105" width="10" height="35" rx="1.5" fill="#FF3B69" class="svg-candle-pulse"/>

            <!-- Candle 10 (Green Bounce from Entry) -->
            <line x1="295" y1="115" x2="295" y2="175" stroke="#9DD82B" stroke-width="2"/>
            <rect x="290" y="122" width="10" height="38" rx="1.5" fill="#9DD82B" class="svg-neon-glow-candle"/>

            <!-- Candle 11 (Green Big Expansion) -->
            <line x1="335" y1="75" x2="335" y2="140" stroke="#38E879" stroke-width="2"/>
            <rect x="330" y="82" width="11" height="45" rx="2" fill="#38E879" class="svg-candle-pulse"/>

            <!-- Candle 12 (Massive Green Bull Continuation) -->
            <line x1="375" y1="35" x2="375" y2="110" stroke="#9DD82B" stroke-width="2.5"/>
            <rect x="369" y="44" width="12" height="52" rx="2" fill="#9DD82B" class="svg-neon-glow-candle"/>

            <!-- Electric Cyan Market Structure Zigzag Polyline -->
            <path d="M42 215 L90 148 L140 195 L230 85 L295 145 L335 95 L485 30" stroke="#00E5FF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none" class="svg-wave-flow"/>

            <!-- Pivot Markers & Tags -->
            <!-- 1. Swing High -->
            <circle cx="90" cy="148" r="5" fill="#00E5FF" class="svg-beacon-core"/>
            <rect x="54" y="120" width="72" height="18" rx="4" fill="rgba(8, 17, 31, 0.9)" stroke="rgba(255,255,255,0.15)" stroke-width="1"/>
            <text x="90" y="132" fill="#FFFFFF" font-family="'JetBrains Mono', monospace" font-size="7.5" font-weight="bold" text-anchor="middle">SWING HIGH</text>

            <!-- 2. Higher Low -->
            <circle cx="140" cy="195" r="5" fill="#00E5FF" class="svg-beacon-core"/>
            <rect x="102" y="208" width="76" height="18" rx="4" fill="rgba(8, 17, 31, 0.9)" stroke="rgba(0, 229, 255, 0.4)" stroke-width="1"/>
            <text x="140" y="220" fill="#00E5FF" font-family="'JetBrains Mono', monospace" font-size="7.5" font-weight="bold" text-anchor="middle">HIGHER LOW</text>

            <!-- 3. BOS (Break of Structure) Peak -->
            <circle cx="230" cy="85" r="8" stroke="#9DD82B" stroke-width="1.8" class="svg-beacon-ring"/>
            <circle cx="230" cy="85" r="4" fill="#FFFFFF" class="svg-beacon-core"/>
            <rect x="155" y="52" width="150" height="20" rx="4" fill="rgba(10, 22, 12, 0.92)" stroke="#9DD82B" stroke-width="1.2" class="svg-card-hud-border"/>
            <text x="230" y="65" fill="#9DD82B" font-family="'JetBrains Mono', monospace" font-size="8" font-weight="bold" text-anchor="middle">BOS (BREAK OF STRUCTURE)</text>

            <!-- 4. Entry Zone (Fib OTE 0.618 - 0.705) -->
            <rect x="252" y="122" width="104" height="38" rx="4" fill="rgba(157, 216, 43, 0.12)" stroke="#9DD82B" stroke-width="1.5" class="svg-card-hud-border"/>
            <text x="304" y="137" fill="#9DD82B" font-family="'JetBrains Mono', monospace" font-size="8" font-weight="bold" text-anchor="middle">ENTRY ZONE</text>
            <text x="304" y="150" fill="#9DD82B" font-family="'JetBrains Mono', monospace" font-size="6.5" font-weight="600" text-anchor="middle">FIB OTE 0.618 - 0.705</text>

            <!-- 5. Expansion Pivot -->
            <circle cx="335" cy="95" r="5" fill="#9DD82B" class="svg-beacon-core"/>

            <!-- 6. Stop Loss Marker & Badge -->
            <line x1="240" y1="180" x2="410" y2="180" stroke="#FF3B69" stroke-width="1.5" stroke-dasharray="3 3"/>
            <rect x="280" y="186" width="115" height="20" rx="4" fill="rgba(28, 9, 17, 0.95)" stroke="#FF3B69" stroke-width="1" class="svg-zone-pulse-red"/>
            <text x="337" y="199" fill="#FF3B69" font-family="'JetBrains Mono', monospace" font-size="7.5" font-weight="bold" text-anchor="middle">STOP LOSS (-4.2%)</text>

            <!-- Bottom Volume Histogram Bars -->
            <rect x="35" y="270" width="10" height="18" rx="1.5" fill="#38E879"/>
            <rect x="58" y="264" width="10" height="24" rx="1.5" fill="#38E879"/>
            <rect x="82" y="274" width="10" height="14" rx="1.5" fill="#FF3B69"/>
            <rect x="106" y="268" width="10" height="20" rx="1.5" fill="#FF3B69"/>
            <rect x="130" y="272" width="10" height="16" rx="1.5" fill="#38E879"/>
            <rect x="160" y="258" width="10" height="30" rx="1.5" fill="#38E879"/>
            <rect x="190" y="252" width="10" height="36" rx="1.5" fill="#38E879"/>
            <rect x="222" y="262" width="10" height="26" rx="1.5" fill="#38E879"/>
            <rect x="254" y="272" width="10" height="16" rx="1.5" fill="#FF3B69"/>
            <rect x="286" y="266" width="10" height="22" rx="1.5" fill="#38E879"/>
            <rect x="328" y="248" width="10" height="40" rx="1.5" fill="#38E879"/>
            <rect x="370" y="238" width="12" height="50" rx="2" fill="url(#volSpikeGrad2)" class="svg-neon-glow-candle"/>

            <!-- Top-Left Risk/Reward Projection Box -->
            <rect x="24" y="26" width="145" height="40" rx="4" fill="rgba(8, 17, 31, 0.9)" stroke="rgba(157, 216, 43, 0.35)" stroke-width="1"/>
            <text x="34" y="41" fill="#64748B" font-family="'JetBrains Mono', monospace" font-size="7" font-weight="600" letter-spacing="0.04em">RISK / REWARD PROJECTION</text>
            <text x="34" y="56" fill="#9DD82B" font-family="'JetBrains Mono', monospace" font-size="9.5" font-weight="bold">1 : 3.2 PLANNED SETUP</text>

            <!-- Top-Right Floating Order Flow Pill -->
            <g transform="translate(105, 14)">
              <rect x="0" y="0" width="365" height="30" rx="15" fill="rgba(6, 12, 22, 0.94)" stroke="rgba(0, 229, 255, 0.4)" stroke-width="1.2" filter="drop-shadow(0 4px 14px rgba(0,0,0,0.6))"/>
              <text x="14" y="19" fill="#FFFFFF" font-family="'JetBrains Mono', monospace" font-size="8.5" font-weight="bold">BTC/USDT <tspan fill="#00E5FF">15M • 3D ORDER FLOW</tspan></text>
              <line x1="195" y1="6" x2="195" y2="24" stroke="rgba(255,255,255,0.15)"/>
              <circle cx="212" cy="15" r="3.5" fill="#9DD82B" class="svg-beacon-core"/>
              <text x="222" y="19" fill="#9DD82B" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="bold">$67,840.50 +4.82%</text>
            </g>
          </svg>
        </div>
      </div>
    </div>
  `;
}

// 7. Strategy Framework Steps (4 Steps)
export function renderStrategiesSteps(container) {
  if (!container) return;

  const steps = [
    { num: "01", title: "ANALYZE", desc: "Understand the current market structure, higher timeframe bias, and volatility conditions." },
    { num: "02", title: "PLAN", desc: "Define the exact trade setup, trigger conditions, entry level, and structural invalidation level." },
    { num: "03", title: "MANAGE RISK", desc: "Determine position size and acceptable portfolio risk before trade execution." },
    { num: "04", title: "EXECUTE", desc: "Follow the predefined trading framework with discipline instead of making emotional decisions." }
  ];

  container.innerHTML = `
    <div class="container">
      <div class="intro-section" style="margin-bottom: 20px;">
        <span class="tag-label">
          <span class="tag-dot"></span>
          EXECUTION FLOW
        </span>
        <h2 class="heading-lg">
          How Our Trading Strategies Work
        </h2>
        <p class="text-lead intro-desc">
          Four disciplined steps executed in sequence to ensure consistent risk-adjusted trade planning.
        </p>
      </div>

      <div class="process-grid">
        ${steps.map(s => `
          <div class="process-card">
            <span class="process-step-num">${s.num}</span>
            <h3 class="process-step-title">${s.title}</h3>
            <p class="process-step-desc">${s.desc}</p>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// 8. Interactive Strategy Category Filter
export function renderStrategyCategoryFilter(container) {
  if (!container) return;

  const categories = [
    { id: "all", name: "All Strategies" },
    { id: "trend", name: "Trend Trading" },
    { id: "breakout", name: "Breakout Trading" },
    { id: "structure", name: "Market Structure" },
    { id: "risk", name: "Risk Management" }
  ];

  const cardsData = [
    { cat: "trend", title: "Multi-Timeframe Trend Alignment", desc: "Isolate strong trends by combining daily macro direction with 4H and 1H pullback execution triggers." },
    { cat: "trend", title: "Moving Average Dynamic Confluence", desc: "Trade dynamic support and resistance using exponential moving averages and momentum filters." },
    { cat: "breakout", title: "Range Contraction & Volatility Expansion", desc: "Identify consolidation zones and execute confirmed volume-backed breakouts with false-break filters." },
    { cat: "breakout", title: "High-Timeframe Key Level Breakout", desc: "Capitalize on major weekly and monthly structural breaks with structured retest confirmation." },
    { cat: "structure", title: "Liquidity Pool Sweeps & Order Blocks", desc: "Identify institutional buy-side and sell-side liquidity sweeps to enter at deep structural discount." },
    { cat: "structure", title: "Fair Value Gap (FVG) Imbalance Trading", desc: "Capitalize on price inefficiencies and market imbalances for high-confluence continuation." },
    { cat: "risk", title: "Mathematical Position Sizing Model", desc: "Calculate exact lot and contract sizes based on variable stop-loss distance and fixed capital risk." },
    { cat: "risk", title: "Portfolio Heat & Drawdown Protection", desc: "Manage total correlated risk across Bitcoin, Ethereum, and Altcoin positions simultaneously." }
  ];

  let activeCategory = "all";

  const render = () => {
    const filtered = activeCategory === "all" ? cardsData : cardsData.filter(c => c.cat === activeCategory);

    container.innerHTML = `
      <div class="container">
        <div class="analysis-header">
          <span class="tag-label">
            <span class="tag-dot"></span>
            STRATEGY REPOSITORY
          </span>
          <h2 class="heading-lg">
            Explore Strategies by Category
          </h2>
          <p class="text-lead" style="max-width: 640px;">
            Filter through specialized trading frameworks engineered for specific crypto market environments.
          </p>
        </div>

        <div class="analysis-tabs-bar" role="tablist">
          ${categories.map(c => `
            <button class="tab-btn ${activeCategory === c.id ? 'active' : ''}" data-cat="${c.id}">
              ${c.name}
            </button>
          `).join('')}
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; margin-top: 32px;">
          ${filtered.map(card => `
            <div style="background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 24px; display: flex; flex-direction: column; gap: 12px; transition: all 0.2s;" onmouseover="this.style.borderColor='var(--neon-green)'" onmouseout="this.style.borderColor='var(--border-subtle)'">
              <span style="font-family: var(--font-mono); font-size: 0.725rem; color: var(--neon-green); text-transform: uppercase;">${card.cat} MODULE</span>
              <h4 style="font-size: 1.15rem; font-weight: 700; color: #FFFFFF;">${card.title}</h4>
              <p style="font-size: 0.875rem; color: var(--text-secondary); line-height: 1.5; flex-grow: 1;">${card.desc}</p>
              <a href="#strategy-pricing" style="color: var(--neon-green); font-size: 0.85rem; font-weight: 600; display: inline-flex; align-items: center; gap: 6px; margin-top: 8px;">
                <span>View Framework</span> →
              </a>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    container.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        activeCategory = btn.getAttribute('data-cat');
        render();
      });
    });
  };

  render();
}

// 9. Educational Content ("More Than Just a Trading Strategy")
export function renderStrategiesEducation(container) {
  if (!container) return;

  const cards = [
    {
      title: "Technical Analysis",
      desc: "Learn chart structure, trends, support, resistance and indicators to identify high-probability setups."
    },
    {
      title: "Risk Management",
      desc: "Understand position sizing, stop-loss planning and risk/reward calculations before entering any trade."
    },
    {
      title: "Trading Psychology",
      desc: "Build a disciplined process, avoid FOMO and emotional revenge trades, and reduce cognitive bias."
    }
  ];

  container.innerHTML = `
    <div class="container">
      <div class="intro-section" style="margin-bottom: 20px;">
        <span class="tag-label">
          <span class="tag-dot"></span>
          COMPREHENSIVE KNOWLEDGE
        </span>
        <h2 class="heading-lg">
          More Than Just a Trading Strategy
        </h2>
        <p class="text-lead intro-desc">
          Build the knowledge required to understand why a strategy works, when to use it and how to manage risk.
        </p>
      </div>

      <div class="audience-grid">
        ${cards.map(c => `
          <div class="education-card">
            <h3 class="education-title">${c.title}</h3>
            <p class="education-desc">${c.desc}</p>
            <a href="#strategy-pricing" class="btn btn-secondary btn-sm" style="align-self: flex-start; margin-top: 8px;">
              <span>Explore Trading Education</span>
            </a>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// 10. Trading Tools Section (6 Cards)
export function renderTradingTools(container) {
  if (!container) return;

  const tools = [
    { name: "Market Structure Mapper", desc: "Automated swing high/low and break-of-structure mapping tools." },
    { name: "Trade Checklist Engine", desc: "Interactive pre-flight verification checklist for high-confluence entry." },
    { name: "Risk Calculator", desc: "Instant mathematical position sizing calculator for leverage and spot trades." },
    { name: "Position Sizing Matrix", desc: "Dynamic multi-asset risk allocator based on portfolio heat constraints." },
    { name: "Trade Journal Template", desc: "Structured trade tracking spreadsheet and review journal with analytics." },
    { name: "Daily Market Analysis", desc: "Daily actionable technical briefings across BTC, ETH, and major Alts." }
  ];

  container.innerHTML = `
    <div class="container">
      <div class="intro-section" style="margin-bottom: 20px;">
        <span class="tag-label">
          <span class="tag-dot"></span>
          TRADER TOOLKIT
        </span>
        <h2 class="heading-lg">
          Everything You Need for Better Trade Planning
        </h2>
        <p class="text-lead intro-desc">
          Essential utilities and analytical tools to streamline your daily market analysis and risk management.
        </p>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 24px; margin-top: 40px;">
        ${tools.map(t => `
          <div class="why-card">
            <h4 style="font-size: 1.2rem; font-weight: 700; color: #FFFFFF;">${t.name}</h4>
            <p style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.6;">${t.desc}</p>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// 11. Product Purchase / Pricing Plans
export function renderStrategiesPurchase(container) {
  if (!container) return;

  const plans = [
    {
      name: "Starter",
      desc: "For traders building their foundation in crypto markets.",
      price: "$49",
      isFeatured: false,
      features: [
        "Trading fundamentals & glossary",
        "Basic strategy framework & rules",
        "Market structure core lessons",
        "Risk management basics & calculators"
      ],
      cta: "Get Starter"
    },
    {
      name: "Pro",
      desc: "For active traders seeking complete trade setups.",
      price: "$129",
      isFeatured: true,
      features: [
        "All 3 core strategy frameworks",
        "Daily technical market analysis",
        "Trade setup framework & checklists",
        "Advanced risk management calculator",
        "Trade planning templates & journal"
      ],
      cta: "Get Pro"
    },
    {
      name: "Advanced",
      desc: "For experienced traders wanting institutional models.",
      price: "$249",
      isFeatured: false,
      features: [
        "Advanced multi-timeframe strategies",
        "Advanced market analysis briefings",
        "Institutional strategy resources",
        "Advanced risk framework modeling",
        "Premium educational case study library"
      ],
      cta: "Get Advanced"
    }
  ];

  container.innerHTML = `
    <div class="container">
      <div class="intro-section" style="margin-bottom: 20px;">
        <span class="tag-label">
          <span class="tag-dot"></span>
          STRATEGY PACKAGES
        </span>
        <h2 class="heading-lg">
          Choose Your Trading Strategy
        </h2>
        <p class="text-lead intro-desc">
          Select the strategy framework that matches your trading experience and market goals.
        </p>
      </div>

      <div class="pricing-grid">
        ${plans.map(p => `
          <div class="pricing-card ${p.isFeatured ? 'featured' : ''}">
            ${p.isFeatured ? `<div class="featured-ribbon">Most Popular</div>` : ''}
            <div>
              <h3 class="plan-name">${p.name}</h3>
              <p class="plan-desc">${p.desc}</p>
            </div>

            <div class="plan-price-wrap">
              <span class="plan-price">${p.price}</span>
              <span class="plan-period">/ one-time access</span>
            </div>

            <ul class="plan-features-list">
              ${p.features.map(f => `
                <li class="plan-feature-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>${f}</span>
                </li>
              `).join('')}
            </ul>

            <a href="#strategy-contact" class="btn ${p.isFeatured ? 'btn-primary' : 'btn-secondary'}" style="width: 100%; margin-top: auto;">
              <span>${p.cta}</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// 12. Testimonials Section
export function renderStrategiesTestimonials(container) {
  if (!container) return;

  const testimonials = [
    {
      name: "[CUSTOMER NAME]",
      role: "[TRADER ROLE]",
      quote: "[CUSTOMER TESTIMONIAL - 'The market structure framework completely transformed how I analyze crypto charts. Instead of guessing, I now wait for confirmed sweeps and invalidation levels before executing.']"
    },
    {
      name: "[CUSTOMER NAME]",
      role: "[TRADER ROLE]",
      quote: "[CUSTOMER TESTIMONIAL - 'The position sizing calculator and pre-flight checklist eliminated my emotional FOMO entries. Having a defined risk-first process gave me consistent trade discipline.']"
    },
    {
      name: "[CUSTOMER NAME]",
      role: "[TRADER ROLE]",
      quote: "[CUSTOMER TESTIMONIAL - 'Clear, high-quality technical frameworks without any misleading hype. The daily market analysis and multi-timeframe lessons are pure practical education.']"
    }
  ];

  container.innerHTML = `
    <div class="container">
      <div class="intro-section" style="margin-bottom: 20px;">
        <span class="tag-label">
          <span class="tag-dot"></span>
          TRADER PERSPECTIVES
        </span>
        <h2 class="heading-lg">
          Built Around a Structured Trading Process
        </h2>
        <p class="text-lead intro-desc">
          Hear how analytical crypto traders use our frameworks to maintain discipline and risk control.
        </p>
      </div>

      <div class="audience-grid">
        ${testimonials.map(t => `
          <div class="audience-card" style="padding: 32px 26px; display: flex; flex-direction: column; gap: 16px;">
            <div style="color: var(--neon-green); font-size: 1.4rem;">★★★★★</div>
            <p style="font-size: 0.925rem; color: var(--text-secondary); line-height: 1.6; font-style: italic; flex-grow: 1;">${t.quote}</p>
            <div style="border-top: 1px solid var(--border-subtle); padding-top: 14px;">
              <div style="font-weight: 700; color: #FFFFFF; font-size: 0.95rem;">${t.name}</div>
              <div style="font-size: 0.8rem; font-family: var(--font-mono); color: var(--neon-green);">${t.role}</div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// 13. Resource Banner
export function renderResourceBanner(container) {
  if (!container) return;

  container.innerHTML = `
    <div class="container">
      <div class="featured-strategy-card" style="background: radial-gradient(ellipse at 80% 50%, rgba(39, 117, 255, 0.1) 0%, rgba(17, 29, 45, 0.95) 75%); border-color: rgba(39, 117, 255, 0.3);">
        <div>
          <span class="tag-badge" style="background: rgba(39, 117, 255, 0.15); border-color: #2775FF; color: #00E5FF; margin-bottom: 14px;">
            FREE STRATEGY GUIDE
          </span>
          <h3 class="featured-title">
            Crypto Trading Strategy Guide
          </h3>
          <p class="featured-desc">
            Explore the core concepts behind structured market analysis, trade planning and risk management in our complimentary 40-page technical handbook.
          </p>
          <a href="#strategy-contact" class="btn btn-primary" style="margin-top: 16px;">
            <span>Read the Guide</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>

        <div style="position: relative; background: #070E1A; border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); padding: 24px; display: flex; align-items: center; justify-content: center;">
          <svg viewBox="0 0 320 220" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: auto;">
            <rect x="40" y="20" width="240" height="180" rx="8" fill="#111D2D" stroke="#2775FF" stroke-width="1.5"/>
            <text x="60" y="60" fill="#B7FF00" font-family="monospace" font-size="11" font-weight="bold">TRADELAB // HANDBOOK</text>
            <text x="60" y="85" fill="#FFFFFF" font-family="sans-serif" font-size="13" font-weight="bold">Market Structure & Risk Playbook</text>
            <line x1="60" y1="110" x2="260" y2="110" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
            <text x="60" y="135" fill="#9AA7B8" font-family="monospace" font-size="9">✓ 12 Illustrated Case Studies</text>
            <text x="60" y="155" fill="#9AA7B8" font-family="monospace" font-size="9">✓ Risk Calculator Formula</text>
            <text x="60" y="175" fill="#00E5FF" font-family="monospace" font-size="9">✓ Printable Pre-Trade Checklist</text>
          </svg>
        </div>
      </div>
    </div>
  `;
}

// 14. Contact / Lead Form
export function renderStrategiesContact(container) {
  if (!container) return;

  container.innerHTML = `
    <div class="container">
      <div class="demo-grid">
        <!-- Form Left -->
        <div class="demo-form-card">
          <div class="form-header">
            <h2 class="form-header-title">Need Help Choosing a Strategy?</h2>
            <p class="form-header-desc">
              Tell us about your trading experience and goals, and our strategy team will provide personalized curriculum advice.
            </p>
          </div>

          <form id="strategy-lead-form" class="cyber-form" novalidate>
            <div class="form-row-2">
              <div class="form-group">
                <label for="stratFirstName" class="form-label">First Name *</label>
                <input type="text" id="stratFirstName" class="form-input" placeholder="Alex" required />
              </div>
              <div class="form-group">
                <label for="stratLastName" class="form-label">Last Name *</label>
                <input type="text" id="stratLastName" class="form-input" placeholder="Morgan" required />
              </div>
            </div>

            <div class="form-group">
              <label for="stratEmail" class="form-label">Email Address *</label>
              <input type="email" id="stratEmail" class="form-input" placeholder="alex.morgan@example.com" required />
            </div>

            <div class="form-row-2">
              <div class="form-group">
                <label for="stratExp" class="form-label">Trading Experience *</label>
                <select id="stratExp" class="form-select" required>
                  <option value="" disabled selected>Select Experience</option>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>
              <div class="form-group">
                <label for="stratType" class="form-label">Interested Strategy *</label>
                <select id="stratType" class="form-select" required>
                  <option value="" disabled selected>Select Strategy</option>
                  <option value="trend">Trend Trading Strategy</option>
                  <option value="breakout">Breakout Trading Strategy</option>
                  <option value="structure">Market Structure Strategy</option>
                  <option value="all">Complete Strategy Suite</option>
                </select>
              </div>
            </div>

            <div class="form-group">
              <label for="stratMsg" class="form-label">Your Goals / Questions</label>
              <textarea id="stratMsg" class="form-textarea" placeholder="Tell us about what you want to achieve with structured trading..."></textarea>
            </div>

            <button type="submit" class="btn btn-primary form-submit-btn" id="strat-submit-btn">
              <span>Get Strategy Guidance</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </form>
        </div>

        <!-- Right Side: Value Prop -->
        <div class="demo-info-col">
          <span class="tag-label">
            <span class="tag-dot"></span>
            DISCIPLINED PROCESS
          </span>

          <h2 class="demo-info-title">
            Build a More Structured Trading Process
          </h2>

          <p class="demo-info-desc">
            Learn to execute with the rigor of professional market operators through repeatable strategy frameworks.
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
                <strong class="benefit-title">Strategy-Based Learning</strong>
                <p class="benefit-desc">Rule-based modules designed around verified price action principles.</p>
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
                <strong class="benefit-title">Actionable Market Analysis</strong>
                <p class="benefit-desc">Multi-timeframe structural research across leading crypto pairs.</p>
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
                <strong class="benefit-title">Mathematical Risk Management</strong>
                <p class="benefit-desc">Defined capital risk models, stop-loss invalidation, and portfolio heat rules.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  `;

  const form = container.querySelector('#strategy-lead-form');
  const submitBtn = container.querySelector('#strat-submit-btn');

  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const firstName = form.querySelector('#stratFirstName').value.trim();
    const email = form.querySelector('#stratEmail').value.trim();
    const exp = form.querySelector('#stratExp').value;
    const strat = form.querySelector('#stratType').value;

    if (!firstName || !email || !exp || !strat) {
      showToast('Please complete all required fields', 'First name, email, experience, and strategy interest are required.', 'error');
      return;
    }

    submitBtn.disabled = true;
    submitBtn.innerHTML = `<span>Processing Guidance...</span>`;

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = `
        <span>Get Strategy Guidance</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      `;
      form.reset();
      showToast('Guidance Package Dispatched!', `Thank you, ${firstName}. Our strategy advisor has sent your strategy recommendation to ${email}.`);
    }, 1200);
  });
}

// 15. FAQ Section (7 Questions)
export function renderStrategiesFAQ(container) {
  if (!container) return;

  const faqs = [
    {
      q: "What is included in each strategy?",
      a: "Each strategy includes written execution rules, entry triggers, stop-loss placement guidelines, take-profit scaling targets, pre-flight checklists, and video walkthroughs of historical setups."
    },
    {
      q: "Which strategy is suitable for beginners?",
      a: "The Trend Trading Strategy and our Starter plan are ideal for beginners because they focus on trading with the macro trend and utilizing clear horizontal support/resistance levels."
    },
    {
      q: "Do I need previous trading experience?",
      a: "No prior experience is necessary to start with our Starter module. We cover core terminology, chart navigation, and risk fundamentals before moving into advanced trade setups."
    },
    {
      q: "Which crypto markets can I use these strategies with?",
      a: "Our frameworks are effective across major high-liquidity crypto assets such as Bitcoin (BTC), Ethereum (ETH), and top Layer-1/DeFi tokens."
    },
    {
      q: "How do I access my strategy after purchase?",
      a: "You receive immediate digital access to the member dashboard with downloadable strategy playbooks, video lessons, and risk calculators."
    },
    {
      q: "Are these strategies financial advice?",
      a: "No. All strategies, materials, and analysis are strictly educational and informational tools designed to teach technical analysis and risk management."
    },
    {
      q: "Can a trading strategy guarantee profits?",
      a: "No trading strategy can guarantee profits. Crypto markets are volatile and losses are possible. The materials provided are educational and informational in nature."
    }
  ];

  container.innerHTML = `
    <div class="container">
      <div class="intro-section" style="margin-bottom: 20px;">
        <span class="tag-label">
          <span class="tag-dot"></span>
          QUESTIONS & ANSWERS
        </span>
        <h2 class="heading-lg">
          Strategy Frequently Asked Questions
        </h2>
        <p class="text-lead intro-desc">
          Key information regarding our crypto trading strategies and educational frameworks.
        </p>
      </div>

      <div class="faq-list">
        ${faqs.map((f, idx) => `
          <div class="faq-item ${idx === 0 ? 'active' : ''}">
            <button class="faq-question" type="button" aria-expanded="${idx === 0}">
              <span>${f.q}</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            <div class="faq-answer">
              ${f.a}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  container.querySelectorAll('.faq-item').forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      container.querySelectorAll('.faq-item').forEach(i => {
        i.classList.remove('active');
        i.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      });
      if (!isActive) {
        item.classList.add('active');
        questionBtn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

// 16. Risk Disclaimer
export function renderStrategiesDisclaimer(container) {
  if (!container) return;

  container.innerHTML = `
    <div class="container">
      <div class="disclaimer-box">
        <div class="disclaimer-title">
          ⚠️ RISK DISCLAIMER
        </div>
        <p class="disclaimer-text">
          Cryptocurrency trading involves substantial risk and may result in the loss of capital. The strategies, educational materials and market information provided on this website are for educational and informational purposes only and should not be considered financial, investment or trading advice. Past performance does not guarantee future results.
        </p>
      </div>
    </div>
  `;
}
