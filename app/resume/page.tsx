import Link from "next/link";

export default function ResumePage() {
  return (
    <main className="resume-page">
      <div className="paper-grid" />
      <div className="resume-shell">
        <header className="resume-header">
          <Link href="/" className="resume-back" aria-label="Back to home">←</Link>
          <div>
            <h1>Resume</h1>
            <p>Nitin Yadav</p>
          </div>
          <div className="resume-header-actions">
            <a href="/resume.pdf" target="_blank" rel="noreferrer">Open PDF ↗</a>
            <a href="/resume.pdf" download>Download ↓</a>
          </div>
        </header>

        <section className="resume-document" aria-label="Nitin Yadav resume preview">
          <div className="resume-document-heading">
            <div className="resume-file-icon">▤</div>
            <div>
              <strong>Nitin Yadav Resume</strong>
              <span>PDF document</span>
            </div>
            <div className="resume-document-actions">
              <a href="/resume.pdf" target="_blank" rel="noreferrer" aria-label="Open resume PDF">↗</a>
              <a href="/resume.pdf" download>Download ↓</a>
            </div>
          </div>
          <iframe src="/resume.pdf#toolbar=0&navpanes=0" title="Nitin Yadav resume PDF" />
        </section>
      </div>
    </main>
  );
}
