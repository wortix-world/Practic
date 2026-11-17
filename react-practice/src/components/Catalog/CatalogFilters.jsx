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
}) {
  return (
    <aside className="space-y-5 rounded-xl border border-gray-200 bg-white p-5">
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
    </aside>
  );
}

export default CatalogFilters;