import { useState } from "react";
import AdminHeader from "../components/Admin/AdminHeader";
import AdminSidebar from "../components/Admin/AdminSedebar";
import AdminWorkSpace from "../components/Admin/AdminWorkspace";

function AdminLayout() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex min-h-screen bg-gray-100 text-gray-950">
            <AdminSidebar
                open={sidebarOpen}
                onClose={() => setSidebarOpen(false)}
            />

            <div className="flex-min-w-0 flex-1 flex-col">
                <AdminHeader onMenuClick={()=> setSidebarOpen(true)} />
                    <AdminWorkSpace/>
            </div>
        </div>
    );
}

export default AdminLayout;