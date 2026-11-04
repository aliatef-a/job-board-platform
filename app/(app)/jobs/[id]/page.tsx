
type JobDetailsPageProps = {
    params: Promise<{ id: string; }>;
};

async function JobDetailsPage({ params }: JobDetailsPageProps) {
    const { id } = await params;
    console.log(id);
    return (
        <div>
            <h1>Job Details Page</h1>
            <p>This is the job details page content.</p>
        </div>
    );
}
export default JobDetailsPage;