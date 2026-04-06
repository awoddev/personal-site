import ScrollReveal from "@/components/ui/ScrollReveal";

export default function AboutSection() {
  return (
    <section id="about" className="site-section">
      <div className="container">
        <ScrollReveal>
          <div className="section-label">Background</div>
          <h2 className="section-title">I build things end to end.</h2>
        </ScrollReveal>

        <div className="about-grid">
          <ScrollReveal delay={100}>
            <div className="about-narrative">
              <p>
                I ship software products across the full stack. Right now
                I&apos;m building two products &mdash; an{" "}
                <strong>AI-powered fitness app</strong> and an{" "}
                <strong>AI video pipeline</strong> &mdash; working across React
                Native, Next.js, TypeScript, Python, and Supabase. I pick up
                new languages, frameworks, and SDKs fast because I understand
                the fundamentals underneath them.
              </p>
              <p>
                That foundation comes from{" "}
                <strong>studying Computer Science</strong>, where I developed
                strong skills in programming, software design, algorithms, and
                logical problem-solving. It trained me to think like an
                engineer &mdash; to break complex problems into solvable parts
                and build systems that hold up.
              </p>
              <p>
                I also spent serious time in{" "}
                <strong>game development with Unreal Engine</strong> &mdash;
                programming complex game logic, implementing algorithms, and
                solving math-heavy problems in real-time systems. I&apos;ve
                worked with Unity as well. This kind of work builds a different
                muscle than web development: performance constraints, spatial
                reasoning, and architectural thinking at a systems level.
              </p>
              <p>
                My <strong>BSc in Biomedical Sciences</strong> from Leiden
                University is what gives me genuine domain expertise in the
                health and fitness space I&apos;m building in &mdash; I
                understand the science behind the products.
              </p>
              <p>
                On the fitness side, I&apos;m a{" "}
                <strong>CrossFit Level 1 Trainer</strong> with years of
                training across jiu-jitsu, judo, kickboxing, Muay Thai,
                calisthenics, and more. That&apos;s not a hobby &mdash;
                it&apos;s the domain knowledge behind what I&apos;m building.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="credentials-list">
              <div className="credential-item">
                <div className="credential-label">Stack</div>
                <div className="credential-value">
                  React Native, Next.js, TypeScript, Python, Supabase
                </div>
              </div>
              <div className="credential-item">
                <div className="credential-label">AI</div>
                <div className="credential-value">
                  LLM integration, Claude Code, generative AI
                </div>
              </div>
              <div className="credential-item">
                <div className="credential-label">Game dev</div>
                <div className="credential-value">
                  Unreal Engine, Unity
                </div>
              </div>
              <div className="credential-item">
                <div className="credential-label">Background</div>
                <div className="credential-value">
                  Computer Science, BSc Biomedical Sciences
                </div>
              </div>
              <div className="credential-item">
                <div className="credential-label">Domain</div>
                <div className="credential-value">
                  CrossFit L1 Trainer, nutrition, athletic performance
                </div>
              </div>
              <div className="credential-item">
                <div className="credential-label">Creative</div>
                <div className="credential-value">
                  Video editing, scientific writing
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
