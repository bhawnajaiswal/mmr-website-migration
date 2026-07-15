export default function Home() {
  return (
    <div style={{ padding: "60px 20px", textAlign: "center", minHeight: "50vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <h1 style={{ fontSize: "2.5rem", color: "#443c7c", marginBottom: "15px" }}>Welcome to MMR Hospital & IVF Center</h1>
      <p style={{ fontSize: "1.1rem", color: "#666666", maxWidth: "600px", lineHeight: "1.6" }}>
        We are migrating our production clinic website to Next.js. Currently, the global application shell (Header, Footer, and Navigation) is implemented and ready.
      </p>
    </div>
  );
}
