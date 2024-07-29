import Link from "next/link";

import { ChevronRight } from "lucide-react";

interface MyDataItemProps {
  title: string;
  description: string;
  link: string;
}

export function MyDataItem({ title, description, link }: MyDataItemProps) {
  return (
    <li className="border-b">
      <Link
        href={link}
        className="w-full flex items-center justify-between py-6 group"
      >
        <div className="flex flex-col gap-1">
          <span className="text-base md:text-lg font-medium text-app-gray-700">
            {title}
          </span>
          <span className="text-sm text-app-gray-500">{description}</span>
        </div>
        <ChevronRight className="size-4 ml-auto text-app-blue-400 group-hover:translate-x-1 transition-transform" />
      </Link>
    </li>
  );
}
