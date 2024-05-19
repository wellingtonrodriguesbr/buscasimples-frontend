import Link from "next/link";

import { FacebookIcon } from "@/components/icons/facebook";
import { InstagramIcon } from "@/components/icons/instagram";
import { LinkedinIcon } from "@/components/icons/linkedin";
import { XIcon } from "@/components/icons/x";

export function FooterSocialMedia() {
  return (
    <div className="flex items-center gap-2">
      <Link
        target="_blank"
        aria-label="Siga-nos no Instagram"
        href="https://www.instagram.com/buscasimplesapp/"
        className="flex items-center justify-center w-8 h-8 bg-zinc-100 rounded-full group"
      >
        <InstagramIcon className="w-5 h-5 fill-app-gray-600 group-hover:fill-app-blue-500" />
      </Link>
      <Link
        target="_blank"
        aria-label="Siga nossa página no Linkedln"
        href="https://www.linkedin.com/company/buscasimplesapp/"
        className="flex items-center justify-center w-8 h-8 bg-zinc-100 rounded-full group"
      >
        <LinkedinIcon className="w-5 h-5 fill-app-gray-600 group-hover:fill-app-blue-500" />
      </Link>
      <Link
        target="_blank"
        aria-label="Curta nossa página do Facebook"
        href="https://www.facebook.com/buscasimplesapp/"
        className="flex items-center justify-center w-8 h-8 bg-zinc-100 rounded-full group"
      >
        <FacebookIcon className="w-5 h-5 fill-app-gray-600 group-hover:fill-app-blue-500" />
      </Link>
      <Link
        target="_blank"
        aria-label="Siga-nos no Twitter"
        href="https://twitter.com/buscasimplesapp"
        className="flex items-center justify-center w-8 h-8 bg-zinc-100 rounded-full group"
      >
        <XIcon className="w-4 h-4 fill-app-gray-600 group-hover:fill-app-blue-500" />
      </Link>
    </div>
  );
}
