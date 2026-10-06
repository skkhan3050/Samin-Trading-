export function renderWhyPlatform(container) {
  if (!container) return;

  const features = [
    {
      num: "01",
      title: "Structured Strategies",
      desc: "Pre-defined rulebooks for trend trading, breakout continuation, and market structure sweeps designed to eliminate guesswork."
    },
    {
      num: "02",
      title: "Risk-First Framework",
      desc: "Capital preservation comes first. Every strategy incorporates rigorous position sizing rules and strict trade invalidation levels."
    },
    {
      num: "03",
      title: "Market Analysis",
      desc: "Continuous technical research and multi-timeframe structural mapping across Bitcoin, Ethereum, and key Altcoins."
    },
    {
      num: "04",
      title: "Practical Education",
      desc: "In-depth case studies, trade checklists, and interactive walkthroughs that turn abstract concepts into repeatable habits."
    }
  ];

  container.innerHTML = `
    <div class="container">
      <div class="intro-section" style="margin-bottom: 20px;">
        <span class="tag-label">
          <span class="tag-dot"></span>
          WHY TRADELAB
        </span>
        <h2 class="heading-lg">
          Built Around Process, Not Predictions
        </h2>
        <p class="text-lead intro-desc">
          Instead of relying on predictions or emotional decisions, build a repeatable process for analyzing and managing trades.
        </p>
      </div>

      <div class="why-grid">
        ${features.map(f => `
          <div class="why-card">
            <span class="why-num">${f.num}</span>
            <h3 class="why-title">${f.title}</h3>
            <p class="why-desc">${f.desc}</p>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}
