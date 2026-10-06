export function renderTrustedBrands(container) {
  if (!container) return;

  container.innerHTML = `
    <div class="trusted-brands-container">
      <div class="container">
        <div class="trusted-marquee-head">
          <span class="trusted-live-ping"></span>
          <h2 class="trusted-marquee-title">Trusted by 185,000+ users worldwide</h2>
          <span class="trusted-live-ping"></span>
        </div>
      </div>

      <div class="trusted-slider-viewport">
        <div class="trusted-slider-track">
          
          <!-- SET 1 (15 UNIQUE COLORFUL BRAND LOGOS) -->
          <!-- 1. CoinVanta -->
          <div class="trusted-brand-card" title="CoinVanta - coinvanta.com">
            <div class="brand-logo-icon">
              <svg viewBox="0 0 24 24" width="28" height="28">
                <defs>
                  <linearGradient id="tbCvGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#00E676"/>
                    <stop offset="100%" stop-color="#00F0FF"/>
                  </linearGradient>
                </defs>
                <polygon points="12,2 22,8 22,16 12,22 2,16 2,8" fill="rgba(0, 230, 118, 0.12)" stroke="url(#tbCvGrad1)" stroke-width="2"/>
                <path d="M7 9 L12 17 L17 9" stroke="url(#tbCvGrad1)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
              </svg>
            </div>
            <div class="brand-text-box">
              <span class="brand-name">Coin<span class="brand-accent-emerald">Vanta</span></span>
              <span class="brand-tag">coinvanta.com</span>
            </div>
          </div>

          <!-- 2. TradeNexa -->
          <div class="trusted-brand-card" title="TradeNexa - tradenexa.com">
            <div class="brand-logo-icon">
              <svg viewBox="0 0 24 24" width="28" height="28">
                <defs>
                  <linearGradient id="tbTnGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#00A3FF"/>
                    <stop offset="100%" stop-color="#2979FF"/>
                  </linearGradient>
                </defs>
                <path d="M4 19 L4 5 L12 17 L20 5 L20 19" stroke="url(#tbTnGrad1)" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
                <circle cx="12" cy="17" r="2.5" fill="#00E5FF"/>
              </svg>
            </div>
            <div class="brand-text-box">
              <span class="brand-name">Trade<span class="brand-accent-cyan">Nexa</span></span>
              <span class="brand-tag">tradenexa.com</span>
            </div>
          </div>

          <!-- 3. CryptoVexa -->
          <div class="trusted-brand-card" title="CryptoVexa - cryptovexa.com">
            <div class="brand-logo-icon">
              <svg viewBox="0 0 24 24" width="28" height="28">
                <defs>
                  <linearGradient id="tbCxGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#A855F7"/>
                    <stop offset="100%" stop-color="#EC4899"/>
                  </linearGradient>
                </defs>
                <path d="M12 2 L21 7 V17 L12 22 L3 17 V7 Z" fill="rgba(168, 85, 247, 0.15)" stroke="url(#tbCxGrad1)" stroke-width="2"/>
                <path d="M8 9 L12 16 L16 9" stroke="#FFFFFF" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
              </svg>
            </div>
            <div class="brand-text-box">
              <span class="brand-name">Crypto<span class="brand-accent-pink">Vexa</span></span>
              <span class="brand-tag">cryptovexa.com</span>
            </div>
          </div>

          <!-- 4. Coinvera -->
          <div class="trusted-brand-card" title="Coinvera - coinvera.com">
            <div class="brand-logo-icon">
              <svg viewBox="0 0 24 24" width="28" height="28">
                <defs>
                  <linearGradient id="tbCvrGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#10B981"/>
                    <stop offset="100%" stop-color="#06B6D4"/>
                  </linearGradient>
                </defs>
                <path d="M6 12 A4 4 0 1 1 12 12 A4 4 0 1 0 18 12 A4 4 0 1 0 12 12 A4 4 0 1 1 6 12" stroke="url(#tbCvrGrad1)" stroke-width="2.4" fill="none"/>
                <circle cx="12" cy="12" r="2" fill="#10B981"/>
              </svg>
            </div>
            <div class="brand-text-box">
              <span class="brand-name">Coin<span class="brand-accent-mint">vera</span></span>
              <span class="brand-tag">coinvera.com</span>
            </div>
          </div>

          <!-- 5. Tradevora -->
          <div class="trusted-brand-card" title="Tradevora - tradevora.com">
            <div class="brand-logo-icon">
              <svg viewBox="0 0 24 24" width="28" height="28">
                <defs>
                  <linearGradient id="tbTvGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#FF6B00"/>
                    <stop offset="100%" stop-color="#FBBF24"/>
                  </linearGradient>
                </defs>
                <path d="M3 7 L12 20 L21 7" stroke="url(#tbTvGrad1)" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
                <path d="M7 8 L12 15 L17 8" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
              </svg>
            </div>
            <div class="brand-text-box">
              <span class="brand-name">Trade<span class="brand-accent-orange">vora</span></span>
              <span class="brand-tag">tradevora.com</span>
            </div>
          </div>

          <!-- 6. Cryptonexia -->
          <div class="trusted-brand-card" title="Cryptonexia - cryptonexia.com">
            <div class="brand-logo-icon">
              <svg viewBox="0 0 24 24" width="28" height="28">
                <defs>
                  <linearGradient id="tbCnxGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#8B5CF6"/>
                    <stop offset="100%" stop-color="#3B82F6"/>
                  </linearGradient>
                </defs>
                <circle cx="12" cy="12" r="9" stroke="url(#tbCnxGrad1)" stroke-width="2" stroke-dasharray="7 3" fill="none"/>
                <circle cx="12" cy="12" r="4" fill="url(#tbCnxGrad1)"/>
                <circle cx="18" cy="7" r="2.2" fill="#00E5FF"/>
              </svg>
            </div>
            <div class="brand-text-box">
              <span class="brand-name">Crypto<span class="brand-accent-purple">nexia</span></span>
              <span class="brand-tag">cryptonexia.com</span>
            </div>
          </div>

          <!-- 7. CoinZentra -->
          <div class="trusted-brand-card" title="CoinZentra - coinzentra.com">
            <div class="brand-logo-icon">
              <svg viewBox="0 0 24 24" width="28" height="28">
                <defs>
                  <linearGradient id="tbCzGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#2563EB"/>
                    <stop offset="100%" stop-color="#38BDF8"/>
                  </linearGradient>
                </defs>
                <circle cx="12" cy="12" r="9" stroke="url(#tbCzGrad1)" stroke-width="2" fill="rgba(37, 99, 235, 0.1)"/>
                <path d="M8 8 H16 L8 16 H16" stroke="#38BDF8" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
              </svg>
            </div>
            <div class="brand-text-box">
              <span class="brand-name">Coin<span class="brand-accent-sapphire">Zentra</span></span>
              <span class="brand-tag">coinzentra.com</span>
            </div>
          </div>

          <!-- 8. BitVanta -->
          <div class="trusted-brand-card" title="BitVanta - bitvanta.com">
            <div class="brand-logo-icon">
              <svg viewBox="0 0 24 24" width="28" height="28">
                <defs>
                  <linearGradient id="tbBvGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#F59E0B"/>
                    <stop offset="100%" stop-color="#EF4444"/>
                  </linearGradient>
                </defs>
                <path d="M6 4 H13 C15.5 4 17 5.5 17 7.5 C17 9 16 10 14.5 10.5 C16.5 11 17.5 12.5 17.5 14.5 C17.5 17 15.5 18.5 13 18.5 H6 V4 Z" fill="none" stroke="url(#tbBvGrad1)" stroke-width="2.2"/>
                <line x1="9" y1="2" x2="9" y2="4" stroke="#F59E0B" stroke-width="2" stroke-linecap="round"/>
                <line x1="13" y1="2" x2="13" y2="4" stroke="#F59E0B" stroke-width="2" stroke-linecap="round"/>
                <line x1="9" y1="18.5" x2="9" y2="20.5" stroke="#EF4444" stroke-width="2" stroke-linecap="round"/>
                <line x1="13" y1="18.5" x2="13" y2="20.5" stroke="#EF4444" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </div>
            <div class="brand-text-box">
              <span class="brand-name">Bit<span class="brand-accent-amber">Vanta</span></span>
              <span class="brand-tag">bitvanta.com</span>
            </div>
          </div>

          <!-- 9. NexaTrade -->
          <div class="trusted-brand-card" title="NexaTrade - nexatrade.com">
            <div class="brand-logo-icon">
              <svg viewBox="0 0 24 24" width="28" height="28">
                <defs>
                  <linearGradient id="tbNtGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#1D4ED8"/>
                    <stop offset="100%" stop-color="#60A5FA"/>
                  </linearGradient>
                </defs>
                <polygon points="12,2 15,9 22,12 15,15 12,22 9,15 2,12 9,9" fill="rgba(29, 78, 216, 0.2)" stroke="url(#tbNtGrad1)" stroke-width="2"/>
                <circle cx="12" cy="12" r="2.5" fill="#FFFFFF"/>
              </svg>
            </div>
            <div class="brand-text-box">
              <span class="brand-name">Nexa<span class="brand-accent-blue">Trade</span></span>
              <span class="brand-tag">nexatrade.com</span>
            </div>
          </div>

          <!-- 10. Coinora -->
          <div class="trusted-brand-card" title="Coinora - coinora.com">
            <div class="brand-logo-icon">
              <svg viewBox="0 0 24 24" width="28" height="28">
                <defs>
                  <linearGradient id="tbCoGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#84CC16"/>
                    <stop offset="100%" stop-color="#10B981"/>
                  </linearGradient>
                </defs>
                <circle cx="12" cy="12" r="9" fill="none" stroke="url(#tbCoGrad1)" stroke-width="2.4"/>
                <circle cx="12" cy="12" r="4.5" fill="url(#tbCoGrad1)"/>
                <circle cx="12" cy="12" r="2" fill="#FFFFFF"/>
              </svg>
            </div>
            <div class="brand-text-box">
              <span class="brand-name">Coin<span class="brand-accent-lime">ora</span></span>
              <span class="brand-tag">coinora.com</span>
            </div>
          </div>

          <!-- 11. VexTrade -->
          <div class="trusted-brand-card" title="VexTrade - vextrade.com">
            <div class="brand-logo-icon">
              <svg viewBox="0 0 24 24" width="28" height="28">
                <defs>
                  <linearGradient id="tbVtGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#FF2A55"/>
                    <stop offset="100%" stop-color="#FB923C"/>
                  </linearGradient>
                </defs>
                <path d="M4 14 L10 8 L14 12 L20 6" stroke="url(#tbVtGrad1)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
                <polyline points="15 6 20 6 20 11" stroke="url(#tbVtGrad1)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
              </svg>
            </div>
            <div class="brand-text-box">
              <span class="brand-name">Vex<span class="brand-accent-red">Trade</span></span>
              <span class="brand-tag">vextrade.com</span>
            </div>
          </div>

          <!-- 12. CryptoNexa -->
          <div class="trusted-brand-card" title="CryptoNexa - cryptonexa.com">
            <div class="brand-logo-icon">
              <svg viewBox="0 0 24 24" width="28" height="28">
                <defs>
                  <linearGradient id="tbCnGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#14B8A6"/>
                    <stop offset="100%" stop-color="#6366F1"/>
                  </linearGradient>
                </defs>
                <rect x="4" y="4" width="16" height="16" rx="4" stroke="url(#tbCnGrad1)" stroke-width="2" fill="rgba(20, 184, 166, 0.12)"/>
                <path d="M8 8 L16 16 M16 8 L8 16" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round"/>
              </svg>
            </div>
            <div class="brand-text-box">
              <span class="brand-name">Crypto<span class="brand-accent-teal">Nexa</span></span>
              <span class="brand-tag">cryptonexa.com</span>
            </div>
          </div>

          <!-- 13. BitZentra -->
          <div class="trusted-brand-card" title="BitZentra - bitzentra.com">
            <div class="brand-logo-icon">
              <svg viewBox="0 0 24 24" width="28" height="28">
                <defs>
                  <linearGradient id="tbBzGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#F59E0B"/>
                    <stop offset="100%" stop-color="#0284C7"/>
                  </linearGradient>
                </defs>
                <circle cx="12" cy="12" r="9" stroke="url(#tbBzGrad1)" stroke-width="2" stroke-dasharray="4 2" fill="none"/>
                <polygon points="12,6 18,16 6,16" stroke="url(#tbBzGrad1)" stroke-width="2" fill="rgba(245, 158, 11, 0.15)"/>
              </svg>
            </div>
            <div class="brand-text-box">
              <span class="brand-name">Bit<span class="brand-accent-gold">Zentra</span></span>
              <span class="brand-tag">bitzentra.com</span>
            </div>
          </div>

          <!-- 14. TradeVexa -->
          <div class="trusted-brand-card" title="TradeVexa - tradevexa.com">
            <div class="brand-logo-icon">
              <svg viewBox="0 0 24 24" width="28" height="28">
                <defs>
                  <linearGradient id="tbTxGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#06B6D4"/>
                    <stop offset="100%" stop-color="#D946EF"/>
                  </linearGradient>
                </defs>
                <polygon points="12,2 21,7 21,17 12,22 3,17 3,7" stroke="url(#tbTxGrad1)" stroke-width="2" fill="rgba(6, 182, 212, 0.12)"/>
                <line x1="12" y1="2" x2="12" y2="22" stroke="#FFFFFF" stroke-width="1.6"/>
                <line x1="3" y1="7" x2="21" y2="17" stroke="#D946EF" stroke-width="1.6"/>
              </svg>
            </div>
            <div class="brand-text-box">
              <span class="brand-name">Trade<span class="brand-accent-magenta">Vexa</span></span>
              <span class="brand-tag">tradevexa.com</span>
            </div>
          </div>

          <!-- 15. CoinVertex -->
          <div class="trusted-brand-card" title="CoinVertex - coinvertex.com">
            <div class="brand-logo-icon">
              <svg viewBox="0 0 24 24" width="28" height="28">
                <defs>
                  <linearGradient id="tbCvertGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#059669"/>
                    <stop offset="100%" stop-color="#1E40AF"/>
                  </linearGradient>
                </defs>
                <path d="M12 3 L21 19 H3 Z" stroke="url(#tbCvertGrad1)" stroke-width="2.2" fill="rgba(5, 150, 105, 0.12)"/>
                <circle cx="12" cy="3" r="2.5" fill="#00E676"/>
                <circle cx="21" cy="19" r="2.5" fill="#00A3FF"/>
                <circle cx="3" cy="19" r="2.5" fill="#059669"/>
              </svg>
            </div>
            <div class="brand-text-box">
              <span class="brand-name">Coin<span class="brand-accent-vertex">Vertex</span></span>
              <span class="brand-tag">coinvertex.com</span>
            </div>
          </div>

          <!-- ============================================== -->
          <!-- SET 2 (DUPLICATE FOR SEAMLESS INFINITE LOOP) -->
          <!-- ============================================== -->

          <!-- 1. CoinVanta -->
          <div class="trusted-brand-card" title="CoinVanta - coinvanta.com" aria-hidden="true">
            <div class="brand-logo-icon">
              <svg viewBox="0 0 24 24" width="28" height="28">
                <polygon points="12,2 22,8 22,16 12,22 2,16 2,8" fill="rgba(0, 230, 118, 0.12)" stroke="url(#tbCvGrad1)" stroke-width="2"/>
                <path d="M7 9 L12 17 L17 9" stroke="url(#tbCvGrad1)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
              </svg>
            </div>
            <div class="brand-text-box">
              <span class="brand-name">Coin<span class="brand-accent-emerald">Vanta</span></span>
              <span class="brand-tag">coinvanta.com</span>
            </div>
          </div>

          <!-- 2. TradeNexa -->
          <div class="trusted-brand-card" title="TradeNexa - tradenexa.com" aria-hidden="true">
            <div class="brand-logo-icon">
              <svg viewBox="0 0 24 24" width="28" height="28">
                <path d="M4 19 L4 5 L12 17 L20 5 L20 19" stroke="url(#tbTnGrad1)" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
                <circle cx="12" cy="17" r="2.5" fill="#00E5FF"/>
              </svg>
            </div>
            <div class="brand-text-box">
              <span class="brand-name">Trade<span class="brand-accent-cyan">Nexa</span></span>
              <span class="brand-tag">tradenexa.com</span>
            </div>
          </div>

          <!-- 3. CryptoVexa -->
          <div class="trusted-brand-card" title="CryptoVexa - cryptovexa.com" aria-hidden="true">
            <div class="brand-logo-icon">
              <svg viewBox="0 0 24 24" width="28" height="28">
                <path d="M12 2 L21 7 V17 L12 22 L3 17 V7 Z" fill="rgba(168, 85, 247, 0.15)" stroke="url(#tbCxGrad1)" stroke-width="2"/>
                <path d="M8 9 L12 16 L16 9" stroke="#FFFFFF" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
              </svg>
            </div>
            <div class="brand-text-box">
              <span class="brand-name">Crypto<span class="brand-accent-pink">Vexa</span></span>
              <span class="brand-tag">cryptovexa.com</span>
            </div>
          </div>

          <!-- 4. Coinvera -->
          <div class="trusted-brand-card" title="Coinvera - coinvera.com" aria-hidden="true">
            <div class="brand-logo-icon">
              <svg viewBox="0 0 24 24" width="28" height="28">
                <path d="M6 12 A4 4 0 1 1 12 12 A4 4 0 1 0 18 12 A4 4 0 1 0 12 12 A4 4 0 1 1 6 12" stroke="url(#tbCvrGrad1)" stroke-width="2.4" fill="none"/>
                <circle cx="12" cy="12" r="2" fill="#10B981"/>
              </svg>
            </div>
            <div class="brand-text-box">
              <span class="brand-name">Coin<span class="brand-accent-mint">vera</span></span>
              <span class="brand-tag">coinvera.com</span>
            </div>
          </div>

          <!-- 5. Tradevora -->
          <div class="trusted-brand-card" title="Tradevora - tradevora.com" aria-hidden="true">
            <div class="brand-logo-icon">
              <svg viewBox="0 0 24 24" width="28" height="28">
                <path d="M3 7 L12 20 L21 7" stroke="url(#tbTvGrad1)" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
                <path d="M7 8 L12 15 L17 8" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
              </svg>
            </div>
            <div class="brand-text-box">
              <span class="brand-name">Trade<span class="brand-accent-orange">vora</span></span>
              <span class="brand-tag">tradevora.com</span>
            </div>
          </div>

          <!-- 6. Cryptonexia -->
          <div class="trusted-brand-card" title="Cryptonexia - cryptonexia.com" aria-hidden="true">
            <div class="brand-logo-icon">
              <svg viewBox="0 0 24 24" width="28" height="28">
                <circle cx="12" cy="12" r="9" stroke="url(#tbCnxGrad1)" stroke-width="2" stroke-dasharray="7 3" fill="none"/>
                <circle cx="12" cy="12" r="4" fill="url(#tbCnxGrad1)"/>
                <circle cx="18" cy="7" r="2.2" fill="#00E5FF"/>
              </svg>
            </div>
            <div class="brand-text-box">
              <span class="brand-name">Crypto<span class="brand-accent-purple">nexia</span></span>
              <span class="brand-tag">cryptonexia.com</span>
            </div>
          </div>

          <!-- 7. CoinZentra -->
          <div class="trusted-brand-card" title="CoinZentra - coinzentra.com" aria-hidden="true">
            <div class="brand-logo-icon">
              <svg viewBox="0 0 24 24" width="28" height="28">
                <circle cx="12" cy="12" r="9" stroke="url(#tbCzGrad1)" stroke-width="2" fill="rgba(37, 99, 235, 0.1)"/>
                <path d="M8 8 H16 L8 16 H16" stroke="#38BDF8" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
              </svg>
            </div>
            <div class="brand-text-box">
              <span class="brand-name">Coin<span class="brand-accent-sapphire">Zentra</span></span>
              <span class="brand-tag">coinzentra.com</span>
            </div>
          </div>

          <!-- 8. BitVanta -->
          <div class="trusted-brand-card" title="BitVanta - bitvanta.com" aria-hidden="true">
            <div class="brand-logo-icon">
              <svg viewBox="0 0 24 24" width="28" height="28">
                <path d="M6 4 H13 C15.5 4 17 5.5 17 7.5 C17 9 16 10 14.5 10.5 C16.5 11 17.5 12.5 17.5 14.5 C17.5 17 15.5 18.5 13 18.5 H6 V4 Z" fill="none" stroke="url(#tbBvGrad1)" stroke-width="2.2"/>
                <line x1="9" y1="2" x2="9" y2="4" stroke="#F59E0B" stroke-width="2" stroke-linecap="round"/>
                <line x1="13" y1="2" x2="13" y2="4" stroke="#F59E0B" stroke-width="2" stroke-linecap="round"/>
                <line x1="9" y1="18.5" x2="9" y2="20.5" stroke="#EF4444" stroke-width="2" stroke-linecap="round"/>
                <line x1="13" y1="18.5" x2="13" y2="20.5" stroke="#EF4444" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </div>
            <div class="brand-text-box">
              <span class="brand-name">Bit<span class="brand-accent-amber">Vanta</span></span>
              <span class="brand-tag">bitvanta.com</span>
            </div>
          </div>

          <!-- 9. NexaTrade -->
          <div class="trusted-brand-card" title="NexaTrade - nexatrade.com" aria-hidden="true">
            <div class="brand-logo-icon">
              <svg viewBox="0 0 24 24" width="28" height="28">
                <polygon points="12,2 15,9 22,12 15,15 12,22 9,15 2,12 9,9" fill="rgba(29, 78, 216, 0.2)" stroke="url(#tbNtGrad1)" stroke-width="2"/>
                <circle cx="12" cy="12" r="2.5" fill="#FFFFFF"/>
              </svg>
            </div>
            <div class="brand-text-box">
              <span class="brand-name">Nexa<span class="brand-accent-blue">Trade</span></span>
              <span class="brand-tag">nexatrade.com</span>
            </div>
          </div>

          <!-- 10. Coinora -->
          <div class="trusted-brand-card" title="Coinora - coinora.com" aria-hidden="true">
            <div class="brand-logo-icon">
              <svg viewBox="0 0 24 24" width="28" height="28">
                <circle cx="12" cy="12" r="9" fill="none" stroke="url(#tbCoGrad1)" stroke-width="2.4"/>
                <circle cx="12" cy="12" r="4.5" fill="url(#tbCoGrad1)"/>
                <circle cx="12" cy="12" r="2" fill="#FFFFFF"/>
              </svg>
            </div>
            <div class="brand-text-box">
              <span class="brand-name">Coin<span class="brand-accent-lime">ora</span></span>
              <span class="brand-tag">coinora.com</span>
            </div>
          </div>

          <!-- 11. VexTrade -->
          <div class="trusted-brand-card" title="VexTrade - vextrade.com" aria-hidden="true">
            <div class="brand-logo-icon">
              <svg viewBox="0 0 24 24" width="28" height="28">
                <path d="M4 14 L10 8 L14 12 L20 6" stroke="url(#tbVtGrad1)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
                <polyline points="15 6 20 6 20 11" stroke="url(#tbVtGrad1)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
              </svg>
            </div>
            <div class="brand-text-box">
              <span class="brand-name">Vex<span class="brand-accent-red">Trade</span></span>
              <span class="brand-tag">vextrade.com</span>
            </div>
          </div>

          <!-- 12. CryptoNexa -->
          <div class="trusted-brand-card" title="CryptoNexa - cryptonexa.com" aria-hidden="true">
            <div class="brand-logo-icon">
              <svg viewBox="0 0 24 24" width="28" height="28">
                <rect x="4" y="4" width="16" height="16" rx="4" stroke="url(#tbCnGrad1)" stroke-width="2" fill="rgba(20, 184, 166, 0.12)"/>
                <path d="M8 8 L16 16 M16 8 L8 16" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round"/>
              </svg>
            </div>
            <div class="brand-text-box">
              <span class="brand-name">Crypto<span class="brand-accent-teal">Nexa</span></span>
              <span class="brand-tag">cryptonexa.com</span>
            </div>
          </div>

          <!-- 13. BitZentra -->
          <div class="trusted-brand-card" title="BitZentra - bitzentra.com" aria-hidden="true">
            <div class="brand-logo-icon">
              <svg viewBox="0 0 24 24" width="28" height="28">
                <circle cx="12" cy="12" r="9" stroke="url(#tbBzGrad1)" stroke-width="2" stroke-dasharray="4 2" fill="none"/>
                <polygon points="12,6 18,16 6,16" stroke="url(#tbBzGrad1)" stroke-width="2" fill="rgba(245, 158, 11, 0.15)"/>
              </svg>
            </div>
            <div class="brand-text-box">
              <span class="brand-name">Bit<span class="brand-accent-gold">Zentra</span></span>
              <span class="brand-tag">bitzentra.com</span>
            </div>
          </div>

          <!-- 14. TradeVexa -->
          <div class="trusted-brand-card" title="TradeVexa - tradevexa.com" aria-hidden="true">
            <div class="brand-logo-icon">
              <svg viewBox="0 0 24 24" width="28" height="28">
                <polygon points="12,2 21,7 21,17 12,22 3,17 3,7" stroke="url(#tbTxGrad1)" stroke-width="2" fill="rgba(6, 182, 212, 0.12)"/>
                <line x1="12" y1="2" x2="12" y2="22" stroke="#FFFFFF" stroke-width="1.6"/>
                <line x1="3" y1="7" x2="21" y2="17" stroke="#D946EF" stroke-width="1.6"/>
              </svg>
            </div>
            <div class="brand-text-box">
              <span class="brand-name">Trade<span class="brand-accent-magenta">Vexa</span></span>
              <span class="brand-tag">tradevexa.com</span>
            </div>
          </div>

          <!-- 15. CoinVertex -->
          <div class="trusted-brand-card" title="CoinVertex - coinvertex.com" aria-hidden="true">
            <div class="brand-logo-icon">
              <svg viewBox="0 0 24 24" width="28" height="28">
                <path d="M12 3 L21 19 H3 Z" stroke="url(#tbCvertGrad1)" stroke-width="2.2" fill="rgba(5, 150, 105, 0.12)"/>
                <circle cx="12" cy="3" r="2.5" fill="#00E676"/>
                <circle cx="21" cy="19" r="2.5" fill="#00A3FF"/>
                <circle cx="3" cy="19" r="2.5" fill="#059669"/>
              </svg>
            </div>
            <div class="brand-text-box">
              <span class="brand-name">Coin<span class="brand-accent-vertex">Vertex</span></span>
              <span class="brand-tag">coinvertex.com</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  `;
}
