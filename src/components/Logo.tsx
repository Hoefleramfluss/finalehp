import clsx from "clsx";
import type { ImgHTMLAttributes } from "react";

export type LogoProps = ImgHTMLAttributes<HTMLImageElement> & {
  variant?: "default" | "compact";
};

export default function Logo({ className, variant = "default", alt, ...props }: LogoProps) {
  const sizeClass = variant === "compact" ? "h-8" : "h-10";

  return (
    <img
      src="/voxon-logo.png"
      alt={alt ?? "Voxon.ai Logo"}
      loading="lazy"
      className={clsx("w-auto", sizeClass, className)}
      {...props}
    />
  );
}
