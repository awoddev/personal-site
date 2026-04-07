import HeroName from "@/components/ui/HeroName";

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="container">
        <HeroName />
        <p className="hero-tagline">
          Building at the intersection of biomedical science, software, and
          athletic performance.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn-ghost">
            See what I&apos;m building
          </a>
          <a href="#contact" className="btn-text">
            Get in touch &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
