import Link from "next/link";

type Props = {
    params: Promise<{
        jobId: string;
    }>;
};

async function EditJobPage({ params }: Props) {
    const { jobId } = await params;
    return (
        <section className="space-y-6">
            <Link href={`/dashboard/jobs/${jobId}`} className="label-mono text-cobalt underline decoration-2 underline-offset-4">
                Back to job
            </Link>
            <div className="border-[3px] border-ink bg-card p-5 shadow-hard-sm sm:p-8">
                <p className="label-mono text-cobalt">Job listing</p>
                <h1 className="display mt-2 text-4xl sm:text-5xl">Edit job {jobId}</h1>
                <p className="mt-4 text-muted-foreground">This is the job editing page.</p>
            </div>
        </section>
    );
}

export default EditJobPage