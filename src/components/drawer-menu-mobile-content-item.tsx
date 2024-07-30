import Link from "next/link";

import { ArrowUpRight } from "lucide-react";

interface DrawerMenuMobileContentItemProps {
  title: string;
  link: string;
}

export function DrawerMenuMobileContentItem({
  title,
  link,
}: DrawerMenuMobileContentItemProps) {
  return (
    <li className="relative p-2 rounded-lg bg-app-gray-100">
      <Link href={link} className="flex items-center justify-between py-4 px-2">
        {title}
      </Link>
      <ArrowUpRight className="absolute top-2 right-2 size-4 text-app-blue-400" />
    </li>
  );
}
