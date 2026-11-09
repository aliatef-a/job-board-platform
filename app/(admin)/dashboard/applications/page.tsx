import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

function ApplicationsPage() {
    return (
        <section className="space-y-8">
            <header className="border-b-[3px] border-ink pb-6">
                <p className="label-mono text-cobalt">Workspace</p>
                <h1 className="display mt-2 text-4xl sm:text-5xl">Applications</h1>
                <p className="mt-3 text-muted-foreground">Review candidate applications.</p>
            </header>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {[1, 2, 3].map((applicationId) => (
                    <Link
                        key={applicationId}
                        href={`/dashboard/applications/${applicationId}`}
                        className="flex items-center justify-between gap-4 border-[3px] border-ink bg-card p-5 shadow-hard-sm transition-transform hover:-translate-y-1"
                    >
                        <div>
                            <p className="label-mono text-muted-foreground">Candidate application</p>
                            <h2 className="mt-2 text-lg font-extrabold">Application {applicationId}</h2>
                        </div>
                        <ArrowUpRight className="h-5 w-5 shrink-0" aria-hidden="true" />
                    </Link>
                ))}
            </div>
        </section>
    );
}

export default ApplicationsPage