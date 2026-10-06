export function renderFAQ(container) {
  if (!container) return;

  const faqs = [
    {
      q: "What is included in the trading strategy?",
      a: "Each strategy package includes comprehensive written rules, step-by-step entry and exit criteria, risk management guidelines, pre-flight trade checklists, interactive chart examples, and educational video walkthroughs."
    },
    {
      q: "Who are these strategies designed for?",
      a: "Our frameworks are built for traders of all experience levels who want to transition from emotional, discretionary trading to a structured, rule-based approach across crypto markets."
    },
    {
      q: "Do I need previous trading experience?",
      a: "No. The Starter plan provides foundational lessons on candlestick analysis, market structure, and basic risk management. Experienced traders can skip directly to advanced multi-timeframe liquidity and breakout models."
    },
    {
      q: "Which crypto markets are covered?",
      a: "The core frameworks are designed around high-liquidity crypto pairs including Bitcoin (BTC/USDT) and Ethereum (ETH/USDT), with dedicated modules for high-beta Layer-1 and Altcoin sector momentum."
    },
    {
      q: "How does the strategy education work?",
      a: "You receive instant digital access to the member dashboard with structured lessons, downloadable checklists, risk calculators, and access to ongoing market research updates."
    },
    {
      q: "Does the strategy guarantee profits?",
      a: "No trading strategy can guarantee profits. Cryptocurrency markets are volatile, and losses are possible. The platform provides educational frameworks and strategy resources, not guaranteed financial outcomes."
    },
    {
      q: "What risk management concepts are included?",
      a: "We teach mathematical position sizing based on defined risk percentages, portfolio heat limits, trailing stop logic, multi-tier take-profit scaling, and strict invalidation rules."
    },
    {
      q: "How do I access the strategy after purchase?",
      a: "Immediately upon enrollment, you will receive login credentials via email to access the TRADELAB platform dashboard, strategy documents, tools, and community portal."
    }
  ];

  container.innerHTML = `
    <div class="container">
      <div class="intro-section" style="margin-bottom: 20px;">
        <span class="tag-label">
          <span class="tag-dot"></span>
          FREQUENTLY ASKED QUESTIONS
        </span>
        <h2 class="heading-lg">
          Common Questions About TRADELAB
        </h2>
        <p class="text-lead intro-desc">
          Everything you need to know about our crypto trading strategies, education, and risk management approach.
        </p>
      </div>

      <div class="faq-list">
        ${faqs.map((f, idx) => `
          <div class="faq-item ${idx === 0 ? 'active' : ''}">
            <button class="faq-question" type="button" aria-expanded="${idx === 0}">
              <span>${f.q}</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            <div class="faq-answer">
              ${f.a}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  // Attach accordion handlers
  const faqItems = container.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      faqItems.forEach(i => {
        i.classList.remove('active');
        i.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      });
      if (!isActive) {
        item.classList.add('active');
        questionBtn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}
