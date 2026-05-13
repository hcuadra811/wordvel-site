import { ArrowRight } from 'lucide-react';

export function Hero({
  eyebrow,
  headline,
  body,
  primary_action_label,
  primary_action_href,
  secondary_action_label,
  secondary_action_href,
  stat_1_value,
  stat_1_label,
  stat_2_value,
  stat_2_label,
  stat_3_value,
  stat_3_label,
}) {
  const stats = [
    { value: stat_1_value, label: stat_1_label },
    { value: stat_2_value, label: stat_2_label },
    { value: stat_3_value, label: stat_3_label },
  ].filter((stat) => stat.value || stat.label);

  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{headline}</h1>
        <p className="hero-body">{body}</p>
        <div className="hero-actions">
          <a className="button primary" href={primary_action_href}>
            {primary_action_label}
            <ArrowRight size={18} aria-hidden="true" />
          </a>
          <a className="button secondary" href={secondary_action_href}>
            {secondary_action_label}
          </a>
        </div>
      </div>
      <div className="hero-panel" aria-label="WordVel content contract preview">
        <div className="panel-toolbar">
          <span />
          <span />
          <span />
        </div>
        <div className="contract-card">
          <p>PageResource</p>
          <ul>
            <li>id: int</li>
            <li>slug: string</li>
            <li>blocks: oneOf[]</li>
          </ul>
        </div>
        <div className="contract-card raised">
          <p>HeroBlockData</p>
          <ul>
            <li>headline: string</li>
            <li>image: MediaResource</li>
            <li>cta_url: string</li>
          </ul>
        </div>
      </div>
      <div className="hero-stats">
        {stats.map((stat) => (
          <div key={stat.value}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
