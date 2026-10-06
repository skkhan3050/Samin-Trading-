export function renderMarketTicker(container) {
  if (!container) return;

  const cryptoTickers = [
    { id: "btc", pair: "BTC/USDT", basePrice: 64850.00, price: "$64,850.00", change: "+3.42%", isUp: true },
    { id: "eth", pair: "ETH/USDT", basePrice: 3420.50, price: "$3,420.50", change: "+2.15%", isUp: true },
    { id: "sol", pair: "SOL/USDT", basePrice: 152.80, price: "$152.80", change: "+5.60%", isUp: true },
    { id: "bnb", pair: "BNB/USDT", basePrice: 585.20, price: "$585.20", change: "-0.84%", isUp: false },
    { id: "xrp", pair: "XRP/USDT", basePrice: 0.5840, price: "$0.5840", change: "+1.90%", isUp: true },
    { id: "ada", pair: "ADA/USDT", basePrice: 0.4210, price: "$0.4210", change: "-1.10%", isUp: false }
  ];

  container.innerHTML = `
    <div class="container">
      
      <!-- Top Subtitle -->
      <div class="market-surveillance-title">
        REAL-TIME MARKET SURVEILLANCE & MULTI-ASSET ANALYSIS
      </div>

      <!-- Live Ticker Capsules Grid -->
      <div class="market-capsules-grid" id="market-live-ticker-grid">
        ${cryptoTickers.map(t => `
          <div class="ticker-capsule" id="ticker-${t.id}">
            <span class="capsule-pair">${t.pair}</span>
            <span class="capsule-price" id="price-${t.id}">${t.price}</span>
            <span class="capsule-change ${t.isUp ? 'is-up' : 'is-down'}" id="change-${t.id}">
              ${t.isUp ? '▲' : '▼'} ${t.change}
            </span>
          </div>
        `).join('')}
      </div>

      <!-- Dotted Divider & Capabilities Row -->
      <div class="market-capabilities-row">
        <div class="market-cap-item">
          <svg class="cap-icon cap-green" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
          </svg>
          <span class="cap-text">Live Market Analysis</span>
        </div>

        <div class="market-cap-item">
          <svg class="cap-icon cap-cyan" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
          <span class="cap-text">Technical Research</span>
        </div>

        <div class="market-cap-item">
          <svg class="cap-icon cap-yellow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="3" y1="9" x2="21" y2="9"></line>
            <line x1="9" y1="21" x2="9" y2="9"></line>
          </svg>
          <span class="cap-text">Trading Education</span>
        </div>

        <div class="market-cap-item">
          <svg class="cap-icon cap-emerald" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          </svg>
          <span class="cap-text">Risk Management</span>
        </div>
      </div>

    </div>
  `;

  // Realistic dynamic price oscillation simulation
  setInterval(() => {
    const randomIndex = Math.floor(Math.random() * cryptoTickers.length);
    const item = cryptoTickers[randomIndex];
    const priceEl = document.getElementById(`price-${item.id}`);
    const cardEl = document.getElementById(`ticker-${item.id}`);
    if (!priceEl || !cardEl) return;

    const deltaPercent = (Math.random() - 0.49) * 0.0025;
    item.basePrice = item.basePrice * (1 + deltaPercent);
    const formatted = item.basePrice > 100 
      ? `$${item.basePrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
      : `$${item.basePrice.toFixed(4)}`;
    
    priceEl.textContent = formatted;
    cardEl.classList.remove('tick-pulse-green', 'tick-pulse-red');
    void cardEl.offsetWidth; // Force reflow
    cardEl.classList.add(deltaPercent >= 0 ? 'tick-pulse-green' : 'tick-pulse-red');
  }, 2200);
}
