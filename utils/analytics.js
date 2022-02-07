export const pageview = (url) => {
  window.gtag("config", process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
    page_path: url,
  });
};

// log specific events happening.
export const logEvent = ({ action, params = {} }) => {
  console.log(`Inside ${action} ${params}`);
  window.gtag("event", action, params);
};
