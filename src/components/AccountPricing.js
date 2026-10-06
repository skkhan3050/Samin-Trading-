export function renderAccountPricing(container) {
  if (!container) return;

  // Account Data Configuration
  const pricingData = {
    growth: {
      name: 'Growth',
      tag: 'Pass in 1 day',
      desc: 'Quick 1-day evaluation • 5-day payout frequency',
      accounts: [
        {
          size: '25K',
          badge: 'STARTER TIER',
          price: 99,
          currentPrice: 69,
          save: 30,
          code: 'GEMS',
          popular: false,
          eval: [
            ['Profit Target', '$1,500', 'target'],
            ['Trailing Max Drawdown', '$1,000', 'drawdown'],
            ['Daily Loss Limit', '$600', 'loss'],
            ['Reset Fee', '$60', 'fee'],
            ['Consistency Rule', 'None', 'none'],
            ['Activation Fee', 'None', 'none'],
            ['Max Contracts', '1 mini / 10 micros', 'contracts']
          ],
          funded: [
            ['Payout Frequency', '5 Days', 'speed'],
            ['Max Accounts', '5 Active', 'accounts'],
            ['Consistency Rule', '35%', 'rule'],
            ['Daily Loss Limit', '$600', 'loss'],
            ['Max Drawdown (EOD)', '$1,000', 'drawdown'],
            ['Max Contracts', '1 mini / 10 micros', 'contracts']
          ]
        },
        {
          size: '50K',
          badge: 'MOST POPULAR',
          price: 145,
          currentPrice: 101,
          save: 44,
          code: 'GEMS',
          popular: true,
          eval: [
            ['Profit Target', '$3,000', 'target'],
            ['Trailing Max Drawdown', '$2,000', 'drawdown'],
            ['Daily Loss Limit', '$1,250', 'loss'],
            ['Reset Fee', '$95', 'fee'],
            ['Consistency Rule', 'None', 'none'],
            ['Activation Fee', 'None', 'none'],
            ['Max Contracts', '4 minis / 40 micros', 'contracts']
          ],
          funded: [
            ['Payout Frequency', '5 Days', 'speed'],
            ['Max Accounts', '5 Active', 'accounts'],
            ['Consistency Rule', '35%', 'rule'],
            ['Daily Loss Limit', '$1,250', 'loss'],
            ['Max Drawdown (EOD)', '$2,000', 'drawdown'],
            ['Max Contracts', '4 minis / 40 micros', 'contracts']
          ]
        },
        {
          size: '100K',
          badge: 'PRO ALLOCATION',
          price: 255,
          currentPrice: 178,
          save: 77,
          code: 'GEMS',
          popular: false,
          eval: [
            ['Profit Target', '$6,000', 'target'],
            ['Trailing Max Drawdown', '$3,500', 'drawdown'],
            ['Daily Loss Limit', '$2,500', 'loss'],
            ['Reset Fee', '$169', 'fee'],
            ['Consistency Rule', 'None', 'none'],
            ['Activation Fee', 'None', 'none'],
            ['Max Contracts', '8 minis / 80 micros', 'contracts']
          ],
          funded: [
            ['Payout Frequency', '5 Days', 'speed'],
            ['Max Accounts', '5 Active', 'accounts'],
            ['Consistency Rule', '35%', 'rule'],
            ['Daily Loss Limit', '$2,500', 'loss'],
            ['Max Drawdown (EOD)', '$3,500', 'drawdown'],
            ['Max Contracts', '8 minis / 80 micros', 'contracts']
          ]
        },
        {
          size: '150K',
          badge: 'INSTITUTIONAL MAX',
          price: 369,
          currentPrice: 258,
          save: 111,
          code: 'GEMS',
          popular: false,
          eval: [
            ['Profit Target', '$9,000', 'target'],
            ['Trailing Max Drawdown', '$5,000', 'drawdown'],
            ['Daily Loss Limit', '$3,750', 'loss'],
            ['Reset Fee', '$229', 'fee'],
            ['Consistency Rule', 'None', 'none'],
            ['Activation Fee', 'None', 'none'],
            ['Max Contracts', '12 minis / 120 micros', 'contracts']
          ],
          funded: [
            ['Payout Frequency', '5 Days', 'speed'],
            ['Max Accounts', '5 Active', 'accounts'],
            ['Consistency Rule', '35%', 'rule'],
            ['Daily Loss Limit', '$3,750', 'loss'],
            ['Max Drawdown (EOD)', '$5,000', 'drawdown'],
            ['Max Contracts', '12 minis / 120 micros', 'contracts']
          ]
        }
      ]
    },
    select: {
      name: 'Select',
      tag: 'Pass in 3 days',
      desc: 'Daily payouts • Flexible evaluation parameters',
      accounts: [
        {
          size: '25K',
          badge: 'STARTER TIER',
          price: 109,
          currentPrice: 76,
          save: 33,
          code: 'GEMS',
          popular: false,
          eval: [
            ['Profit Target', '$1,500', 'target'],
            ['Trailing Max Drawdown', '$1,000', 'drawdown'],
            ['Daily Loss Limit', 'None', 'none'],
            ['Reset Fee', '$75', 'fee'],
            ['Consistency Rule', '40%', 'rule'],
            ['Activation Fee', 'None', 'none'],
            ['Max Contracts', '1 mini / 10 micros', 'contracts']
          ],
          funded: [
            ['Payout Frequency', 'Daily / 5 Days', 'speed'],
            ['Max Payout', '$600 / $1,250', 'target'],
            ['Consistency Rule', 'None', 'none'],
            ['Daily Loss Limit', '$500 / None', 'loss'],
            ['Max Drawdown (EOD)', '$1,000', 'drawdown']
          ]
        },
        {
          size: '50K',
          badge: 'MOST POPULAR',
          price: 165,
          currentPrice: 116,
          save: 50,
          code: 'GEMS',
          popular: true,
          eval: [
            ['Profit Target', '$3,000', 'target'],
            ['Trailing Max Drawdown', '$2,000', 'drawdown'],
            ['Daily Loss Limit', 'None', 'none'],
            ['Reset Fee', '$109', 'fee'],
            ['Consistency Rule', '40%', 'rule'],
            ['Activation Fee', 'None', 'none'],
            ['Max Contracts', '4 minis / 40 micros', 'contracts']
          ],
          funded: [
            ['Payout Frequency', 'Daily / 5 Days', 'speed'],
            ['Max Payout', '$1,250 / $2,500', 'target'],
            ['Consistency Rule', 'None', 'none'],
            ['Daily Loss Limit', '$1,000 / None', 'loss'],
            ['Max Drawdown (EOD)', '$2,000', 'drawdown']
          ]
        },
        {
          size: '100K',
          badge: 'PRO ALLOCATION',
          price: 265,
          currentPrice: 186,
          save: 80,
          code: 'GEMS',
          popular: false,
          eval: [
            ['Profit Target', '$6,000', 'target'],
            ['Trailing Max Drawdown', '$3,000', 'drawdown'],
            ['Daily Loss Limit', 'None', 'none'],
            ['Reset Fee', '$169', 'fee'],
            ['Consistency Rule', '40%', 'rule'],
            ['Activation Fee', 'None', 'none'],
            ['Max Contracts', '8 minis / 80 micros', 'contracts']
          ],
          funded: [
            ['Payout Frequency', 'Daily / 5 Days', 'speed'],
            ['Max Payout', '$1,750 / $3,500', 'target'],
            ['Consistency Rule', 'None', 'none'],
            ['Daily Loss Limit', '$1,250 / None', 'loss'],
            ['Max Drawdown (EOD)', '$3,000', 'drawdown']
          ]
        },
        {
          size: '150K',
          badge: 'INSTITUTIONAL MAX',
          price: 369,
          currentPrice: 258,
          save: 111,
          code: 'GEMS',
          popular: false,
          eval: [
            ['Profit Target', '$9,000', 'target'],
            ['Trailing Max Drawdown', '$4,500', 'drawdown'],
            ['Daily Loss Limit', 'None', 'none'],
            ['Reset Fee', '$229', 'fee'],
            ['Consistency Rule', '40%', 'rule'],
            ['Activation Fee', 'None', 'none'],
            ['Max Contracts', '12 minis / 120 micros', 'contracts']
          ],
          funded: [
            ['Payout Frequency', 'Daily / 5 Days', 'speed'],
            ['Max Payout', '$2,500 / $4,500', 'target'],
            ['Consistency Rule', 'None', 'none'],
            ['Daily Loss Limit', '$1,750 / None', 'loss'],
            ['Max Drawdown (EOD)', '$4,500', 'drawdown']
          ]
        }
      ]
    },
    lightning: {
      name: 'Lightning',
      tag: 'Instant Funding',
      desc: 'Zero evaluation • Trade directly on funded capital',
      accounts: [
        {
          size: '25K',
          badge: 'INSTANT STARTER',
          price: 320,
          currentPrice: 224,
          save: 96,
          code: 'GEMS',
          popular: false,
          eval: [],
          funded: [
            ['Funding Speed', 'Instant / 0 Days', 'speed'],
            ['Payout Frequency', '5 Days', 'speed'],
            ['Max Accounts', '5 Active', 'accounts'],
            ['Consistency Rule', '20%', 'rule'],
            ['Daily Loss Limit', '$600', 'loss'],
            ['Max Drawdown (EOD)', '$1,000', 'drawdown'],
            ['Max Contracts', '1 mini / 10 micros', 'contracts']
          ]
        },
        {
          size: '50K',
          badge: 'MOST POPULAR INSTANT',
          price: 492,
          currentPrice: 344,
          save: 148,
          code: 'GEMS',
          popular: true,
          eval: [],
          funded: [
            ['Funding Speed', 'Instant / 0 Days', 'speed'],
            ['Payout Frequency', '5 Days', 'speed'],
            ['Max Accounts', '5 Active', 'accounts'],
            ['Consistency Rule', '20%', 'rule'],
            ['Daily Loss Limit', '$1,250', 'loss'],
            ['Max Drawdown (EOD)', '$2,000', 'drawdown'],
            ['Max Contracts', '4 minis / 40 micros', 'contracts']
          ]
        },
        {
          size: '100K',
          badge: 'PRO INSTANT',
          price: 660,
          currentPrice: 462,
          save: 198,
          code: 'GEMS',
          popular: false,
          eval: [],
          funded: [
            ['Funding Speed', 'Instant / 0 Days', 'speed'],
            ['Payout Frequency', '5 Days', 'speed'],
            ['Max Accounts', '5 Active', 'accounts'],
            ['Consistency Rule', '20%', 'rule'],
            ['Daily Loss Limit', '$2,500', 'loss'],
            ['Max Drawdown (EOD)', '$4,000', 'drawdown'],
            ['Max Contracts', '8 minis / 80 micros', 'contracts']
          ]
        },
        {
          size: '150K',
          badge: 'INSTITUTIONAL INSTANT',
          price: 796,
          currentPrice: 557,
          save: 239,
          code: 'GEMS',
          popular: false,
          eval: [],
          funded: [
            ['Funding Speed', 'Instant / 0 Days', 'speed'],
            ['Payout Frequency', '5 Days', 'speed'],
            ['Max Accounts', '5 Active', 'accounts'],
            ['Consistency Rule', '20%', 'rule'],
            ['Daily Loss Limit', '$3,000', 'loss'],
            ['Max Drawdown (EOD)', '$5,250', 'drawdown'],
            ['Max Contracts', '12 minis / 120 micros', 'contracts']
          ]
        }
      ]
    }
  };

  let activePlan = 'select';
  let activeBroker = 'tradovate';
  let activeRulePhase = 'eval'; // 'eval' or 'funded'

  function renderHTML() {
    const plan = pricingData[activePlan];
    const isLightning = activePlan === 'lightning';

    container.innerHTML = `
      <section class="tdfy-pricing-section-v2">
        <div class="container">
          
          <!-- Header Title & Tag -->
          <div class="pricing-header-center">
            <div class="hero-badge-wrap" style="justify-content: center; margin-bottom: 14px;">
              <span class="tag-badge">
                <span class="tag-dot"></span>
                INSTITUTIONAL CAPITAL ALLOCATION
              </span>
            </div>
            <h2 class="heading-lg new-price-hdng">
              Choose Your <span class="hero-title-gradient">Funded Account</span>
            </h2>
            <p class="text-lead" style="max-width: 620px; margin: 0 auto; font-size: 1rem;">
              Trade with institutional backing. Fast evaluations, zero hidden activation fees, and automated profit payouts up to 90%.
            </p>
          </div>

          <!-- Plan Selection Tabs (Growth / Select / Lightning) -->
          <div class="plan_select_acc_type">
            <div class="new_plan_select_box">
              <button type="button" class="plan-tab-btn ${activePlan === 'growth' ? 'active' : ''}" data-plan="growth">
                <div class="plan-tab-top">
                  <span class="plan-tab-title">Growth</span>
                  <span class="plan-tab-tag">Pass in 1 day</span>
                </div>
                <span class="plan-tab-desc">Fast 1-day pass • 5-day payouts</span>
              </button>

              <button type="button" class="plan-tab-btn ${activePlan === 'select' ? 'active' : ''}" data-plan="select">
                <div class="plan-tab-top">
                  <span class="plan-tab-title">Select</span>
                  <span class="plan-tab-tag">Pass in 3 days</span>
                </div>
                <span class="plan-tab-desc">Daily payouts • Flexible parameters</span>
              </button>

              <button type="button" class="plan-tab-btn ${activePlan === 'lightning' ? 'active' : ''}" data-plan="lightning">
                <div class="plan-tab-top">
                  <span class="plan-tab-title">Lightning</span>
                  <span class="plan-tab-tag instant-tag">Instant Fund</span>
                </div>
                <span class="plan-tab-desc">Direct funding • Zero evaluation</span>
              </button>
            </div>
          </div>

          <!-- Controls Bar: Platform + Rule Phase Switcher (Clean Flat Toggle) -->
          <div class="pricing-controls-row">
            <!-- Platform Switcher -->
            <div class="broker-tabs-row">
              <span class="broker-row-label">Platform:</span>
              <button type="button" class="broker-btn ${activeBroker === 'tradovate' ? 'active' : ''}" data-broker="tradovate">
                <span>Tradovate / TradingView</span>
              </button>
              <button type="button" class="broker-btn ${activeBroker === 'wealthcharts' ? 'active' : ''}" data-broker="wealthcharts">
                <span>WealthCharts</span>
              </button>
              <button type="button" class="broker-btn ${activeBroker === 'tradesea' ? 'active' : ''}" data-broker="tradesea">
                <span>Rithmic / Quantower</span>
              </button>
            </div>

            <!-- Rule Phase Switcher (Evaluation vs Funded) -->
            ${!isLightning ? `
              <div class="phase-tabs-row">
                <button type="button" class="phase-btn ${activeRulePhase === 'eval' ? 'active' : ''}" data-phase="eval">
                  <span class="phase-dot eval-dot"></span>
                  <span>Evaluation Rules</span>
                </button>
                <button type="button" class="phase-btn ${activeRulePhase === 'funded' ? 'active' : ''}" data-phase="funded">
                  <span class="phase-dot funded-dot"></span>
                  <span>Funded Phase Rules</span>
                </button>
              </div>
            ` : ''}
          </div>

          <!-- Pricing Cards Grid matching Screenshot Design -->
          <div class="price-cards-grid">
            ${plan.accounts.map((acc, idx) => {
              const currentRules = (isLightning || activeRulePhase === 'funded') ? acc.funded : acc.eval;
              const isFundedView = isLightning || activeRulePhase === 'funded';
              const phaseLabel = isLightning ? 'Instant' : (isFundedView ? 'Funded' : 'Evaluation');

              return `
                <div class="pricing-flat-card ${acc.popular ? 'is-popular' : ''}" id="price-card-${idx}">
                  ${acc.popular ? `
                    <div class="popular-top-badge">MOST POPULAR</div>
                  ` : ''}

                  <!-- Card Header Area -->
                  <div class="card-head-area">
                    <div class="card-size-title">
                      <span class="size-bold">${acc.size}</span>
                      <span class="size-type">${phaseLabel}</span>
                    </div>

                    <div class="card-price-area">
                      <span class="price-old">$${acc.price}</span>
                      <span class="price-current">$${acc.currentPrice}</span>
                      <span class="price-type-note">one time payment</span>
                    </div>
                  </div>

                  <!-- Direct Rules List -->
                  <div class="card-rules-list">
                    ${currentRules.map(r => `
                      <div class="rule-row">
                        <span class="rule-label">${r[0]}</span>
                        <span class="rule-val ${r[1].toLowerCase() === 'none' ? 'is-none-green' : ''}">
                          ${r[1]}
                        </span>
                      </div>
                    `).join('')}
                  </div>

                  <!-- View Funded Rules Link -->
                  ${!isLightning ? `
                    <div class="rules-toggle-link-wrap">
                      <button type="button" class="view-rules-toggle-btn" data-switch-to="${activeRulePhase === 'eval' ? 'funded' : 'eval'}">
                        ${activeRulePhase === 'eval' ? 'View Funded Rules' : 'View Evaluation Rules'}
                      </button>
                    </div>
                  ` : `
                    <div class="rules-toggle-link-wrap">
                      <span class="instant-funded-note">Direct Live Capital</span>
                    </div>
                  `}

                  <!-- Card Action Area -->
                  <div class="card-footer-area">
                    <a href="https://app-f.tradeify.co/accounts/checkout" target="_blank" rel="noopener noreferrer" class="btn card-cta-btn">
                      Start with ${acc.size}
                    </a>

                    <div class="discount-pill">
                      Save $${acc.save} with code ${acc.code}
                    </div>
                  </div>

                </div>
              `;
            }).join('')}
          </div>

          <!-- Token Offer / Multi-Account Volume Discount -->
          <div class="new-token-offer-box">
            <div class="token-sparkle-icon">✨</div>
            <div class="token-text-wrap">
              <strong>Multi-Account Volume Discount:</strong>
              <span>Activate 5+ evaluation accounts to receive an additional 5% discount instantly.</span>
            </div>
            <div class="token-badge-save">EXTRA 5% OFF</div>
          </div>

        </div>
      </section>
    `;

    // Plan selector tabs
    container.querySelectorAll('.plan-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        activePlan = btn.getAttribute('data-plan');
        renderHTML();
      });
    });

    // Broker selector
    container.querySelectorAll('.broker-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        activeBroker = btn.getAttribute('data-broker');
        renderHTML();
      });
    });

    // Phase switcher (Evaluation vs Funded rules)
    container.querySelectorAll('.phase-btn, .view-rules-toggle-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const targetPhase = btn.getAttribute('data-phase') || btn.getAttribute('data-switch-to');
        if (targetPhase) {
          activeRulePhase = targetPhase;
          renderHTML();
        }
      });
    });

    // Mouse spotlight interaction
    container.querySelectorAll('.pricing-flat-card').forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });
    });
  }

  renderHTML();
}
