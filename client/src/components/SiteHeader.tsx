/**
 * NOVARA / Quiet Authority: an editorial sticky bar with transparent-to-solid contrast control.
 * It keeps the navigation precise, quiet, and usable across desktop and mobile.
 */

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import NovaraMark from "@/components/NovaraMark";

const navItems = [
  ["Strategy", "#strategy"],
  ["Capabilities", "#capabilities"],
  ["Ecosystem", "#ecosystem"],
  ["About", "#about"],
];

type SiteHeaderProps = {
  onOpenContact: () => void;
};

export default function SiteHeader({ onOpenContact }: SiteHeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openConversation = () => {
    setOpen(false);
    onOpenContact();
  };

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "border-b border-white/10 bg-[#08111f]/92 shadow-[0_8px_32px_rgba(0,0,0,.20)] backdrop-blur-xl" : "bg-transparent"}`}>
      <div className="nav-shell flex h-[76px] items-center justify-between">
        <NovaraMark inverted />
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
          {navItems.map(([label, href]) => (
            <a key={label} href={href} className="nav-link">
              {label}
            </a>
          ))}
        </nav>
        <div className="hidden lg:block">
          <button type="button" onClick={onOpenContact} className="signal-button signal-button-sm">
            Start a conversation <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>
        <div className="lg:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button aria-label="Open navigation" className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white transition-colors hover:border-[#51a0ff]/70 hover:bg-white/5">
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[86vw] border-white/10 bg-[#08111f] p-0 text-white sm:max-w-sm">
              <div className="flex h-full flex-col p-6 pt-16">
                <NovaraMark inverted />
                <nav className="mt-14 flex flex-col border-t border-white/10" aria-label="Mobile navigation">
                  {navItems.map(([label, href], index) => (
                    <a
                      key={label}
                      href={href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between border-b border-white/10 py-5 font-display text-2xl tracking-[-0.04em] text-white transition-colors hover:text-[#72b2ff]"
                    >
                      <span>{label}</span>
                      <span className="text-xs tracking-[0.18em] text-slate-500">0{index + 1}</span>
                    </a>
                  ))}
                </nav>
                <button type="button" onClick={openConversation} className="signal-button mt-auto justify-center">
                  Start a conversation <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
