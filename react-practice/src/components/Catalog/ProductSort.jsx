function ProductSort({ sort, onSortChange }) {
  return (
    <div className="mb-5 flex flex-wrap items-center justify-end gap-3">
      <label htmlFor="catalog-sort" className="text-sm font-medium">
        Сортировка
      </label>

      <select
        id="catalog-sort"
        value={sort}
        onChange={(event) => onSortChange(event.target.value)}
        className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm focus:border-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-800/20"
      >
        <option value="default">По умолчанию</option>
        <option value="price-asc">Сначала дешевле</option>
        <option value="price-desc">Сначала дороже</option>
        <option value="name-asc">Название: А–Я</option>
        <option value="name-desc">Название: Я–А</option>
      </select>
    </div>
  );
}

export default ProductSort;