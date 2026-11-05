import { useEffect, useRef } from "react";
import PopularItem from "./PopularItem";

const items = [
  { id: "sport", title: "Спортивные мотоциклы", image: "/images/sport.jpg", href: "#" },
  { id: "cruiserandchopper", title: "Круизеры и чопперы", image: "/images/chopper.jpg", href: "#" },
  { id: "cross", title: "Кроссовые и эндуро", image: "/images/cross.jpg", href: "#" },
  {
    id: "travel",
    title: "Туристические мотоциклы",
    image: "/images/travel.jpg",
    href: "#",
  },
  { id: "naked", title: "Нейкеды и дорожные", image: "/images/naked.jpg", href: "#" },
  { id: "classic", title: "Классические мотоциклы", image: "/images/classic.jpg", href: "#" },
  { id: "electronics", title: "Электромотоциклы", image: "/images/electronics.jpg", href: "#" },
  { id: "scooters", title: "Городские скутеры", image: "/images/scooters.jpg", href: "#" },
];

function PopularItems() {
  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const isHoveredRef = useRef(false);
  const isFocusedRef = useRef(false);

  const moveCarousel = (direction) => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    const firstItem = track?.firstElementChild;

    if (!viewport || !track || !firstItem) return;

    const gap = Number.parseFloat(window.getComputedStyle(track).columnGap) || 0;
    const step = firstItem.getBoundingClientRect().width + gap;
    const maxScroll = viewport.scrollWidth - viewport.clientWidth;

    if (maxScroll <= 0) return;

    let nextPosition = viewport.scrollLeft + step * direction;

    if (nextPosition > maxScroll - 1) {
      nextPosition = 0;
    } else if (nextPosition < 0) {
      nextPosition = maxScroll;
    }

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    viewport.scrollTo({
      left: nextPosition,
      behavior: reducedMotion ? "auto" : "smooth",
    });
  };

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      if (!isHoveredRef.current && !isFocusedRef.current) {
        moveCarousel(1);
      }
    }, 4500);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <section className="popular-items">
      <div className="popular-items__inner">
        <div className="popular-items__header">
          <h2 className="popular-items__title">Популярные категории</h2>
          <div className="popular-items__controls">
            <button
              className="popular-items__arrow"
              type="button"
              aria-label="Предыдущие категории"
              onClick={() => moveCarousel(-1)}
            >
              ←
            </button>
            <button
              className="popular-items__arrow"
              type="button"
              aria-label="Следующие категории"
              onClick={() => moveCarousel(1)}
            >
              →
            </button>
          </div>
        </div>

        <div
          className="popular-items__viewport"
          ref={viewportRef}
          onMouseEnter={() => {
            isHoveredRef.current = true;
          }}
          onMouseLeave={() => {
            isHoveredRef.current = false;
          }}
          onFocusCapture={() => {
            isFocusedRef.current = true;
          }}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              isFocusedRef.current = false;
            }
          }}
        >
          <div className="popular-items__track" ref={trackRef}>
            {items.map((item) => (
              <PopularItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PopularItems;