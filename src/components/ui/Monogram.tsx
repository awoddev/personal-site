export default function Monogram({
  size = 32,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={Math.round(size * 1.25)}
      viewBox="0 0 32 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="I monogram"
    >
      <path
        d="M8 2h16v5h-5v26h5v5H8v-5h5V7H8V2z"
        fill="currentColor"
      />
    </svg>
  );
}
