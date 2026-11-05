import ProductCard from "../Product/ProductCard";


const products = [
    {id: 1, name: "Спортивный мотоцикл", price: "8.990$", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8XCMAGUYPXPWaqoZ16Xmd__IV1sSNJ4kU6jtptc0nCw&s=10", href: "#"},
    {id: 2, name: "Мотоцикл городской", price: "6.490$", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_gxlSQoYFdgmJ8EsxFmEm22UwkEeOtdy6OxPk1VxE_A&s=10", href: "#"},
    {id: 3, name: "Туристический мотоцикл", price: "10.290$", image: "https://synergosmoto.com/uploaded/Sw9suN7Yg1.jpg"}, 
    {id: 4, name: "Эндуро мотоцикл", price: "7.850$", image: "https://bvdshop.ru/assets/images/products/42127/rejting-enduro-motociklov-3.1739802419.jpg.535x803r.webp"},
];

function PopularProducts() {
    return (
        <section className="px-6 py-12">
            <div
                className="mx-auto max-w-7xl">
                    <h2 className="mb-6 text-3xl font-semibold">
                        Популярные товары
                    </h2>
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {products.map((product) => (
                            <ProductCard
                                key={product.id}
                                name={product.name}
                                price={product.price}
                                image={product.image}
                                href={product.href}
                            />
                        ))}
                    </div>
                </div>
            
        </section>
    );
}

export default PopularProducts;