import { Brand } from './Header.jsx';

export function Footer({ logo, navItems }) {
  return (
    <footer className="footer">
      <Brand logo={logo} />
      <nav aria-label="Footer navigation">
        {navItems.map((item) => (
          <a key={`${item.id}-${item.url}`} href={item.url} target={item.target ?? undefined}>
            {item.title}
          </a>
        ))}
      </nav>
    </footer>
  );
}