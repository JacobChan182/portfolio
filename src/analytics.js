/**
 * Google Analytics 4 (GA4) integration.
 * Set REACT_APP_GA_MEASUREMENT_ID in .env (e.g. G-XXXXXXXXXX) to enable.
 */

const GA_MEASUREMENT_ID = process.env.REACT_APP_GA_MEASUREMENT_ID;

export function isGAEnabled() {
  return typeof GA_MEASUREMENT_ID === "string" && GA_MEASUREMENT_ID.trim() !== "";
}

/**
 * Load gtag script and initialize GA4. Call once at app startup.
 */
export function initGA() {
  if (!isGAEnabled()) return;

  const id = GA_MEASUREMENT_ID.trim();
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };
  window.gtag("js", new Date());

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
  document.head.appendChild(script);

  window.gtag("config", id, {
    send_page_view: false, // we send page_view manually for SPA route changes
  });
}

/**
 * Send a page view to GA4. Call on initial load and when the route changes.
 */
export function trackPageView(path = window.location.pathname, title = document.title) {
  if (!isGAEnabled() || typeof window.gtag !== "function") return;
  window.gtag("event", "page_view", {
    page_path: path,
    page_title: title,
  });
}

/**
 * Send a custom event to GA4.
 */
export function trackEvent(eventName, params = {}) {
  if (!isGAEnabled() || typeof window.gtag !== "function") return;
  window.gtag("event", eventName, params);
}

/**
 * Send web vitals to GA4 (for reportWebVitals).
 */
export function sendWebVitalsToGA({ name, value, id }) {
  if (!isGAEnabled() || typeof window.gtag !== "function") return;
  window.gtag("event", name, {
    value: Math.round(name === "CLS" ? value * 1000 : value),
    event_label: id,
    non_interaction: true,
  });
}
