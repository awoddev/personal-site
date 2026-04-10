import ScrollReveal from "@/components/ui/ScrollReveal";

export default function ProjectsSection() {
  return (
    <section id="projects" className="site-section">
      <div className="container">
        <ScrollReveal>
          <div className="section-label">Projects</div>
          <h2 className="section-title">What I&apos;m building.</h2>
        </ScrollReveal>

        <div className="projects-stack">
          <ScrollReveal delay={100}>
            <div className="project-card">
              <div className="project-header">
                <h3 className="project-name">AI Fitness App</h3>
                <span className="project-status">Launching soon</span>
              </div>
              <p className="project-description">
                A mobile app that uses AI to generate personalized training
                plans. Built for people who take their training seriously.
              </p>
              <ul className="project-details">
                <li>
                  Built with React Native and AI
                </li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="project-card">
              <div className="project-header">
                <h3 className="project-name">AI Video Tool</h3>
                <span className="project-status">In development</span>
              </div>
              <p className="project-description">
                An AI-powered tool that automates short-form video editing.
              </p>
              <ul className="project-details">
                <li>
                  Built solo, end to end
                </li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
