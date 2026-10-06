export function renderTrustLogos(container) {
  if (!container) return;

  container.innerHTML = `
    <div class="container">
      <div class="trust-title">
        Trusted by Security Leaders at Leading Global Enterprises
      </div>

      <div class="trust-logos-grid">
        <!-- Google -->
        <div class="trust-logo-item" title="Google Security Operations">
          <svg viewBox="0 0 24 24" height="24">
            <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
          </svg>
          <span style="font-weight: 700; letter-spacing: -0.03em;">Google</span>
        </div>

        <!-- AWS -->
        <div class="trust-logo-item" title="Amazon Web Services">
          <svg viewBox="0 0 24 24" height="24">
            <path d="M18.75 14.88c-.37-.47-.84-.87-1.42-1.2-1.04-.6-2.36-.89-3.95-.89h-2.12v4.86h2.25c1.47 0 2.68-.31 3.62-.92.94-.61 1.48-1.43 1.62-2.45zm-5.38-4.22h1.9c1.23 0 2.22-.24 2.97-.73.75-.49 1.12-1.19 1.12-2.11 0-.82-.33-1.47-.98-1.93-.65-.46-1.57-.69-2.76-.69h-2.25v5.46zm-2.12-7.55h4.62c2.08 0 3.73.49 4.96 1.46 1.22.97 1.83 2.3 1.83 4 0 1.09-.3 2.05-.9 2.87-.6.82-1.43 1.42-2.48 1.8 1.34.39 2.38 1.07 3.12 2.05.74.98 1.11 2.2 1.11 3.66 0 1.94-.69 3.48-2.07 4.62-1.38 1.14-3.32 1.71-5.82 1.71h-4.37V3.11z"/>
          </svg>
          <span style="font-weight: 800; letter-spacing: -0.04em;">aws</span>
        </div>

        <!-- Intel -->
        <div class="trust-logo-item" title="Intel Corporation">
          <span style="font-weight: 900; letter-spacing: -0.05em; font-size: 1.45rem; font-family: var(--font-sans);">intel</span>
        </div>

        <!-- Deloitte -->
        <div class="trust-logo-item" title="Deloitte Cyber Risk Services">
          <span style="font-weight: 900; letter-spacing: -0.02em; font-size: 1.35rem;">Deloitte<span style="color: var(--neon-green); font-size: 1.6rem; line-height: 0;">.</span></span>
        </div>

        <!-- Siemens -->
        <div class="trust-logo-item" title="Siemens Industrial Cybersecurity">
          <span style="font-weight: 800; letter-spacing: 0.15em; font-size: 1.15rem; text-transform: uppercase;">SIEMENS</span>
        </div>

        <!-- Microsoft -->
        <div class="trust-logo-item" title="Microsoft Security">
          <svg viewBox="0 0 24 24" height="20" style="display: inline-block; vertical-align: middle;">
            <path d="M0 0h11v11H0zM13 0h11v11H13zM0 13h11v11H0zM13 13h11v11H13z"/>
          </svg>
          <span style="font-weight: 700; letter-spacing: -0.02em;">Microsoft</span>
        </div>
      </div>
    </div>
  `;
}
