import { useMemo, useState } from "react";
import CatalogFilters from "../components/Catalog/CatalogFilters";
import ProductGrid from "../components/Catalog/ProductGrid";

const products = [
    {
    id: 1,
    name: "Спортивный мотоцикл",
    category: "Спортбайки",
    price: 899000,
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8XCMAGUYPXPWaqoZ16Xmd__IV1sSNJ4kU6jtptc0nCw&s=10",
  },
  {
    id: 2,
    name: "Городской мотоцикл",
    category: "Городские",
    price: 649000,
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_gxlSQoYFdgmJ8EsxFmEm22UwkEeOtdy6OxPk1VxE_A&s=10",
  },
  {
    id: 3,
    name: "Спортивный мотоцикл",
    category: "Спортбайки",
    price: 1029000,
    image:"https://synergosmoto.com/uploaded/Sw9suN7Yg1.jpg",
  },
  {
    id: 4,
    name: "Спортивный мотоцикл",
    category: "Спортбайки",
    price: 785000,
    image:"https://bvdshop.ru/assets/images/products/42127/rejting-enduro-motociklov-3.1739802419.jpg.535x803r.webp",
  },

];

const categories = [...new Set(products.map((product) => product.category))];

function CatalogPage() {
  const [category, setCategory] = useState("Все");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("default");

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
  }, [category, search, sort]);

  return (
    <section className="mx-auto max-w-6xl px-6 py-10">
        <h1 className="mb-2 text-3xl font-semibold">Каталог мотоциклов</h1>
        <p className="mb-8 text-sm text-gray-500">Найдено товаров: {visibleProducts.length}</p>

        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-[240px_1fr]">
            <CatalogFilters
            categories={categories}
            category={category}
            onCategoryChange={setCategory}
            search={search}
            onSearchChange={setSearch}
            sort={sort}
            onSortChange={setSort}/>

            <ProductGrid products={visibleProducts} />
        </div>
    </section>
  );
}

export default CatalogPage;
