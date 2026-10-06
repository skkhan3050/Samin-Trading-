export function renderCommunity(container) {
  if (!container) return;

  const communityFeatures = [
    "Daily market discussions & chart reviews",
    "Curated educational trade breakdowns",
    "Continuous strategy framework updates",
    "Live weekly technical analysis webinars",
    "Multi-asset research & macro perspectives",
    "Peer feedback from disciplined traders"
  ];

  container.innerHTML = `
    <div class="container">
      <div class="community-card">
        <div>
          <span class="tag-badge" style="background: rgba(39, 117, 255, 0.12); border-color: rgba(39, 117, 255, 0.4); color: #00E5FF; margin-bottom: 16px;">
            TRADER NETWORK
          </span>
          <h2 class="heading-lg" style="margin-bottom: 16px;">
            Learn, Analyze and Improve Together
          </h2>
          <p class="text-lead" style="font-size: 1.05rem;">
            Join a community focused on trading education, market analysis and disciplined execution. Trade alongside fellow analytical traders who prioritize risk management.
          </p>

          <ul class="community-features-list">
            ${communityFeatures.map(f => `
              <li style="display: flex; align-items: center; gap: 10px; font-size: 0.9rem; color: #FFFFFF;">
                <span class="bullet-check-icon" aria-hidden="true" style="width: 18px; height: 18px;">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                <span>${f}</span>
              </li>
            `).join('')}
          </ul>

          <a href="#contact-form" class="btn btn-primary btn-lg">
            <span>Join the Community</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>

        <!-- Community Network Graphic SVG -->
        <div class="community-visual-container">
          <svg viewBox="0 0 360 280" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: auto;">
            <defs>
              <style>
                @keyframes commHubSpin1 {
                  0% { transform: rotate(0deg); }
                  100% { transform: rotate(360deg); }
                }
                @keyframes commHubSpin2 {
                  0% { transform: rotate(0deg); }
                  100% { transform: rotate(-360deg); }
                }
                @keyframes commPulseWave {
                  0% { r: 40; opacity: 0.9; stroke-width: 1.5; }
                  100% { r: 85; opacity: 0; stroke-width: 0.5; }
                }
                @keyframes commDataStream {
                  to { stroke-dashoffset: -32; }
                }
                @keyframes commFloat1 {
                  0%, 100% { transform: translateY(0px); }
                  50% { transform: translateY(-5px); }
                }
                @keyframes commFloat2 {
                  0%, 100% { transform: translateY(0px); }
                  50% { transform: translateY(5px); }
                }
                @keyframes commFloat3 {
                  0%, 100% { transform: translateY(0px); }
                  50% { transform: translateY(4px); }
                }
                @keyframes commFloat4 {
                  0%, 100% { transform: translateY(0px); }
                  50% { transform: translateY(-4px); }
                }
                @keyframes commBeacon {
                  0%, 100% { transform: scale(1); filter: drop-shadow(0 0 4px currentColor); }
                  50% { transform: scale(1.15); filter: drop-shadow(0 0 10px currentColor); }
                }
                @keyframes commScanline {
                  0% { transform: translateY(0px); opacity: 0.2; }
                  50% { opacity: 0.7; }
                  100% { transform: translateY(240px); opacity: 0.2; }
                }
                .comm-orbit-1 { animation: commHubSpin1 18s linear infinite; transform-origin: 180px 140px; }
                .comm-orbit-2 { animation: commHubSpin2 12s linear infinite; transform-origin: 180px 140px; }
                .comm-rip-1 { animation: commPulseWave 2.4s cubic-bezier(0.1, 0.8, 0.3, 1) infinite; }
                .comm-rip-2 { animation: commPulseWave 2.4s cubic-bezier(0.1, 0.8, 0.3, 1) 1.2s infinite; }
                .comm-stream-main { animation: commDataStream 2.2s linear infinite; }
                .comm-stream-cross { animation: commDataStream 3.5s linear infinite; }
                .comm-node-1 { animation: commFloat1 3.8s ease-in-out infinite; }
                .comm-node-2 { animation: commFloat2 4.2s ease-in-out infinite; }
                .comm-node-3 { animation: commFloat3 4s ease-in-out infinite; }
                .comm-node-4 { animation: commFloat4 3.5s ease-in-out infinite; }
                .comm-ping { animation: commBeacon 2s ease-in-out infinite; transform-origin: center; }
                .comm-scan { animation: commScanline 4s ease-in-out infinite; }
              </style>

              <radialGradient id="commHubGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stop-color="#9DD82B" stop-opacity="0.35"/>
                <stop offset="70%" stop-color="#00E5FF" stop-opacity="0.1"/>
                <stop offset="100%" stop-color="#070E1A" stop-opacity="0"/>
              </radialGradient>

              <linearGradient id="commLaserGrad" x1="0" y1="0" x2="360" y2="0" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stop-color="rgba(157, 216, 43, 0)"/>
                <stop offset="50%" stop-color="rgba(157, 216, 43, 0.5)"/>
                <stop offset="100%" stop-color="rgba(157, 216, 43, 0)"/>
              </linearGradient>
            </defs>

            <!-- Background Grid Matrix -->
            <path d="M0 70 H360 M0 140 H360 M0 210 H360" stroke="rgba(255,255,255,0.03)" stroke-width="1"/>
            <path d="M90 0 V280 M180 0 V280 M270 0 V280" stroke="rgba(255,255,255,0.03)" stroke-width="1"/>

            <!-- Scanning Laser Line -->
            <line x1="20" y1="20" x2="340" y2="20" stroke="url(#commLaserGrad)" stroke-width="1.5" class="comm-scan"/>

            <!-- Center Radial Ambient Glow -->
            <circle cx="180" cy="140" r="75" fill="url(#commHubGlow)"/>

            <!-- Cross-Desk Interconnecting Constellation Links -->
            <line x1="80" y1="70" x2="280" y2="70" stroke="rgba(0, 229, 255, 0.25)" stroke-width="1" stroke-dasharray="4 4" class="comm-stream-cross"/>
            <line x1="80" y1="210" x2="280" y2="210" stroke="rgba(157, 216, 43, 0.25)" stroke-width="1" stroke-dasharray="4 4" class="comm-stream-cross"/>
            <line x1="80" y1="70" x2="80" y2="210" stroke="rgba(39, 117, 255, 0.2)" stroke-width="1" stroke-dasharray="4 4" class="comm-stream-cross"/>
            <line x1="280" y1="70" x2="280" y2="210" stroke="rgba(255, 59, 105, 0.2)" stroke-width="1" stroke-dasharray="4 4" class="comm-stream-cross"/>

            <!-- Active Data Streams Between Hub and Desks -->
            <line x1="180" y1="140" x2="80" y2="70" stroke="#00E5FF" stroke-width="2" stroke-dasharray="6 4" class="comm-stream-main"/>
            <line x1="180" y1="140" x2="280" y2="70" stroke="#38E879" stroke-width="2" stroke-dasharray="6 4" class="comm-stream-main"/>
            <line x1="180" y1="140" x2="80" y2="210" stroke="#9DD82B" stroke-width="2" stroke-dasharray="6 4" class="comm-stream-main"/>
            <line x1="180" y1="140" x2="280" y2="210" stroke="#FF3B69" stroke-width="2" stroke-dasharray="6 4" class="comm-stream-main"/>

            <!-- Expanding Center Ripple Halos -->
            <circle cx="180" cy="140" r="45" stroke="#9DD82B" fill="none" class="comm-rip-1"/>
            <circle cx="180" cy="140" r="45" stroke="#00E5FF" fill="none" class="comm-rip-2"/>

            <!-- Central Community Hub (TRADELAB CORE) -->
            <g>
              <!-- Outer Rotating Orbit Rings -->
              <circle cx="180" cy="140" r="56" stroke="rgba(157, 216, 43, 0.35)" stroke-width="1.5" stroke-dasharray="8 6" class="comm-orbit-1"/>
              <circle cx="180" cy="140" r="48" stroke="rgba(0, 229, 255, 0.35)" stroke-width="1.2" stroke-dasharray="4 4" class="comm-orbit-2"/>

              <!-- Core Capsule Body -->
              <circle cx="180" cy="140" r="42" fill="#0A1626" stroke="#9DD82B" stroke-width="2.2" filter="drop-shadow(0 0 16px rgba(157, 216, 43, 0.35))"/>
              
              <!-- Core Icon/Logo Indicator -->
              <circle cx="180" cy="116" r="3.5" fill="#9DD82B" class="comm-ping"/>
              <text x="180" y="136" fill="#9DD82B" font-family="monospace" font-size="10.5" font-weight="bold" text-anchor="middle" letter-spacing="0.05em">TRADELAB</text>
              <text x="180" y="152" fill="#FFFFFF" font-family="sans-serif" font-size="8.5" font-weight="700" text-anchor="middle" letter-spacing="0.08em">COMMUNITY</text>
              <text x="180" y="166" fill="#00E5FF" font-family="monospace" font-size="7.5" font-weight="600" text-anchor="middle">SYNC // 24/7</text>
            </g>

            <!-- Satellite Trader Node 1: BTC DESK -->
            <g class="comm-node-1" transform="translate(0, 0)">
              <circle cx="80" cy="70" r="30" fill="#091322" stroke="#00E5FF" stroke-width="2" filter="drop-shadow(0 0 10px rgba(0, 229, 255, 0.3))"/>
              <circle cx="80" cy="53" r="2.5" fill="#00E5FF" class="comm-ping"/>
              <text x="80" y="70" fill="#00E5FF" font-family="monospace" font-size="9" font-weight="bold" text-anchor="middle">BTC DESK</text>
              <text x="80" y="83" fill="#FFFFFF" font-family="monospace" font-size="7.5" text-anchor="middle">+4.8% ▲</text>
            </g>

            <!-- Satellite Trader Node 2: ETH DESK -->
            <g class="comm-node-2" transform="translate(0, 0)">
              <circle cx="280" cy="70" r="30" fill="#091322" stroke="#38E879" stroke-width="2" filter="drop-shadow(0 0 10px rgba(56, 232, 121, 0.3))"/>
              <circle cx="280" cy="53" r="2.5" fill="#38E879" class="comm-ping"/>
              <text x="280" y="70" fill="#38E879" font-family="monospace" font-size="9" font-weight="bold" text-anchor="middle">ETH DESK</text>
              <text x="280" y="83" fill="#FFFFFF" font-family="monospace" font-size="7.5" text-anchor="middle">ACTIVE</text>
            </g>

            <!-- Satellite Trader Node 3: ALTS LAB -->
            <g class="comm-node-3" transform="translate(0, 0)">
              <circle cx="80" cy="210" r="30" fill="#091322" stroke="#9DD82B" stroke-width="2" filter="drop-shadow(0 0 10px rgba(157, 216, 43, 0.3))"/>
              <circle cx="80" cy="193" r="2.5" fill="#9DD82B" class="comm-ping"/>
              <text x="80" y="210" fill="#9DD82B" font-family="monospace" font-size="9" font-weight="bold" text-anchor="middle">ALTS LAB</text>
              <text x="80" y="223" fill="#FFFFFF" font-family="monospace" font-size="7.5" text-anchor="middle">ALPHA INFLOW</text>
            </g>

            <!-- Satellite Trader Node 4: RISK DESK -->
            <g class="comm-node-4" transform="translate(0, 0)">
              <circle cx="280" cy="210" r="30" fill="#140A10" stroke="#FF3B69" stroke-width="2" filter="drop-shadow(0 0 10px rgba(255, 59, 105, 0.3))"/>
              <circle cx="280" cy="193" r="2.5" fill="#FF3B69" class="comm-ping"/>
              <text x="280" y="210" fill="#FF3B69" font-family="monospace" font-size="9" font-weight="bold" text-anchor="middle">RISK DESK</text>
              <text x="280" y="223" fill="#FFFFFF" font-family="monospace" font-size="7.5" text-anchor="middle">1.0% MAX RISK</text>
            </g>
          </svg>
        </div>
      </div>
    </div>
  `;
}
