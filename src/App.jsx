import { useEffect, useState } from 'react';
import { fetchPage, fetchSite } from './api/wordvelApi.js';
import { BlockRenderer } from './blocks/BlockRenderer.jsx';
import { Footer } from './components/Footer.jsx';
import { Header } from './components/Header.jsx';

export function App() {
  const [page, setPage] = useState(null);
  const [site, setSite] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    Promise.all([fetchSite(), fetchPage('home')])
      .then(([sitePayload, pagePayload]) => {
        setSite(sitePayload);
        setPage(pagePayload);
        setError(null);
      })
      .catch((apiError) => setError(apiError))
      .finally(() => setLoading(false));
  }, []);

  const headerItems = site?.menus?.header?.items ?? [];
  const footerItems = site?.menus?.footer?.items ?? headerItems;

  return (
    <div className="site-shell">
      <Header logo={site?.theme?.logo} navItems={headerItems} />
      <main>
        {error ? <ApiState title="Could not load WordVel content" body={error.message} /> : null}
        {loading && !error ? <ApiState title="Loading WordVel content" body="Fetching site chrome and Home from the WordVel API." variant="loading" /> : null}
        {!loading && page ? <BlockRenderer blocks={page.blocks ?? []} /> : null}
        {!loading && !page && !error ? <ApiState title="No page data" body="The WordVel API returned no content for this page." /> : null}
      </main>
      <Footer logo={site?.theme?.logo} navItems={footerItems} />
    </div>
  );
}

function ApiState({ title, body, variant = 'default' }) {
  if (variant === 'loading') {
    return (
      <section className="api-state loading">
        <p className="loading-title">{title}</p>
        <p>{body}</p>
      </section>
    );
  }

  return (
    <section className="api-state">
      <p className="eyebrow">WordVel API</p>
      <h1>{title}</h1>
      <p>{body}</p>
    </section>
  );
}