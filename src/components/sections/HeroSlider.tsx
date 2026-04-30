import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../common/Button";
import { heroSlides } from "../../data/content";
import { useNavigate } from "react-router-dom";

export const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length,
    );
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: "-100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${heroSlides[currentIndex].image})`,
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(26,15,38,0.78) 0%, rgba(59,31,79,0.65) 50%, rgba(190,52,85,0.55) 100%)",
            }}
          />
          <div className="absolute top-8 left-8 w-24 h-24 border-l-2 border-t-2 border-secondary/60 hidden md:block" />
          <div className="absolute bottom-8 right-8 w-24 h-24 border-r-2 border-b-2 border-secondary/60 hidden md:block" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-6 z-10">
        <motion.div
          key={`text-${currentIndex}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="max-w-5xl mb-8"
        >
          <span className="inline-flex items-center gap-2 text-xs sm:text-sm uppercase tracking-[0.4em] mb-6 px-5 py-2 rounded-full border border-secondary/70 bg-white/5 backdrop-blur-sm text-secondary font-bold">
            <span className="text-secondary">&#x2726;</span>
            {heroSlides[currentIndex].title}
            <span className="text-secondary">&#x2726;</span>
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display leading-tight mb-4 drop-shadow-2xl">
            {heroSlides[currentIndex].subtitle}
          </h1>
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-secondary/70" />
            <span className="text-secondary text-lg">&#x2726;</span>
            <span className="h-px w-10 bg-secondary/70" />
          </div>
        </motion.div>

        <div className="flex gap-4 justify-center flex-wrap">
          <Button
            variant="outline"
            size="lg"
            onClick={() => navigate("/about")}
          >
            Our Story
          </Button>
          <Button
            variant="primary"
            size="lg"
            onClick={() => navigate("/contact")}
          >
            Donate Now
          </Button>
        </div>
      </div>

      <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-2 z-20">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1 rounded-full transition-all duration-500 ${
              index === currentIndex
                ? "bg-secondary w-12"
                : "bg-white/40 hover:bg-white/70 w-4"
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-secondary text-white p-2 rounded-full backdrop-blur-sm transition-all z-20 hidden md:block"
        aria-label="Previous slide"
      >
        <ChevronLeft size={32} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-secondary text-white p-2 rounded-full backdrop-blur-sm transition-all z-20 hidden md:block"
        aria-label="Next slide"
      >
        <ChevronRight size={32} />
      </button>
    </div>
  );
};
