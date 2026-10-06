// Trader Leaderboard Component (Open 1, Open 2, Creator League) with filters, search, modal details and pagination

const PTL_DATA = {
  open1: [
    { rank: 1, prevRank: 20, direction: 'up', change: '+19', name: 'Keone_Sanchez', userid: '382780', points: 63, record: '4W · 0D · 0L', pnl: '+$26,037', isPositive: true, rewardLabel: 'Finale Seat', isFinale: true, maxReward: 'Up to $180,000' },
    { rank: 2, prevRank: 18, direction: 'up', change: '+16', name: 'NvrBackDwn', userid: '19844', points: 62, record: '4W · 0D · 0L', pnl: '+$25,331', isPositive: true, rewardLabel: 'Finale Seat', isFinale: true, maxReward: 'Up to $180,000' },
    { rank: 3, prevRank: 35, direction: 'up', change: '+32', name: 'Robert_Mulik', userid: '630498', points: 61, record: '4W · 0D · 0L', pnl: '+$24,768', isPositive: true, rewardLabel: 'Finale Seat', isFinale: true, maxReward: 'Up to $180,000' },
    { rank: 4, prevRank: 11, direction: 'up', change: '+7', name: 'Frump', userid: '102627', points: 61, record: '4W · 0D · 0L', pnl: '+$24,672', isPositive: true, rewardLabel: 'Finale Seat', isFinale: true, maxReward: 'Up to $180,000' },
    { rank: 5, prevRank: 38, direction: 'up', change: '+33', name: 'Shraad', userid: '486065', points: 61, record: '3W · 0D · 1L', pnl: '+$25,774', isPositive: true, rewardLabel: '$10,000', isFinale: false },
    { rank: 6, prevRank: 4, direction: 'down', change: '-2', name: 'trimi', userid: '482082', points: 59, record: '4W · 0D · 0L', pnl: '+$23,789', isPositive: true, rewardLabel: '$8,000', isFinale: false },
    { rank: 7, prevRank: 18, direction: 'up', change: '+11', name: 'Ollie_Quick', userid: '288414', points: 58, record: '4W · 0D · 0L', pnl: '+$24,521', isPositive: true, rewardLabel: '$8,000', isFinale: false },
    { rank: 8, prevRank: 64, direction: 'up', change: '+56', name: 'GodsTradingTeam', userid: '57074', points: 57, record: '4W · 0D · 0L', pnl: '+$22,426', isPositive: true, rewardLabel: '$8,000', isFinale: false },
    { rank: 9, prevRank: 30, direction: 'up', change: '+21', name: 'Ivan_Amidzic', userid: '87842', points: 57, record: '3W · 1D · 0L', pnl: '+$23,828', isPositive: true, rewardLabel: '$8,000', isFinale: false },
    { rank: 10, prevRank: 76, direction: 'up', change: '+66', name: 'Kristijan_Mitrovski', userid: '125466', points: 57, record: '3W · 0D · 1L', pnl: '+$24,810', isPositive: true, rewardLabel: '$8,000', isFinale: false },
    { rank: 11, prevRank: 88, direction: 'up', change: '+77', name: 'Ibrahim_Ba', userid: '193964', points: 56, record: '4W · 0D · 0L', pnl: '+$22,601', isPositive: true, rewardLabel: '$4,000', isFinale: false },
    { rank: 12, prevRank: 102, direction: 'up', change: '+90', name: 'Sahara_1519', userid: '313418', points: 56, record: '3W · 0D · 1L', pnl: '+$23,494', isPositive: true, rewardLabel: '$4,000', isFinale: false },
    { rank: 13, prevRank: 120, direction: 'up', change: '+107', name: 'EmperorPenguin', userid: '102430', points: 55, record: '4W · 0D · 0L', pnl: '+$23,145', isPositive: true, rewardLabel: '$4,000', isFinale: false },
    { rank: 14, prevRank: 39, direction: 'up', change: '+25', name: 'Mehmet_Aksoy', userid: '140766', points: 55, record: '4W · 0D · 0L', pnl: '+$22,783', isPositive: true, rewardLabel: '$4,000', isFinale: false },
    { rank: 15, prevRank: 1, direction: 'down', change: '-14', name: 'Joakim', userid: '645653', points: 55, record: '4W · 0D · 0L', pnl: '+$22,059', isPositive: true, rewardLabel: '$4,000', isFinale: false },
    { rank: 16, prevRank: 58, direction: 'up', change: '+42', name: 'Chenge', userid: '433398', points: 54, record: '4W · 0D · 0L', pnl: '+$22,333', isPositive: true, rewardLabel: '$4,000', isFinale: false },
    { rank: 17, prevRank: 137, direction: 'up', change: '+120', name: 'Rajesh_Nair', userid: '4344', points: 54, record: '4W · 0D · 0L', pnl: '+$21,952', isPositive: true, rewardLabel: '$4,000', isFinale: false },
    { rank: 18, prevRank: 3, direction: 'down', change: '-15', name: 'FRAC', userid: '133275', points: 54, record: '4W · 0D · 0L', pnl: '+$21,368', isPositive: true, rewardLabel: '$4,000', isFinale: false },
    { rank: 19, prevRank: 153, direction: 'up', change: '+134', name: 'Psychas', userid: '166687', points: 54, record: '4W · 0D · 0L', pnl: '+$21,357', isPositive: true, rewardLabel: '$4,000', isFinale: false },
    { rank: 20, prevRank: 129, direction: 'up', change: '+109', name: 'Gabriel_Ramirez', userid: '374350', points: 54, record: '3W · 0D · 1L', pnl: '+$23,198', isPositive: true, rewardLabel: '$4,000', isFinale: false },
    { rank: 21, prevRank: 100, direction: 'up', change: '+79', name: 'EgmReyCaranto', userid: '97947', points: 54, record: '3W · 0D · 1L', pnl: '+$22,747', isPositive: true, rewardLabel: '$4,000', isFinale: false },
    { rank: 22, prevRank: 174, direction: 'up', change: '+152', name: 'Robert_May', userid: '197835', points: 53, record: '4W · 0D · 0L', pnl: '+$21,490', isPositive: true, rewardLabel: '$4,000', isFinale: false },
    { rank: 23, prevRank: 161, direction: 'up', change: '+138', name: 'Julionson_Dema', userid: '532766', points: 53, record: '3W · 0D · 1L', pnl: '+$25,711', isPositive: true, rewardLabel: '$4,000', isFinale: false },
    { rank: 24, prevRank: 231, direction: 'up', change: '+207', name: 'Tradewithkrixx', userid: '339889', points: 52, record: '4W · 0D · 0L', pnl: '+$20,938', isPositive: true, rewardLabel: '$4,000', isFinale: false },
    { rank: 25, prevRank: 7, direction: 'down', change: '-18', name: 'Justin_Mancuso', userid: '547946', points: 52, record: '4W · 0D · 0L', pnl: '+$20,742', isPositive: true, rewardLabel: '$4,000', isFinale: false },
  ],
  open2: [
    { rank: 1, prevRank: 1, direction: 'same', change: '0', name: 'Reyansh_Chopra055', userid: '8101', points: 48, record: '4W · 0D · 0L', pnl: '+$31,240', isPositive: true, rewardLabel: 'Finale Seat', isFinale: true, maxReward: 'Up to $180,000' },
    { rank: 2, prevRank: 2, direction: 'same', change: '0', name: 'Advait_Rao077', userid: '8102', points: 46, record: '4W · 0D · 0L', pnl: '+$28,490', isPositive: true, rewardLabel: 'Finale Seat', isFinale: true, maxReward: 'Up to $180,000' },
    { rank: 3, prevRank: 3, direction: 'same', change: '0', name: 'Tara_Menon031', userid: '8103', points: 45, record: '3W · 1D · 0L', pnl: '+$26,800', isPositive: true, rewardLabel: 'Finale Seat', isFinale: true, maxReward: 'Up to $180,000' },
    { rank: 4, prevRank: 4, direction: 'same', change: '0', name: 'Zayn_Malik882', userid: '8104', points: 44, record: '3W · 1D · 0L', pnl: '+$25,110', isPositive: true, rewardLabel: 'Finale Seat', isFinale: true, maxReward: 'Up to $180,000' },
    { rank: 5, prevRank: 5, direction: 'same', change: '0', name: 'Siddharth_Verma049', userid: '8105', points: 42, record: '3W · 0D · 1L', pnl: '+$22,950', isPositive: true, rewardLabel: '$10,000', isFinale: false },
    { rank: 6, prevRank: 6, direction: 'same', change: '0', name: 'Elena_Rostova112', userid: '8106', points: 41, record: '3W · 0D · 1L', pnl: '+$21,400', isPositive: true, rewardLabel: '$8,000', isFinale: false },
    { rank: 7, prevRank: 7, direction: 'same', change: '0', name: 'Lucas_Silva204', userid: '8107', points: 40, record: '3W · 0D · 1L', pnl: '+$20,850', isPositive: true, rewardLabel: '$8,000', isFinale: false },
    { rank: 8, prevRank: 8, direction: 'same', change: '0', name: 'Chloe_Dupont062', userid: '8108', points: 39, record: '2W · 2D · 0L', pnl: '+$19,730', isPositive: true, rewardLabel: '$8,000', isFinale: false },
  ],
  creator: [
    { rank: 1, prevRank: 1, direction: 'same', change: '0', name: '@TheChartGuy', supporters: '12,480 supporters', userid: '1001', points: 512, record: '6W · 1D · 1L', pnl: '+$41,280', isPositive: true, rewardLabel: 'Finale seat', isFinale: true },
    { rank: 2, prevRank: 2, direction: 'same', change: '0', name: '@CryptoBullFX', supporters: '9,840 supporters', userid: '1002', points: 482, record: '5W · 2D · 1L', pnl: '+$36,450', isPositive: true, rewardLabel: 'Finale seat', isFinale: true },
    { rank: 3, prevRank: 3, direction: 'same', change: '0', name: '@QuantumAlgo', supporters: '8,210 supporters', userid: '1003', points: 460, record: '5W · 1D · 2L', pnl: '+$31,200', isPositive: true, rewardLabel: 'Finale seat', isFinale: true },
    { rank: 4, prevRank: 4, direction: 'same', change: '0', name: '@AlphaSniper', supporters: '7,450 supporters', userid: '1004', points: 442, record: '4W · 3D · 1L', pnl: '+$29,800', isPositive: true, rewardLabel: 'Finale seat', isFinale: true },
    { rank: 5, prevRank: 5, direction: 'same', change: '0', name: '@ApexTrends', supporters: '6,120 supporters', userid: '1005', points: 415, record: '4W · 2D · 2L', pnl: '+$24,500', isPositive: true, rewardLabel: '$10,000', isFinale: false },
    { rank: 6, prevRank: 6, direction: 'same', change: '0', name: '@NexusPip', supporters: '5,890 supporters', userid: '1006', points: 398, record: '4W · 1D · 3L', pnl: '+$22,100', isPositive: true, rewardLabel: '$8,000', isFinale: false },
  ]
};

export function renderLeaderboard(container) {
  if (!container) return;

  let currentTab = 'open1';
  let searchQuery = '';
  let rankFilter = 'all';
  let statusFilter = 'all';
  let currentPage = 1;

  container.innerHTML = `
    <div class="w-layout-blockcontainer container w-container">
      <div id="ptl-leaderboard" class="ptl-leaderboard-component">
        <div class="ptl-leader-main-wrp">
          
          <!-- Header Tag & Title -->
          <div class="ptl-leader-head">
            <div data-ptl-date="" class="ptl-leader-tag">
              <div class="ptl-leader-tag-crcl"></div>
              <div class="ptl-leader-tag-txt">LIVE NOW · OPEN 1 · MATCH 5 OF 8</div>
            </div>
            <h1 class="ptl-leader-h1">Trader <span class="text-neon">Leaderboard</span></h1>
            <p class="ptl-leader-sub">Real-time competitive standings, verified match stats, and prize pool allocations.</p>
          </div>

          <!-- Tournament Tabs -->
          <div class="ptl-leader-tab-main">
            <div class="ptl-leader-tab-list">
              <div class="ptl-leader-tab-list-items">
                <button type="button" class="ptl-leader-tab-btn active" data-tab="open1">
                  <div class="ptl-leader-tab-btn-head">Open 1</div>
                  <div class="ptl-leader-tab-btn-body">
                    <span class="ptl-badge-pill">Live</span>
                    <span class="ptl-tab-dates">· 21 Sep – 15 Oct</span>
                  </div>
                </button>
              </div>
              <div class="ptl-leader-tab-list-items">
                <button type="button" class="ptl-leader-tab-btn" data-tab="open2">
                  <div class="ptl-leader-tab-btn-head">Open 2</div>
                  <div class="ptl-leader-tab-btn-body">
                    <span class="ptl-badge-pill incoming">Begins</span>
                    <span class="ptl-tab-dates">· 26 Oct – 19 Nov</span>
                  </div>
                </button>
              </div>
              <div class="ptl-leader-tab-list-items">
                <button type="button" class="ptl-leader-tab-btn" data-tab="creator">
                  <div class="ptl-leader-tab-btn-head">Creator League</div>
                  <div class="ptl-leader-tab-btn-body">
                    <span class="ptl-tab-dates">28 Sep – 11 Nov</span>
                  </div>
                </button>
              </div>
            </div>
          </div>

          <!-- Controls: Search and Filters -->
          <div class="ptl-leaderboard-controls">
            <div class="input-search-wrp is-visible">
              <input type="search" placeholder="Search trader name..." class="input-search" id="ptl-search-input" value="">
              <button type="button" class="input-search-btn" aria-label="Search trader" title="Search trader" id="ptl-search-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>

            <div class="ptl-leaderboard-filters">
              <!-- Rank Filter -->
              <div class="ptl-filter" data-filter="rank">
                <button type="button" class="ptl-filter-trigger" id="ptl-rank-trigger" aria-haspopup="listbox" aria-expanded="false">
                  <span class="ptl-filter-label">Rank: <span class="ptl-filter-value" id="ptl-rank-val">All</span></span>
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="m4 6 4 4 4-4" stroke="currentColor" stroke-width="1.5"></path></svg>
                </button>
                <ul id="ptl-filter-rank-menu" class="ptl-filter-options" role="listbox" hidden>
                  <li class="ptl-filter-option" data-value="all">All</li>
                  <li class="ptl-filter-option" data-value="top4">Top 4 (Finalists)</li>
                  <li class="ptl-filter-option" data-value="top10">Top 10</li>
                  <li class="ptl-filter-option" data-value="top25">Top 25</li>
                </ul>
              </div>

              <!-- Status Filter -->
              <div class="ptl-filter" data-filter="status">
                <button type="button" class="ptl-filter-trigger" id="ptl-status-trigger" aria-haspopup="listbox" aria-expanded="false">
                  <span class="ptl-filter-label">Status: <span class="ptl-filter-value" id="ptl-status-val">All Players</span></span>
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="m4 6 4 4 4-4" stroke="currentColor" stroke-width="1.5"></path></svg>
                </button>
                <ul id="ptl-filter-status-menu" class="ptl-filter-options" role="listbox" hidden>
                  <li class="ptl-filter-option" data-value="all">All Players</li>
                  <li class="ptl-filter-option" data-value="finale">Finale Seats Only</li>
                  <li class="ptl-filter-option" data-value="cash">Cash Prize Winners</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Table Container -->
          <div class="tab-cont-main" id="ptl-table-container">
            <!-- Dynamic Table Content rendered here -->
          </div>

          <!-- Pagination Bar -->
          <div class="ptl-pagination-wrp">
            <div class="ptl-pagination-info">
              Showing <span class="ptl-pagination-range" id="ptl-showing-range">1–25</span> of <span class="ptl-pagination-total" id="ptl-total-count">45,158</span> traders
            </div>
            <div class="ptl-pagination-controls">
              <button type="button" class="ptl-page-btn ptl-prev-btn" id="ptl-prev-btn" disabled>Previous</button>
              <div class="ptl-page-numbers">
                <button type="button" class="ptl-page-num active" data-page="1">1</button>
                <button type="button" class="ptl-page-num" data-page="2">2</button>
                <button type="button" class="ptl-page-num" data-page="3">3</button>
                <button type="button" class="ptl-page-num" data-page="4">4</button>
                <span class="ptl-page-dots">...</span>
                <button type="button" class="ptl-page-num" data-page="904">904</button>
              </div>
              <button type="button" class="ptl-page-btn ptl-next-btn" id="ptl-next-btn">Next</button>
            </div>
          </div>

          <!-- Footer Rules Info -->
          <div class="ldr-btm-wrp">
            <div class="ldr-btm-rch-txt">
              <p><strong>Tied on points?</strong> More match wins takes the higher spot. Still tied? Your exact cumulative P&amp;L (down to the cent) decides it.</p>
            </div>
          </div>

        </div>
      </div>
    </div>

    <!-- Trader Detail Modal -->
    <div id="trader-detail-modal" class="pricing-popup-main is-hidden" aria-hidden="true">
      <div class="pricing-popup-wrp">
        <button type="button" class="plt-close-btn" id="modal-close-btn" aria-label="Close modal">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <div id="modal-content-body" class="modal-inner-content">
          <!-- Injected dynamically -->
        </div>
      </div>
    </div>
  `;

  // Render Table rows function
  function renderRows() {
    const tableContainer = document.getElementById('ptl-table-container');
    if (!tableContainer) return;

    let list = PTL_DATA[currentTab] || [];

    // Filter by search
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(item => item.name.toLowerCase().includes(q));
    }

    // Filter by rank
    if (rankFilter === 'top4') {
      list = list.filter(item => item.rank <= 4);
    } else if (rankFilter === 'top10') {
      list = list.filter(item => item.rank <= 10);
    } else if (rankFilter === 'top25') {
      list = list.filter(item => item.rank <= 25);
    }

    // Filter by status
    if (statusFilter === 'finale') {
      list = list.filter(item => item.isFinale);
    } else if (statusFilter === 'cash') {
      list = list.filter(item => !item.isFinale);
    }

    // Update count labels
    const showingRange = document.getElementById('ptl-showing-range');
    const totalCount = document.getElementById('ptl-total-count');
    if (showingRange && totalCount) {
      showingRange.textContent = list.length > 0 ? `1–${list.length}` : '0';
      totalCount.textContent = currentTab === 'creator' ? '16' : '45,158';
    }

    if (list.length === 0) {
      tableContainer.innerHTML = `
        <div class="creators-table-row empty-state">
          <div class="empty-state-text">No traders found matching your criteria. Try adjusting your filters.</div>
        </div>
      `;
      return;
    }

    let rowsHtml = list.map((item, idx) => {
      const isTop3 = item.rank <= 3;
      const medalIcon = item.rank === 1 ? '🥇' : item.rank === 2 ? '🥈' : item.rank === 3 ? '🥉' : '';
      const rowClass = item.rank <= 4 ? 'creators-table-row runners-up' : 'creators-table-row';
      const arrowIcon = item.direction === 'up' 
        ? `<span class="ptl-rank-arr up" title="Rank up ${item.change}"><svg width="9" height="9" viewBox="0 0 10 10" fill="currentColor"><path d="M5 1.5L9 7.5H1L5 1.5Z"></path></svg></span>`
        : item.direction === 'down'
        ? `<span class="ptl-rank-arr down" title="Rank down ${item.change}"><svg width="9" height="9" viewBox="0 0 10 10" fill="currentColor"><path d="M5 8.5L1 2.5H9L5 8.5Z"></path></svg></span>`
        : '';

      const rewardHtml = item.isFinale 
        ? `<div class="creators-table-tag reward-tag finale-seat-tag">
            <svg class="creators-table-tag-ico" width="14" height="14" viewBox="0 0 24 24" fill="#9DD82C">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            <span class="creators-table-tag-txt finale-seat-label">Finale Seat</span>
          </div>`
        : `<div class="creators-table-box-count bg-font text-neon font-mono font-semibold">${item.rewardLabel}</div>`;

      return `
        <div class="${rowClass}" data-trader="${item.name.toLowerCase()}" data-idx="${idx}">
          <div class="creators-table-col rank">
            <div class="creators-table-box">
              <div class="creators-table-box-rank">
                <span class="rank-num">${medalIcon} ${item.rank}</span>
                ${arrowIcon}
              </div>
            </div>
          </div>

          <div class="creators-table-col trader clickable" data-action="open-modal" data-trader-name="${item.name}">
            <div class="creators-table-box">
              <span class="creators-table-box-count trader-name-link">${item.name}</span>
              ${item.supporters ? `<div class="trader-supporters-sub">${item.supporters}</div>` : ''}
            </div>
          </div>

          <div class="creators-table-col points">
            <div class="creators-table-box">
              <div class="creators-table-box-count points-val">${item.points} pts</div>
            </div>
          </div>

          <div class="creators-table-col matches">
            <div class="creators-table-box">
              <div class="creators-table-box-count font-mono">${item.record}</div>
            </div>
          </div>

          <div class="creators-table-col total">
            <div class="creators-table-box">
              <div class="creators-table-box-count pnl-val active">${item.pnl}</div>
            </div>
          </div>

          <div class="creators-table-col reward">
            <div class="creators-table-box last">
              ${rewardHtml}
            </div>
          </div>
        </div>
      `;
    }).join('');

    tableContainer.innerHTML = `
      <div class="creators-table-main">
        <div class="creators-table">
          <div class="creators-table-head">
            <div class="creators-table-row head-row">
              <div class="creators-table-col rank"><div class="creators-table-box-txt">Rank</div></div>
              <div class="creators-table-col trader"><div class="creators-table-box-txt">Trader</div></div>
              <div class="creators-table-col points"><div class="creators-table-box-txt">Points</div></div>
              <div class="creators-table-col matches"><div class="creators-table-box-txt">Match Record</div></div>
              <div class="creators-table-col total"><div class="creators-table-box-txt">Total PnL</div></div>
              <div class="creators-table-col reward"><div class="creators-table-box-txt">Reward</div></div>
            </div>
          </div>
          <div class="creators-table-body">
            ${rowsHtml}
          </div>
        </div>
      </div>
    `;

    // Attach click handlers to open trader modal
    tableContainer.querySelectorAll('[data-action="open-modal"]').forEach(el => {
      el.addEventListener('click', (e) => {
        const traderName = el.getAttribute('data-trader-name');
        openTraderModal(traderName);
      });
    });
  }

  // Open Trader Profile Modal
  function openTraderModal(traderName) {
    const modal = document.getElementById('trader-detail-modal');
    const modalBody = document.getElementById('modal-content-body');
    if (!modal || !modalBody) return;

    const list = PTL_DATA[currentTab] || [];
    const trader = list.find(t => t.name === traderName) || list[0];

    modalBody.innerHTML = `
      <div class="modal-trader-header">
        <div class="modal-trader-avatar">
          <span class="avatar-letter">${trader.name.charAt(0).toUpperCase()}</span>
        </div>
        <div class="modal-trader-meta">
          <h3 class="modal-trader-title">${trader.name}</h3>
          <div class="modal-trader-sub">User ID: <span class="font-mono text-neon">#${trader.userid || '7892'}</span> · Tournament: ${currentTab.toUpperCase()}</div>
        </div>
        <div class="modal-trader-rank-badge">
          <div class="rank-badge-num">RANK #${trader.rank}</div>
          <div class="rank-badge-status">${trader.isFinale ? 'FINALE QUALIFIER' : 'ACTIVE CONTESTANT'}</div>
        </div>
      </div>

      <div class="modal-stats-grid">
        <div class="modal-stat-card">
          <div class="stat-label">Total Points</div>
          <div class="stat-value text-neon">${trader.points} pts</div>
        </div>
        <div class="modal-stat-card">
          <div class="stat-label">Match Record</div>
          <div class="stat-value">${trader.record}</div>
        </div>
        <div class="modal-stat-card">
          <div class="stat-label">Verified PnL</div>
          <div class="stat-value text-green">${trader.pnl}</div>
        </div>
        <div class="modal-stat-card">
          <div class="stat-label">Current Allocation</div>
          <div class="stat-value text-gold">${trader.rewardLabel}</div>
        </div>
      </div>

      <div class="modal-timeline">
        <h4 class="timeline-heading">Recent Tournament Match Outcomes</h4>
        <div class="timeline-row">
          <span class="timeline-match">Match 1 vs Market</span>
          <span class="timeline-res win">WIN (+15 pts · +$6,240)</span>
        </div>
        <div class="timeline-row">
          <span class="timeline-match">Match 2 vs Market</span>
          <span class="timeline-res win">WIN (+16 pts · +$7,180)</span>
        </div>
        <div class="timeline-row">
          <span class="timeline-match">Match 3 vs Market</span>
          <span class="timeline-res win">WIN (+16 pts · +$6,950)</span>
        </div>
        <div class="timeline-row">
          <span class="timeline-match">Match 4 vs Market</span>
          <span class="timeline-res win">WIN (+16 pts · +$5,667)</span>
        </div>
      </div>
    `;

    modal.classList.remove('is-hidden');
    modal.classList.add('is-open');
    document.body.classList.add('ptl-modal-open');
  }

  function closeModal() {
    const modal = document.getElementById('trader-detail-modal');
    if (modal) {
      modal.classList.add('is-hidden');
      modal.classList.remove('is-open');
      document.body.classList.remove('ptl-modal-open');
    }
  }

  // Setup Event Listeners
  // 1. Tab switches
  const tabButtons = container.querySelectorAll('.ptl-leader-tab-btn');
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentTab = btn.getAttribute('data-tab');
      renderRows();
    });
  });

  // 2. Search
  const searchInput = container.querySelector('#ptl-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderRows();
    });
  }

  // 3. Dropdown filter triggers
  const rankTrigger = container.querySelector('#ptl-rank-trigger');
  const rankMenu = container.querySelector('#ptl-filter-rank-menu');
  const rankVal = container.querySelector('#ptl-rank-val');

  if (rankTrigger && rankMenu) {
    rankTrigger.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = !rankMenu.hidden;
      rankMenu.hidden = isOpen;
      rankTrigger.setAttribute('aria-expanded', !isOpen);
      if (statusMenu) statusMenu.hidden = true;
    });

    rankMenu.querySelectorAll('.ptl-filter-option').forEach(opt => {
      opt.addEventListener('click', () => {
        rankFilter = opt.getAttribute('data-value');
        if (rankVal) rankVal.textContent = opt.textContent;
        rankMenu.hidden = true;
        rankTrigger.setAttribute('aria-expanded', 'false');
        renderRows();
      });
    });
  }

  const statusTrigger = container.querySelector('#ptl-status-trigger');
  const statusMenu = container.querySelector('#ptl-filter-status-menu');
  const statusVal = container.querySelector('#ptl-status-val');

  if (statusTrigger && statusMenu) {
    statusTrigger.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = !statusMenu.hidden;
      statusMenu.hidden = isOpen;
      statusTrigger.setAttribute('aria-expanded', !isOpen);
      if (rankMenu) rankMenu.hidden = true;
    });

    statusMenu.querySelectorAll('.ptl-filter-option').forEach(opt => {
      opt.addEventListener('click', () => {
        statusFilter = opt.getAttribute('data-value');
        if (statusVal) statusVal.textContent = opt.textContent;
        statusMenu.hidden = true;
        statusTrigger.setAttribute('aria-expanded', 'false');
        renderRows();
      });
    });
  }

  // Global click to close dropdowns & modal
  document.addEventListener('click', (e) => {
    if (rankMenu && !rankMenu.hidden && !rankTrigger.contains(e.target)) {
      rankMenu.hidden = true;
      if (rankTrigger) rankTrigger.setAttribute('aria-expanded', 'false');
    }
    if (statusMenu && !statusMenu.hidden && !statusTrigger.contains(e.target)) {
      statusMenu.hidden = true;
      if (statusTrigger) statusTrigger.setAttribute('aria-expanded', 'false');
    }
  });

  const modalCloseBtn = container.querySelector('#modal-close-btn');
  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  const modalOverlay = container.querySelector('#trader-detail-modal');
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }

  // Initial render
  renderRows();
}
