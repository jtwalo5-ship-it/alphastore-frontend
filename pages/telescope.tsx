// pages/telescope.tsx
import { useEffect, useState } from 'react';

interface ApodData {
  title: string;
  url: string;
  explanation: string;
}

export default function Telescope() {
  const [data, setData] = useState<ApodData | null>(null);

  useEffect(() => {
    async function fetchApod() {
      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`
      );
      const json = await res.json();
      setData(json);
    }
    fetchApod();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-4">Telescope Viewer</h1>
      {data ? (
        <div className="max-w-2xl text-center">
          <h2 className="text-xl mb-2">{data.title}</h2>
          <img src={data.url} alt={data.title} className="rounded shadow-lg mb-4" />
          <p className="text-sm">{data.explanation}</p>
        </div>
      ) : (
        <p>Loading space data...</p>
      )}
    </div>
  );
}
<Link href="/telescope" className="hover:text-white">Telescope Viewer</Link>
const res = await fetch(
  `https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API_KEY}`
);
