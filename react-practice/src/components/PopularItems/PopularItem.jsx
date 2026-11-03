function PopularItem({ item }) {
  return (
    <a className="popular-item" href={item.href}>
      <img className="popular-item__image" src={item.image} alt={item.title} />
      <span className="popular-item__footer">
        <span>{item.title}</span>
        <span aria-hidden="true">→</span>
      </span>
    </a>
  );
}

export default PopularItem;