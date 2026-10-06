export function renderStrategyProducts(container) {
  if (!container) return;

  const strategies = [
    {
      badge: "MOMENTUM & CONTINUATION",
      title: "Trend Trading Strategy",
      desc: "Capitalize on confirmed multi-timeframe trends with high-probability pullbacks and trailing stop management.",
      features: [
        "Trend identification & moving average confluence",
        "Pullback entry framework & Fibonacci levels",
        "Trailing stop & staged exit framework",
        "Position sizing & risk calculation rules",
        "Pre-flight trade execution checklist"
      ],
      cta: "View Strategy"
    },
    {
      badge: "VOLATILITY EXPANSION",
      title: "Breakout Trading Strategy",
      desc: "Identify range compression and trade clean volatility breakouts with false-breakout filtering filters.",
      features: [
        "Consolidation range & key level identification",
        "Volume & delta breakout confirmation",
        "Pre-break & retest entry rules",
        "Structural stop-loss placement framework",
        "Volatility-based trade management"
      ],
      cta: "View Strategy"
    },
    {
      badge: "INSTITUTIONAL PRICE ACTION",
      title: "Market Structure Strategy",
      desc: "Trade around major liquidity pools, order blocks, and structural breaks for asymmetric risk-to-reward setups.",
      features: [
        "Major support & resistance mapping",
        "Market structure shifts (BOS & CHoCH)",
        "Liquidity sweeps & order block zones",
        "Precision limit order entry planning",
        "Capital preservation & risk management"
      ],
      cta: "View Strategy"
    }
  ];

  container.innerHTML = `
    <div class="container">
      <div class="intro-section" style="margin-bottom: 20px;">
        <span class="tag-label">
          <span class="tag-dot"></span>
          STRATEGY FRAMEWORKS
        </span>
        <h2 class="heading-lg">
          Trading Strategies for Different Market Conditions
        </h2>
        <p class="text-lead intro-desc">
          Choose structured strategy frameworks based on your trading style, market conditions and experience level.
        </p>
      </div>

      <!-- 3 Strategy Cards -->
      <div class="strategy-grid">
        ${strategies.map(s => `
          <div class="strategy-card">
            <span class="strategy-badge">${s.badge}</span>
            <h3 class="strategy-card-title">${s.title}</h3>
            <p class="text-body" style="font-size: 0.9rem;">${s.desc}</p>
            
            <ul class="strategy-features-list">
              ${s.features.map(f => `
                <li class="strategy-feature-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>${f}</span>
                </li>
              `).join('')}
            </ul>

            <a href="#pricing" class="btn btn-primary" style="margin-top: 12px; width: 100%;">
              <span>${s.cta}</span>
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
