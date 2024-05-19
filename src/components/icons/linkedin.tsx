import { ComponentProps } from "react";

interface LinkedinIconProps extends ComponentProps<"svg"> {}

export function LinkedinIcon({ ...props }: LinkedinIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      style={{ backgroundColor: "transparent" }}
      {...props}
    >
      <path
        d="M16.21 8.021c2.345 0 4.099 1.55 4.099 4.883v6.23h-3.563V13.32c0-1.458-.517-2.455-1.846-2.455a1.938 1.938 0 00-1.847 1.33c-.096.281-.137.579-.12.876v6.065H9.435v-.093V8.27h3.563v1.533A3.545 3.545 0 0116.21 8.02zm-8.741.25v10.864H3.906V8.27h3.563zM5.706 3.035A1.846 1.846 0 017.7 4.883a1.846 1.846 0 01-2.022 1.846 1.846 1.846 0 01-1.985-1.846 1.846 1.846 0 012.013-1.847z"
        fill={props.fill}
      />
    </svg>
  );
}
