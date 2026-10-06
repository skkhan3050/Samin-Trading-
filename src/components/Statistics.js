export function renderStatistics(container) {
  if (!container) return;

  container.innerHTML = `
    <div class="container">
      <div class="stats-card-banner">
        <!-- Floating Neon Geometric Shapes -->
        <div class="stats-geo-shape stats-geo-1" aria-hidden="true"></div>
        <div class="stats-geo-shape stats-geo-2" aria-hidden="true"></div>

        <div class="stats-banner-content">
          <span class="tag-badge">
            <span class="tag-dot"></span>
            PROCESS-FIRST TRADING PLATFORM
          </span>

          <div class="stats-giant-number">
            Structured Trading Education
          </div>

          <p class="stats-banner-desc">
            Empowering crypto traders with rule-based strategies, comprehensive risk frameworks, and continuous market research.
          </p>

          <a href="#pricing" class="btn btn-primary btn-lg" style="margin-top: 8px;">
            <span>Explore Strategy Plans</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>

          <!-- Legitimate Process-Driven Sub-Stats -->
          <div class="stats-pill-grid">
            <div class="stats-pill-item">
              <span class="stats-pill-val">12+</span>
              <span class="stats-pill-lbl">Strategy Frameworks</span>
            </div>
            <div class="stats-pill-item">
              <span class="stats-pill-val">100+</span>
              <span class="stats-pill-lbl">Market Case Studies</span>
            </div>
            <div class="stats-pill-item">
              <span class="stats-pill-val">100%</span>
              <span class="stats-pill-lbl">Risk-First Discipline</span>
            </div>
            <div class="stats-pill-item">
              <span class="stats-pill-val">24/7</span>
              <span class="stats-pill-lbl">Market Research</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}
