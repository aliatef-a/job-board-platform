import Link from "next/link";

type props = {
    params: Promise<{
        jobId: string;
    }>;
};

async function EditJobPage({ params }: props) {
    const { jobId } = await params;
    console.log(jobId);
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1>Edit Job Page</h1>
            <p>This is the edit job page content.</p>
            <p>{jobId}</p>
            <Link href={`/dashboard/jobs/${jobId}`} className="mt-4 text-blue-500 hover:underline">
                Back to Job {jobId}
            </Link>
        </div>
    );
}

export default EditJobPage