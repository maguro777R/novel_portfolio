import type React from "react";
import { cx } from "./cx";

type ImageFrameProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  aspect?: "portrait" | "landscape" | "square";
};

const aspectClass = {
  landscape: "aspect-[4/3]",
  portrait: "aspect-[3/4]",
  square: "aspect-square",
};

export function ImageFrame({
  alt,
  aspect = "landscape",
  className,
  ...props
}: ImageFrameProps) {
  return (
    <figure
      className={cx(
        "overflow-hidden rounded-[6px] border border-[var(--color-hairline)] bg-[var(--color-pale)]",
        aspectClass[aspect],
        className,
      )}
    >
      <img
        alt={alt}
        className="h-full w-full object-cover"
        loading="lazy"
        {...props}
      />
    </figure>
  );
}
