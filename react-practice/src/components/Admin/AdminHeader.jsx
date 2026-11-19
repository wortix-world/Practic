function AdminHeader({onMenuClick}) {
    return (
        <header className="sticky top-0 z-30 flex items-center justify-between border-b border-gray-200 bg-white px-4 py-3 sm:px-6">
            <div className="flex items-center gap-3">
                <button type="button"
                aria-label="Открыть меню"
                onClick={onMenuClick}
                className="rounded-lg border border-gray-200 px-3 py-2 md:hidden">
                    ☰
                </button>
                <h1 className="text-lg font-semibold "> Административная панель</h1>
                </div>

                <div className="flex-center gap-3">
                    <span className="hidden text-sm text-gray-600 sm:block">Администратор</span>
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-800 text-sm font-semibold text-white">
                        A
                    </div>
                </div>
        </header>
        
    );
}

export default AdminHeader;