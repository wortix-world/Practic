import {Link, Outlet} from "react-router";

function AdminLayout() {
    return (
        <div className="min-h-screen bg-gray-100">
            <header className="bg-white p-4 shadow">
                <nav className="flex gap-4">
                    <Link to="/admin">Админ-панель</Link>
                    <Link to="/admin/products">Управление товарами</Link>
                    <Link to="/admin/categories">Категории</Link>
                </nav>
            </header>
            
            <main className="p-6">
                <Outlet />
            </main>
        </div>
    )           
}

export default AdminLayout;
