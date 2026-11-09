"use client";

import { Briefcase, FileStack, LayoutGrid } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { SheetClose } from "@/components/ui/sheet";

const items = [
  { href: "/dashboard", label: "Overview", icon: LayoutGrid },
  { href: "/dashboard/jobs", label: "Jobs", icon: Briefcase },
  { href: "/dashboard/applications", label: "Applications", icon: FileStack },
] as const;

export function AdminNavLinks({ closeOnSelect = false }: { closeOnSelect?: boolean }) {
  const pathname = usePathname();

  return (
    <nav aria-label="Admin navigation" className="flex flex-col gap-1.5">
      {items.map((item) => {
        const isActive =
          pathname === item.href ||
          (item.href !== "/dashboard" && pathname.startsWith(`${item.href}/`));
        const className = [
          "flex min-h-11 items-center gap-3 border-2 px-3 py-2.5 text-sm font-extrabold transition-colors",
          isActive
            ? "border-yellow bg-yellow text-ink shadow-hard-sm"
            : "border-transparent text-on-dark/75 hover:border-on-dark/25 hover:bg-on-dark/5 hover:text-on-dark",
        ].join(" ");
        const link = (
          <Link
            href={item.href}
            aria-current={isActive ? "page" : undefined}
            className={className}
          >
            <item.icon className="h-5 w-5 shrink-0" strokeWidth={2.5} aria-hidden="true" />
            {item.label}
          </Link>
        );

        return closeOnSelect ? (
          <SheetClose key={item.href} asChild>
            {link}
          </SheetClose>
        ) : (
          <Link
            key={item.href}
            href={item.href}
            aria-current={isActive ? "page" : undefined}
            className={className}
          >
            <item.icon className="h-5 w-5 shrink-0" strokeWidth={2.5} aria-hidden="true" />
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
