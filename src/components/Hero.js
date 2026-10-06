export function renderHero(container) {
  if (!container) return;

  container.innerHTML = `
    <!-- Cinematic Background Video Layer -->
    <div class="hero-video-bg-container" aria-hidden="true">
      <video
        class="hero-bg-video"
        autoplay
        loop
        muted
        playsinline
        preload="auto"
      >
        <source src="/hero-bg-video.mp4" type="video/mp4" />
      </video>
      <!-- Multi-tier Quality Enhancer Filters & Dark Gradient Vignette -->
      <div class="hero-video-overlay-gradient"></div>
      <div class="hero-video-cyber-grid"></div>
      <div class="hero-video-glow-vignette"></div>
    </div>

    <div class="container hero-container-relative">
      <div class="hero-grid">
        <!-- Hero Left Column -->
        <div class="hero-content">
          <div class="hero-badge-wrap">
            <span class="hero-pill-badge">
              <span class="badge-dot-green"></span>
              INSTITUTIONAL GRADE • CRYPTO TRADING STRATEGIES
            </span>
          </div>

          <h1 class="hero-title">
            Trade With a<br/>
            Strategy.<br/>
            <span class="hero-green-text">Not With</span> <span class="hero-cyan-text">Emotion.</span>
          </h1>

          <p class="hero-description">
            Access institutional-grade crypto trading frameworks, multi-timeframe order flow models, and risk management systems engineered for consistent, disciplined traders.
          </p>

          <div class="hero-cta-group">
            <a href="#strategy-products" class="btn btn-hero-primary" id="hero-primary-cta">
              <span>Explore Strategy Suite</span>
              <span class="btn-arrow">→</span>
            </a>
            <a href="#trading-process" class="btn btn-hero-secondary" id="hero-secondary-cta">
              <span>View Execution Flow</span>
            </a>
          </div>
        </div>

        <!-- Hero Right Column: Exact Candlestick Terminal Card -->
        <div class="hero-visual-card">
          <!-- Card Header Bar -->
          <div class="hero-terminal-header">
            <div class="hero-terminal-dots">
              <span class="terminal-dot dot-red"></span>
              <span class="terminal-dot dot-yellow"></span>
              <span class="terminal-dot dot-green"></span>
            </div>
            <div class="hero-terminal-title">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#9DD82B" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                <polyline points="16 7 22 7 22 13"></polyline>
              </svg>
              <span>BTC/USDT // 4H_MARKET_STRUCTURE</span>
            </div>
            <div class="hero-live-pill">
              <span class="live-dot"></span>
              <span>LIVE ANALYSIS</span>
            </div>
          </div>

          <!-- Candlestick Chart Area -->
          <div class="hero-chart-container">
            <!-- Top Right Floating Gain Badge -->
            <div class="chart-floating-gain-pill">
              <span class="gain-dot"></span>
              <span>+34.8% Realized Gain // Risk 1:3.2</span>
            </div>

            <!-- Candlestick Chart SVG -->
            <svg viewBox="0 0 540 310" fill="none" xmlns="http://www.w3.org/2000/svg" class="hero-candlestick-svg">
              <!-- Background -->
              <rect width="540" height="310" fill="#040811"/>
              
              <!-- Horizontal Grid Lines -->
              <line x1="30" y1="45" x2="510" y2="45" stroke="rgba(255,255,255,0.04)" stroke-width="1" stroke-dasharray="2 3"/>
              <line x1="30" y1="95" x2="510" y2="95" stroke="rgba(255,255,255,0.04)" stroke-width="1" stroke-dasharray="2 3"/>
              <line x1="30" y1="145" x2="510" y2="145" stroke="rgba(255,255,255,0.04)" stroke-width="1" stroke-dasharray="2 3"/>
              <line x1="30" y1="195" x2="510" y2="195" stroke="rgba(255,255,255,0.04)" stroke-width="1" stroke-dasharray="2 3"/>
              <line x1="30" y1="245" x2="510" y2="245" stroke="rgba(255,255,255,0.04)" stroke-width="1" stroke-dasharray="2 3"/>

              <!-- Price Level Scale (Right Side) -->
              <text x="510" y="49" fill="#475569" font-family="'JetBrains Mono', monospace" font-size="8.5" text-anchor="end">68,400</text>
              <text x="510" y="99" fill="#475569" font-family="'JetBrains Mono', monospace" font-size="8.5" text-anchor="end">66,200</text>
              <text x="510" y="149" fill="#475569" font-family="'JetBrains Mono', monospace" font-size="8.5" text-anchor="end">64,500</text>
              <text x="510" y="199" fill="#475569" font-family="'JetBrains Mono', monospace" font-size="8.5" text-anchor="end">62,800</text>
              <text x="510" y="249" fill="#475569" font-family="'JetBrains Mono', monospace" font-size="8.5" text-anchor="end">61,000</text>

              <!-- Zones & Annotations -->
              <!-- 1. Take Profit Zone (Top Green) -->
              <rect x="340" y="52" width="165" height="24" fill="rgba(16, 231, 111, 0.08)" stroke="rgba(16, 231, 111, 0.35)" stroke-dasharray="3 3" rx="3"/>
              <text x="422" y="67" fill="#10E76F" font-family="'JetBrains Mono', monospace" font-size="7.5" font-weight="700" text-anchor="middle">TARGET EXIT / TAKE_PROFIT ($67,000)</text>

              <!-- 2. Demand & Liquidity Zone (Bottom Cyan/Blue) -->
              <rect x="40" y="212" width="460" height="24" fill="rgba(37, 99, 235, 0.08)" stroke="rgba(0, 229, 255, 0.3)" stroke-dasharray="3 3" rx="3"/>
              <text x="50" y="227" fill="#00E5FF" font-family="'JetBrains Mono', monospace" font-size="7.5" font-weight="700">KEY DEMAND &amp; LIQUIDITY ZONE ($62,400 - $63,000)</text>

              <!-- 3. CHoCH / BOS Box -->
              <line x1="120" y1="172" x2="230" y2="172" stroke="rgba(0, 229, 255, 0.5)" stroke-width="1" stroke-dasharray="2 2"/>
              <rect x="135" y="162" width="70" height="18" rx="3" fill="#071322" stroke="#00E5FF" stroke-width="1"/>
              <text x="170" y="174" fill="#00E5FF" font-family="'JetBrains Mono', monospace" font-size="7.5" font-weight="700" text-anchor="middle">CHOCH / BOS</text>

              <!-- 4. Entry Marker -->
              <rect x="300" y="128" width="80" height="18" rx="3" fill="#0B1A0E" stroke="#9DD82B" stroke-width="1"/>
              <text x="340" y="140" fill="#9DD82B" font-family="'JetBrains Mono', monospace" font-size="7.5" font-weight="700" text-anchor="middle">ENTRY: 64,850</text>

              <!-- 5. Stop Loss Marker -->
              <line x1="280" y1="202" x2="480" y2="202" stroke="rgba(244, 63, 94, 0.5)" stroke-width="1" stroke-dasharray="2 2"/>
              <rect x="390" y="193" width="90" height="18" rx="3" fill="#1C0911" stroke="#F43F5E" stroke-width="1"/>
              <text x="435" y="205" fill="#F43F5E" font-family="'JetBrains Mono', monospace" font-size="7.5" font-weight="700" text-anchor="middle">STOP LOSS: 62,200</text>

              <!-- Candlesticks Array -->
              <!-- Candle 1 (Pink/Red) -->
              <line x1="58" y1="122" x2="58" y2="180" stroke="#FF4D6D" stroke-width="1.2"/>
              <rect x="54" y="130" width="8" height="36" fill="#FF4D6D" rx="1"/>

              <!-- Candle 2 (Pink/Red) -->
              <line x1="84" y1="148" x2="84" y2="198" stroke="#FF4D6D" stroke-width="1.2"/>
              <rect x="80" y="156" width="8" height="28" fill="#FF4D6D" rx="1"/>

              <!-- Candle 3 (Cyan/Green Pin) -->
              <line x1="110" y1="168" x2="110" y2="218" stroke="#00E5FF" stroke-width="1.2"/>
              <rect x="106" y="174" width="8" height="26" fill="#00E5FF" rx="1"/>

              <!-- Candle 4 (Red sweep down) -->
              <line x1="136" y1="184" x2="136" y2="238" stroke="#FF4D6D" stroke-width="1.2"/>
              <rect x="132" y="188" width="8" height="40" fill="#FF4D6D" rx="1"/>

              <!-- Candle 5 (Reversal Green Candle) -->
              <line x1="162" y1="178" x2="162" y2="232" stroke="#00E5FF" stroke-width="1.5"/>
              <rect x="158" y="184" width="8" height="24" fill="#00E5FF" rx="1"/>

              <!-- Candle 6 (Green push) -->
              <line x1="188" y1="156" x2="188" y2="202" stroke="#00E5FF" stroke-width="1.2"/>
              <rect x="184" y="162" width="8" height="28" fill="#00E5FF" rx="1"/>

              <!-- Candle 7 (Red Pullback) -->
              <line x1="214" y1="160" x2="214" y2="192" stroke="#FF4D6D" stroke-width="1.2"/>
              <rect x="210" y="165" width="8" height="18" fill="#FF4D6D" rx="1"/>

              <!-- Candle 8 (Lime Green Entry Expansion) -->
              <line x1="240" y1="130" x2="240" y2="178" stroke="#9DD82B" stroke-width="2"/>
              <rect x="235" y="138" width="10" height="28" fill="#9DD82B" rx="1.5"/>

              <!-- Candle 9 (Lime Green Breakout) -->
              <line x1="266" y1="108" x2="266" y2="152" stroke="#9DD82B" stroke-width="1.5"/>
              <rect x="261" y="116" width="10" height="26" fill="#9DD82B" rx="1.5"/>

              <!-- Candle 10 (Red small pause) -->
              <line x1="292" y1="105" x2="292" y2="138" stroke="#FF4D6D" stroke-width="1.2"/>
              <rect x="288" y="110" width="8" height="16" fill="#FF4D6D" rx="1"/>

              <!-- Candle 11 (Green extension to Target) -->
              <line x1="318" y1="80" x2="318" y2="124" stroke="#10E76F" stroke-width="1.5"/>
              <rect x="313" y="88" width="10" height="28" fill="#10E76F" rx="1.5"/>
            </svg>
          </div>

          <!-- Card Bottom 3-Column Metrics Bar -->
          <div class="hero-terminal-footer">
            <div class="terminal-metric-col">
              <span class="t-metric-label">RISK-TO-REWARD RATIO</span>
              <span class="t-metric-val val-lime">1 : 3.4 STRUCTURED</span>
            </div>
            <div class="terminal-metric-col">
              <span class="t-metric-label">STRATEGY MODEL</span>
              <span class="t-metric-val val-green">✓ LIQUIDITY SWEEP</span>
            </div>
            <div class="terminal-metric-col">
              <span class="t-metric-label">MAX RISK PER TRADE</span>
              <span class="t-metric-val val-cyan">1.0% STRICT</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

