import Brand from "../Header/Brand"; 
import NavItem from "../Header/NavItem";
function Footer() {
    return(
        <footer>
        <section className="bg-white px-6 py-10">
            <div className="mx-auto grid max-w-6xl gap-6 rounded-xl border border-stone-200 bg-white p-6 sm:grid-cols-3">
                <div className="flex gap-3">
                    <span aria-hidden="true">🚚</span>
                    <div>
                        <h2 className="font-medium">Доставка 1-3 дня</h2>
                        <p className="mt-1 text-sm text-stone-500">По всей России, бесплатно от 5 000 ₽</p>
                    </div>
                </div>
                <div className="flex gap-3">
                    <span aria-hidden="true">✓</span>
                    <div>
                        <h2 className="font-medium">Гарантия качества</h2>
                        <p className="mt-1 text-sm text-stone-500">Проверяем каждую партию товара</p>
                    </div>
                </div>

                <div className="flex gap-3">
                    <span aria-hidden="true">↶</span>
                    <div>
                        <h2 className="font-medium">Возврат 30 дней</h2>
                        <p className="mt-1 text-sm text-stone-500">Без вопросов и лишних формальностей</p>
                    </div>
                </div>
            </div>
        </section>

        <div className="border-t border-stone-200 bg-white px-6 py-12">
            <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
                <div>
                    <Brand name="Мотосалон" />
                   
                    <p className="mt-4 max-w-xs text-sm leading-6 text-stone-500">
                        Учебный интернет магазин: витрина, корзина и админ-панель с CRUD на React.
                    </p>
                </div>

                <div>
                    <h2 className="mb-4 text-xs tracking-widest text-stone-500">КАТАЛОГ</h2>
                    <ul className="space-y-3 text-sm text-stone-500">
                            <li><NavItem path={"/products"} label="Все Товары" /></li>
                            <li><NavItem path={"/new"} label="Новинки" /></li>
                            <li><NavItem path={"/sales"} label="Скидки" /></li>
                    </ul>
                </div>

                <div>
                    <h2 className="mb-4 text-xs tracking-widest text-stone-500">ПОКУПАТЕЛЯМ</h2>
                        <ul className="space-y-3 text-sm text-stone-500">
                            <li><NavItem path={"/cart"} label="Корзина" /></li>
                            <li><NavItem path={"/login"} label="Вход" /></li>
                            <li><NavItem path={"/register"} label="Регистрация" /></li>
                        </ul>
                </div>

                <div>
                    <h2 className="mb-4 text-xs tracking-widest text-stone-500">Магазин</h2>
                        <ul className="space-y-3 text-sm text-stone-500">
                            <li><NavItem path={"/admin"} label="Админ-панель" /></li>
                            <li><NavItem path={"/admin/products"} label="Управление товарами" /></li>
                            <li><NavItem path={"/admin/categories"} label="Категории" /></li>
                        </ul>
                </div>
            </div>
        </div>

        <div className="border-t border-stone-200 px-6 py-5">
            <div className="mx-auto flex max-w-6xl flex-col gap-2 text-sm text-stone-500 sm:flex-row sm:justify-between">
                <p>© 2026 Витрина. Учебный проект.</p>
                <p>Дизайн-система: React, Tailwind CSS, React Router</p>
            </div>
        </div>
        </footer>
        
    );
}

export default Footer;