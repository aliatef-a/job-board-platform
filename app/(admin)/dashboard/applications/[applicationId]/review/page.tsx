
type props = {
    params: Promise<{ applicationId: string }>;
};

async function ApplicationReviewPage({ params }: props) {
    const { applicationId } = await params;
    console.log(applicationId);
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1>Application Review Page</h1>
            <p>This is the application review page content.</p>
            <p>{applicationId}</p>
        </div>
    );
}

export default ApplicationReviewPage;
