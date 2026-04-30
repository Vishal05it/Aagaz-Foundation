import { motion } from "framer-motion";
import { Instagram, Heart, MessageCircle } from "lucide-react";
import { getOptimizedImage } from "../../utils/imageUtils";

const posts = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=600&q=80",
    likes: 245,
    comments: 12,
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=600&q=80",
    likes: 189,
    comments: 8,
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&q=80",
    likes: 312,
    comments: 24,
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80",
    likes: 156,
    comments: 5,
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=600&q=80",
    likes: 278,
    comments: 18,
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=600&q=80",
    likes: 198,
    comments: 9,
  },
];

export const InstagramFeed = () => {
  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center p-3 bg-stone-100 rounded-full mb-6"
          >
            <Instagram className="w-6 h-6 text-primary" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-display text-accent mb-4"
          >
            Follow our journey on Instagram
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 font-light text-lg mb-8"
          >
            @aaghazfoundation
          </motion.p>
          <motion.a
            href="https://www.instagram.com/aaghazfoundation"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="inline-block px-8 py-3 bg-primary text-white text-xs font-bold uppercase tracking-widest hover:bg-primary-dark rounded-full transition-colors duration-300"
          >
            View Profile
          </motion.a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
          {posts.map((post, idx) => (
            <motion.a
              key={post.id}
              href="https://www.instagram.com/aaghazfoundation"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ scale: 0.98 }}
              className="relative aspect-square group overflow-hidden bg-gray-100"
            >
              <img loading="lazy" decoding="async"
                src={getOptimizedImage(post.image, 600)}
                alt={`Instagram Post ${post.id}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6 text-white">
                <div className="flex items-center gap-2">
                  <Heart className="w-5 h-5 fill-white" />
                  <span className="font-bold">{post.likes}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span className="font-bold">{post.comments}</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
