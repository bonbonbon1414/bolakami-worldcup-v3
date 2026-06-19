import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "contained" | "outlined" | "texted" | "split";
type Size = "sm" | "md" | "lg";

const base =
	"inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/60 disabled:cursor-not-allowed select-none";

const sizes: Record<Size, string> = {
	sm: "h-10 px-5 text-sm", // 40px
	md: "h-12 px-7 text-[15px]", // 48px — design system default
	lg: "h-14 px-9 text-base", // 56px
};

const variants: Record<Variant, string> = {
	contained:
		"bg-brand-500 text-space-950 hover:bg-brand-400 active:bg-brand-600 disabled:bg-space-600 disabled:text-space-400",
	outlined:
		"border-[1.5px] border-brand-500 text-brand-500 hover:bg-brand-500/10 active:bg-brand-500/15 disabled:border-space-600 disabled:text-space-400",
	texted:
		"text-brand-500 hover:bg-brand-500/10 active:bg-brand-500/15 disabled:text-space-400",
	split:
		"bg-brand-500 text-space-950 pr-4 hover:bg-brand-400 active:bg-brand-600 disabled:bg-space-600 disabled:text-space-400",
};

type ButtonProps = {
	variant?: Variant;
	size?: Size;
	children: ReactNode;
	className?: string;
	href?: string;
} & Omit<ComponentProps<"button">, "ref">;

export default function Button({
	variant = "contained",
	size = "md",
	children,
	className = "",
	href,
	...props
}: ButtonProps) {
	const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;
	const content = (
		<>
			{children}
			{variant === "split" && (
				<span className="ml-1 grid h-6 w-6 place-items-center rounded-full bg-space-950/15">
					<ChevronDown />
				</span>
			)}
		</>
	);

	if (href) {
		return (
			<Link href={href} className={classes}>
				{content}
			</Link>
		);
	}

	return (
		<button className={classes} {...props}>
			{content}
		</button>
	);
}

function ChevronDown() {
	return (
		<svg
			width="14"
			height="14"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2.5"
			strokeLinecap="round"
			strokeLinejoin="round"
			aria-hidden
		>
			<path d="m6 9 6 6 6-6" />
		</svg>
	);
}
