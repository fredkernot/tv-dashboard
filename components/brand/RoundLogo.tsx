// Round's wordmark and icon mark, inline per the design system (§6).
// Never recolour, stretch, outline, rotate, add effects or redraw. The only
// permitted variant is swapping the ink fill for white, which `tone` does.
// White goes on #10110D dark backgrounds only — neon takes the black mark.

interface RoundMarkProps {
  /** Ink (#10110D) on light and on neon; white on dark. */
  tone?: "ink" | "white";
  /** Rendered height. Wordmark: ~520px on a cover, 17–26px in headers. */
  height?: number | string;
  className?: string;
}

const FILL = { ink: "#10110D", white: "#FFFFFF" } as const;

export function RoundWordmark({
  tone = "ink",
  height = 24,
  className,
}: RoundMarkProps) {
  const fill = FILL[tone];
  return (
    <svg
      viewBox="0 0 660 133"
      fill="none"
      height={height}
      role="img"
      aria-label="Round"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M555.888 28.8331H537.065V104.165H555.888V28.8331Z" fill={fill} />
      <path d="M650 38.2495V94.7486C638.975 105.785 632.792 111.967 621.766 122.998H555.887L555.888 104.165L624.119 104.165C628.017 104.165 631.177 101.003 631.177 97.1027V35.8954C631.177 31.9949 628.017 28.833 624.119 28.833L555.888 28.8331L555.887 10H621.766C632.792 21.0361 638.975 27.2181 650 38.2495Z" fill={fill} />
      <path d="M518.209 38.2495V122.998H499.387V35.8954C499.387 31.9949 496.226 28.833 492.328 28.833H431.155C427.257 28.833 424.096 31.9949 424.096 35.8954V122.998H405.274V38.2495C416.299 27.2181 422.482 21.0361 433.508 10H489.975C501.001 21.0361 507.184 27.2181 518.209 38.2495Z" fill={fill} />
      <path d="M386.465 10V94.7486C375.44 105.785 369.262 111.967 358.232 122.998H301.764L273.53 94.7486V10H292.353V97.1027C292.353 101.003 295.513 104.165 299.411 104.165H360.585C364.483 104.165 367.643 101.003 367.643 97.1027V10H386.465Z" fill={fill} />
      <path d="M226.458 10H169.99C158.965 21.0361 152.781 27.2181 141.756 38.2495V94.7486C152.781 105.785 158.965 111.967 169.99 122.998H226.458C237.483 111.967 243.666 105.785 254.691 94.7486V38.2495C243.666 27.2181 237.483 21.0361 226.458 10ZM235.869 97.1027C235.869 101.001 232.711 104.165 228.81 104.165H167.637C163.741 104.165 160.579 101.001 160.579 97.1027V35.8954C160.579 31.997 163.741 28.833 167.637 28.833H228.81C232.711 28.833 235.869 31.997 235.869 35.8954V97.1027Z" fill={fill} />
      <path d="M28.8227 10.0019V28.8349H97.0544C100.953 28.8349 104.113 31.9968 104.113 35.8973V66.499H122.935V38.2514C111.909 27.2193 105.728 21.034 94.7016 10.0019L28.8227 10.0019Z" fill={fill} />
      <path d="M28.8227 28.8349L10 28.8349V123H28.8232L28.8227 28.8349Z" fill={fill} />
      <path d="M47.3887 80.6346H73.2697L113.524 123H87.643L47.3887 80.6346Z" fill={fill} />
      <path d="M122.935 66.499H104.113L104.113 80.6248H122.936L122.935 66.499Z" fill={fill} />
    </svg>
  );
}

export function RoundIconMark({
  tone = "ink",
  height = 24,
  className,
}: RoundMarkProps) {
  const fill = FILL[tone];
  return (
    <svg
      viewBox="0 0 131 131"
      fill="none"
      height={height}
      role="img"
      aria-label="Round"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M28.5004 28.5002H10V121H28.5004V28.5002Z" fill={fill} />
      <path d="M46.7474 79.3826H72.1847L111.749 120.998H86.3114L46.7474 79.3826Z" fill={fill} />
      <path d="M28.5004 28.5002L28.4996 10H93.2489L120.999 37.7503L121 79.3736H102.499L102.498 35.4378C102.498 31.6054 99.3928 28.5002 95.5615 28.5002H28.5004Z" fill={fill} />
    </svg>
  );
}
