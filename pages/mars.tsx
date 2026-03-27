// pages/mars.tsx
import { useEffect, useState } from 'react';

interface RoverPhoto {
  img_src: string;
  earth_date: string;
  camera: { full_name: string };
}

export default function MarsRover() {
  const [photos, setPhotos] = useState<RoverPhoto[]>([]);

  useEffect(() => {
    async function fetchPhotos() {
      const res = await fetch(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${process.env.NASA_API_KEY}`
      );
      const json = await res.json();
      setPhotos(json.photos.slice(0, 10)); // show first 10
    }
    fetchPhotos();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold mb-4">Mars Rover Photos</h1>
      <div className="grid grid-cols-2 gap-4">
        {photos.map((photo, idx) => (
          <div key={idx} className="bg-gray-800 p-2 rounded">
            <img src={photo.img_src} alt="Mars" className="rounded mb-2" />
            <p>{photo.camera.full_name}</p>
            <p>{photo.earth_date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
