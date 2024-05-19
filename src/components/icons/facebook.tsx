import { ComponentProps } from "react";

interface FacebookIconProps extends ComponentProps<"svg"> {}

export function FacebookIcon({ ...props }: FacebookIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      style={{ backgroundColor: "transparent" }}
      {...props}
    >
      <path
        d="M13.735 3.702A3.563 3.563 0 009.93 7.606v2.179H7.384v2.954H9.93v7.578h3.056v-7.579h2.538l.388-2.953h-2.926V7.938c0-.895.24-1.467 1.458-1.467h1.57V3.82a20.312 20.312 0 00-2.28-.12z"
        fill={props.fill}
      />
    </svg>
  );
}
