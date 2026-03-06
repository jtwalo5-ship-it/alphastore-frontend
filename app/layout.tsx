import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AlphaStore',
  description: 'Central hub for NBK Games and Cloud Operations',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* Page content */}
        {children}

        {/* Footer */}
        <footer style={{
          background: "#f5f5f5",
          padding: "20px",
          textAlign: "center",
          marginTop: "40px",
          borderTop: "1px solid #ddd"
        }}>
          <p>© {new Date().getFullYear()} AlphaStore — Built by Justice Okeke</p>
          <p>
            <a href="https://nbk-games.vercel.app" style={{ margin: "0 10px" }}>NBK Games</a> |
            <a href="https://cloud-operations.vercel.app" style={{ margin: "0 10px" }}>Cloud Operations</a>
          </p>
        </footer>
      </body>
    </html>
  )
}
