export function Header({ logo, navItems }) {
  return (
    <header className="header">
      <div className="header-inner">
        <Brand logo={logo} />
        <nav className="nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={`${item.id}-${item.url}`} href={item.url} target={item.target ?? undefined}>
              {item.title}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function Brand({ logo }) {
  const text = logo?.text ?? 'wordvel';
  const fontFamily = logo?.font_family
    ? `${logo.font_family}, Inter, ui-sans-serif, system-ui, sans-serif`
    : undefined;

  return (
    <a className="brand" href="/" aria-label={`${text} home`}>
      <span style={fontFamily ? { fontFamily } : undefined}>{text}</span>
    </a>
  );
}