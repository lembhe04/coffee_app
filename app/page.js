import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CoffeeSelector from "@/components/CoffeeSelector";
import Supporters from "@/components/Supporters";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Coffee Selection */}
      <section
        id="buy"
        className="max-w-5xl mx-auto w-full px-6 py-16"
      >
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <CoffeeSelector />
        </div>
      </section>

      {/* Recent Supporters */}
      <section
        id="supporters"
        className="max-w-5xl mx-auto w-full px-6 pb-20"
      >
        <Supporters />
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}