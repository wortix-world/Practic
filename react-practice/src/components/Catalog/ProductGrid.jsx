import ProductCard from "../Product/ProductCard";

function ProductGrid({ products }) {
    if(products.length === 0) {
        return <p className="text-gray-600">По вашему запросу ничего не найдено.</p>;
    }

    return(
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {products.map((product)=>(
                <ProductCard
                key={product.id}
                name={product.name}
                price={`${product.price.toLocaleString("ru-RU")} ₽`}
                image={product.image}
                href={`/products/${product.id}`}/>
            ))}
        </div>
    );
}

export default ProductGrid;