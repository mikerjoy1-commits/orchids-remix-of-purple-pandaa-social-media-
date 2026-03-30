import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Purple Pandaa - Social Media Marketing Agency',
    short_name: 'Purple Pandaa',
    description: 'India\'s leading social media marketing agency offering high-quality content creation, organic reach expertise, and performance marketing.',
    start_url: '/',
    display: 'standalone',
    background_color: '#1A1A2E',
    theme_color: '#7B3AF0',
    icons: [
      {
        src: '/favicon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/favicon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
