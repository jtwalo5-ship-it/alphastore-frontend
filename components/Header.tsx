import Link from 'next/link';

export default function Header() {
  return (
    <nav className="flex gap-6 p-4 bg-black text-yellow-400">
      <Link href="/">Home</Link>
      <Link href="/nbk-games">NBK Games</Link>
      <Link href="/exchange-rates">Exchange Rates</Link>
      <Link href="/smartlight">NBK SmartLight</Link>
      <Link href="/alphabot">AlphaBot</Link>
      <Link href="/messenger">Messenger</Link>
      <Link href="/hsv-jlc">HSV-JLC</Link>
      <Link href="/cloud-ops">Cloud Operations</Link>
      <Link href="/telescope">Telescope Viewer</Link>
      <Link href="/soundcloud">SoundCloud</Link>
    </nav>
  );
}
