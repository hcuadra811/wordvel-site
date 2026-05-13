import { ApiPreview } from '../components/ApiPreview.jsx';
import { FeatureGrid } from '../components/FeatureGrid.jsx';
import { Hero } from '../components/Hero.jsx';
import { HowItWorks } from '../components/HowItWorks.jsx';
import { Principles } from '../components/Principles.jsx';

const renderers = {
  hero: (data) => <Hero {...data} />,
  principles: (data) => <Principles {...data} />,
  'feature-grid': (data) => <FeatureGrid {...data} />,
  workflow: (data) => <HowItWorks {...data} />,
  'api-preview': (data) => <ApiPreview {...data} />,
};

export function BlockRenderer({ blocks }) {
  return blocks.map((block, index) => {
    const render = renderers[block.type];

    if (!render) {
      return null;
    }

    return <BlockWrapper key={`${block.type}-${index}`}>{render(block.data ?? {})}</BlockWrapper>;
  });
}

function BlockWrapper({ children }) {
  return children;
}
