export const API_URL = import.meta.env.VITE_SERVER_URL;

export async function pingServer() {
  const response = await fetch(`${API_URL}/`);
  return response.text();
}

export async function pingData() {
  const res = await fetch(`${API_URL}/data/ping`);
  if (!res.ok) throw new Error('Falha ao acessar Data via Server');
  return res.json();
}
