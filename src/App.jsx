import { useEffect, useState } from 'react';
import { fetchPage, fetchSite } from './api/wordvelApi.js';
import { BlockRenderer } from './blocks/BlockRenderer.jsx';
import { Footer } from './components/Footer.jsx';
import { Header } from './components/Header.jsx';

export function App() {
  const [page, setPage] = useState(null);
  const [site, setSite] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    Promise.all([fetchSite(), fetchPage('home')])
      .then(([sitePayload, pagePayload]) => {
        setSite(sitePayload);
        setPage(pagePayload);
      })
      .catch((apiError) => setError(apiError));
  }, []);

  const headerItems = site?.menus?.header?.items ?? [];
  const footerItems = site?.menus?.footer?.items ?? headerItems;

  return (
    <div className="site-shell">
      <Header logo={site?.theme?.logo} navItems={headerItems} />
      <main>
        {error ? <ApiState title="Could not load WordVel content" body={error.message} /> : null}
        {!page && !error ? <ApiState title="Loading WordVel content" body="Fetching site chrome and Home from the Laravel API." /> : null}
        {page ? <BlockRenderer blocks={page.blocks ?? []} /> : null}
      </main>
      <Footer logo={site?.theme?.logo} navItems={footerItems} />
    </div>
  );
}

function ApiState({ title, body }) {
  return (
    <section className="api-state">
      <p className="eyebrow">WordVel API</p>
      <h1>{title}</h1>
      <p>{body}</p>
    </section>
  );
}