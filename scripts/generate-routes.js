import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '..', 'dist');

const routes = [
  {
    path: '/about',
    title: 'About The CentreStage Company | Reputation, Story & Influence',
    description: 'Discover The CentreStage Company, an African strategy, reputation and storytelling company helping important work become seen, understood and influential.'
  },
  {
    path: '/our-work',
    title: 'Reputation, Executive Positioning & Storytelling | The CentreStage',
    description: "Explore The CentreStage Company's work across reputation, executive presence, storytelling, thought leadership and high impact experiences."
  },
  {
    path: '/ecosystem',
    title: 'The CentreStage Ecosystem | Company, Foundation & Programmes',
    description: 'Explore The CentreStage ecosystem spanning reputation, leadership, social impact, youth development, human distinction and convening.'
  },
  {
    path: '/workshop',
    title: 'The Business Advantage Workshop (BAW) | Dr. Naomi | The CentreStage',
    description: 'Six practical masterclasses in Abuja to help business owners, leaders and teams turn internal value into turnover, pricing power and market influence.'
  },
  {
    path: '/insights',
    title: 'Insights on Reputation, Leadership & Influence | The CentreStage',
    description: 'Ideas and perspectives from The CentreStage on reputation, leadership, storytelling, influence, AI, visibility and the future of work.'
  },
  {
    path: '/contact',
    title: 'Contact The CentreStage Company | Start a Conversation',
    description: 'Talk to The CentreStage about reputation, positioning, storytelling, thought leadership, executive presence, partnerships and programmes.'
  }
];

function generateRoutes() {
  const indexHtmlPath = path.join(distDir, 'index.html');
  if (!fs.existsSync(indexHtmlPath)) {
    console.error('dist/index.html not found! Run vite build first.');
    process.exit(1);
  }

  const baseHtml = fs.readFileSync(indexHtmlPath, 'utf-8');

  for (const route of routes) {
    const canonicalUrl = `https://thecentrestagehq.com${route.path}`;
    
    let routeHtml = baseHtml;

    // 1. Title tag
    routeHtml = routeHtml.replace(/<title>.*?<\/title>/i, `<title>${route.title}</title>`);

    // 2. Meta description
    routeHtml = routeHtml.replace(
      /<meta\s+name="description"\s+content=".*?"\s*\/?>/i,
      `<meta name="description" content="${route.description}" />`
    );

    // 3. Canonical link
    routeHtml = routeHtml.replace(
      /<link\s+rel="canonical"\s+(?:id="[^"]*"\s+)?href=".*?"\s*\/?>/i,
      `<link rel="canonical" href="${canonicalUrl}" />`
    );

    // 4. OpenGraph tags
    routeHtml = routeHtml.replace(
      /<meta\s+property="og:url"\s+content=".*?"\s*\/?>/i,
      `<meta property="og:url" content="${canonicalUrl}" />`
    );
    routeHtml = routeHtml.replace(
      /<meta\s+property="og:title"\s+content=".*?"\s*\/?>/i,
      `<meta property="og:title" content="${route.title}" />`
    );
    routeHtml = routeHtml.replace(
      /<meta\s+property="og:description"\s+content=".*?"\s*\/?>/i,
      `<meta property="og:description" content="${route.description}" />`
    );

    // 5. Twitter tags
    routeHtml = routeHtml.replace(
      /<meta\s+name="twitter:url"\s+content=".*?"\s*\/?>/i,
      `<meta name="twitter:url" content="${canonicalUrl}" />`
    );
    routeHtml = routeHtml.replace(
      /<meta\s+name="twitter:title"\s+content=".*?"\s*\/?>/i,
      `<meta name="twitter:title" content="${route.title}" />`
    );
    routeHtml = routeHtml.replace(
      /<meta\s+name="twitter:description"\s+content=".*?"\s*\/?>/i,
      `<meta name="twitter:description" content="${route.description}" />`
    );

    const routeDir = path.join(distDir, route.path.replace(/^\//, ''));
    if (!fs.existsSync(routeDir)) {
      fs.mkdirSync(routeDir, { recursive: true });
    }

    fs.writeFileSync(path.join(routeDir, 'index.html'), routeHtml, 'utf-8');
    console.log(`✓ Generated static pre-rendered route with self-canonical tag: ${route.path} -> ${canonicalUrl}`);
  }

  console.log('✓ All routes generated with self-referencing canonical URLs.');
}

generateRoutes();
