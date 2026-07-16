import Image from "next/image";

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-center justify-between gap-14">
      <div className="flex-1 fade-up">
        <h1 className="text-5xl md:text-6xl font-black leading-tight">
          Fuel My
          <span className="text-amber-600"> Creativity</span>
          <br />
          With a Coffee ☕
        </h1>

        <p className="mt-6 text-gray-600 text-lg leading-8">
          If you enjoy my projects and tutorials, consider supporting my work by
          buying me a coffee. Every contribution helps me build more amazing
          applications.
        </p>

        <a href="#buy" className="inline-block mt-8 btn-primary">
          Buy Me a Coffee
        </a>
      </div>

      <div className="flex-1 flex justify-center float">
        <Image
          src="/hero.png"
          alt="Coffee"
          width={450}
          height={450}
          priority
        />
      </div>
    </section>
  );
}