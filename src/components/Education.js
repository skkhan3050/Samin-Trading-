export function renderEducation(container) {
  if (!container) return;

  const modules = [
    {
      title: "Technical Analysis",
      desc: "Master chart patterns, support and resistance levels, moving average confluences, and momentum indicators.",
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>`
    },
    {
      title: "Market Structure",
      desc: "Understand how institutional order flow moves price through liquidity pools, fair value gaps, and structural shifts.",
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>`
    },
    {
      title: "Risk Management",
      desc: "Protect your capital with position sizing models, portfolio heat thresholds, and strict invalidation disciplines.",
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`
    },
    {
      title: "Trading Psychology",
      desc: "Eliminate FOMO, revenge trading, and emotional bias by building an unshakeable trader mindset and execution routine.",
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`
    },
    {
      title: "Trading Strategies",
      desc: "Step-by-step playbooks for trend trading, range breakouts, and mean reversion setups across crypto assets.",
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>`
    },
    {
      title: "Trade Management",
      desc: "Learn dynamic scaling techniques, trailing stops, and multi-tier take profit executions during active trades.",
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="9" x2="15" y2="15"></line><line x1="15" y1="9" x2="9" y2="15"></line></svg>`
    }
  ];

  container.innerHTML = `
    <div class="container">
      <div class="intro-section" style="margin-bottom: 20px;">
        <span class="tag-label">
          <span class="tag-dot"></span>
          CURRICULUM
        </span>
        <h2 class="heading-lg">
          Build Stronger Trading Skills
        </h2>
        <p class="text-lead intro-desc">
          Comprehensive, structured lessons designed to take you from foundational chart reading to advanced trade execution.
        </p>
      </div>

      <div class="education-grid">
        ${modules.map(m => `
          <div class="education-card">
            <div class="education-icon-wrap">
              ${m.icon}
            </div>
            <h3 class="education-title">${m.title}</h3>
            <p class="education-desc">${m.desc}</p>
            <a href="#pricing" class="education-link">
              <span>Learn More</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
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
