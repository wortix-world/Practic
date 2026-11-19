import { Outlet } from "react-router";

function AdminWorkSpace() {
    return (
        <main className="flex-1 p-4 sm:p-6">
            <div className="min-h-[60vh] rounded-xl border border-gray-200 bg-white p-4 sm:p-6">
                <Outlet/>
            </div>
        </main>
    );
}

export default AdminWorkSpace;