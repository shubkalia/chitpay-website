
export const metadata = {
  title: "ChitPay - Save Together, Grow Together",
  description: "India's trusted digital committee platform.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif", background: "#f8fafc" }}>
        {children}
      </body>
    </html>
  );
}
