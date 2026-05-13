import {
  Blocks,
  Braces,
  DatabaseZap,
  FileCode2,
  PanelsTopLeft,
  Route,
} from 'lucide-react';

export const pageContent = {
  navigation: [
    { label: 'Architecture', href: '#architecture' },
    { label: 'Blocks', href: '#blocks' },
    { label: 'API', href: '#api' },
  ],
  hero: {
    eyebrow: 'Laravel API. WordPress editor.',
    headline: 'Build Laravel APIs using WordPress as a headless CMS.',
    body:
      'WordVel gives teams a DTO-first way to model content, register editor fields, compose Gutenberg blocks, and ship clean API responses without writing WordPress-shaped application code.',
    primaryAction: { label: 'Explore the architecture', href: '#architecture' },
    secondaryAction: { label: 'View API shape', href: '#api' },
    stats: [
      { value: 'DTO', label: 'contracts drive docs, editor UI, and responses' },
      { value: 'WP', label: 'stays focused on content editing and storage' },
      { value: 'SPA', label: 'renders the experience with clean data' },
    ],
  },
  principles: [
    {
      title: 'Class-based content contracts',
      body:
        'Pages, blocks, options, regions, and custom fields are described with PHP DTOs instead of scattered plugin config.',
    },
    {
      title: 'WordPress without the mess',
      body:
        'WordVel wraps WordPress interactions in Laravel-style modules so application code never has to speak raw WordPress.',
    },
    {
      title: 'Docs from the same source',
      body:
        'OpenAPI schemas are generated from Laravel Data DTOs, including dynamic oneOf content block shapes.',
    },
  ],
  features: [
    {
      icon: PanelsTopLeft,
      title: 'Page DTOs',
      body:
        'Base WordPress page resources expose canonical fields like id, slug, title, status, and ordered blocks.',
    },
    {
      icon: Blocks,
      title: 'Gutenberg block DTOs',
      body:
        'Developers define available blocks in code, while editors compose and reorder them in WordPress.',
    },
    {
      icon: Braces,
      title: 'Typed API payloads',
      body:
        'React receives predictable content objects, including documented possible block data shapes.',
    },
    {
      icon: DatabaseZap,
      title: 'WordPress bridge',
      body:
        'WordVel becomes the translation layer between Laravel services and WordPress content storage.',
    },
    {
      icon: Route,
      title: 'Laravel routing',
      body:
        'The public API remains a normal Laravel API with controllers, resources, responses, and docs.',
    },
    {
      icon: FileCode2,
      title: 'Code-defined editing',
      body:
        'Anything structural lives in the codebase. WordPress gives users the forms and composition tools.',
    },
  ],
  flow: [
    {
      title: 'Define DTOs',
      body: 'Model pages, blocks, fields, menus, and regions as Laravel Data classes.',
    },
    {
      title: 'Register editor UI',
      body: 'WordVel turns those classes into WordPress admin fields and Gutenberg blocks.',
    },
    {
      title: 'Compose content',
      body: 'Editors build pages in WordPress using familiar content tools.',
    },
    {
      title: 'Serve Laravel API',
      body: 'React consumes clean DTO-backed JSON from Laravel, not WordPress markup.',
    },
  ],
  apiPreview: {
    label: 'Future API payload',
    code: `{
  "status": true,
  "data": {
    "id": 6,
    "slug": "home",
    "title": "Home",
    "status": "publish",
    "blocks": [
      {
        "type": "hero",
        "data": {
          "headline": "Build Laravel APIs using WordPress as a headless CMS."
        }
      }
    ]
  }
}`,
  },
};
