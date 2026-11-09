import Link from "next/link"
import { ArrowUpRight, Briefcase, FileStack } from "lucide-react";

function DashboardPage() {
    return (
        <section className="space-y-8">
            <header className="border-b-[3px] border-ink pb-6">
                <p className="label-mono text-cobalt">Overview</p>
                <h1 className="display mt-2 text-4xl sm:text-5xl">Dashboard</h1>
                <p className="mt-3 max-w-2xl text-muted-foreground">
                    Manage job listings and keep up with candidate applications.
                </p>
            </header>

            <div className="grid gap-4 sm:grid-cols-2">
                <Link
                    href="/dashboard/jobs"
                    className="group border-[3px] border-ink bg-card p-5 shadow-hard-sm transition-transform hover:-translate-y-1 sm:p-6"
                >
                    <Briefcase className="h-6 w-6" aria-hidden="true" />
                    <div className="mt-6 flex items-end justify-between gap-4">
                        <div>
                            <h2 className="text-xl font-extrabold">Jobs</h2>
                            <p className="mt-1 text-sm text-muted-foreground">Manage job listings</p>
                        </div>
                        <ArrowUpRight className="h-5 w-5 shrink-0" aria-hidden="true" />
                    </div>
                </Link>
                <Link
                    href="/dashboard/applications"
                    className="group border-[3px] border-ink bg-card p-5 shadow-hard-sm transition-transform hover:-translate-y-1 sm:p-6"
                >
                    <FileStack className="h-6 w-6" aria-hidden="true" />
                    <div className="mt-6 flex items-end justify-between gap-4">
                        <div>
                            <h2 className="text-xl font-extrabold">Applications</h2>
                            <p className="mt-1 text-sm text-muted-foreground">Review candidate applications</p>
                        </div>
                        <ArrowUpRight className="h-5 w-5 shrink-0" aria-hidden="true" />
                    </div>
                </Link>
            </div>
        </section>
    )
}   

export default DashboardPage