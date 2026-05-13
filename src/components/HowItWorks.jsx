export function HowItWorks({
  eyebrow,
  heading,
  step_1_title,
  step_1_body,
  step_2_title,
  step_2_body,
  step_3_title,
  step_3_body,
  step_4_title,
  step_4_body,
}) {
  const steps = [
    { title: step_1_title, body: step_1_body },
    { title: step_2_title, body: step_2_body },
    { title: step_3_title, body: step_3_body },
    { title: step_4_title, body: step_4_body },
  ].filter((step) => step.title || step.body);

  return (
    <section className="section flow">
      <div className="section-heading compact">
        <p className="eyebrow">{eyebrow}</p>
        <h2>{heading}</h2>
      </div>
      <div className="flow-list">
        {steps.map((step, index) => (
          <article className="flow-step" key={step.title}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <h3>{step.title}</h3>
            <p>{step.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
