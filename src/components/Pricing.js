export function renderPricing(container) {
  if (!container) return;

  const plans = [
    {
      name: "Starter",
      desc: "For traders building their foundation in crypto markets.",
      price: "$49",
      period: "/ one-time access",
      isFeatured: false,
      features: [
        "Basic strategy framework & rulebook",
        "Foundational trading education modules",
        "Core market structure lessons",
        "Risk management basics & calculators",
        "Standard trade planning templates",
        "Community forum access"
      ],
      cta: "View Starter"
    },
    {
      name: "Pro",
      desc: "For active traders seeking structured setups and daily context.",
      price: "$129",
      period: "/ complete suite",
      isFeatured: true,
      features: [
        "All 3 core strategy frameworks (Trend, Breakout, Structure)",
        "Daily technical market analysis & key levels",
        "Actionable trade setup walkthroughs",
        "Advanced position sizing & risk calculator",
        "Full pre-flight trade checklists",
        "Private community & weekly Q&A calls",
        "Continuous strategy updates"
      ],
      cta: "Explore Pro"
    },
    {
      name: "Advanced",
      desc: "For experienced traders wanting institutional-grade frameworks.",
      price: "$249",
      period: "/ institutional tier",
      isFeatured: false,
      features: [
        "Complete institutional strategy frameworks",
        "Multi-timeframe liquidity & order block models",
        "Advanced volatility & delta analysis tools",
        "Deep-dive market case study library",
        "Portfolio heat & multi-asset risk framework",
        "Direct analyst strategy review channel",
        "Lifetime access to all future frameworks"
      ],
      cta: "Explore Advanced"
    }
  ];

  container.innerHTML = `
    <div class="container">
      <div class="intro-section" style="margin-bottom: 20px;">
        <span class="tag-label">
          <span class="tag-dot"></span>
          PRICING PLANS
        </span>
        <h2 class="heading-lg">
          Choose Your Trading Strategy Plan
        </h2>
        <p class="text-lead intro-desc">
          Transparent, structured educational strategy packages engineered for disciplined traders at every stage.
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
              <span class="plan-period">${p.period}</span>
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

            <a href="#contact-form" class="btn ${p.isFeatured ? 'btn-primary' : 'btn-secondary'}" style="width: 100%; margin-top: auto;">
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
