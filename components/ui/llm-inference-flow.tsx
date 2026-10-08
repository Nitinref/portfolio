export default function LLMInferenceFlow() {
  return (
    <section className="llm-inference" aria-labelledby="llm-inference-title">
      <div className="llm-inference-heading">
        <svg viewBox="0 0 20 20" aria-hidden="true">
          <path d="M5 15V5m0 5 9-5m-9 5 9 5" />
          <circle cx="5" cy="4" r="2" />
          <circle cx="15" cy="4" r="2" />
          <circle cx="15" cy="16" r="2" />
        </svg>
        <h2 id="llm-inference-title">LLM inference loop</h2>
      </div>

      <div className="llm-inference-diagram" role="img" aria-label="Prompt tokens flow through transformer attention to predict a next token, which is added back to the prompt">
        <svg className="llm-inference-lines" viewBox="0 0 760 145" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <marker id="inference-arrow" viewBox="0 0 8 8" refX="6" refY="4" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
              <path d="M1 1 6 4 1 7" />
            </marker>
          </defs>
          <path className="llm-inference-route" d="M95 55C170 55 190 82 260 55S350 28 380 55 500 82 560 55H665" />
          <path className="llm-inference-loop" d="M665 85C665 132 95 132 95 85" markerEnd="url(#inference-arrow)" />
          <circle className="llm-inference-pulse-static" cx="235" cy="55" r="4" />
          <circle className="llm-inference-return-static" cx="380" cy="132" r="3" />
          <circle className="llm-inference-pulse" r="4">
            <animateMotion dur="4.5s" path="M95 55C170 55 190 82 260 55S350 28 380 55 500 82 560 55H665" repeatCount="indefinite" />
          </circle>
          <circle className="llm-inference-return-pulse" r="3">
            <animateMotion begin="1.8s" dur="6.5s" path="M665 85C665 132 95 132 95 85" repeatCount="indefinite" />
          </circle>
        </svg>

        <div className="llm-inference-node llm-inference-input" aria-hidden="true">
          <svg viewBox="0 0 40 40"><rect x="6" y="11" width="8" height="18" rx="2" /><rect x="16" y="11" width="10" height="18" rx="2" /><rect x="28" y="11" width="7" height="18" rx="2" /><path d="M8 16h4m7 0h6m-6 5h4m8-5h2" /></svg>
        </div>
        <div className="llm-inference-node llm-inference-transformer" aria-hidden="true">
          <svg viewBox="0 0 40 40"><polygon points="20,2 35,10 35,30 20,38 5,30 5,10" /><path d="m11 12 9 7m9-7-9 7m-9 9 9-7m9 7-9-7" /><circle cx="10" cy="10" r="2" /><circle cx="30" cy="10" r="2" /><circle cx="20" cy="20" r="2.5" /><circle cx="10" cy="30" r="2" /><circle cx="30" cy="30" r="2" /></svg>
        </div>
        <div className="llm-inference-node llm-inference-output" aria-hidden="true">
          <svg viewBox="0 0 40 40"><path d="M9 31V9m0 22h24" /><path d="M14 27v-5m7 5V16m7 11V11" /><circle cx="28" cy="11" r="2.5" /></svg>
        </div>

        <span className="llm-inference-label llm-inference-label-input">PROMPT TOKENS</span>
        <span className="llm-inference-label llm-inference-label-transformer">TRANSFORMER ATTENTION</span>
        <span className="llm-inference-label llm-inference-label-output">NEXT TOKEN</span>
      </div>
      <p className="llm-inference-caption">The predicted token joins the prompt, and the next step begins.</p>
    </section>
  );
}
