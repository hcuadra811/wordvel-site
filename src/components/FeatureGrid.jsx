import {
  Blocks,
  Braces,
  DatabaseZap,
  FileCode2,
  PanelsTopLeft,
  Route,
} from 'lucide-react';

const icons = {
  Blocks,
  Braces,
  DatabaseZap,
  FileCode2,
  PanelsTopLeft,
  Route,
};

export function FeatureGrid({ eyebrow, heading, features }) {
  return (
    <section className="section feature-band" id="blocks">
      <div className="section-heading compact">
        <p className="eyebrow">{eyebrow}</p>
        <h2>{heading}</h2>
      </div>
      <div className="feature-grid">
        {(features ?? []).map((feature) => {
          const Icon = icons[feature.icon] ?? Blocks;

          return (
            <article className="feature" key={feature.title}>
              <Icon size={22} aria-hidden="true" />
              <h3>{feature.title}</h3>
              <p>{feature.body}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
