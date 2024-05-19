import { ComponentProps } from "react";

interface XIconProps extends ComponentProps<"svg"> {}

export function XIcon({ ...props }: XIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      style={{ backgroundColor: "transparent" }}
      {...props}
    >
      <path
        d="M18.244 2.556h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817-5.966 6.817H1.68l7.73-8.835L1.254 2.556H8.08l4.713 6.23 5.45-6.23zm-1.161 17.52h1.833L7.084 4.432H5.117l11.966 15.644z"
        fill={props.fill}
      />
    </svg>
  );
}
