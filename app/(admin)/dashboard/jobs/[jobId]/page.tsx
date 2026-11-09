import Link from "next/link";

type Props = { params: Promise<{ jobId: string }> };

async function JobPage({ params }: Props) {
    const { jobId } = await params;
    return (
        <section className="space-y-6">
            <Link href="/dashboard/jobs" className="label-mono text-cobalt underline decoration-2 underline-offset-4">
                Back to jobs
            </Link>
            <div className="border-[3px] border-ink bg-card p-5 shadow-hard-sm sm:p-8">
                <p className="label-mono text-cobalt">Job listing</p>
                <h1 className="display mt-2 text-4xl sm:text-5xl">Job {jobId}</h1>
                <p className="mt-4 text-muted-foreground">This is the job page content.</p>
                <Link
                    href={`/dashboard/jobs/${jobId}/edit`}
                    className="mt-6 inline-flex min-h-11 items-center border-[3px] border-ink bg-yellow px-4 py-2 text-sm font-extrabold uppercase tracking-wide shadow-hard-sm"
                >
                    Edit job
                </Link>
            </div>
        </section>
    );
}

export default JobPage