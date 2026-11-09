import { Suspense } from "react";
import { ExternalLink, Menu } from "lucide-react";
import type { ReactNode } from "react";
import Link from "next/link";

import { AdminNavLinks } from "@/components/Navbar/AdminNavLinks";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Logo } from "./Logo";

function Navigation({ mobile = false }: { mobile?: boolean }) {
  return (
    <div className="flex h-full flex-col overflow-y-auto bg-ink px-4 py-6 text-on-dark">
      <Logo inverted className="px-2" />

      <div className="mt-10">
        <p className="label-mono mb-3 px-3 text-yellow">Workspace</p>
        <Suspense
          fallback={
            <div aria-hidden="true" className="space-y-2 px-1">
              <div className="h-11 border-2 border-on-dark/10 bg-on-dark/5" />
              <div className="h-11 border-2 border-on-dark/10 bg-on-dark/5" />
              <div className="h-11 border-2 border-on-dark/10 bg-on-dark/5" />
            </div>
          }
        >
          <AdminNavLinks closeOnSelect={mobile} />
        </Suspense>
      </div>

      <div className="mt-auto space-y-5 pt-8">
        <div className="border border-on-dark/20 bg-on-dark/5 p-4">
          <p className="label-mono text-yellow">Job board operations</p>
          <p className="mt-2 text-sm leading-6 text-on-dark/70">
            Manage jobs and review candidate applications.
          </p>
        </div>
        <Link
          href="/"
          className="label-mono inline-flex items-center gap-2 px-2 text-on-dark/75 transition-colors hover:text-yellow"
        >
          <ExternalLink className="h-4 w-4" aria-hidden="true" />
          View public site
        </Link>
      </div>
    </div>
  );
}

export function AdminSidebar({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-paper lg:flex">
      <aside className="hidden w-64 shrink-0 border-r-[3px] border-ink lg:sticky lg:top-0 lg:block lg:h-screen">
        <Navigation />
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-30 flex h-16 items-center gap-3 border-b-[3px] border-ink bg-paper px-4 sm:px-6 lg:px-8">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="lg:hidden"
                aria-label="Open admin navigation"
              >
                <Menu aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="w-72 max-w-[85vw] border-0 bg-ink p-0 text-on-dark"
            >
              <SheetTitle className="sr-only">Admin navigation</SheetTitle>
              <Navigation mobile />
            </SheetContent>
          </Sheet>

          <div className="min-w-0">
            <p className="label-mono text-muted-foreground">Back office</p>
            <p className="truncate font-extrabold">Admin workspace</p>
          </div>

          <div className="ml-auto flex items-center gap-3 border-l-[3px] border-ink pl-3 sm:pl-4">
            <span
              className="grid h-9 w-9 shrink-0 place-items-center border-2 border-ink bg-yellow font-mono text-xs font-bold"
              aria-hidden="true"
            >
              AD
            </span>
            <p className="hidden text-sm font-bold sm:block">Administrator</p>
          </div>
        </header>

        <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
          {children}
        </main>
      </div>
    </div>
  );
}
