
export default function Home() {
  return (
    <main style={{ maxWidth: 960, margin: "0 auto", padding: "40px 20px" }}>
      <header style={{ textAlign: "center", marginBottom: 50 }}>
        <div style={{
          width: 80, height: 80, borderRadius: 24, margin: "0 auto 20px",
          background: "linear-gradient(135deg, #2563eb, #10b981)",
          display: "flex", alignItems: "center", justifyContent: "center",
          color: "white", fontSize: 40, fontWeight: "bold"
        }}>
          ₹
        </div>
        <h1 style={{ fontSize: 52, margin: 0, color: "#0f172a" }}>ChitPay</h1>
        <p style={{ fontSize: 24, color: "#059669", fontWeight: "bold" }}>
          Save Together, Grow Together
        </p>
        <p style={{ fontSize: 18, color: "#475569", maxWidth: 700, margin: "20px auto" }}>
          India's trusted digital platform for creating and joining secure committees with
          KYC verification, UPI AutoPay, and transparent payout tracking.
        </p>
      </header>

      <section style={{
        background: "white",
        borderRadius: 24,
        padding: 30,
        boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
        maxWidth: 500,
        margin: "0 auto 60px"
      }}>
        <h2 style={{ marginTop: 0 }}>Join the Waitlist</h2>
        <input placeholder="Full Name" style={inputStyle} />
        <input placeholder="Mobile Number" style={inputStyle} />
        <input placeholder="Email Address" style={inputStyle} />
        <button style={buttonStyle}>Join the Waitlist</button>
      </section>

      <section style={{ display: "grid", gap: 20, gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
        {[
          ["🛡️", "KYC Verified Members"],
          ["💳", "UPI AutoPay"],
          ["📊", "Transparent Tracking"],
          ["👥", "Trusted Communities"]
        ].map(([icon, title]) => (
          <div key={title} style={{
            background: "white",
            borderRadius: 20,
            padding: 24,
            boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
            textAlign: "center"
          }}>
            <div style={{ fontSize: 36 }}>{icon}</div>
            <h3>{title}</h3>
          </div>
        ))}
      </section>
    </main>
  );
}

const inputStyle = {
  width: "100%",
  padding: "14px 16px",
  marginBottom: 12,
  borderRadius: 12,
  border: "1px solid #cbd5e1",
  boxSizing: "border-box",
  fontSize: 16
};

const buttonStyle = {
  width: "100%",
  padding: "14px",
  borderRadius: 12,
  border: "none",
  background: "#10b981",
  color: "white",
  fontWeight: "bold",
  fontSize: 16,
  cursor: "pointer"
};
