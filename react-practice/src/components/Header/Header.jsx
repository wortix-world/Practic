import { useState } from "react";
import { Link } from "react-router";
import Brand from "./Brand";
import Navigation from "./Navigation";
import HeaderActions from "./HeaderActions";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <div className="flex items-center gap-8">
          <Brand name="МотоСалон" />
          <div className="hidden md:block">
            <Navigation />
          </div>
        </div>

        <div className="hidden md:block">
          <HeaderActions />
        </div>

        <button
          type="button"
          className="rounded-lg border border-gray-200 px-3 py-2 md:hidden"
          aria-label="Открыть меню"
          onClick={() => setMenuOpen(true)}
        >
          ☰
        </button>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <button
            type="button"
            className="absolute inset-0 h-full w-full bg-black/40"
            aria-label="Закрыть меню"
            onClick={() => setMenuOpen(false)}
          />

          <aside className="absolute right-0 top-0 h-full w-4/5 max-w-sm bg-white p-6 shadow-xl">
            <div className="mb-8 flex items-center justify-between">
              <Brand name="МотоСалон" />
              <button
                type="button"
                aria-label="Закрыть меню"
                className="text-2xl"
                onClick={() => setMenuOpen(false)}
              >
                ×
              </button>
            </div>

            <input
              type="search"
              placeholder="Поиск мотоциклов"
              className="mb-8 w-full rounded-lg border border-gray-200 px-4 py-2 text-sm"
            />

            <nav className="flex flex-col gap-6">
              <Link to="/" onClick={() => setMenuOpen(false)}>
                Главная
              </Link>
              <Link to="/motorcycles" onClick={() => setMenuOpen(false)}>
                Мотоциклы
              </Link>
            </nav>
          </aside>
        </div>
      )}
    </header>
  );
}

export default Header;