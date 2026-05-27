export function DiagonalDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`relative h-24 overflow-hidden ${className}`}>
      <div
        className="absolute inset-0 bg-primary/5"
        style={{
          clipPath: 'polygon(0 0, 100% 100%, 100% 100%, 0 100%)',
        }}
      />
      <div
        className="absolute inset-0 border-t border-primary/20"
        style={{
          transform: 'rotate(-2deg)',
          transformOrigin: 'center',
        }}
      />
    </div>
  );
}
