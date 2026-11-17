import { useEffect, useMemo, useState } from "react";
import CatalogFilters from "../components/Catalog/CatalogFilters";
import ProductGrid from "../components/Catalog/ProductGrid";
import { getProducts } from "../api/products";
import ProductSort from "../components/Catalog/ProductSort";

function CatalogPage() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("Все");
  const [search, setSearch] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice,setMaxPrice] = useState("");
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
      const matchesMinPrice =
        minPrice === "" || product.price >= Number(minPrice);
      const matchesMaxPrice =
        maxPrice === "" || product.price <= Number(maxPrice);
      const matchesSearch = product.name.toLowerCase().includes(query);

      return (
        matchesCategory &&
        matchesSearch &&
        matchesMinPrice &&
        matchesMaxPrice
      );
    });

    if (sort === "price-asc") {
      result.sort((a, b) => a.price - b.price);
    } else if (sort === "price-desc") {
      result.sort((a, b) => b.price - a.price);
    } else if (sort === "name-asc") {
      result.sort((a, b) => a.name.localeCompare(b.name, "ru"));
    } else if (sort === "name-desc") {
      result.sort((a, b) => b.name.localeCompare(a.name, "ru"));
    }

    return result;
  }, [products, category, search, minPrice, maxPrice, sort]);

  return (
    <section className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-10">
      <h1 className="mb-2 text-2xl font-semibold sm:text-3xl">Каталог мотоциклов</h1>

      {loading ? (
        <p>Загрузка товаров...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <>
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-gray-600">
              Найдено товаров:{" "}
              <span className="font-semibold text-gray-950">
                {visibleProducts.length}
              </span>
            </p>
          </div>
          <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-[240px_1fr]">
            <CatalogFilters
              minPrice={minPrice}
              onMinPriceChange={setMinPrice}
              maxPrice={maxPrice}
              onMaxPriceChange={setMaxPrice}
              categories={categories}
              category={category}
              onCategoryChange={setCategory}
              search={search}
              onSearchChange={setSearch}
            />

            <div className="space-y-5">
              <ProductSort sort={sort} onSortChange={setSort} />
              <ProductGrid products={visibleProducts} />
            </div>
          </div>
        </>
      )}
    </section>
  );
}

export default CatalogPage;
