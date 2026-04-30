import { Button } from "../common/Button";
import { motion, type Variants, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";


const galleryImages = [
  "https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1488998427799-e3362cec87c3?auto=format&fit=crop&w=900&q=80",
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <motion.section
      id="gallery"
      className="py-24 px-6 bg-impact-pattern text-center relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto">
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          className="inline-flex items-center gap-3 text-primary text-xs font-bold uppercase tracking-[0.4em] mb-3"
        >
          <span className="block w-8 h-px bg-primary" />
          Photo Gallery
          <span className="block w-8 h-px bg-primary" />
        </motion.p>
        <motion.h2
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          className="text-3xl md:text-5xl font-display mb-3 mt-2 text-accent"
        >
          A few honest pictures
        </motion.h2>
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          className="text-text-muted max-w-xl mx-auto mb-10"
        >
          No staged smiles. Just the daily quiet of a learning centre, a survey
          visit, a graduation hug.
        </motion.p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((src, index) => (
            <motion.div
              key={index}
              layoutId={`gallery-image-${index}`}
              variants={itemVariants}
              className="overflow-hidden h-64 group relative cursor-pointer"
              onClick={() => setSelectedImage(src)}
            >
              <img loading="lazy" decoding="async"
                src={src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors pointer-events-none" />
            </motion.div>
          ))}
        </div>
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
              onClick={() => setSelectedImage(null)}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-8 right-8 text-white hover:text-gray-300 transition-colors"
                aria-label="Close"
              >
                <X size={40} />
              </button>
              <motion.img
                layoutId={
                  selectedImage
                    ? `gallery-image-${galleryImages.indexOf(selectedImage)}`
                    : undefined
                }
                src={selectedImage}
                alt="Full screen"
                className="max-w-full max-h-[90vh] object-contain rounded-sm"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image
              />
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          className="mt-12"
        >
          <Link to="/gallery">
            <Button variant="primary">View Full Gallery</Button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};
