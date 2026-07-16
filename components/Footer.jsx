export default function Footer() {
  return (
    <footer className="mt-20 border-t border-amber-200 py-8 text-center">
      <p className="text-gray-600">
        Made with ❤️ using Next.js, Razorpay & Supabase
      </p>

      <p className="mt-2 text-sm text-gray-500">
        © {new Date().getFullYear()} Buy Me a Coffee
      </p>
    </footer>
  );
}