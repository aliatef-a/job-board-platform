import Link from "next/link"
import { Logo } from "./Logo"

function NavbarFooter() {
    return (
        <footer className="border-t-[3px] border-ink bg-ink text-on-dark">
            <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-[2fr_1fr_1fr_1fr] md:px-8">
                <div>
                    <Logo inverted />
                    <p className="mt-4 max-w-xs font-medium opacity-80">
                        The job board for people who make things. 2,876 live roles from 612 companies that
                        actually reply.
                    </p>
                </div>
                {(
                    [
                        {
                            h: "Candidates",
                            l: [
                                ["/jobs", "Browse jobs"],
                                ["/candidate", "Dashboard"],
                                ["/companies", "Companies"],
                            ],
                        },
                        {
                            h: "Employers",
                            l: [
                                ["/employer", "Employer hub"],
                                ["/employer", "Post a job"],
                                ["/dashboard", "Back office"],
                            ],
                        },
                        {
                            h: "Studio",
                            l: [
                                ["/", "About"],
                                ["/", "Press kit"],
                                ["/", "Careers"],
                            ],
                        },
                    ] as const
                ).map((c) => (
                    <div key={c.h}>
                        <p className="label-mono text-yellow">{c.h}</p>
                        <ul className="mt-3 space-y-2 font-bold">
                            {c.l.map(([to, label]) => (
                                <li key={label}>
                                    <Link href={to} className="hover:text-yellow hover:underline">
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <div className="overflow-hidden border-t-[3px] border-on-dark/20">
                <p className="display translate-y-[18%] whitespace-nowrap px-4 text-[18vw] leading-none text-stroke opacity-30 [-webkit-text-stroke-color:var(--on-dark)]">
                    Workblok
                </p>
            </div>
        </footer>
    )
}

export default NavbarFooter