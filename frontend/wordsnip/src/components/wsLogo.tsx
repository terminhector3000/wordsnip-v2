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
        {/* Primary:   #4F46E5 (indigo)
Secondary: #3B82F6 (blue)
Dark UI:   #0F172A
Text:      #111827 / #F8FAFC */}
        {/* #1E2A44
#263A5A
#2F4A6E */}
        {/* #2B3F66
#324A78
#3A568A */}

        {/* #4B4E7A
#5A4F8A
#6A5C9C */}

        {/* #1E2A44  (deep night blue)
#2B3F66  (twilight blue)
#3A2F5C  (dusky purple)

#F8FAFC  (soft white)
#E2E8F0  (muted white) */}
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
