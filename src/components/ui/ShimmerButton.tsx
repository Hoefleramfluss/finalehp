import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  CSSProperties,
  ReactNode,
} from "react";
import { forwardRef } from "react";
import clsx from "clsx";

export type ShimmerButtonProps =
  | ({ asLink?: false; children: ReactNode } & ButtonHTMLAttributes<HTMLButtonElement>)
  | ({ asLink: true; children: ReactNode } & AnchorHTMLAttributes<HTMLAnchorElement>);

const baseClasses = clsx(
  "relative inline-flex items-center justify-center rounded-2xl px-6 py-3 font-medium",
  "bg-gradient-to-r from-white/10 via-white/5 to-white/10 text-white",
  "border border-white/15 backdrop-blur-md",
  "transition-transform duration-300 motion-safe:hover:-translate-y-0.5",
  "motion-safe:focus-visible:-translate-y-0.5",
  "shadow-[0_25px_80px_-45px_rgba(0,188,212,0.55)]",
  "before:pointer-events-none before:absolute before:inset-0 before:rounded-2xl",
  "before:bg-[linear-gradient(110deg,transparent,rgba(255,255,255,.38),transparent)]",
  "motion-safe:before:animate-shimmer",
  "after:absolute after:inset-0 after:rounded-2xl after:ring-1 after:ring-white/10"
);

const maskStyle: CSSProperties = {
  WebkitMaskImage: "radial-gradient(ellipse at center, #000 58%, transparent 100%)",
};

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ShimmerButtonProps>(
  ({ asLink, className, children, type, ...props }, ref) => {
    const Component = asLink ? "a" : "button";

    return (
      <Component
        ref={ref as never}
        type={!asLink ? (type as ButtonHTMLAttributes<HTMLButtonElement>["type"] ?? "button") : undefined}
        {...(props as Record<string, unknown>)}
        className={clsx(
          baseClasses,
          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-electric-500",
          "motion-reduce:transform-none motion-reduce:before:hidden",
          className
        )}
        style={maskStyle}
      >
        <span className="relative z-10 flex items-center gap-2">
          {children}
        </span>
      </Component>
    );
  }
);

Button.displayName = "ShimmerButton";

export default Button;
