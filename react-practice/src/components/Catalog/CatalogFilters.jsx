function CatalogFilters({
    categories,
    category,
    onCategoryChange,
    search,
    onSearchChange,
    sort,
    onSortChange,
}) {
    return(
        <aside className="space-y-5 rounded-xl border border-gray-200 bg-white p-5">
            <div>
                <label htmlFor="catalog-search" className="mb-2 block text-sm font-medium">Поиск</label>
                <input id="catalog-search" type="search" value={search} onChange={(event) => onSearchChange(event.target.value)} placeholder="Название мотоцикла" className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm" 
                />
            </div>

            <div>
                <label htmlFor="catalog-category" className="mb-2 block text-sm font-medium">
                    Категория
                </label>    
                <select id="catalog-category" value={category} onChange={(event)=> onCategoryChange(event.target.value)} className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm">
                    <option value="Все">Все категории</option>
                    {categories.map((item)=>(
                        <option key={item} value={item}>{item}</option>
                    ))}
                </select>
            </div>

            <div>
                <label htmlFor="catalog-sort" className="mb-2 block text-sm font-medium">Сортировка</label>
                 <select id="catalog-sort" value={sort} onChange={(event)=> onSortChange(event.target.value)} className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm ">
                        <option value="default">Cначала популярные</option>
                        <option value="price-asc">Cначала дешевле</option>
                        <option value="price-desc">Cначала дороже</option>
                </select>
            </div>
        </aside>
    );
}

export default CatalogFilters;