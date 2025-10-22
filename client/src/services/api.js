export const API_URL = import.meta.env.VITE_SERVER_URL;

export async function pingServer() {
  const response = await fetch(`${API_URL}/`);
  return response.text();
}
