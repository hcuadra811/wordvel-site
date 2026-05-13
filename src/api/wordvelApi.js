const API_BASE_URL = 'http://wordvel-api.test/api/v1';

export async function fetchSite() {
  return fetchWordVelResource('site', 'site payload');
}

export async function fetchPage(slug) {
  return fetchWordVelResource(`pages/${slug}`, 'page payload');
}

async function fetchWordVelResource(path, label) {
  const response = await fetch(`${API_BASE_URL}/${path}`, {
    headers: {
      Accept: 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`WordVel API returned ${response.status}`);
  }

  const payload = await response.json();

  if (!payload.status || !payload.data) {
    throw new Error(`WordVel API returned an empty ${label}`);
  }

  return payload.data;
}