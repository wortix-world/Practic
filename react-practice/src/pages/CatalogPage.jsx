import { useEffect, useMemo, useState } from "react";
import CatalogFilters from "../components/Catalog/CatalogFilters";
import ProductGrid from "../components/Catalog/ProductGrid";
import { getProducts } from "../api/products";

function CatalogPage() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("Все");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("default");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getProducts()
      .then(setProducts)
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, []);

  const categories = [...new Set(products.map((product) => product.category))];

  const visibleProducts = useMemo(() => {
    const query = search.trim().toLowerCase();

    const result = products.filter((product) => {
      const matchesCategory =
        category === "Все" || product.category === category;
      const matchesSearch = product.name.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });

    if (sort === "price-asc") {
      result.sort((a, b) => a.price - b.price);
    } else if (sort === "price-desc") {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [products, category, search, sort]);

  return (
    <section className="mx-auto max-w-6xl px-6 py-10">
      <h1 className="mb-2 text-3xl font-semibold">Каталог мотоциклов</h1>

      {loading ? (
        <p>Загрузка товаров...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <>
          <p className="mb-8 text-sm text-gray-500">
            Найдено товаров: {visibleProducts.length}
          </p>

          <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-[240px_1fr]">
            <CatalogFilters
              categories={categories}
              category={category}
              onCategoryChange={setCategory}
              search={search}
              onSearchChange={setSearch}
              sort={sort}
              onSortChange={setSort}
            />

            <ProductGrid products={visibleProducts} />
          </div>
        </>
      )}
    </section>
  );
}

export default CatalogPage;
