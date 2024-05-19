import Link from "next/link";

import { ArrowUpRight } from "lucide-react";

interface FooterItemProps {
  items: {
    title: string;
    url: string;
  }[];
}

export function FooterItems({ items }: FooterItemProps) {
  return (
    <ul className="space-y-5">
      {items.map((item) => (
        <li key={item.title}>
          <Link
            href={item.url}
            className="underline text-sm text-app-gray-600 flex items-center gap-2 group"
          >
            {item.title}
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </li>
      ))}
    </ul>
  );
}
