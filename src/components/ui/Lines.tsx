interface LinesProps {
  className?: string;
}

export default function Lines({ className = "" }: LinesProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 1200 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <g opacity="0.3">
        <line
          x1="0"
          y1="15"
          x2="1200"
          y2="15"
          stroke="url(#lineGradient1)"
          strokeWidth="0.5"
        />
        <line
          x1="0"
          y1="30"
          x2="1200"
          y2="30"
          stroke="url(#lineGradient2)"
          strokeWidth="0.8"
        />
        <line
          x1="0"
          y1="45"
          x2="1200"
          y2="45"
          stroke="url(#lineGradient3)"
          strokeWidth="0.5"
        />
      </g>
      <defs>
        <linearGradient id="lineGradient1" x1="0" y1="0" x2="1200" y2="0">
          <stop offset="0%" stopColor="rgba(0, 212, 255, 0)" />
          <stop offset="50%" stopColor="rgba(0, 212, 255, 0.6)" />
          <stop offset="100%" stopColor="rgba(0, 212, 255, 0)" />
        </linearGradient>
        <linearGradient id="lineGradient2" x1="0" y1="0" x2="1200" y2="0">
          <stop offset="0%" stopColor="rgba(255, 255, 255, 0)" />
          <stop offset="50%" stopColor="rgba(255, 255, 255, 0.4)" />
          <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
        </linearGradient>
        <linearGradient id="lineGradient3" x1="0" y1="0" x2="1200" y2="0">
          <stop offset="0%" stopColor="rgba(0, 188, 212, 0)" />
          <stop offset="50%" stopColor="rgba(0, 188, 212, 0.5)" />
          <stop offset="100%" stopColor="rgba(0, 188, 212, 0)" />
        </linearGradient>
      </defs>
    </svg>
  );
}
