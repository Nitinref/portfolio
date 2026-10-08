export default function NitinSignature() {
  return (
    <aside className="nitin-signature" role="img" aria-label="Handwritten signature, Nitin Yadav">
      <span className="nitin-signature-main">
        <span className="nitin-signature-name">Nitin <span>Yadav</span></span>
        <svg className="nitin-signature-flower" viewBox="0 0 36 48" aria-hidden="true">
          <path className="flower-stem" d="M18 23c0 8-2 15-7 21" />
          <path className="flower-leaf" d="M14 36c-6-6-10-4-9-1 2 4 6 5 9 1Z" />
          <g className="flower-petals">
            <ellipse cx="18" cy="10" rx="4" ry="7" />
            <ellipse cx="18" cy="10" rx="4" ry="7" transform="rotate(72 18 17)" />
            <ellipse cx="18" cy="10" rx="4" ry="7" transform="rotate(144 18 17)" />
            <ellipse cx="18" cy="10" rx="4" ry="7" transform="rotate(216 18 17)" />
            <ellipse cx="18" cy="10" rx="4" ry="7" transform="rotate(288 18 17)" />
          </g>
          <circle className="flower-center" cx="18" cy="17" r="3" />
        </svg>
      </span>
      <svg viewBox="0 0 250 24" aria-hidden="true">
        <path className="signature-swoop" d="M4 15c38 3 46-12 68-8 9 2 8 12 20 12 14 0 17-13 38-13 17 0 16 8 34 8 16 0 26-9 45-8" />
        <path className="signature-tail" d="M190 16c17 3 32 2 47-5" />
        <circle cx="239" cy="8" r="2" />
      </svg>
      <span className="nitin-signature-caption">DESIGNED &amp; BUILT BY</span>
    </aside>
  );
}
