import type { CSSProperties } from 'react'

type ResearchVisualProps = {
  type: 'sequence' | 'network'
}

export function ResearchVisual({ type }: ResearchVisualProps) {
  if (type === 'sequence') {
    return (
      <div
        className="research-visual research-visual--sequence"
        aria-hidden="true"
      >
        <div className="sequence-card">
          <div className="sequence-card__header">
            <span>Sequence view</span>
            <span>chr · 01</span>
          </div>
          <div className="sequence-lines">
            <span>ATGCTCAGAACT</span>
            <span>TCGAACTGGCTA</span>
            <span>GCTAGGTTACCG</span>
            <span>AACCGTTAAGCT</span>
          </div>
          <div className="gene-track">
            <i />
            <i />
            <i />
          </div>
          <div className="sequence-legend">
            <span>
              <i className="legend-coral" /> feature
            </span>
            <span>
              <i className="legend-green" /> region
            </span>
          </div>
        </div>
        <div className="specimen-label">
          <span>SPECIMEN</span>
          <strong>A. thaliana</strong>
          <small>development / regulation</small>
        </div>
      </div>
    )
  }

  return (
    <div
      className="research-visual research-visual--network"
      aria-hidden="true"
    >
      <div className="network-grid">
        <svg viewBox="0 0 480 320" focusable="false">
          <g className="network-lines">
            <path d="M77 91 185 54 270 120 375 72" />
            <path d="m77 91 52 112 141-83 42 116 63-164" />
            <path d="m129 203 102 55 81-22 90 24" />
            <path d="m185 54 46 204" />
            <path d="m270 120 132 140" />
          </g>
          <g className="network-nodes">
            <circle cx="77" cy="91" r="13" />
            <circle cx="185" cy="54" r="8" />
            <circle cx="270" cy="120" r="18" />
            <circle cx="375" cy="72" r="10" />
            <circle cx="129" cy="203" r="9" />
            <circle cx="231" cy="258" r="14" />
            <circle cx="312" cy="236" r="7" />
            <circle cx="402" cy="260" r="12" />
          </g>
        </svg>
        <span className="network-chip network-chip--one">topology</span>
        <span className="network-chip network-chip--two">bias</span>
        <span className="network-chip network-chip--three">runtime</span>
      </div>
      <div className="benchmark-strip">
        <span>method</span>
        <i style={{ '--score': '78%' } as CSSProperties} />
        <span>memory</span>
        <i style={{ '--score': '54%' } as CSSProperties} />
        <span>time</span>
        <i style={{ '--score': '66%' } as CSSProperties} />
      </div>
    </div>
  )
}
