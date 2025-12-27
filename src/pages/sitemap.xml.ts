import type { APIRoute } from 'astro';

const pages = [
  '/',
  '/privacy',
  '/terms',
  '/refunds',
  '/agedisclaimer',
  '/watch',
  '/join',
  '/coming-soon',
  '/in-construction',
];

const imageEntries: Record<string, string[]> = {
  '/': ['/images/mainpic_canonical.webp', '/images/thumb_brutal.jpg', '/images/thumb_storm.png'],
};

const videoEntries: Record<
  string,
  { title: string; thumbnail: string; contentUrl: string }[]
> = {
  '/': [
    {
      title: 'Robgrappler vs Nocturmex 3',
      thumbnail: '/images/thumb_brutal.jpg',
      contentUrl: 'https://view.wf/v/jxdekpgw',
    },
    {
      title: 'Close-angle submission storm',
      thumbnail: '/images/thumb_storm.png',
      contentUrl: 'https://view.wf/v/dijjihtm',
    },
    {
      title: 'From intense to caress',
      thumbnail: '/images/Screenshot%202025-12-11%20at%204.09.49.png',
      contentUrl: 'https://view.wf/v/thfefpll',
    },
  ],
};

const xmlEscape = (s: string): string =>
  s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');

export const GET: APIRoute = ({ site }) => {
  const base = (site ?? new URL('https://robgrappler.example')).toString().replace(/\/$/, '');
  const lastmod = new Date().toISOString();

  const urlset = pages
    .map((path) => {
      const loc = `${base}${path === '/' ? '' : path}`;
      const priority = path === '/' ? '1.0' : '0.6';
      const changefreq = path === '/' ? 'weekly' : 'monthly';
      const images = (imageEntries[path] ?? []).map((img) => {
        const imgLoc = `${base}${img.startsWith('/') ? img : `/${img}`}`;
        return `\n      <image:image><image:loc>${xmlEscape(imgLoc)}</image:loc></image:image>`;
      });

      const videos = (videoEntries[path] ?? []).map((v) => {
        const thumbLoc = `${base}${v.thumbnail.startsWith('/') ? v.thumbnail : `/${v.thumbnail}`}`;
        const contentLoc = v.contentUrl.startsWith('http')
          ? v.contentUrl
          : `${base}${v.contentUrl.startsWith('/') ? v.contentUrl : `/${v.contentUrl}`}`;
        return `\n      <video:video>\n        <video:title>${xmlEscape(v.title)}</video:title>\n        <video:thumbnail_loc>${xmlEscape(thumbLoc)}</video:thumbnail_loc>\n        <video:content_loc>${xmlEscape(contentLoc)}</video:content_loc>\n      </video:video>`;
      });

      return `  <url>\n    <loc>${xmlEscape(loc)}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>${images.join('')}${videos.join('')}\n  </url>`;
    })
    .join('\n');

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset\n  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"\n  xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"\n>\n${urlset}\n</urlset>\n`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
