export function ApiPreview({ label, heading, body, code }) {
  return (
    <section className="section api-preview" id="api">
      <div>
        <p className="eyebrow">{label}</p>
        <h2>{heading}</h2>
        <p>{body}</p>
      </div>
      <pre aria-label="API payload example">
        <code>{code}</code>
      </pre>
    </section>
  );
}
