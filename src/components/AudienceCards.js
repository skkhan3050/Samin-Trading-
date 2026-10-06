export function renderAudienceCards(container) {
  if (!container) return;

  container.innerHTML = `
    <!-- Centered Main Value Proposition -->
    <div class="container intro-section">
      <div class="intro-content">
        <h2 class="intro-heading">
          Crypto Trading Strategies Built for Real Market Conditions
        </h2>
        <p class="text-lead intro-desc">
          Structured trading frameworks combining market structure, technical analysis, risk management and disciplined execution.
        </p>
      </div>
    </div>

    <!-- Three Animated Audience Cards -->
    <div class="container">
      <div class="audience-grid">
        
        <!-- Card 1: For Beginners (Animated Foundation & Price Action) -->
        <div class="audience-card">
          <div class="audience-img-wrap">
            <div class="aud-img-header-hud">
              <span class="aud-hud-pill">
                <span class="aud-hud-dot dot-green"></span>
                <span>FOUNDATION TELEMETRY</span>
              </span>
              <span class="aud-hud-time">4H CHART</span>
            </div>

            <svg viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg" class="aud-svg-animated">
              <rect width="400" height="250" fill="#060C18"/>
              <defs>
                <radialGradient id="begGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stop-color="#2563EB" stop-opacity="0.38"/>
                  <stop offset="100%" stop-color="#060C18" stop-opacity="0"/>
                </radialGradient>
                <linearGradient id="begScanGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stop-color="#2563EB" stop-opacity="0"/>
                  <stop offset="50%" stop-color="#00F0FF" stop-opacity="0.25"/>
                  <stop offset="100%" stop-color="#2563EB" stop-opacity="0"/>
                </linearGradient>
              </defs>
              
              <!-- Ambient background glow -->
              <circle cx="200" cy="120" r="110" fill="url(#begGlow)" class="svg-ambient-pulse"/>

              <!-- Animated Scanline -->
              <rect x="0" y="0" width="400" height="40" fill="url(#begScanGrad)" class="svg-scanline-sweep"/>

              <!-- Foundation Candlestick Pattern Diagram -->
              <g transform="translate(60, 38)">
                <!-- Grid background lines -->
                <path d="M0 30 H280 M0 70 H280 M0 110 H280 M0 150 H280" stroke="rgba(255,255,255,0.05)" stroke-width="1" stroke-dasharray="3 3"/>
                
                <!-- Support Line with Glowing Animated Dash -->
                <line x1="10" y1="130" x2="270" y2="130" stroke="#2563EB" stroke-width="2" stroke-dasharray="6 4" class="svg-flowing-dash"/>
                
                <!-- Support Pill -->
                <rect x="15" y="112" width="130" height="15" rx="3" fill="#0B1930" stroke="#2563EB" stroke-width="0.8"/>
                <text x="20" y="123" fill="#00F0FF" font-family="'JetBrains Mono', monospace" font-size="8" font-weight="bold">● MAJOR SUPPORT ZONE</text>

                <!-- Basic Higher Low Pattern Candlesticks -->
                <!-- Candle 1 (Red) -->
                <line x1="50" y1="90" x2="50" y2="140" stroke="#FF3B69" stroke-width="1.8"/>
                <rect x="44" y="98" width="12" height="32" fill="#FF3B69" rx="1" class="svg-candle-pulse"/>

                <!-- Candle 2 (Green) -->
                <line x1="110" y1="80" x2="110" y2="135" stroke="#38E879" stroke-width="1.8"/>
                <rect x="104" y="86" width="12" height="38" fill="#38E879" rx="1" class="svg-candle-pulse-alt"/>

                <!-- Candle 3 (Red Higher Low) -->
                <line x1="170" y1="70" x2="170" y2="120" stroke="#FF3B69" stroke-width="1.8"/>
                <rect x="164" y="76" width="12" height="26" fill="#FF3B69" rx="1" class="svg-candle-pulse"/>

                <!-- Candle 4 (Neon Green Expansion) -->
                <line x1="230" y1="36" x2="230" y2="98" stroke="#9DD82B" stroke-width="2.2"/>
                <rect x="224" y="44" width="12" height="44" fill="#9DD82B" rx="1.5" class="svg-neon-glow-candle"/>

                <!-- Arrow Higher Low Trend Path (Flowing Dash) -->
                <path d="M50 135 L110 125 L170 112 L230 82" stroke="#9DD82B" stroke-width="2" fill="none" stroke-linecap="round" class="svg-trend-flow"/>
                
                <!-- Animated Beacon Ping on Target Breakout -->
                <circle cx="230" cy="82" r="7" stroke="#9DD82B" stroke-width="1.5" class="svg-beacon-ring"/>
                <circle cx="230" cy="82" r="3.5" fill="#9DD82B" class="svg-beacon-core"/>
                
                <rect x="165" y="24" width="105" height="15" rx="3" fill="#0D1E0C" stroke="#9DD82B" stroke-width="0.8"/>
                <text x="217" y="35" fill="#9DD82B" font-family="'JetBrains Mono', monospace" font-size="7.5" font-weight="bold" text-anchor="middle">HL #3 CONFIRMED ↗</text>
              </g>

              <!-- Bottom HUD Tag -->
              <text x="24" y="232" fill="#94A3B8" font-family="'JetBrains Mono', monospace" font-size="9.5" font-weight="600" letter-spacing="0.06em">FOUNDATION: PRICE ACTION &amp; RISK BASICS</text>
            </svg>
            <div class="audience-img-overlay"></div>
          </div>

          <div class="audience-body">
            <h3 class="audience-title">For Beginners</h3>
            <p class="audience-text">
              Learn the foundations of crypto trading, chart analysis, risk management and disciplined execution.
            </p>
            <a href="#trading-education" class="btn btn-primary audience-cta">
              <span>Start Learning</span>
            </a>
          </div>
        </div>

        <!-- Card 2: For Active Traders (Animated Breakout & Momentum) -->
        <div class="audience-card">
          <div class="audience-img-wrap">
            <div class="aud-img-header-hud">
              <span class="aud-hud-pill">
                <span class="aud-hud-dot dot-lime"></span>
                <span>BREAKOUT RADAR</span>
              </span>
              <span class="aud-hud-time">1H EXECUTION</span>
            </div>

            <svg viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg" class="aud-svg-animated">
              <rect width="400" height="250" fill="#060C18"/>
              <defs>
                <radialGradient id="actGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stop-color="#9DD82B" stop-opacity="0.32"/>
                  <stop offset="100%" stop-color="#060C18" stop-opacity="0"/>
                </radialGradient>
              </defs>
              
              <!-- Ambient green glow pulse -->
              <circle cx="200" cy="120" r="110" fill="url(#actGlow)" class="svg-ambient-pulse"/>

              <!-- Active Trading Setup & Range Breakout Visual -->
              <g transform="translate(45, 34)">
                <!-- Range Box with Animated Marching Ants Border -->
                <rect x="15" y="48" width="155" height="74" fill="rgba(37, 99, 235, 0.08)" stroke="#2563EB" stroke-width="1.2" stroke-dasharray="5 3" class="svg-flowing-dash" rx="4"/>
                <text x="22" y="40" fill="#94A3B8" font-family="'JetBrains Mono', monospace" font-size="8" font-weight="600">RANGE CONSOLIDATION [4H]</text>

                <!-- Small inner range candles -->
                <rect x="35" y="65" width="8" height="25" fill="#FF3B69" rx="1"/>
                <rect x="60" y="75" width="8" height="30" fill="#38E879" rx="1"/>
                <rect x="85" y="60" width="8" height="35" fill="#FF3B69" rx="1"/>
                <rect x="110" y="70" width="8" height="28" fill="#38E879" rx="1"/>
                <rect x="135" y="55" width="8" height="32" fill="#38E879" rx="1"/>

                <!-- Breakout Candle with Pulsing Neon Aura -->
                <line x1="190" y1="18" x2="190" y2="82" stroke="#9DD82B" stroke-width="2.5"/>
                <rect x="183" y="26" width="14" height="44" fill="#9DD82B" rx="2" class="svg-neon-glow-candle"/>

                <!-- Retest Path with Animated Glowing Dash Stream -->
                <path d="M190 48 Q 220 72, 240 55 T 285 12" stroke="#00E5FF" stroke-width="2.2" fill="none" stroke-dasharray="4 3" class="svg-flowing-dash-fast"/>
                
                <!-- Floating Pulsing Target Beacon at (285, 12) -->
                <circle cx="285" cy="12" r="8" stroke="#00E5FF" stroke-width="1.5" class="svg-beacon-ring"/>
                <circle cx="285" cy="12" r="3.5" fill="#00E5FF" class="svg-beacon-core"/>

                <!-- Execution checklist badge with Live LED Pulse -->
                <rect x="185" y="102" width="120" height="46" rx="5" fill="#0C1726" stroke="#9DD82B" stroke-width="1" class="svg-card-hud-border"/>
                <circle cx="198" cy="118" r="3" fill="#9DD82B" class="svg-beacon-core"/>
                <text x="206" y="121" fill="#9DD82B" font-family="'JetBrains Mono', monospace" font-size="8.5" font-weight="bold">SET_CHECKLIST: [4/4]</text>
                <text x="198" y="138" fill="#FFFFFF" font-family="'JetBrains Mono', monospace" font-size="8" font-weight="600">R:R = 1:3.2 VERIFIED</text>
              </g>

              <!-- Bottom HUD Tag -->
              <text x="24" y="232" fill="#9DD82B" font-family="'JetBrains Mono', monospace" font-size="9.5" font-weight="600" letter-spacing="0.06em">FRAMEWORK: BREAKOUT &amp; TREND EXECUTION</text>
            </svg>
            <div class="audience-img-overlay"></div>
          </div>

          <div class="audience-body">
            <h3 class="audience-title">For Active Traders</h3>
            <p class="audience-text">
              Explore structured trading strategies, market setups, technical analysis and trade planning.
            </p>
            <a href="#strategy-products" class="btn btn-primary audience-cta">
              <span>Explore Strategies</span>
            </a>
          </div>
        </div>

        <!-- Card 3: For Advanced Traders (Animated Matrix & Multi-Timeframe) -->
        <div class="audience-card">
          <div class="audience-img-wrap">
            <div class="aud-img-header-hud">
              <span class="aud-hud-pill">
                <span class="aud-hud-dot dot-cyan"></span>
                <span>QUANTITATIVE MATRIX</span>
              </span>
              <span class="aud-hud-time">MULTI-TF</span>
            </div>

            <svg viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg" class="aud-svg-animated">
              <rect width="400" height="250" fill="#060C18"/>
              <defs>
                <radialGradient id="advGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stop-color="#00E5FF" stop-opacity="0.32"/>
                  <stop offset="100%" stop-color="#060C18" stop-opacity="0"/>
                </radialGradient>
              </defs>
              
              <!-- Ambient Cyan Glow Pulse -->
              <circle cx="200" cy="120" r="120" fill="url(#advGlow)" class="svg-ambient-pulse"/>

              <!-- Systematic Market Structure & Liquidity Matrix -->
              <g transform="translate(48, 28)">
                <!-- Grid coordinates -->
                <line x1="10" y1="80" x2="290" y2="80" stroke="rgba(255,255,255,0.04)" stroke-width="1" stroke-dasharray="2 4"/>
                <line x1="10" y1="130" x2="290" y2="130" stroke="rgba(255,255,255,0.04)" stroke-width="1" stroke-dasharray="2 4"/>

                <!-- Bearish Order Block (Pulsing Red Hash/Zone) -->
                <rect x="25" y="25" width="130" height="30" fill="rgba(255, 59, 105, 0.14)" stroke="#FF3B69" stroke-width="1" rx="3" class="svg-zone-pulse-red"/>
                <text x="34" y="44" fill="#FF3B69" font-family="'JetBrains Mono', monospace" font-size="8" font-weight="bold">BEARISH ORDER BLOCK</text>

                <!-- Bullish FVG (4H Imbalance - Pulsing Green Zone) -->
                <rect x="135" y="105" width="145" height="32" fill="rgba(56, 232, 121, 0.14)" stroke="#38E879" stroke-width="1" rx="3" class="svg-zone-pulse-green"/>
                <text x="144" y="125" fill="#38E879" font-family="'JetBrains Mono', monospace" font-size="8" font-weight="bold">BULLISH FVG (4H IMBALANCE)</text>

                <!-- Multi-Timeframe Synchro Wave Line (Flowing animated stroke) -->
                <path d="M30 95 L90 42 L150 120 L220 62 L275 22" stroke="#00E5FF" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="svg-wave-flow"/>
                
                <!-- Liquidity Sweep Reaction Ping at (150, 120) -->
                <circle cx="150" cy="120" r="10" stroke="#9DD82B" stroke-width="1.8" class="svg-beacon-ring"/>
                <circle cx="150" cy="120" r="4" fill="#9DD82B" class="svg-beacon-core"/>

                <!-- Swept Liquidity Pill Annotation -->
                <rect x="165" y="142" width="115" height="15" rx="3" fill="#0A1828" stroke="#00E5FF" stroke-width="0.8"/>
                <text x="222" y="153" fill="#00E5FF" font-family="'JetBrains Mono', monospace" font-size="7.5" font-weight="bold" text-anchor="middle">⚡ LIQUIDITY SWEPT &amp; FILLED</text>
              </g>

              <!-- Bottom HUD Tag -->
              <text x="24" y="232" fill="#00E5FF" font-family="'JetBrains Mono', monospace" font-size="9.5" font-weight="600" letter-spacing="0.06em">SYSTEMATIC: LIQUIDITY &amp; MULTI-TIMEFRAME</text>
            </svg>
            <div class="audience-img-overlay"></div>
          </div>

          <div class="audience-body">
            <h3 class="audience-title">For Advanced Traders</h3>
            <p class="audience-text">
              Develop a more systematic approach using advanced market analysis, strategy frameworks and risk management.
            </p>
            <a href="#pricing" class="btn btn-primary audience-cta">
              <span>Go Advanced</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  `;
}

