import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

export default async function Icon() {
  // Return the generated Purple Pandaa icon
  const imageUrl = 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/92450cee-73d7-474c-982e-b54cbc6ab78a/generated_images/purple-panda-mascot-icon-for-favicon%2c--c3bc27e1-20251016131834.jpg?';
  
  // Fetch the image and return it
  const imageResponse = await fetch(imageUrl);
  const imageBuffer = await imageResponse.arrayBuffer();
  
  return new Response(imageBuffer, {
    headers: {
      'Content-Type': 'image/jpeg',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
}