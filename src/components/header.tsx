import { HeaderNav } from "./header-nav";

export function Header() {
  return (
    <header className="flex items-center justify-start sticky top-0 left-0 right-0 z-50 bg-white h-20 border-b">
      <HeaderNav />
    </header>
  );
}
