import "./globals.css";

export const metadata = {
  title: "Buy Me a Coffee ☕",
  description: "Support creators with a coffee using Razorpay",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-yellow-50 via-orange-50 to-amber-100 min-h-screen text-gray-900">
        {children}
      </body>
    </html>
  );
}