export function Logo({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M50 10L80 30V70L50 90L20 70V30L50 10Z"
        stroke="#d4af37"
        strokeWidth="2"
        fill="none"
      />
      <text
        x="50"
        y="58"
        textAnchor="middle"
        fill="#d4af37"
        fontSize="28"
        fontWeight="600"
        letterSpacing="2"
      >
        GS
      </text>
    </svg>
  );
}
