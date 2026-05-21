import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "outline" | "light";
type Size = "sm" | "md" | "lg";

type CommonProps = {
  variant?: Variant;
  size?: Size;
  block?: boolean;
  children: ReactNode;
  className?: string;
};

type ButtonAsLink = CommonProps & { href: string } & Omit<ComponentProps<typeof Link>, "href" | "className" | "children">;
type ButtonAsButton = CommonProps & { href?: undefined } & Omit<ComponentProps<"button">, "className" | "children">;

type Props = ButtonAsLink | ButtonAsButton;

function classes(variant: Variant = "primary", size: Size = "md", block?: boolean, extra = "") {
  const variants: Record<Variant, string> = {
    primary: "btn-primary",
    outline: "btn-outline",
    light: "btn-light",
  };
  const sizes: Record<Size, string> = {
    sm: "btn-sm",
    md: "",
    lg: "btn-lg",
  };
  return `btn ${variants[variant]} ${sizes[size]} ${block ? "btn-block" : ""} ${extra}`;
}

export function Button(props: Props) {
  const { variant, size, block, className, children } = props;
  const cls = classes(variant, size, block, className);
  if ("href" in props && props.href) {
    const { href, ...rest } = props;
    return (
      <Link href={href} className={cls} {...rest}>
        {children}
      </Link>
    );
  }
  const { href: _ignored, ...rest } = props as ButtonAsButton;
  void _ignored;
  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
}
