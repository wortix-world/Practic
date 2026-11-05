function ProductCard({ name, price, image, href }) {
  return (
    <a
      href={href}
      className="group block overflow-hidden rounded-xl border border-gray-200 text-gray-950"
    >
      <div className="overflow-hidden">
        <img
          src={image}
          alt={name}
          className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        
      </div>

      <div className="flex-1 justify-center p-4 ">
        <h3 className="font-medium">{name}</h3>
        <p className="mt-2 font-semibold">{price}</p>
         <button
            type="button"
            className="flex-1 m-3 w-29 mr-4 rounded-lg bg-emerald-900 px-3 py-2 text-sm text-white hover:bg-emerald-800"
          >
            Подробнее
          </button>

          <button
            type="button"
            className="flex-1 w-29 rounded-lg bg-white px-3 py-2 text-sm text-gray-900 hover:bg-gray-200 border border-gray-300"
          >
             В корзину
          </button>
      </div>

    </a>
    
  );
}

export default ProductCard;