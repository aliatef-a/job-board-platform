import Link from "next/link";

type props = { params: Promise<{ jobId: string }> };

async function JobPage({ params }: props) {
    const { jobId } = await params;
    console.log(jobId);
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1>Job Page</h1>
            <p>This is the job page content.</p>
            <p>{jobId}</p>
            <Link href={`/dashboard/jobs/${jobId}/edit`} className="mt-4 text-blue-500 hover:underline">
                Edit Job {jobId}
            </Link>
        </div>
    );
}

export default JobPage