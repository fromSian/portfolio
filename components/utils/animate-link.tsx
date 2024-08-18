"use client";
import useAnimatedRouter from "@/hooks/useAnimationRoute";
import Link from "next/link";
import React from "react";

type Props = {
  href: string;
  children: React.ReactNode;
  tooltip?: string;
  className?: string;
};
export default function AnimatedLink({
  href,
  children,
  tooltip,
  className = "",
}: Props) {
  const { animatedRoute } = useAnimatedRouter();
  return tooltip ? (
    <Link
      className={className}
      href={href}
      onClick={() => {
        animatedRoute(href);
      }}
      data-tooltip-id="my-tooltip"
      data-tooltip-content={tooltip}
      data-tooltip-place="top"
      passHref
    >
      {children}
    </Link>
  ) : (
    <Link
      className={className}
      href={href}
      onClick={() => {
        animatedRoute(href);
      }}
      passHref
    >
      {children}
    </Link>
  );
}
