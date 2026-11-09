
import Link from "next/link";

type Props = {
    params: Promise<{ applicationId: string }>;
};

async function ApplicationReviewPage({ params }: Props) {
    const { applicationId } = await params;
    return (
        <section className="space-y-6">
            <Link
                href={`/dashboard/applications/${applicationId}`}
                className="label-mono text-cobalt underline decoration-2 underline-offset-4"
            >
                Back to application
            </Link>
            <div className="border-[3px] border-ink bg-card p-5 shadow-hard-sm sm:p-8">
                <p className="label-mono text-cobalt">Candidate application</p>
                <h1 className="display mt-2 text-4xl sm:text-5xl">Review application</h1>
                <p className="mt-4 text-muted-foreground">Application {applicationId}</p>
            </div>
        </section>
    );
}

export default ApplicationReviewPage;
