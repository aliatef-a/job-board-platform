import { AdminSidebar } from "@/components/Navbar/AdminSidebar";

function AdminLayout({ children }: { children: React.ReactNode }) {
  return <AdminSidebar>{children}</AdminSidebar>;
}

export default AdminLayout;