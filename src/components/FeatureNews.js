export function renderFeatureNews(container) {
  if (!container) return;

  container.innerHTML = `
    <div class="container">
      <!-- Section Tag / Header -->
      <div class="section-header-tag">
        <span class="tag-label">
          <span class="tag-dot"></span>
          LATEST PRODUCT NEWS
        </span>
        <div class="line"></div>
      </div>

      <div class="news-layout">
        <!-- 1. Large Top Hero Feature Card: AI Range -->
        <div class="news-card-hero">
          <div class="news-hero-content">
            <span class="tag-badge" style="align-self: flex-start; background: rgba(183,255,0,0.12); border-color: var(--neon-green);">
              NEW INNOVATION
            </span>
            <h3 class="news-hero-title">
              CyberShield launches the world’s first Autonomous AI Range
            </h3>
            <p class="news-hero-desc">
              Experience dynamic adversary simulations orchestrated by generative AI agents. Blue teams defend against self-mutating malware, adaptive zero-day chains, and real-time evasion tactics with instant automated debriefs.
            </p>
            <a href="#demo-form" class="btn btn-primary" style="align-self: flex-start; padding: 12px 26px;">
              <span>Explore AI Range</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>

          <!-- AI Cyber Visual Mockup -->
          <div class="news-hero-visual">
            <svg viewBox="0 0 500 320" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%; height:100%;">
              <rect width="500" height="320" fill="#08111F"/>
              <defs>
                <radialGradient id="aiGlow" cx="60%" cy="50%" r="50%">
                  <stop offset="0%" stop-color="#B7FF00" stop-opacity="0.3"/>
                  <stop offset="100%" stop-color="#08111F" stop-opacity="0"/>
                </radialGradient>
              </defs>
              <circle cx="300" cy="160" r="140" fill="url(#aiGlow)"/>

              <!-- Neural Matrix Nodes & Synaptic Attack Graph -->
              <g stroke="rgba(183, 255, 0, 0.4)" stroke-width="1.5">
                <line x1="120" y1="160" x2="220" y2="90"/>
                <line x1="120" y1="160" x2="220" y2="230"/>
                <line x1="220" y1="90" x2="320" y2="120"/>
                <line x1="220" y1="90" x2="320" y2="60"/>
                <line x1="220" y1="230" x2="320" y2="200"/>
                <line x1="220" y1="230" x2="320" y2="260"/>
                <line x1="320" y1="120" x2="420" y2="160"/>
                <line x1="320" y1="200" x2="420" y2="160"/>
                <line x1="220" y1="90" x2="220" y2="230" stroke="rgba(0, 229, 255, 0.5)" stroke-dasharray="4 4"/>
              </g>

              <!-- Glowing Nodes -->
              <circle cx="120" cy="160" r="16" fill="#111E30" stroke="#00E5FF" stroke-width="2"/>
              <text x="120" y="164" fill="#00E5FF" font-family="monospace" font-size="9" text-anchor="middle">INPUT</text>

              <circle cx="220" cy="90" r="14" fill="#111E30" stroke="#B7FF00" stroke-width="2"/>
              <circle cx="220" cy="230" r="14" fill="#111E30" stroke="#B7FF00" stroke-width="2"/>

              <circle cx="320" cy="60" r="10" fill="#111E30" stroke="#B7FF00" stroke-width="1.5"/>
              <circle cx="320" cy="120" r="14" fill="#111E30" stroke="#00E5FF" stroke-width="2"/>
              <circle cx="320" cy="200" r="14" fill="#111E30" stroke="#00E5FF" stroke-width="2"/>
              <circle cx="320" cy="260" r="10" fill="#111E30" stroke="#B7FF00" stroke-width="1.5"/>

              <!-- Central Brain / Core Target -->
              <circle cx="420" cy="160" r="22" fill="#111E30" stroke="#B7FF00" stroke-width="3"/>
              <circle cx="420" cy="160" r="10" fill="#B7FF00"/>

              <!-- HUD overlays -->
              <rect x="25" y="25" width="170" height="38" rx="4" fill="rgba(17,30,48,0.85)" stroke="rgba(255,255,255,0.1)"/>
              <text x="35" y="42" fill="#9AA7B8" font-family="monospace" font-size="9">ADVERSARY_AI_STATE:</text>
              <text x="35" y="55" fill="#B7FF00" font-family="monospace" font-size="10" font-weight="bold">AUTONOMOUS ADAPTIVE</text>

              <rect x="25" y="260" width="180" height="38" rx="4" fill="rgba(17,30,48,0.85)" stroke="rgba(255,255,255,0.1)"/>
              <text x="35" y="277" fill="#9AA7B8" font-family="monospace" font-size="9">MUTATION FREQUENCY:</text>
              <text x="35" y="290" fill="#00E5FF" font-family="monospace" font-size="10" font-weight="bold">0.42s REAL-TIME RE-ROUTE</text>
            </svg>
          </div>
        </div>

        <!-- 2. Leader in Forrester Wave Card -->
        <div class="news-card-feature">
          <div class="news-hero-content">
            <span class="tag-badge" style="align-self: flex-start;">
              INDUSTRY REPORT
            </span>
            <h3 class="news-hero-title">
              CyberShield named a Leader in The Forrester Wave™ for Cybersecurity Skills and Training Platforms
            </h3>
            <p class="news-hero-desc">
              Evaluated among the most significant vendors, CyberShield earned top scores in practical scenario fidelity, hands-on lab catalogue breadth, customer support, and continuous workforce benchmarking.
            </p>
            <a href="#demo-form" class="btn btn-primary" style="align-self: flex-start; padding: 12px 26px;">
              <span>Read Report</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>

          <!-- Wave Radar Chart Graphic -->
          <div class="wave-chart-mockup">
            <svg viewBox="0 0 360 300" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%; max-width: 320px;">
              <!-- Wave Background Grid -->
              <rect width="360" height="300" fill="#070E1A" rx="8"/>
              
              <!-- Concentric Quadrant Arcs -->
              <path d="M 40 260 A 220 220 0 0 1 260 40" stroke="rgba(255,255,255,0.06)" stroke-width="1.5" fill="none"/>
              <path d="M 90 260 A 170 170 0 0 1 260 90" stroke="rgba(29, 111, 255, 0.2)" stroke-width="1.5" fill="none"/>
              <path d="M 140 260 A 120 120 0 0 1 260 140" stroke="rgba(183, 255, 0, 0.25)" stroke-width="1.5" fill="none"/>
              
              <!-- Leaders Zone Shading -->
              <path d="M 260 40 A 220 220 0 0 0 140 260 L 260 260 Z" fill="rgba(29, 111, 255, 0.08)"/>

              <!-- Axis Lines -->
              <line x1="40" y1="260" x2="320" y2="260" stroke="rgba(255,255,255,0.15)" stroke-width="1.5"/>
              <line x1="40" y1="40" x2="40" y2="260" stroke="rgba(255,255,255,0.15)" stroke-width="1.5"/>

              <!-- Axis Labels -->
              <text x="310" y="280" fill="#9AA7B8" font-family="sans-serif" font-size="9" text-anchor="end">STRATEGY →</text>
              <text x="25" y="55" fill="#9AA7B8" font-family="sans-serif" font-size="9" transform="rotate(-90 25,55)">CURRENT OFFERING →</text>

              <!-- Category Zone Labels -->
              <text x="70" y="240" fill="#667386" font-family="sans-serif" font-size="9">Contenders</text>
              <text x="120" y="190" fill="#667386" font-family="sans-serif" font-size="9">Performers</text>
              <text x="180" y="140" fill="#9AA7B8" font-family="sans-serif" font-size="10">Strong Performers</text>
              <text x="235" y="80" fill="#B7FF00" font-family="sans-serif" font-size="11" font-weight="bold">LEADERS</text>

              <!-- Vendor Dots -->
              <circle cx="100" cy="220" r="5" fill="#667386"/>
              <circle cx="150" cy="170" r="5" fill="#667386"/>
              <circle cx="190" cy="150" r="6" fill="#9AA7B8"/>
              <circle cx="210" cy="125" r="6" fill="#9AA7B8"/>

              <!-- CYBERSHIELD TOP LEADER PIN -->
              <g>
                <circle cx="270" cy="75" r="14" fill="rgba(183, 255, 0, 0.2)" stroke="#B7FF00" stroke-width="1.5"/>
                <circle cx="270" cy="75" r="7" fill="#B7FF00"/>
                <rect x="220" y="45" width="100" height="20" rx="3" fill="#111E30" stroke="#B7FF00" stroke-width="1"/>
                <text x="270" y="59" fill="#B7FF00" font-family="monospace" font-size="9" font-weight="bold" text-anchor="middle">CYBERSHIELD</text>
              </g>
            </svg>
          </div>
        </div>

        <!-- 3. Two Smaller Split Cards -->
        <div class="news-split-grid">
          <!-- Split Card 1: Enterprise Acceleration & G2 Leader -->
          <div class="news-sub-card">
            <div class="news-sub-content">
              <span class="tag-label">ACCREDITATION</span>
              <h4 class="news-sub-title">
                Ranked #1 Enterprise Cybersecurity Platform in Spring Grid
              </h4>
              <p class="text-small">
                Recognized for highest customer satisfaction, lab fidelity, and rapid SOC team onboarding across 1,000+ verified enterprise reviews.
              </p>
              <a href="#demo-form" class="btn btn-primary btn-sm" style="align-self: flex-start; margin-top: 6px;">
                <span>View Badges</span>
              </a>
            </div>
            <div class="news-sub-visual">
              <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 80%; height: 80%;">
                <circle cx="100" cy="100" r="80" stroke="rgba(183,255,0,0.2)" stroke-width="2" fill="#0D1A2D"/>
                <polygon points="100,35 155,65 155,135 100,165 45,135 45,65" fill="#11223A" stroke="#B7FF00" stroke-width="2"/>
                <text x="100" y="85" fill="#B7FF00" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle">LEADER</text>
                <text x="100" y="105" fill="#FFFFFF" font-family="sans-serif" font-size="13" font-weight="900" text-anchor="middle">ENTERPRISE</text>
                <text x="100" y="125" fill="#00E5FF" font-family="monospace" font-size="10" text-anchor="middle">★ ★ ★ ★ ★</text>
                <text x="100" y="145" fill="#9AA7B8" font-family="sans-serif" font-size="8" text-anchor="middle">2026 GRID</text>
              </svg>
            </div>
          </div>

          <!-- Split Card 2: Strategic Threat Defense Partnerships -->
          <div class="news-sub-card">
            <div class="news-sub-content">
              <span class="tag-label" style="color: #00E5FF;">ALLIANCE</span>
              <h4 class="news-sub-title">
                Global Threat Defense & Academic Alliances Network
              </h4>
              <p class="text-small">
                Expanding our academic and defense cybersecurity ecosystem with over 350+ certified universities and national cyber commands worldwide.
              </p>
              <a href="#demo-form" class="btn btn-primary btn-sm" style="align-self: flex-start; margin-top: 6px;">
                <span>Read Story</span>
              </a>
            </div>
            <div class="news-sub-visual">
              <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 80%; height: 80%;">
                <defs>
                  <radialGradient id="redGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stop-color="#FF3366" stop-opacity="0.3"/>
                    <stop offset="100%" stop-color="#FF3366" stop-opacity="0"/>
                  </radialGradient>
                </defs>
                <circle cx="100" cy="100" r="85" fill="url(#redGlow)"/>
                <!-- Cryptographic Padlock & Nodes -->
                <rect x="70" y="90" width="60" height="50" rx="8" fill="#13243C" stroke="#FF3366" stroke-width="2"/>
                <path d="M82 90 V70 C82 58, 118 58, 118 70 V90" stroke="#FF3366" stroke-width="3" fill="none"/>
                <circle cx="100" cy="112" r="5" fill="#B7FF00"/>
                <line x1="100" y1="117" x2="100" y2="128" stroke="#B7FF00" stroke-width="2"/>
                <!-- Connection rays -->
                <circle cx="45" cy="55" r="4" fill="#00E5FF"/>
                <circle cx="155" cy="55" r="4" fill="#B7FF00"/>
                <circle cx="160" cy="155" r="4" fill="#00E5FF"/>
                <line x1="45" y1="55" x2="82" y2="90" stroke="rgba(255,255,255,0.15)" stroke-width="1.5" stroke-dasharray="2 3"/>
                <line x1="155" y1="55" x2="120" y2="90" stroke="rgba(255,255,255,0.15)" stroke-width="1.5" stroke-dasharray="2 3"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}
