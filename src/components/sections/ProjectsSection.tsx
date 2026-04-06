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
                <h3 className="project-name">Coach Potato</h3>
                <span className="project-status">Launching soon</span>
              </div>
              <p className="project-description">
                An AI-powered workout generator that writes complete training
                plans from scratch. Unlike fitness apps that shuffle exercises
                from a database, this uses generative AI to build every workout
                uniquely &mdash; tailored to fitness level, equipment, time, and
                goals.
              </p>
              <ul className="project-details">
                <li>
                  Each session follows a proper coaching structure: warm-up,
                  preparation, main work, and conditioning
                </li>
                <li>
                  Simple mode for quick plans, advanced mode for full control
                  over intensity, volume, and muscle focus
                </li>
                <li>
                  Built with React Native (Expo), Supabase edge functions, and
                  informed by years of multi-discipline coaching experience
                </li>
              </ul>
              <a href="https://coach-potato-landing.vercel.app/" target="_blank" rel="noopener noreferrer" className="project-link">
                View landing page &rarr;
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="project-card">
              <div className="project-header">
                <h3 className="project-name">ReelForge</h3>
                <span className="project-status">In development</span>
              </div>
              <p className="project-description">
                An AI-powered short-form video pipeline that turns raw workout
                footage into ready-to-post Instagram Reels. Drop in a video, and
                the system identifies best moments, scores them for quality,
                syncs cuts to the beat, and writes the caption.
              </p>
              <ul className="project-details">
                <li>
                  Outputs a 9:16 video, thumbnail, and caption with hashtags
                  &mdash; no editing timeline, no templates, no manual work
                </li>
                <li>
                  Built solo, end to end &mdash; backend, frontend, AI
                  integration, video processing, deployment
                </li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
