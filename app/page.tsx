export default function Home() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      {/* Navigation Bar */}
      <nav style={{
        background: "#0070f3",
        padding: "15px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "#fff"
      }}>
        <h2 style={{ margin: 0 }}>AlphaStore</h2>
        <div>
          <a href="/" style={{ margin: "0 10px", color: "#fff", textDecoration: "none" }}>Home</a>
          <a href="/about" style={{ margin: "0 10px", color: "#fff", textDecoration: "none" }}>About</a>
          <a href="/contact" style={{ margin: "0 10px", color: "#fff", textDecoration: "none" }}>Contact</a>
        </div>
      </nav>

      {/* Dashboard Section */}
      <div style={{ padding: "40px" }}>
        <h1 style={{ textAlign: "center" }}>Welcome to AlphaStore</h1>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
          marginTop: "40px"
        }}>
          <div style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "20px",
            textAlign: "center"
          }}>
            <h2>NBK Games</h2>
            <p>Play and explore NBK Games.</p>
            <a href="https://nbk-games.vercel.app"
               style={{ padding: "10px 20px", background: "#0070f3", color: "#fff", borderRadius: "5px", textDecoration: "none" }}>
              Visit
            </a>
          </div>
          <div style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "20px",
            textAlign: "center"
          }}>
            <h2>Cloud Operations</h2>
            <p>Manage and monitor cloud services.</p>
            <a href="https://cloud-operations.vercel.app"
               style={{ padding: "10px 20px", background: "#0070f3", color: "#fff", borderRadius: "5px", textDecoration: "none" }}>
              Visit
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
