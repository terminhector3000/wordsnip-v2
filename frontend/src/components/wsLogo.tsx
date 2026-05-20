type Props = {
  className?: string;
};
const WordSnipLogo = ({ className }: Props) => {
  return (
    <div className={className}>
      <svg
        viewBox="0 0 320 120"
        className="w-full h-auto"
        role="img"
        // fill="#E2E8F0"
        // fill="#fff"
        aria-label="WORSNIP"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="320" height="120" rx="28" fill="#f8fafc" />
        <text
          x="160"
          y="70"
          textAnchor="middle"
          fill="#1E2A44"
          fontSize="42"
          fontWeight="700"
          fontFamily="Sora, sans-serif"
          letterSpacing="5"
        >
          WORDSNIP
        </text>
      </svg>
    </div>
  );
};

export default WordSnipLogo;
