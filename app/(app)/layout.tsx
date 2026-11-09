import NavbarHeader from "@/components/Navbar/NavbarHeader";

function AppLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen flex-col">
            <NavbarHeader />
            <main className="flex-1">{children}</main>
            {/* <SiteFooter /> */}
        </div>
    );
}

export default AppLayout;