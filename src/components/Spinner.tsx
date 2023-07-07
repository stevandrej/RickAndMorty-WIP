import { memo } from "react";

type SpinnerSize = "sm" | "md" | "lg" | "xl";

const SpinnerSizeMapping: Record<SpinnerSize, string> = {
  sm: "h-8 w-8",
  md: "h-12 w-12",
  lg: "h-16 w-16",
  xl: "h-24 w-24",
};

interface SpinnerProps {
  size?: SpinnerSize;
}

const Spinner = memo(function Spinner({ size = "sm" }: SpinnerProps) {
  return (
    <div
      className={`animate-spin rounded-full border-t-2 border-b-2 border-sky-700 ${SpinnerSizeMapping[size]}`}
    ></div>
  );
});

export default Spinner;
