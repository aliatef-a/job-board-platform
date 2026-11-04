import Link from "next/link"

function DashboardJobs() {
    return (
        <div className="dashboard-jobs flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Dashboard Jobs</h1>
            <p>This is the dashboard jobs content.</p>
            <Link href="/dashboard/jobs/new" className="mt-4 text-blue-500 hover:underline">New Jobs</Link>
            <Link href="/dashboard/jobs/1" className="mt-4 text-blue-500 hover:underline">Go to Job 1</Link>
            <Link href="/dashboard/jobs/2" className="mt-4 text-blue-500 hover:underline">Go to Job 2</Link>
            <Link href="/dashboard/jobs/3" className="mt-4 text-blue-500 hover:underline">Go to Job 3</Link>
        </div>
    )
}

export default DashboardJobs