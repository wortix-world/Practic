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
    <section className="px-6 py-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex items-center justify-between gap-4">
          <h2 className="m-0 text-3xl font-normal max-md:text-2xl">
            Популярные категории
          </h2>
          <div className="flex gap-2">
            <button
              className="grid size-10 cursor-pointer place-items-center rounded-full border border-neutral-200 bg-white text-xl text-inherit hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
              type="button"
              aria-label="Предыдущие категории"
              onClick={() => moveCarousel(-1)}
            >
              ←
            </button>
            <button
              className="grid size-10 cursor-pointer place-items-center rounded-full border border-neutral-200 bg-white text-xl text-inherit hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
              type="button"
              aria-label="Следующие категории"
              onClick={() => moveCarousel(1)}
            >
              →
            </button>
          </div>
        </div>

        <div
          className="snap-x snap-mandatory overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden motion-reduce:scroll-auto"
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
          <div className="flex gap-4" ref={trackRef}>
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