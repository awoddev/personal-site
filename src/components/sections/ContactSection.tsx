import ScrollReveal from "@/components/ui/ScrollReveal";

export default function ContactSection() {
  return (
    <section id="contact" className="site-section">
      <div className="container">
        <ScrollReveal>
          <div className="section-label">Contact</div>
          <h2 className="section-title">Let&apos;s talk.</h2>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="contact-content">
            <a
              href="mailto:awod.dev@gmail.com"
              className="contact-email"
            >
              awod.dev@gmail.com
            </a>
            <p className="contact-subtext">
              Currently building an AI fitness app out of Amsterdam.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
