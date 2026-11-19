function PopularItem({ item }) {
  return (
    <a
      className="block basis-1/4 shrink-0 snap-start overflow-hidden rounded-xl border border-neutral-200 text-inherit no-underline max-md:basis-1/2"
      href={item.href}
    >
      <img
        className="block aspect-5/4 w-full object-cover"
        src={item.image}
        alt={item.title}
      />
      <span className="flex items-center justify-between p-3">
        <span>{item.title}</span>
        <span aria-hidden="true">→</span>
      </span>
    </a>
  );
}

export default PopularItem;