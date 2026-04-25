const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ||
  "https://backend-event-production-b51c.up.railway.app";

export function buildApiUrl(path) {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
 return `${API_BASE_URL}${normalizedPath}`;
}

export const defaultHeaders = {
  "Content-Type": "application/json",
};
// force update

console.log("API BASE:", API_BASE_URL);