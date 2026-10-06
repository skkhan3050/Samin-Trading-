const solutionsData = {
  blue: {
    title: "Make defenders your strongest asset",
    desc: "Empower defensive SOC and IR units to detect, triage, and eradicate advanced persistent threats with live SOC investigations, SIEM telemetry analysis, and digital forensics.",
    bullets: [
      "Real-time SIEM, EDR & PCAP packet capture inspection labs",
      "Incident response scenarios mapped to live APT attack campaigns",
      "Defensive posture benchmarking and mean-time-to-detect (MTTD) reduction",
      "Automated SOC team playbooks and digital forensic reporting"
    ],
    cta: "Explore Blue Team Labs",
    visual: `
      <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: 100%;">
        <rect width="480" height="360" fill="#070E1A"/>
        <defs>
          <radialGradient id="blueGlow" cx="60%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#1D6FFF" stop-opacity="0.3"/>
            <stop offset="100%" stop-color="#070E1A" stop-opacity="0"/>
          </radialGradient>
        </defs>
        <circle cx="280" cy="180" r="150" fill="url(#blueGlow)"/>

        <!-- Grid Matrix -->
        <path d="M0 60 H480 M0 120 H480 M0 180 H480 M0 240 H480 M0 300 H480" stroke="rgba(255,255,255,0.03)" stroke-width="1"/>
        <path d="M60 0 V360 M120 0 V360 M180 0 V360 M240 0 V360 M300 0 V360 M360 0 V360 M420 0 V360" stroke="rgba(255,255,255,0.03)" stroke-width="1"/>

        <!-- Defender Duo Silhouette (Analyst & Threat Hunter) -->
        <g opacity="0.95">
          <!-- Defender 1 (Left) -->
          <circle cx="180" cy="140" r="32" fill="#111E30" stroke="rgba(255,255,255,0.2)" stroke-width="2"/>
          <path d="M115 250 C115 190, 245 190, 245 250 Z" fill="#0D1A2D" stroke="rgba(29, 111, 255, 0.4)" stroke-width="1.5"/>

          <!-- Defender 2 (Right) -->
          <circle cx="285" cy="130" r="34" fill="#111E30" stroke="#B7FF00" stroke-width="2"/>
          <path d="M215 250 C215 178, 355 178, 355 250 Z" fill="#11223A" stroke="rgba(183, 255, 0, 0.4)" stroke-width="1.5"/>
        </g>

        <!-- Glowing Neon Shield (Center-Right) -->
        <g transform="translate(320, 195)">
          <path d="M0 -55 L45 -30 V10 C45 45, 0 65, 0 65 C0 65, -45 45, -45 10 V-30 Z" fill="#091629" stroke="#00E5FF" stroke-width="3.5"/>
          <path d="M0 -42 L32 -22 V6 C32 32, 0 48, 0 48 C0 48, -32 32, -32 6 V-22 Z" fill="#0E223D" stroke="#1D6FFF" stroke-width="2"/>
          <path d="M-10 6 L-2 14 L12 -4" stroke="#B7FF00" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        </g>

        <!-- Forensics Magnifying Glass Lens (Center-Left) -->
        <g transform="translate(165, 205)">
          <circle cx="0" cy="0" r="34" fill="#081528" stroke="#00E5FF" stroke-width="3.5"/>
          <circle cx="0" cy="0" r="26" fill="rgba(0, 229, 255, 0.15)" stroke="rgba(183, 255, 0, 0.6)" stroke-width="1.5"/>
          <line x1="24" y1="24" x2="44" y2="44" stroke="#00E5FF" stroke-width="4.5" stroke-linecap="round"/>
          <path d="M-12 -6 H12 M-12 2 H6 M-12 10 H10" stroke="#B7FF00" stroke-width="2" stroke-linecap="round"/>
        </g>

        <!-- HUD Telemetry Tags -->
        <rect x="25" y="25" width="160" height="28" rx="4" fill="rgba(17,30,48,0.8)" stroke="#1D6FFF" stroke-width="1"/>
        <text x="35" y="43" fill="#00E5FF" font-family="monospace" font-size="10" font-weight="bold">DEFENSIVE SOC MATRIX</text>
      </svg>
    `
  },
  red: {
    title: "Sharpen offensive tradecraft and exploit research",
    desc: "Arm penetration testers and red teams with advanced exploit development, Active Directory attacks, cloud persistence mechanisms, and evasive weaponization.",
    bullets: [
      "Zero-day vulnerability weaponization and customized shellcoding labs",
      "Complex Active Directory multi-forest domain takeover paths",
      "Kernel, container, and firmware privilege escalation engineering",
      "Advanced evasion strategies to legally test and bypass modern EDR/XDR"
    ],
    cta: "Explore Red Team Labs",
    visual: `
      <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: 100%;">
        <rect width="480" height="360" fill="#070E1A"/>
        <defs>
          <radialGradient id="redPulse" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#FF3366" stop-opacity="0.3"/>
            <stop offset="100%" stop-color="#070E1A" stop-opacity="0"/>
          </radialGradient>
        </defs>
        <circle cx="240" cy="180" r="140" fill="url(#redPulse)"/>

        <!-- Terminal Window Frame -->
        <rect x="50" y="45" width="380" height="270" rx="8" fill="#0B1524" stroke="#FF3366" stroke-width="1.5"/>
        <rect x="50" y="45" width="380" height="34" rx="8" fill="#060C16"/>
        <circle cx="70" cy="62" r="4" fill="#FF5F56"/>
        <circle cx="85" cy="62" r="4" fill="#FFBD2E"/>
        <circle cx="100" cy="62" r="4" fill="#27C93F"/>
        <text x="120" y="66" fill="#9AA7B8" font-family="monospace" font-size="11">exploit_payload_builder.sh</text>

        <!-- Exploit Shell Lines -->
        <text x="70" y="115" fill="#FF3366" font-family="monospace" font-size="12" font-weight="bold">root@c2-framework:~# ./generate_payload --target win_x64</text>
        <text x="70" y="145" fill="#9AA7B8" font-family="monospace" font-size="11">[+] Shellcode generated: 48 31 c0 48 89 c2 48 89 c6 ...</text>
        <text x="70" y="175" fill="#B7FF00" font-family="monospace" font-size="11">[✔] AMSI & ETW bypass heuristics patched in memory</text>
        <text x="70" y="205" fill="#00E5FF" font-family="monospace" font-size="11">[✔] Reverse HTTPS C2 beacon established: 192.168.10.45:443</text>
        <text x="70" y="235" fill="#FF3366" font-family="monospace" font-size="11">[!] DOMAIN CONTROLLER COMPROMISED: NTDS.dit dumped</text>
        <text x="70" y="275" fill="#B7FF00" font-family="monospace" font-size="13" font-weight="bold">C2_SESSION_1 [ACTIVE] > _</text>
      </svg>
    `
  },
  purple: {
    title: "Synchronize offense and defense for maximum resilience",
    desc: "Close the loop between attackers and defenders by orchestrating concurrent attack execution and detection tuning against verified adversary tactics.",
    bullets: [
      "Collaborative adversary emulation and atomic red team test execution",
      "Live detection rule validation, SIGMA rule authoring & YARA tuning",
      "Real-time kill-chain visibility across all MITRE ATT&CK techniques",
      "Executive board reports on quantifiable detection coverage gaps"
    ],
    cta: "Explore Purple Team Labs",
    visual: `
      <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: 100%;">
        <rect width="480" height="360" fill="#070E1A"/>
        <defs>
          <linearGradient id="purpleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#FF3366"/>
            <stop offset="50%" stop-color="#9933FF"/>
            <stop offset="100%" stop-color="#1D6FFF"/>
          </linearGradient>
        </defs>
        
        <!-- Two Intersecting Rings -->
        <g transform="translate(240, 180)">
          <circle cx="-65" cy="0" r="95" stroke="#FF3366" stroke-width="2.5" fill="rgba(255, 51, 102, 0.08)"/>
          <circle cx="65" cy="0" r="95" stroke="#1D6FFF" stroke-width="2.5" fill="rgba(29, 111, 255, 0.08)"/>
          
          <!-- Overlap Area -->
          <ellipse cx="0" cy="0" rx="42" ry="70" fill="rgba(183, 255, 0, 0.15)" stroke="#B7FF00" stroke-width="2"/>
          <text x="0" y="5" fill="#B7FF00" font-family="monospace" font-size="13" font-weight="bold" text-anchor="middle">PURPLE</text>
          <text x="0" y="24" fill="#FFFFFF" font-family="monospace" font-size="9" text-anchor="middle">SYNC LOOP</text>

          <text x="-95" y="5" fill="#FF3366" font-family="monospace" font-size="12" font-weight="bold" text-anchor="middle">RED TEAM</text>
          <text x="95" y="5" fill="#00E5FF" font-family="monospace" font-size="12" font-weight="bold" text-anchor="middle">BLUE TEAM</text>
        </g>

        <!-- Connecting Sync Wave -->
        <path d="M60 90 Q 240 20, 420 90 T 240 310 Z" fill="none" stroke="url(#purpleGrad)" stroke-width="1.5" stroke-dasharray="4 4"/>
      </svg>
    `
  },
  all: {
    title: "Unified cyber workforce intelligence platform",
    desc: "Scale continuous security readiness across developers, cloud engineers, SOC analysts, and leadership in one centralized, enterprise-grade ecosystem.",
    bullets: [
      "Role-based skill pathways & accredited enterprise certifications",
      "Global corporate cyber competitions, CTFs and live fire drills",
      "Executive board cyber risk dashboards & ISO/NIST compliance reporting",
      "Turnkey LMS & SSO integration (Okta, Azure AD, Workday)"
    ],
    cta: "Explore Enterprise Platform",
    visual: `
      <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: 100%;">
        <rect width="480" height="360" fill="#070E1A"/>
        
        <!-- Organization Cyber Matrix Grid -->
        <g transform="translate(60, 40)">
          <!-- Tier 1: Execs -->
          <rect x="0" y="0" width="360" height="50" rx="6" fill="#111E30" stroke="#B7FF00" stroke-width="1.5"/>
          <text x="20" y="30" fill="#B7FF00" font-family="monospace" font-size="12" font-weight="bold">EXECUTIVE & BOARD</text>
          <text x="340" y="30" fill="#9AA7B8" font-family="monospace" font-size="10" text-anchor="end">CYBER RESILIENCE HUD</text>

          <!-- Tier 2: SOC & Red -->
          <rect x="0" y="65" width="172" height="95" rx="6" fill="#111E30" stroke="#1D6FFF" stroke-width="1"/>
          <text x="15" y="95" fill="#00E5FF" font-family="monospace" font-size="11" font-weight="bold">SOC ANALYSTS</text>
          <text x="15" y="118" fill="#9AA7B8" font-family="sans-serif" font-size="9">Tier 1-3 IR Readiness</text>
          <text x="15" y="140" fill="#B7FF00" font-family="monospace" font-size="10">99.2% LAB SCORE</text>

          <rect x="188" y="65" width="172" height="95" rx="6" fill="#111E30" stroke="#FF3366" stroke-width="1"/>
          <text x="203" y="95" fill="#FF3366" font-family="monospace" font-size="11" font-weight="bold">OFFENSIVE ENG</text>
          <text x="203" y="118" fill="#9AA7B8" font-family="sans-serif" font-size="9">Pen-Testing & Exploit Dev</text>
          <text x="203" y="140" fill="#B7FF00" font-family="monospace" font-size="10">96.5% COMPLIANCE</text>

          <!-- Tier 3: AppSec & Cloud -->
          <rect x="0" y="175" width="360" height="85" rx="6" fill="#111E30" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
          <text x="20" y="205" fill="#FFFFFF" font-family="monospace" font-size="11" font-weight="bold">APPSEC & CLOUD TEAMS</text>
          <text x="20" y="228" fill="#9AA7B8" font-family="sans-serif" font-size="10">Secure Coding, Container Hardening & Cloud Posture Labs</text>
          <text x="20" y="248" fill="#00E5FF" font-family="monospace" font-size="10">4,200+ DEVELOPERS ENROLLED</text>
        </g>
      </svg>
    `
  }
};

export function renderSolutions(container) {
  if (!container) return;

  let activeTab = 'blue';

  const renderContent = () => {
    const current = solutionsData[activeTab];

    container.innerHTML = `
      <div class="container">
        <div class="solutions-header">
          <h2 class="heading-lg">
            Solutions for all cybersecurity domains
          </h2>
          <p class="text-lead" style="max-width: 640px;">
            Targeted hands-on labs and continuous readiness workflows engineered for every security specialty.
          </p>
        </div>

        <!-- Category Tabs -->
        <div class="solutions-tabs-bar" role="tablist">
          <button class="tab-btn ${activeTab === 'blue' ? 'active' : ''}" data-tab="blue" role="tab" aria-selected="${activeTab === 'blue'}">
            Blue Team
          </button>
          <button class="tab-btn ${activeTab === 'red' ? 'active' : ''}" data-tab="red" role="tab" aria-selected="${activeTab === 'red'}">
            Red Team
          </button>
          <button class="tab-btn ${activeTab === 'purple' ? 'active' : ''}" data-tab="purple" role="tab" aria-selected="${activeTab === 'purple'}">
            Purple Team
          </button>
          <button class="tab-btn ${activeTab === 'all' ? 'active' : ''}" data-tab="all" role="tab" aria-selected="${activeTab === 'all'}">
            All Teams
          </button>
        </div>

        <!-- Active Solution Panel -->
        <div class="solutions-panel">
          <div class="solution-content">
            <h3 class="solution-title">${current.title}</h3>
            <p class="solution-desc">${current.desc}</p>
            
            <ul class="solution-bullets">
              ${current.bullets.map(b => `
                <li class="solution-bullet-item">
                  <span class="bullet-check-icon" aria-hidden="true">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span>${b}</span>
                </li>
              `).join('')}
            </ul>

            <a href="#demo-form" class="btn btn-primary btn-lg" style="align-self: flex-start; margin-top: 8px;">
              <span>${current.cta}</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>

          <div class="solutions-visual">
            ${current.visual}
          </div>
        </div>
      </div>
    `;

    // Attach tab click handlers
    const tabBtns = container.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        activeTab = btn.getAttribute('data-tab');
        renderContent();
      });
    });
  };

  renderContent();
}
