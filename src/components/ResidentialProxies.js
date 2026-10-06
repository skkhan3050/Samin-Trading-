export function renderResidentialProxies(container) {
  if (!container) return;

  container.innerHTML = `
    <section class="proxy-hero-section" data-testid="stack">
      <div class="container proxy-hero-container" data-testid="container">
        
        <!-- Main Top Grid -->
        <div class="proxy-hero-grid" data-testid="grid">
          
          <!-- Left Column: Content -->
          <div class="proxy-hero-left" data-testid="grid">
            
            <!-- G2 Review Rating Badge -->
            <div class="proxy-g2-wrap" data-testid="stack">
              <a 
                rel="noopener noreferrer" 
                href="https://www.g2.com/products/proxy-seller/reviews?utm_source=review-widget" 
                target="_blank"
                class="proxy-g2-link"
              >
                <div class="proxy-g2-badge" data-testid="stack">
                  <div class="g2-icon-box">
                    <svg class="g2-logo-svg" viewBox="0 0 24 24" width="22" height="22" fill="none">
                      <rect width="24" height="24" rx="4" fill="#FF492C"/>
                      <path d="M12.5 6.5C9.46 6.5 7 8.96 7 12s2.46 5.5 5.5 5.5c2.42 0 4.47-1.57 5.18-3.75h-5.18v-2.5h8.18c.07.41.11.83.11 1.25 0 4.14-3.36 7.5-8.29 7.5-4.42 0-8-3.58-8-8s3.58-8 8-8c2.16 0 4.13.86 5.58 2.25l-2.07 2.07c-.9-.85-2.12-1.32-3.51-1.32z" fill="#FFFFFF"/>
                    </svg>
                  </div>
                  <p class="proxy-g2-text" data-testid="typography">
                    <span class="proxy-g2-score" data-testid="box">4.8</span>/5 on G2
                  </p>
                  <span role="img" aria-label="5 Stars" data-testid="rating" class="proxy-g2-stars">
                    <svg class="g2-star-icon" viewBox="0 0 20 20" width="18" height="18"><path d="M10 2L12.7193 6.9091L18 8.11146L14.4 12.3478L14.9443 18L10 15.7091L5.05573 18L5.6 12.3478L2 8.11146L7.28065 6.9091L10 2Z" fill="#FF492C"></path></svg>
                    <svg class="g2-star-icon" viewBox="0 0 20 20" width="18" height="18"><path d="M10 2L12.7193 6.9091L18 8.11146L14.4 12.3478L14.9443 18L10 15.7091L5.05573 18L5.6 12.3478L2 8.11146L7.28065 6.9091L10 2Z" fill="#FF492C"></path></svg>
                    <svg class="g2-star-icon" viewBox="0 0 20 20" width="18" height="18"><path d="M10 2L12.7193 6.9091L18 8.11146L14.4 12.3478L14.9443 18L10 15.7091L5.05573 18L5.6 12.3478L2 8.11146L7.28065 6.9091L10 2Z" fill="#FF492C"></path></svg>
                    <svg class="g2-star-icon" viewBox="0 0 20 20" width="18" height="18"><path d="M10 2L12.7193 6.9091L18 8.11146L14.4 12.3478L14.9443 18L10 15.7091L5.05573 18L5.6 12.3478L2 8.11146L7.28065 6.9091L10 2Z" fill="#FF492C"></path></svg>
                    <svg class="g2-star-icon" viewBox="0 0 20 20" width="18" height="18"><path d="M10 2L12.7193 6.9091L18 8.11146L14.4 12.3478L14.9443 18L10 15.7091L5.05573 18L5.6 12.3478L2 8.11146L7.28065 6.9091L10 2Z" fill="#FF492C"></path></svg>
                  </span>
                </div>
              </a>
            </div>

            <!-- Header Section -->
            <div class="proxy-page-head" data-testid="app-page-head">
              <h1 class="proxy-title" data-testid="typography">Residential Proxies</h1>
              <p class="proxy-subtitle" data-testid="typography">
                <span>Ethically sourced residential proxies for data collection and large-scale operations. 220+ locations with city/ISP targeting and flexible rotation or sticky sessions.</span>
              </p>
            </div>

            <!-- Action Buttons -->
            <div class="proxy-btn-row" data-testid="stack">
              <button class="btn btn-primary btn-lg proxy-cta-primary" tabindex="0" type="button" data-testid="additional-button">
                Contact sales
              </button>
              <button class="btn btn-secondary btn-lg proxy-cta-secondary" tabindex="0" type="button" data-testid="view-plans-button">
                View plans
              </button>
            </div>

            <!-- Feature Triggers (Desktop & Responsive) -->
            <ul class="proxy-triggers" data-testid="proxy-triggers">
              <li class="proxy-trigger-item" data-testid="stack">
                <div class="proxy-trigger-icon-wrap">
                  <svg class="proxy-trigger-icon" focusable="false" aria-hidden="true" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                  </svg>
                </div>
                <div class="proxy-trigger-text-wrap">
                  <span class="proxy-trigger-label" data-testid="typography">Instant activation</span>
                  <span class="proxy-trigger-subtext">Immediate setup within 60s</span>
                </div>
              </li>
              <li class="proxy-trigger-item" data-testid="stack">
                <div class="proxy-trigger-icon-wrap">
                  <svg class="proxy-trigger-icon" focusable="false" aria-hidden="true" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 9.9-1"></path>
                  </svg>
                </div>
                <div class="proxy-trigger-text-wrap">
                  <span class="proxy-trigger-label" data-testid="typography">No commitment</span>
                  <span class="proxy-trigger-subtext">Cancel or scale anytime</span>
                </div>
              </li>
              <li class="proxy-trigger-item" data-testid="stack">
                <div class="proxy-trigger-icon-wrap">
                  <svg class="proxy-trigger-icon" focusable="false" aria-hidden="true" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    <polyline points="9 12 11 14 15 10"></polyline>
                  </svg>
                </div>
                <div class="proxy-trigger-text-wrap">
                  <span class="proxy-trigger-label" data-testid="typography">Full access from day one</span>
                  <span class="proxy-trigger-subtext">Uncapped bandwidth & features</span>
                </div>
              </li>
            </ul>
          </div>

          <!-- Right Column: Abstract Interactive Network Illustration -->
          <div class="proxy-hero-right" data-testid="box">
            <div class="proxy-abstract-visual">
              <div class="proxy-visual-glow"></div>
              
              <!-- Orbital Rings & Map HUD Graphic -->
              <div class="proxy-hud-container">
                <svg class="proxy-world-hud" viewBox="0 0 540 380" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <style>
                      @keyframes globeRingSpin1 {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                      }
                      @keyframes globeRingSpin2 {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(-360deg); }
                      }
                      @keyframes dataStreamFlow {
                        to { stroke-dashoffset: -48; }
                      }
                      @keyframes radarBeamSweep {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                      }
                      @keyframes hudBeaconRipple {
                        0% { r: 5; opacity: 1; stroke-width: 1.5; }
                        100% { r: 24; opacity: 0; stroke-width: 0.5; }
                      }
                      @keyframes nodeCorePulse {
                        0%, 100% { transform: scale(1); filter: drop-shadow(0 0 4px currentColor); }
                        50% { transform: scale(1.15); filter: drop-shadow(0 0 12px currentColor); }
                      }
                      @keyframes hudScanBar {
                        0% { transform: translateY(0px); opacity: 0.2; }
                        50% { opacity: 0.8; }
                        100% { transform: translateY(320px); opacity: 0.2; }
                      }
                      .ring-spin-outer { animation: globeRingSpin1 35s linear infinite; transform-origin: 270px 190px; }
                      .ring-spin-mid { animation: globeRingSpin2 22s linear infinite; transform-origin: 270px 190px; }
                      .ring-spin-inner { animation: globeRingSpin1 14s linear infinite; transform-origin: 270px 190px; }
                      .stream-flow-1 { animation: dataStreamFlow 2.8s linear infinite; }
                      .stream-flow-2 { animation: dataStreamFlow 3.5s linear infinite reverse; }
                      .stream-flow-3 { animation: dataStreamFlow 2.2s linear infinite; }
                      .radar-sweep-cone { animation: radarBeamSweep 6s linear infinite; transform-origin: 270px 190px; }
                      .node-rip-1 { animation: hudBeaconRipple 2.2s cubic-bezier(0.1, 0.8, 0.3, 1) infinite; }
                      .node-rip-2 { animation: hudBeaconRipple 2.2s cubic-bezier(0.1, 0.8, 0.3, 1) 0.7s infinite; }
                      .node-rip-3 { animation: hudBeaconRipple 2.2s cubic-bezier(0.1, 0.8, 0.3, 1) 1.4s infinite; }
                      .node-pulse { animation: nodeCorePulse 2s ease-in-out infinite; transform-origin: center; }
                      .hud-laser-bar { animation: hudScanBar 5s ease-in-out infinite; }
                    </style>

                    <radialGradient id="globeCenterGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stop-color="#00E5FF" stop-opacity="0.25"/>
                      <stop offset="60%" stop-color="#2775FF" stop-opacity="0.08"/>
                      <stop offset="100%" stop-color="#070E1A" stop-opacity="0"/>
                    </radialGradient>

                    <radialGradient id="radarConeGrad" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stop-color="rgba(157, 216, 43, 0.35)"/>
                      <stop offset="100%" stop-color="rgba(7, 14, 26, 0)"/>
                    </radialGradient>

                    <linearGradient id="arcGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stop-color="#38E879"/>
                      <stop offset="50%" stop-color="#9DD82B"/>
                      <stop offset="100%" stop-color="#00E5FF"/>
                    </linearGradient>

                    <linearGradient id="arcGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stop-color="#2775FF"/>
                      <stop offset="50%" stop-color="#00E5FF"/>
                      <stop offset="100%" stop-color="#9DD82B"/>
                    </linearGradient>

                    <linearGradient id="laserScanGrad" x1="0" y1="0" x2="540" y2="0" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stop-color="rgba(0, 229, 255, 0)"/>
                      <stop offset="50%" stop-color="rgba(0, 229, 255, 0.5)"/>
                      <stop offset="100%" stop-color="rgba(0, 229, 255, 0)"/>
                    </linearGradient>
                  </defs>

                  <!-- Backdrop Ambient Glow -->
                  <circle cx="270" cy="190" r="165" fill="url(#globeCenterGlow)"/>

                  <!-- Outer HUD Corner Reticles -->
                  <path d="M20 35 H45 M20 35 V60" stroke="rgba(0, 229, 255, 0.4)" stroke-width="1.5"/>
                  <path d="M520 35 H495 M520 35 V60" stroke="rgba(0, 229, 255, 0.4)" stroke-width="1.5"/>
                  <path d="M20 345 H45 M20 345 V320" stroke="rgba(0, 229, 255, 0.4)" stroke-width="1.5"/>
                  <path d="M520 345 H495 M520 345 V320" stroke="rgba(0, 229, 255, 0.4)" stroke-width="1.5"/>

                  <!-- Coordinate Radial Grid Lines -->
                  <line x1="270" y1="25" x2="270" y2="355" stroke="rgba(255, 255, 255, 0.05)" stroke-width="1" stroke-dasharray="3 3"/>
                  <line x1="100" y1="190" x2="440" y2="190" stroke="rgba(255, 255, 255, 0.05)" stroke-width="1" stroke-dasharray="3 3"/>
                  <line x1="150" y1="70" x2="390" y2="310" stroke="rgba(255, 255, 255, 0.03)" stroke-width="1"/>
                  <line x1="150" y1="310" x2="390" y2="70" stroke="rgba(255, 255, 255, 0.03)" stroke-width="1"/>

                  <!-- Latitude Longitude Matrix Curves -->
                  <ellipse cx="270" cy="190" rx="160" ry="70" stroke="rgba(39, 117, 255, 0.12)" stroke-width="1" fill="none"/>
                  <ellipse cx="270" cy="190" rx="160" ry="120" stroke="rgba(39, 117, 255, 0.1)" stroke-width="1" fill="none"/>
                  <ellipse cx="270" cy="190" rx="70" ry="160" stroke="rgba(0, 229, 255, 0.08)" stroke-width="1" fill="none"/>

                  <!-- Rotating Orbital Concentric Rings -->
                  <circle cx="270" cy="190" r="160" stroke="rgba(39, 117, 255, 0.25)" stroke-width="1.5" stroke-dasharray="8 8" class="ring-spin-outer"/>
                  <circle cx="270" cy="190" r="120" stroke="rgba(157, 216, 43, 0.3)" stroke-width="1.5" stroke-dasharray="14 6" class="ring-spin-mid"/>
                  <circle cx="270" cy="190" r="75" stroke="rgba(0, 229, 255, 0.35)" stroke-width="1.5" stroke-dasharray="6 4" class="ring-spin-inner"/>

                  <!-- Animated Radar Sweep Beam -->
                  <g class="radar-sweep-cone">
                    <path d="M270 190 L430 190 A 160 160 0 0 0 383 77 Z" fill="url(#radarConeGrad)"/>
                    <line x1="270" y1="190" x2="430" y2="190" stroke="#9DD82B" stroke-width="1.5"/>
                  </g>

                  <!-- Live Cyber Scanning Laser Bar -->
                  <line x1="30" y1="30" x2="510" y2="30" stroke="url(#laserScanGrad)" stroke-width="1.5" class="hud-laser-bar"/>

                  <!-- Global Interconnected Data Arcs with Moving Packet Streams -->
                  <path d="M140 140 Q 270 70 380 130" stroke="url(#arcGrad1)" stroke-width="2.5" fill="none" stroke-dasharray="8 8" class="stream-flow-1"/>
                  <path d="M160 230 Q 270 290 400 220" stroke="url(#arcGrad2)" stroke-width="2.5" fill="none" stroke-dasharray="10 6" class="stream-flow-2"/>
                  <path d="M140 140 Q 200 240 380 130" stroke="rgba(0, 229, 255, 0.5)" stroke-width="1.8" fill="none" stroke-dasharray="6 6" class="stream-flow-3"/>
                  <path d="M380 130 Q 430 170 400 220" stroke="rgba(157, 216, 43, 0.5)" stroke-width="1.8" fill="none" stroke-dasharray="6 6" class="stream-flow-1"/>
                  <path d="M140 140 Q 130 190 160 230" stroke="rgba(39, 117, 255, 0.5)" stroke-width="1.8" fill="none" stroke-dasharray="6 6" class="stream-flow-2"/>

                  <!-- Telemetry Status Header Tag -->
                  <rect x="25" y="15" width="230" height="20" rx="3" fill="rgba(157, 216, 43, 0.08)" stroke="rgba(157, 216, 43, 0.3)"/>
                  <circle cx="35" cy="25" r="3" fill="#9DD82B"/>
                  <text x="45" y="28.5" fill="#9DD82B" font-family="monospace" font-size="8.5" font-weight="bold">GLOBAL_L3_TELEMETRY // LIVE</text>

                  <!-- Node 1: US East (New York / Ashburn) -->
                  <g class="hud-node" transform="translate(140, 140)">
                    <circle r="6" stroke="#9DD82B" fill="none" class="node-rip-1"/>
                    <circle r="6" stroke="#9DD82B" fill="none" class="node-rip-2"/>
                    <circle r="14" fill="rgba(157, 216, 43, 0.18)" class="node-pulse"/>
                    <circle r="5" fill="#9DD82B"/>
                    <rect x="10" y="-12" width="105" height="20" rx="3" fill="#0A1524" stroke="#9DD82B" stroke-width="0.8"/>
                    <text x="16" y="1" fill="#FFFFFF" font-family="monospace" font-size="8.5" font-weight="bold">US EAST <tspan fill="#9DD82B">11ms</tspan></text>
                  </g>

                  <!-- Node 2: Europe Frankfurt -->
                  <g class="hud-node" transform="translate(380, 130)">
                    <circle r="6" stroke="#00E5FF" fill="none" class="node-rip-1"/>
                    <circle r="6" stroke="#00E5FF" fill="none" class="node-rip-3"/>
                    <circle r="14" fill="rgba(0, 229, 255, 0.18)" class="node-pulse"/>
                    <circle r="5" fill="#00E5FF"/>
                    <rect x="10" y="-12" width="125" height="20" rx="3" fill="#0A1524" stroke="#00E5FF" stroke-width="0.8"/>
                    <text x="16" y="1" fill="#FFFFFF" font-family="monospace" font-size="8.5" font-weight="bold">EU FRANKFURT <tspan fill="#00E5FF">16ms</tspan></text>
                  </g>

                  <!-- Node 3: London -->
                  <g class="hud-node" transform="translate(320, 105)">
                    <circle r="5" stroke="#38E879" fill="none" class="node-rip-2"/>
                    <circle r="11" fill="rgba(56, 232, 121, 0.18)" class="node-pulse"/>
                    <circle r="4" fill="#38E879"/>
                    <rect x="10" y="-10" width="95" height="18" rx="3" fill="#0A1524" stroke="#38E879" stroke-width="0.8"/>
                    <text x="16" y="2" fill="#FFFFFF" font-family="monospace" font-size="8">LONDON <tspan fill="#38E879">14ms</tspan></text>
                  </g>

                  <!-- Node 4: Asia Tokyo -->
                  <g class="hud-node" transform="translate(400, 220)">
                    <circle r="6" stroke="#2775FF" fill="none" class="node-rip-1"/>
                    <circle r="6" stroke="#2775FF" fill="none" class="node-rip-2"/>
                    <circle r="14" fill="rgba(39, 117, 255, 0.22)" class="node-pulse"/>
                    <circle r="5" fill="#2775FF"/>
                    <rect x="10" y="-12" width="95" height="20" rx="3" fill="#0A1524" stroke="#2775FF" stroke-width="0.8"/>
                    <text x="16" y="1" fill="#FFFFFF" font-family="monospace" font-size="8.5" font-weight="bold">TOKYO <tspan fill="#00E5FF">22ms</tspan></text>
                  </g>

                  <!-- Node 5: South America São Paulo -->
                  <g class="hud-node" transform="translate(160, 230)">
                    <circle r="5" stroke="#FFBD2E" fill="none" class="node-rip-3"/>
                    <circle r="11" fill="rgba(255, 189, 46, 0.2)" class="node-pulse"/>
                    <circle r="4" fill="#FFBD2E"/>
                    <rect x="10" y="-10" width="115" height="18" rx="3" fill="#0A1524" stroke="#FFBD2E" stroke-width="0.8"/>
                    <text x="16" y="2" fill="#FFFFFF" font-family="monospace" font-size="8">SÃO PAULO <tspan fill="#FFBD2E">28ms</tspan></text>
                  </g>
                </svg>

                <!-- Floating Live Stats Badge -->
                <div class="proxy-floating-card">
                  <div class="floating-header">
                    <span class="live-dot"></span>
                    <span class="live-title">IP POOL METRICS</span>
                  </div>
                  <div class="floating-stats-grid">
                    <div class="f-stat">
                      <span class="f-lbl">ACTIVE RESIDENTIAL IPs</span>
                      <span class="f-val text-neon font-mono">47,820,114</span>
                    </div>
                    <div class="f-stat">
                      <span class="f-lbl">UPTIME SLA</span>
                      <span class="f-val text-green font-mono">99.98%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <!-- Hero Highlights Row (4 Pillars) -->
        <ul class="proxy-hero-highlights" data-testid="hero-highlights">
          <li class="proxy-highlight-item" data-testid="stack">
            <svg class="proxy-highlight-icon" focusable="false" aria-hidden="true" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#B7FF00" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <span class="proxy-highlight-text" data-testid="typography">47M+ IPs</span>
          </li>
          <li class="proxy-highlight-item" data-testid="stack">
            <svg class="proxy-highlight-icon" focusable="false" aria-hidden="true" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#B7FF00" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <span class="proxy-highlight-text" data-testid="typography">220+ locations</span>
          </li>
          <li class="proxy-highlight-item" data-testid="stack">
            <svg class="proxy-highlight-icon" focusable="false" aria-hidden="true" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#B7FF00" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <span class="proxy-highlight-text" data-testid="typography">Rotating &amp; sticky sessions</span>
          </li>
          <li class="proxy-highlight-item" data-testid="stack">
            <svg class="proxy-highlight-icon" focusable="false" aria-hidden="true" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#B7FF00" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <span class="proxy-highlight-text" data-testid="typography">DPA/SCC ready</span>
          </li>
        </ul>

      </div>
    </section>
  `;
}
