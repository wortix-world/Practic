import HeroContent from "./HeroContent";
import HeroMedia from "./HeroMedia";

function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:py-20">
        <HeroContent
          label="Новое поступление · 2026"
          title="Мотоцикл, который ведёт вперёд"
          description="Спортбайки, круизеры, эндуро и туристические модели — проверенные мотоциклы с гарантией, честной историей и выгодным трейд-ином."
        />

        <HeroMedia
          image="/images/moto.jpg"
          productCount={9}
        />
      </div>
    </section>
  );
}

export default Hero;
