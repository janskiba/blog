import { Link, type LinkProps } from "react-router-dom";

type Direction = "backward" | "forward";

type CommonProps = {
  text: string;
  direction?: Direction;
  className?: string;
};

type ArrowLinkAsLinkProps = CommonProps & { as?: "link" } & Omit<LinkProps, "children">;
type ArrowLinkAsSpanProps = CommonProps & { as: "span" };

type ArrowLinkProps = ArrowLinkAsLinkProps | ArrowLinkAsSpanProps;

function ArrowIcon({ direction }: { direction: Direction }) {
  const isBack = direction === "backward";
  return (
    <svg
      className={[
        "w-4 h-4 transition-transform duration-200",
        isBack ? "-scale-x-100 group-hover:-translate-x-1" : "group-hover:translate-x-1",
      ].join(" ")}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
    </svg>
  );
}

export function ArrowLink(props: ArrowLinkProps) {
  const { text, direction = "backward", className } = props;

  const content = (
    <span
      className={[
        " text-blue-400 hover:text-blue-300 group inline-flex items-center gap-2 font-medium transition-colors duration-200",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {direction === "backward" && <ArrowIcon direction="backward" />}
      <span>{text}</span>
      {direction === "forward" && <ArrowIcon direction="forward" />}
    </span>
  );

  if (props.as === "span") return content;

  const { as, ...linkProps } = props;
  return (
    <Link {...linkProps} className={["text-blue-400 hover:text-blue-300 group inline-flex items-center gap-2", className].filter(Boolean).join(" ")}>
      {content.props.children}
    </Link>
  );
}
