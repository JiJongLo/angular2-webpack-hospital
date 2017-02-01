export const MOBILE = (typeof window !== 'undefined') ? (window.screen.availWidth < 800) : true;
export const API_BASE_URL = (ENV !== 'development') ? `http://${HOST}:${PORT}` :
  `http://localhost:${PORT}`;
