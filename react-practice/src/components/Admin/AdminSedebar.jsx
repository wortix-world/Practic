import {NavLink} from "react-router";

const links =[
    {to: "/admin", label:"Панель", end: true},
    {to: "/admin/products", label:"Товары"},
    {to: "/admin/categories", label:"Категории"},
];

function AdminSidebar({open, onClose}) {
    const linkClass = ({isActive}) =>
        `block rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
            isActive 
            ? "bg-ememrald-800 text-black"
            : "text-gray-700 hover:bg-gray-100"
    }`;

    return (
        <>
        {open && (
            <button
                type="button"
                aria-label="Закрыть меню"
                onClick={onClose}
                className="fixed inset-0 z-40 bg-black/40  md:hidden"
            />
        )}

        <aside
            className={`
                fixed inset-y-0 left-0 z-50 flex w-64 flex-col
                border-r border-gray-200 bg-white p-4 
                transition-transform duration-300
                ${open ? "translate-x-0" : "-translate-x-full"}
                md:static md:z-auto md:translate-x-0
                `}
        >
            <div className="mb-6 flex items-center justify-between px-2">
                <span className="text-lg font-semibold">Мотосалон</span>
                <button type="button"
                    aria-label="Закрыть меню"
                    onClick={onClose}
                    className="text-2xl md:hidden"                
                >
                    x
                </button>
            </div>

            <nav className="flex flex-col gap-1">
                {links.map((link)=>(
                    <NavLink key={link.to}
                    to={link.to}
                    end={link.end}
                    onClick={onClose}
                    className={linkClass}>
                        {link.label}
                    </NavLink>
                ))}
            </nav>

            <NavLink to="/"
            className="mt-auto rounded-lg border border-gray-200 px-4 py-2 text-center text-sm text-gray-700 hover:bg-gray-100">
                ← На сайт
            </NavLink>
        </aside>
        </>
    );
}

export default AdminSidebar;