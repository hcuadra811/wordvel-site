# WordVel Site

WordVel Site is the first consumer website for the WordVel proof API.

It is a small React SPA that fetches site chrome, navigation, theme options, and page blocks from the local WordVel Laravel API. The hardcoded design became the source for the first WordVel content model, and the app now exercises the real API contract.

## Local Commands

```bash
npm install
npm run dev
npm run build
npm run preview
npm run wordvel:sync
```

The preview sync command uses `@wordvel/bridge` from the sibling `../wordvel_bridge` package and sends editor preview HTML/CSS to the WordVel Laravel API.

## Local API Assumptions

- WordVel API: `http://wordvel-api.test`
- WordPress admin: `http://wordvel-wp.test/wp-admin`
- Home page endpoint: `GET /api/v1/pages/home`
- Site chrome endpoint: `GET /api/v1/site`
