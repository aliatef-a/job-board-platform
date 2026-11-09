import Link from "next/link";

type Props = {
    params: Promise<{
        applicationId: string;
    }>;
};

async function ApplicationDetailsPage({ params }: Props) {
    const { applicationId } = await params;
    return (
        <section className="space-y-6">
            <Link href="/dashboard/applications" className="label-mono text-cobalt underline decoration-2 underline-offset-4">
                Back to applications
            </Link>
            <div className="border-[3px] border-ink bg-card p-5 shadow-hard-sm sm:p-8">
                <p className="label-mono text-cobalt">Candidate application</p>
                <h1 className="display mt-2 text-4xl sm:text-5xl">Application {applicationId}</h1>
                <p className="mt-4 text-muted-foreground">This is the application details page.</p>
                <Link
                    href={`/dashboard/applications/${applicationId}/review`}
                    className="mt-6 inline-flex min-h-11 items-center border-[3px] border-ink bg-yellow px-4 py-2 text-sm font-extrabold uppercase tracking-wide shadow-hard-sm"
                >
                    Review application
                </Link>
            </div>
        </section>
    );
}

export default ApplicationDetailsPage;