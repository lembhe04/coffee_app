import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-amber-100">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-2xl font-bold text-amber-700 hover:text-amber-800 transition"
        >
          ☕ Buy Me a Coffee
        </Link>

        <div className="hidden md:flex gap-8 text-gray-700 font-medium">
          <a href="#buy" className="hover:text-amber-600 transition">
            Buy Coffee
          </a>

          <a href="#supporters" className="hover:text-amber-600 transition">
            Supporters
          </a>
        </div>
      </div>
    </nav>
  );
}