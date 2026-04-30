import {
  Facebook,
  Instagram,
  MapPin,
  Phone,
  Twitter,
  Youtube,
  Mail,
  Heart,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const TopBar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-accent text-white py-2 px-6"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center text-[11px] tracking-widest uppercase">
        <div className="flex items-center space-x-5 text-gray-200">
          <a
            href="tel:+919876543210"
            className="flex items-center gap-1.5 hover:text-secondary transition-colors"
          >
            <Phone size={14} /> +91 98765 43210
          </a>
          <a
            href="mailto:aaghaz.foundation@gmail.com"
            className="hidden md:flex items-center gap-1.5 hover:text-secondary transition-colors"
          >
            <Mail size={14} /> aaghaz.foundation@gmail.com
          </a>
          <div className="hidden lg:flex items-center gap-1.5 text-gray-300">
            <MapPin size={14} />
            <span>57 Ganesh Gunj, Lucknow</span>
          </div>
        </div>
        <div className="flex items-center space-x-4 text-gray-200">
          <Link
            to="/contact"
            className="hidden md:inline-flex items-center gap-1 text-secondary hover:text-white transition-colors font-bold"
          >
            <Heart size={12} fill="currentColor" />
            Donate Now
          </Link>
          <a
            href="https://www.instagram.com/aaghazfoundation"
            aria-label="Instagram"
            className="hover:text-secondary transition-colors"
          >
            <Instagram size={15} />
          </a>
          <a
            href="https://www.facebook.com/aaghazfoundation"
            aria-label="Facebook"
            className="hover:text-secondary transition-colors"
          >
            <Facebook size={15} />
          </a>
          <a
            href="https://twitter.com/aaghazfoundation"
            aria-label="Twitter"
            className="hover:text-secondary transition-colors"
          >
            <Twitter size={15} />
          </a>
          <a
            href="https://www.youtube.com/@aaghazfoundation"
            aria-label="YouTube"
            className="hover:text-secondary transition-colors"
          >
            <Youtube size={15} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};
