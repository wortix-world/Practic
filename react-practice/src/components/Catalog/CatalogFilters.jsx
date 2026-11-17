function CatalogFilters({
  categories,
  category,
  onCategoryChange,
  search,
  onSearchChange,
  minPrice,
  onMinPriceChange,
  maxPrice,
  onMaxPriceChange,
  open, 
  onClose,

}) {
  return (
    <>
    {open && (
      <button
      type="button"
      aria-label="Закрыть фильтры"
      onClick={onClose}
      className="fixed inset-0 z-40 bg-black/40 md:hidden"
      />
    )}

    <aside
      className={`
      space-y-5 bg-white p-5 
      fixed inset-x-0 bottom-0 z-50 max-h-[85vh] overflow-y-auto
      rounded-t-2xl border-t border-gray-200 shadow-xl
      transition-transform duration-300 
      ${open ? "translate-y-0" : "translate-y-full"}
      md:static md:z-auto md:max-h-none md:translate-y-0 
      md:rounded-xl md:border md:shadow-none 
      md:sticky md:top-4
      `}
    >
      <div className="flex items-center justify-between md:hidden">
        <h2 className="text-lg font-semibold">Фильтры</h2>
        <button type="button" onClick={onClose} aria-label="Закрыть" className="text-2xl">
          x
        </button>
      </div>


        <div>
        <label
          htmlFor="catalog-search"
          className="mb-2 block text-sm font-medium"
        >
          Поиск
        </label>
        <input
          id="catalog-search"
          type="search"
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Название мотоцикла"
          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
        />
      </div>

      <div>
        <label
          htmlFor="catalog-category"
          className="mb-2 block text-sm font-medium"
        >
          Категория
        </label>
        <select
          id="catalog-category"
          value={category}
          onChange={(event) => onCategoryChange(event.target.value)}
          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
        >
          <option value="Все">Все категории</option>
          {categories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="catalog-min-price"
          className="mb-2 block text-sm font-medium"
        >
          Цена от ($)
        </label>
        <input
          id="catalog-min-price"
          type="number"
          min="0"
          value={minPrice}
          onChange={(event) => onMinPriceChange(event.target.value)}
          placeholder="Минимальная цена"
          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
        />
      </div>

      <div>
        <label
          htmlFor="catalog-max-price"
          className="mb-2 block text-sm font-medium"
        >
          Цена до ($)
        </label>
        <input
          id="catalog-max-price"
          type="number"
          min="0"
          value={maxPrice}
          onChange={(event) => onMaxPriceChange(event.target.value)}
          placeholder="Максимальная цена"
          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
        />
      </div>

          <button type="button" onClick={onClose}
          className="w-full rounded-lg bg-emerald-800 py-2 text-sm font-medium text-white md:hidden">
            Показать результаты 
          </button>
    </aside>
   </>
  );
}

export default CatalogFilters;