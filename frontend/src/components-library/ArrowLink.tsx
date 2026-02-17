import { Link, type LinkProps } from "react-router-dom";

type Direction = "backward" | "forward";

type ArrowLinkProps = Omit<LinkProps, "children"> & {
  text: string;
  direction?: Direction;
};

function ArrowIcon({ direction }: { direction: "backward" | "forward" }) {
  return (
    <svg
      className={[
        "w-4 h-4 transition-transform duration-200",
        direction === "forward" ? "group-hover:translate-x-1" : "group-hover:-translate-x-1 -scale-x-100",
      ].join(" ")}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      {/* arrow-right style (jak u Ciebie w liście) */}
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
    </svg>
  );
}

export function ArrowLink({ text, direction = "backward", className, ...linkProps }: ArrowLinkProps) {
  const isBack = direction === "backward";

  return (
    <Link
      {...linkProps}
      className={[
        "group inline-flex items-center gap-2  text-blue-400 hover:text-blue-300 transition-colors",
        className,
      ].filter(Boolean).join(" ")}
    >
      {isBack && <ArrowIcon direction="backward" />}
      <span>{text}</span>
      {!isBack && <ArrowIcon direction="forward" />}
    </Link>
  );
}


