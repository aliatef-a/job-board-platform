
function NewJobPage() {
    return (
        <section className="space-y-6">
            <header className="border-b-[3px] border-ink pb-6">
                <p className="label-mono text-cobalt">Jobs</p>
                <h1 className="display mt-2 text-4xl sm:text-5xl">New job</h1>
            </header>
            <div className="border-[3px] border-ink bg-card p-5 shadow-hard-sm sm:p-6">
                <p className="text-muted-foreground">New job listing</p>
            </div>
        </section>
    );
}

export default NewJobPage