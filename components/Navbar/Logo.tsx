import { cn } from "@/lib/utils";
import Link from "next/link";

export function Logo({ className, inverted = false }: { className?: string; inverted?: boolean }) {
  return (
    <Link
      href="/"
      className={cn("group inline-flex items-center gap-2", className)}
      aria-label="WORKBLOK home"
    >
      <span className="grid h-10 w-10 grid-cols-2 grid-rows-2 border-[3px] border-ink bg-ink transition-transform group-hover:rotate-90">
        <span className="bg-yellow" />
        <span className="bg-cobalt" />
        <span className="bg-orange" />
        <span className={inverted ? "bg-on-dark" : "bg-paper"} />
      </span>
      <span
        className={cn("display text-2xl tracking-tight font-bold", inverted ? "text-on-dark" : "text-ink")}
      >
        Work<span className="text-cobalt">blok</span>
      </span>
    </Link>
  );
}
