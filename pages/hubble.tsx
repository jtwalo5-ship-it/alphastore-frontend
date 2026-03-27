// pages/hubble.tsx
import { useEffect, useState } from 'react';

interface HubbleImage {
  title: string;
  href: string;
}

export default function Hubble() {
  const [images, setImages] = useState<HubbleImage[]>([]);

  useEffect(() => {
    async function fetchImages() {
      const res = await fetch(
        `https://images-api.nasa.gov/search?q=hubble&media_type=image`
      );
      const json = await res.json();
      const items = json.collection.items.slice(0, 10).map((item: any) => ({
        title: item.data[0].title,
        href: item.links[0].href,
      }));
      setImages(items);
    }
    fetchImages();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold mb-4">Hubble Telescope Images</h1>
      <div className="grid grid-cols-2 gap-4">
        {images.map((img, idx) => (
          <div key={idx} className="bg-gray-800 p-2 rounded">
            <img src={img.href} alt={img.title} className="rounded mb-2" />
            <p>{img.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
