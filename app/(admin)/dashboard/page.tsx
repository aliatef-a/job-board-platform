import Link from "next/link"

function DashboardPage() {
    return (
        <div className="dashboard-page flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-4xl font-bold mb-4">Dashboard</h1>
            <p className="text-xl text-gray-600">This is the dashboard page content.</p>
            <Link href="/dashboard/jobs" className="mt-4 text-blue-500 hover:underline">Go to Jobs</Link>
            <Link href="/dashboard/applications" className="mt-4 text-blue-500 hover:underline">Go to Applications</Link>
        </div>
    )
}   

export default DashboardPage