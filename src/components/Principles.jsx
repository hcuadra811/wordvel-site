export function Principles({
  eyebrow,
  heading,
  item_1_title,
  item_1_body,
  item_2_title,
  item_2_body,
  item_3_title,
  item_3_body,
}) {
  const items = [
    { title: item_1_title, body: item_1_body },
    { title: item_2_title, body: item_2_body },
    { title: item_3_title, body: item_3_body },
  ].filter((item) => item.title || item.body);

  return (
    <section className="section principles" id="architecture">
      <div className="section-heading">
        <p className="eyebrow">{eyebrow}</p>
        <h2>{heading}</h2>
      </div>
      <div className="principle-list">
        {items.map((item) => (
          <article className="principle" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
