import Link from "next/link"
import { ArrowUpRight, Plus } from "lucide-react";

function DashboardJobs() {
    return (
        <section className="space-y-8">
            <header className="flex flex-wrap items-end justify-between gap-4 border-b-[3px] border-ink pb-6">
                <div>
                    <p className="label-mono text-cobalt">Workspace</p>
                    <h1 className="display mt-2 text-4xl sm:text-5xl">Jobs</h1>
                    <p className="mt-3 text-muted-foreground">Manage your job listings.</p>
                </div>
                <Link
                    href="/dashboard/jobs/new"
                    className="inline-flex min-h-11 items-center gap-2 border-[3px] border-ink bg-yellow px-4 py-2 text-sm font-extrabold uppercase tracking-wide shadow-hard-sm transition-transform hover:-translate-y-0.5"
                >
                    <Plus className="h-4 w-4" aria-hidden="true" />
                    New job
                </Link>
            </header>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {[1, 2, 3].map((jobId) => (
                    <Link
                        key={jobId}
                        href={`/dashboard/jobs/${jobId}`}
                        className="flex items-center justify-between gap-4 border-[3px] border-ink bg-card p-5 shadow-hard-sm transition-transform hover:-translate-y-1"
                    >
                        <div>
                            <p className="label-mono text-muted-foreground">Job listing</p>
                            <h2 className="mt-2 text-lg font-extrabold">Job {jobId}</h2>
                        </div>
                        <ArrowUpRight className="h-5 w-5 shrink-0" aria-hidden="true" />
                    </Link>
                ))}
            </div>
        </section>
    )
}

export default DashboardJobs