// Brand mark — an accent-orange square frame with a bold "D" breaking its
// bottom-right corner, after Square Inch Design's business-card artwork.
export default function Mark({ className = "h-4 w-4", dark = false, accentColor, letterColor }) {
  const accentProps = accentColor ? { fill: accentColor } : { className: "fill-accent" };
  const letterProps = letterColor ? { fill: letterColor } : { className: dark ? "fill-bone" : "fill-ink" };
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <rect x="12" y="8" width="76" height="12" {...accentProps} />
      <rect x="12" y="8" width="12" height="80" {...accentProps} />
      <rect x="76" y="8" width="12" height="80" {...accentProps} />
      <rect x="12" y="76" width="50" height="12" {...accentProps} />
      <text
        x="90"
        y="90"
        textAnchor="end"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="800"
        fontSize="60"
        {...letterProps}
      >
        D
      </text>
    </svg>
  );
}
