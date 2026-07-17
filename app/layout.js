import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "Buy Me a Coffee ☕",
  description: "Support my work with a coffee",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}

        <Script src="https://checkout.razorpay.com/v1/checkout.js" />
      </body>
    </html>
  );
}