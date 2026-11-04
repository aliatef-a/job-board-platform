import Link from "next/link";

type props = {
    params: Promise<{
        applicationId: string;
    }>;
};

async function ApplicationDetailsPage({ params }: props) {
    const { applicationId } = await params;
    console.log(applicationId);
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1>Application Details Page</h1>
            <p>This is the application details page content.</p>
            <p>{applicationId}</p>
            <Link href={`/dashboard/applications/${applicationId}/review`} className="mt-4 text-blue-500 hover:underline">
                Application Review
            </Link>
        </div>
    );
}

export default ApplicationDetailsPage;