import type { SVGProps } from "react";

export function LogoMark({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 120 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path
        d="M12.5 3C6.7 3 2 7.7 2 13.5v5c0 5.8 4.7 10.5 10.5 10.5 3.6 0 6.8-1.8 8.8-4.5h5.4c3.6 0 6.5-2.9 6.5-6.5S30.3 11.5 26.7 11.5h-4.4C21.3 6.1 17.4 3 12.5 3Zm0 6c2.6 0 4 1.8 4 3.9v6.2c0 2.1-1.4 3.9-4 3.9s-4-1.8-4-3.9v-6.2c0-2.1 1.4-3.9 4-3.9Zm81.4-4.5c5.8 0 10.6 4.7 10.6 10.5V29H97.8v-4.2c-1.7 2.6-4.6 4.2-8.3 4.2-7 0-11.9-5.5-11.9-12.5S82.5 4 89.5 4c3.7 0 6.6 1.6 8.3 4.2V4.5h-4.3V2h8.4ZM64 4c7.1 0 12.1 5.5 12.1 12.5S71.1 29 64 29s-12.1-5.5-12.1-12.5S56.9 4 64 4Zm0 6c-3.2 0-5.3 2.7-5.3 6.5s2.1 6.5 5.3 6.5 5.3-2.7 5.3-6.5S67.2 10 64 10Zm31.8 0c-3.2 0-5.3 2.7-5.3 6.5s2.1 6.5 5.3 6.5 5.3-2.7 5.3-6.5S99 10 95.8 10Z"
        fill="url(#logoGradient)"
      />
      <defs>
        <linearGradient id="logoGradient" x1="2" x2="106.5" y1="2" y2="29" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4bdfff" />
          <stop offset="0.5" stopColor="#8676ff" />
          <stop offset="1" stopColor="#d979ff" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function MenuIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path strokeLinecap="round" d="M4 6h16M4 12h16M9 18h11" />
    </svg>
  );
}

export function CloseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

export function SparkleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3.5l1.9 4.6 4.6 1.9-4.6 1.9-1.9 4.6-1.9-4.6-4.6-1.9 4.6-1.9 1.9-4.6ZM5 18l1.2 2.8L9 22l-2.8 1.2L5 26l-1.2-2.8L1 22l2.8-1.2L5 18Zm14-2l.9 2.1 2.1.9-2.1.9-.9 2.1-.9-2.1-2.1-.9 2.1-.9.9-2.1Z"
      />
    </svg>
  );
}

export function CheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

export function InfoIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <circle cx="12" cy="12" r="9" />
      <path strokeLinecap="round" d="M12 8h.01M11.3 11.3h1.4V16h-1.4z" />
    </svg>
  );
}

export function PlusIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" />
    </svg>
  );
}

export function MinusIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
    </svg>
  );
}
