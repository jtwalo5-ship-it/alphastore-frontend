// components/Footer.tsx
import Link from 'next/link';
import { FaGithub, FaStripe } from 'react-icons/fa';
import { SiVercel } from 'react-icons/si';
import { MdAccountBalance } from 'react-icons/md';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-6 mt-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        
        {/* Branding */}
        <div className="mb-4 md:mb-0">
          <h2 className="text-lg font-bold">AlphaStore</h2>
          <p className="text-sm">© {new Date().getFullYear()} Justice Okeke</p>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap gap-4 text-sm">
          <Link href="/nbk-games" className="hover:text-white">NBK Games</Link>
          <Link href="/alphabot" className="hover:text-white">AlphaBot</Link>
          <Link href="/alphabot-messenger" className="hover:text-white">AlphaBot Messenger</Link>
          <Link href="/hsv-jlc" className="hover:text-white">HSV for JLC</Link>
          <Link href="/cloud-operations" className="hover:text-white">Cloud Operations</Link>
        </nav>

        {/* Social/Payment Links with Tooltips */}
        <div className="flex flex-wrap gap-6 text-sm mt-4 md:mt-0">
          <div className="relative group">
            <a href="https://dashboard.stripe.com" target="_blank" rel="noopener noreferrer" 
               className="flex items-center gap-1 hover:text-blue-400 transition-colors">
              <FaStripe /> Stripe
            </a>
            <span className="absolute bottom-full mb-2 hidden group-hover:block bg-black text-white text-xs rounded px-2 py-1">
              Visit Stripe Dashboard
            </span>
          </div>

          <div className="relative group">
            <a href="https://www.rhbgroup.com" target="_blank" rel="noopener noreferrer" 
               className="flex items-center gap-1 hover:text-red-400 transition-colors">
              <MdAccountBalance /> RHB Bank
            </a>
            <span className="absolute bottom-full mb-2 hidden group-hover:block bg-black text-white text-xs rounded px-2 py-1">
              Go to RHB Bank
            </span>
          </div>

          <div className="relative group">
            <a href="https://github.com/jtwalo5-ship-it" target="_blank" rel="noopener noreferrer" 
               className="flex items-center gap-1 hover:text-black transition-colors">
              <FaGithub /> GitHub
            </a>
            <span className="absolute bottom-full mb-2 hidden group-hover:block bg-black text-white text-xs rounded px-2 py-1">
              View GitHub Repos
            </span>
          </div>

          <div className="relative group">
            <a href="https://vercel.com/dashboard" target="_blank" rel="noopener noreferrer" 
               className="flex items-center gap-1 hover:text-white transition-colors">
              <SiVercel /> Vercel
            </a>
            <span className="absolute bottom-full mb-2 hidden group-hover:block bg-black text-white text-xs rounded px-2 py-1">
              Open Vercel Dashboard
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
<a href="https://on.soundcloud.com/I5pHt0tG6eygmUc6Ia"                      target="_blank" rel="noopener noreferrer" && className="flex items-center gap-1 hover:text-orange-400 transition-colors">SoundCloud && </a>
<Link href="/mars" className="hover:text-white">Mars Rover</Link>
<Link href="/hubble" className="hover:text-white">Hubble Viewer</Link>
