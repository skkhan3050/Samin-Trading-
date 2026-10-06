import { showToast } from './Toast.js';

export function renderDemoForm(container) {
  if (!container) return;

  container.innerHTML = `
    <div class="container">
      <div class="demo-grid">
        <!-- Left Column: Form -->
        <div class="demo-form-card">
          <div class="form-header">
            <h2 class="form-header-title">Get a Full Demo With Our Team</h2>
            <p class="form-header-desc">
              Experience our live attack ranges and discover how continuous hands-on labs elevate your security posture.
            </p>
          </div>

          <form id="cyber-demo-form" class="cyber-form" novalidate>
            <div class="form-row-2">
              <div class="form-group">
                <label for="firstName" class="form-label">First Name *</label>
                <input type="text" id="firstName" name="firstName" class="form-input" placeholder="Alex" required />
              </div>
              <div class="form-group">
                <label for="lastName" class="form-label">Last Name *</label>
                <input type="text" id="lastName" name="lastName" class="form-input" placeholder="Vance" required />
              </div>
            </div>

            <div class="form-row-2">
              <div class="form-group">
                <label for="workEmail" class="form-label">Work Email *</label>
                <input type="email" id="workEmail" name="workEmail" class="form-input" placeholder="alex.vance@company.com" required />
              </div>
              <div class="form-group">
                <label for="phone" class="form-label">Phone Number</label>
                <input type="tel" id="phone" name="phone" class="form-input" placeholder="+1 (555) 019-2834" />
              </div>
            </div>

            <div class="form-row-2">
              <div class="form-group">
                <label for="company" class="form-label">Company *</label>
                <input type="text" id="company" name="company" class="form-input" placeholder="Enterprise Corp" required />
              </div>
              <div class="form-group">
                <label for="jobRole" class="form-label">Job Role *</label>
                <select id="jobRole" name="jobRole" class="form-select" required>
                  <option value="" disabled selected>Select Role</option>
                  <option value="ciso">CISO / Security Director</option>
                  <option value="soc-manager">SOC Manager / Team Lead</option>
                  <option value="sec-engineer">Security Engineer / Analyst</option>
                  <option value="red-team">Penetration Tester / Red Teamer</option>
                  <option value="hr-training">L&D / Talent Enablement</option>
                  <option value="other">Other Executive / Technical</option>
                </select>
              </div>
            </div>

            <div class="form-group">
              <label for="companySize" class="form-label">Company Size *</label>
              <select id="companySize" name="companySize" class="form-select" required>
                <option value="" disabled selected>Select Organization Size</option>
                <option value="1-50">1 - 50 employees</option>
                <option value="51-200">51 - 200 employees</option>
                <option value="201-1000">201 - 1,000 employees</option>
                <option value="1001-5000">1,001 - 5,000 employees</option>
                <option value="5000+">5,000+ employees (Enterprise)</option>
              </select>
            </div>

            <div class="form-group">
              <label for="message" class="form-label">Training Goals & Requirements</label>
              <textarea id="message" name="message" class="form-textarea" placeholder="Tell us about your team size, offensive/defensive lab goals, or compliance timeline..."></textarea>
            </div>

            <button type="submit" class="btn btn-primary form-submit-btn" id="demo-submit-btn">
              <span>Request Personalized Demo</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </form>
        </div>

        <!-- Right Column: Value Prop & Trust -->
        <div class="demo-info-col">
          <span class="tag-label">
            <span class="tag-dot"></span>
            ENTERPRISE SCALE
          </span>

          <h2 class="demo-info-title">
            The #1 Platform to Build Attack-Ready Teams and Organizations
          </h2>

          <p class="demo-info-desc">
            Equip your entire security hierarchy with authentic offensive and defensive capabilities. Validate real-world readiness before adversaries strike.
          </p>

          <ul class="demo-benefits-list">
            <li class="demo-benefit-item">
              <span class="bullet-check-icon" aria-hidden="true">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </span>
              <div>
                <strong>Over 2,000+ Realistic Lab Environments</strong>
                <div class="text-small" style="margin-top: 2px;">Fully isolated, on-demand virtual machines with real enterprise architecture.</div>
              </div>
            </li>

            <li class="demo-benefit-item">
              <span class="bullet-check-icon" aria-hidden="true">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </span>
              <div>
                <strong>MITRE ATT&CK® Mapped Skill Pathways</strong>
                <div class="text-small" style="margin-top: 2px;">Quantifiable threat coverage benchmarks tailored to your team's role.</div>
              </div>
            </li>

            <li class="demo-benefit-item">
              <span class="bullet-check-icon" aria-hidden="true">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </span>
              <div>
                <strong>Zero Infrastructure Overhead</strong>
                <div class="text-small" style="margin-top: 2px;">Browser-based cloud labs and dedicated private cyber ranges ready in minutes.</div>
              </div>
            </li>
          </ul>

          <div class="demo-trust-clients">
            <div class="demo-clients-label">Trusted by Security Teams At:</div>
            <div class="demo-clients-pills">
              <span class="client-pill">Deloitte.</span>
              <span class="client-pill">SIEMENS</span>
              <span class="client-pill">intel</span>
              <span class="client-pill">Google</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  // Attach Form Submit Handler
  const form = container.querySelector('#cyber-demo-form');
  const submitBtn = container.querySelector('#demo-submit-btn');

  form?.addEventListener('submit', (e) => {
    e.preventDefault();

    const firstName = form.querySelector('#firstName').value.trim();
    const workEmail = form.querySelector('#workEmail').value.trim();
    const company = form.querySelector('#company').value.trim();
    const jobRole = form.querySelector('#jobRole').value;

    if (!firstName || !workEmail || !company || !jobRole) {
      showToast('Please complete all required fields', 'First name, work email, company, and role are needed.', 'error');
      return;
    }

    // Submit state simulation
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="animate-spin" style="animation: geo-spin 1s linear infinite;">
        <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
        <path d="M12 2a10 10 0 0 1 10 10" stroke-linecap="round"></path>
      </svg>
      <span>Scheduling Demo Session...</span>
    `;

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = `
        <span>Request Personalized Demo</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      `;
      form.reset();
      showToast('Demo Request Received!', `Thank you, ${firstName}. Our enterprise security solutions architect will connect with you at ${workEmail} within 2 business hours.`);
    }, 1200);
  });
}
