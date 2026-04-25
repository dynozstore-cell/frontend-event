const API_BASE_URL =
  (import.meta.env.VITE_API_BASE_URL ||
    "https://backend-railway-kamu.up.railway.app")

export function buildApiUrl(path) {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`
  return `${API_BASE_URL}/api${normalizedPath}`
}