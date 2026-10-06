// Reusable high-fidelity circular SVG country flags (100% cross-platform compatible on Windows, Mac, Linux, iOS, Android)
const FLAGS = {
  US: `
    <svg class="country-flag-svg" viewBox="0 0 512 512" width="22" height="22" xmlns="http://www.w3.org/2000/svg">
      <clipPath id="circleUS"><circle cx="256" cy="256" r="256"/></clipPath>
      <g clip-path="url(#circleUS)">
        <path fill="#BD3D44" d="M0 0h512v512H0z"/>
        <path stroke="#FFF" stroke-width="39.38" d="M0 59h512M0 137.7h512M0 216.5h512M0 295.2h512M0 374h512M0 452.8h512"/>
        <path fill="#192F5D" d="M0 0h240v275H0z"/>
        <g fill="#FFF">
          <circle cx="35" cy="30" r="8"/><circle cx="85" cy="30" r="8"/><circle cx="135" cy="30" r="8"/><circle cx="185" cy="30" r="8"/>
          <circle cx="60" cy="65" r="8"/><circle cx="110" cy="65" r="8"/><circle cx="160" cy="65" r="8"/><circle cx="210" cy="65" r="8"/>
          <circle cx="35" cy="100" r="8"/><circle cx="85" cy="100" r="8"/><circle cx="135" cy="100" r="8"/><circle cx="185" cy="100" r="8"/>
          <circle cx="60" cy="135" r="8"/><circle cx="110" cy="135" r="8"/><circle cx="160" cy="135" r="8"/><circle cx="210" cy="135" r="8"/>
          <circle cx="35" cy="170" r="8"/><circle cx="85" cy="170" r="8"/><circle cx="135" cy="170" r="8"/><circle cx="185" cy="170" r="8"/>
          <circle cx="60" cy="205" r="8"/><circle cx="110" cy="205" r="8"/><circle cx="160" cy="205" r="8"/><circle cx="210" cy="205" r="8"/>
          <circle cx="35" cy="240" r="8"/><circle cx="85" cy="240" r="8"/><circle cx="135" cy="240" r="8"/><circle cx="185" cy="240" r="8"/>
        </g>
      </g>
    </svg>
  `,
  ES: `
    <svg class="country-flag-svg" viewBox="0 0 512 512" width="22" height="22" xmlns="http://www.w3.org/2000/svg">
      <clipPath id="circleES"><circle cx="256" cy="256" r="256"/></clipPath>
      <g clip-path="url(#circleES)">
        <path fill="#AA151B" d="M0 0h512v512H0z"/>
        <path fill="#F1BF00" d="M0 128h512v256H0z"/>
        <circle cx="130" cy="256" r="36" fill="#AA151B"/>
        <circle cx="130" cy="256" r="24" fill="#F1BF00"/>
      </g>
    </svg>
  `,
  IN: `
    <svg class="country-flag-svg" viewBox="0 0 512 512" width="22" height="22" xmlns="http://www.w3.org/2000/svg">
      <clipPath id="circleIN"><circle cx="256" cy="256" r="256"/></clipPath>
      <g clip-path="url(#circleIN)">
        <path fill="#FF9933" d="M0 0h512v170.7H0z"/>
        <path fill="#FFF" d="M0 170.7h512v170.6H0z"/>
        <path fill="#128807" d="M0 341.3h512V512H0z"/>
        <circle cx="256" cy="256" r="50" stroke="#000080" stroke-width="6" fill="none"/>
        <circle cx="256" cy="256" r="10" fill="#000080"/>
        <g stroke="#000080" stroke-width="3">
          <line x1="256" y1="206" x2="256" y2="306"/>
          <line x1="206" y1="256" x2="306" y2="256"/>
          <line x1="221" y1="221" x2="291" y2="291"/>
          <line x1="221" y1="291" x2="291" y2="221"/>
        </g>
      </g>
    </svg>
  `,
  FR: `
    <svg class="country-flag-svg" viewBox="0 0 512 512" width="22" height="22" xmlns="http://www.w3.org/2000/svg">
      <clipPath id="circleFR"><circle cx="256" cy="256" r="256"/></clipPath>
      <g clip-path="url(#circleFR)">
        <path fill="#002395" d="M0 0h170.7v512H0z"/>
        <path fill="#FFF" d="M170.7 0h170.6v512H170.7z"/>
        <path fill="#ED2939" d="M341.3 0H512v512H341.3z"/>
      </g>
    </svg>
  `,
  PT: `
    <svg class="country-flag-svg" viewBox="0 0 512 512" width="22" height="22" xmlns="http://www.w3.org/2000/svg">
      <clipPath id="circlePT"><circle cx="256" cy="256" r="256"/></clipPath>
      <g clip-path="url(#circlePT)">
        <path fill="#046A38" d="M0 0h204.8v512H0z"/>
        <path fill="#DA291C" d="M204.8 0H512v512H204.8z"/>
        <circle cx="204.8" cy="256" r="60" fill="#FFC72C" stroke="#000" stroke-width="4"/>
        <rect x="180" y="230" width="50" height="52" fill="#FFF" rx="4"/>
        <rect x="188" y="238" width="34" height="36" fill="#003399" rx="2"/>
      </g>
    </svg>
  `,
  GB: `
    <svg class="country-flag-svg" viewBox="0 0 512 512" width="22" height="22" xmlns="http://www.w3.org/2000/svg">
      <clipPath id="circleGB"><circle cx="256" cy="256" r="256"/></clipPath>
      <g clip-path="url(#circleGB)">
        <path fill="#012169" d="M0 0h512v512H0z"/>
        <path stroke="#FFF" stroke-width="60" d="M0 0l512 512M512 0L0 512"/>
        <path stroke="#C8102E" stroke-width="36" d="M0 0l512 512M512 0L0 512"/>
        <path stroke="#FFF" stroke-width="100" d="M256 0v512M0 256h512"/>
        <path stroke="#C8102E" stroke-width="60" d="M256 0v512M0 256h512"/>
      </g>
    </svg>
  `
};

export function renderHumanSupportMap(container) {
  if (!container) return;

  container.innerHTML = `
    <div class="container">
      <div class="map-sec-wrap">
          
          <!-- Left Column: Interactive Dotted World Map Visual Card -->
          <div class="map-left-col">
            <div class="support-map-canvas-card" id="support-map-3d-card">
              <!-- Glow Ambient Backdrop inside Card -->
              <div class="map-card-inner-glow" aria-hidden="true"></div>

              <!-- Animated Radar Scanning Beam -->
              <div class="map-radar-scan-line" aria-hidden="true"></div>

              <!-- Network Connection Flight Arcs SVG -->
              <svg class="map-connection-lines-svg" viewBox="0 0 600 450" preserveAspectRatio="none" aria-hidden="true">
                <!-- Arc 1: California to Florida -->
                <path class="route-arc-base" d="M 90 240 Q 130 220 160 260" />
                <path class="route-arc-pulse" d="M 90 240 Q 130 220 160 260" />

                <!-- Arc 2: Florida to London/UK -->
                <path class="route-arc-base" d="M 160 260 Q 220 160 280 150" />
                <path class="route-arc-pulse pulse-delay-1" d="M 160 260 Q 220 160 280 150" />

                <!-- Arc 3: California to London/UK -->
                <path class="route-arc-base" d="M 90 240 Q 180 130 280 150" />
                <path class="route-arc-pulse pulse-delay-2" d="M 90 240 Q 180 130 280 150" />
              </svg>

              <!-- Map Image with Animated Breathing Glow -->
              <div class="map-img-anim-wrap">
                <img 
                  src="https://cdn.prod.website-files.com/679b064a680c614548672a06/6a17fbfc3598132e630b2e44_home-v1-new-map.webp" 
                  loading="eager" 
                  width="1304" 
                  height="1118" 
                  alt="Global Support Map" 
                  class="map-left-img map-animated-glow"
                />
              </div>

              <!-- Floating Location Beacon 1: California -->
              <div class="map-pin pin-california" title="California Support Hub">
                <div class="pin-sonar-ring ring-1"></div>
                <div class="pin-sonar-ring ring-2"></div>
                <div class="pin-beacon-glow"></div>
                <div class="pin-badge">
                  <span class="pin-flag">${FLAGS.US}</span>
                  <span class="pin-name">California</span>
                </div>
              </div>

              <!-- Floating Location Beacon 2: Florida -->
              <div class="map-pin pin-florida" title="Florida Support Hub">
                <div class="pin-sonar-ring ring-1"></div>
                <div class="pin-sonar-ring ring-2"></div>
                <div class="pin-beacon-glow"></div>
                <div class="pin-badge">
                  <span class="pin-flag">${FLAGS.US}</span>
                  <span class="pin-name">Florida</span>
                </div>
              </div>

              <!-- Floating Location Beacon 3: United Kingdom -->
              <div class="map-pin pin-uk" title="United Kingdom Support Hub">
                <div class="pin-sonar-ring ring-1"></div>
                <div class="pin-sonar-ring ring-2"></div>
                <div class="pin-beacon-glow"></div>
                <div class="pin-badge">
                  <span class="pin-flag">${FLAGS.GB}</span>
                  <span class="pin-name">United Kingdom</span>
                </div>
              </div>

              <!-- Live HUD Telemetry Chip on Map -->
              <div class="map-live-telemetry-chip">
                <span class="live-dot-ping"></span>
                <span>GLOBAL SUPPORT HUBS: ONLINE (24/7)</span>
              </div>
            </div>
          </div>

          <!-- Right Column: Multilingual Greetings, Big Title, Stats, and CTA -->
          <div class="map-right-col">
            
            <!-- Multilingual Greeting Badges Pill Row -->
            <div class="countr-list-row">
              <div class="countr-pill">
                <span class="countr-flag-box">${FLAGS.US}</span>
                <span class="countr-txt">Hello</span>
              </div>
              <div class="countr-pill">
                <span class="countr-flag-box">${FLAGS.ES}</span>
                <span class="countr-txt">Hola</span>
              </div>
              <div class="countr-pill">
                <span class="countr-flag-box">${FLAGS.IN}</span>
                <span class="countr-txt">Namaste</span>
              </div>
              <div class="countr-pill">
                <span class="countr-flag-box">${FLAGS.FR}</span>
                <span class="countr-txt">Bonjour</span>
              </div>
              <div class="countr-pill">
                <span class="countr-flag-box">${FLAGS.PT}</span>
                <span class="countr-txt">Olá</span>
              </div>
            </div>

            <!-- Big Bold Heading (24/7 human in green, support in any language in white) -->
            <div class="map-head-block">
              <h2 class="support-map-main-title">
                <span class="support-title-green">24/7 human</span><br/>
                <span class="support-title-white">support, in any</span><br/>
                <span class="support-title-white">language</span>
              </h2>
              <p class="support-map-sub-desc">
                Talk to actual traders and resolve any issue in minutes.
              </p>
            </div>

            <!-- Metrics Stats Counters Row -->
            <div class="support-metrics-row">
              <div class="support-metric-box">
                <div class="support-metric-number">30+</div>
                <div class="support-metric-label">Experts Worldwide</div>
              </div>
              <div class="support-metric-box">
                <div class="support-metric-number">10+</div>
                <div class="support-metric-label">Years Trading Experience</div>
              </div>
            </div>

            <!-- CTA Button: Get help -->
            <div class="support-cta-wrap">
              <a href="#contact-form" class="btn btn-primary support-get-help-btn">
                <span>Get help</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    `;
}

