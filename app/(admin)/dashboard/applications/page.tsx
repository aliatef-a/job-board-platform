import Link from "next/link";

function ApplicationsPage() {
    return (
        <div>
            <h1>Applications Page</h1>
            <Link href="/dashboard/applications/1" className="mt-4 text-blue-500 hover:underline">Go to Applications 1</Link>
            <Link href="/dashboard/applications/2" className="mt-4 text-blue-500 hover:underline">Go to Applications 2</Link>
            <Link href="/dashboard/applications/3" className="mt-4 text-blue-500 hover:underline">Go to Applications 3</Link>
        </div>
    );
}

export default ApplicationsPage