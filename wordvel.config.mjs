import { ApiPreview } from './src/components/ApiPreview.jsx';
import { FeatureGrid } from './src/components/FeatureGrid.jsx';
import { Hero } from './src/components/Hero.jsx';
import { HowItWorks } from './src/components/HowItWorks.jsx';
import { Principles } from './src/components/Principles.jsx';

export default {
  manifest: '../wordvel/testing/laravel/storage/wordvel/manifest.json',
  endpoint: 'http://wordvel-api.test/api/wordvel/editor-preview',
  css: [
    './dist/assets/app.css',
    './public/wordvel-editor-overrides.css',
  ],
  blocks: {
    hero: Hero,
    principles: Principles,
    'feature-grid': FeatureGrid,
    workflow: HowItWorks,
    'api-preview': ApiPreview,
  },
};
