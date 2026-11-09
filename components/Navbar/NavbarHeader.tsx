import Link from "next/link";
import { Button } from "../ui/button";
import { Logo } from "./Logo";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";
import { Menu } from "lucide-react";

function NavbarHeader() {
    const nav = [
        { to: "/", label: "Home" },
        { to: "/jobs", label: "Find jobs" },
    ] as const;

    const linkCls =
        "px-3 py-2 text-sm font-extrabold uppercase tracking-wide border-[3px] border-transparent hover:border-ink hover:bg-yellow transition-colors";
    const activeCls = "border-ink bg-ink text-on-dark hover:bg-ink";
    return (
        <header className="sticky top-0 z-40 border-b-[3px] border-ink bg-paper">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 md:px-8">
                <Logo />
                <nav className="hidden items-center gap-1 lg:flex">
                    {nav.map((n) => (
                        <Link key={n.to} href={n.to} className={linkCls}>
                            {n.label}
                        </Link>
                    ))}
                </nav>
                {/* <div className="hidden items-center gap-3 lg:flex">
                    <Link
                        href="/admin"
                        className="label-mono underline decoration-2 underline-offset-4 hover:text-cobalt"
                    >
                        Admin ↗
                    </Link>
                    <Button variant="yellow" asChild>
                        <Link href="/employer">
                            Post a job
                        </Link>
                    </Button>
                </div> */}
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="outline" size="icon" className="lg:hidden" aria-label="Open menu">
                            <Menu strokeWidth={3} />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-[85vw] max-w-sm bg-yellow">
                        <SheetTitle className="sr-only">Menu</SheetTitle>
                        <div className="mt-10 flex flex-col gap-3">
                            {nav.map((n) => (
                                <Link
                                    key={n.to}
                                    href={n.to}
                                    className="display border-[3px] border-ink bg-card px-4 py-4 text-3xl shadow-hard-sm"
                                >
                                    {n.label}
                                </Link>
                            ))}
                            {/* <Link
                                href="/admin"
                                className="display border-[3px] border-ink bg-ink px-4 py-4 text-3xl text-on-dark"
                            >
                                Admin
                            </Link> */}
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    )
}

export default NavbarHeader