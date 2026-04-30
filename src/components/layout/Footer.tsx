import {
  Instagram,
  Facebook,
  Youtube,
  Twitter,
  Phone,
  MapPin,
  Mail,
  Heart,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="bg-wedding-slate border-t border-primary/20 py-16 px-6 text-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <motion.div variants={itemVariants} className="col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-primary text-white shadow-md">
                <Heart size={20} fill="currentColor" />
              </span>
              <div className="flex flex-col leading-none">
                <span className="font-display text-2xl font-bold tracking-tighter text-white">
                  Aaghaz<span className="text-secondary">.</span>
                </span>
                <span className="text-[9px] tracking-[0.25em] text-gray-400 uppercase mt-0.5">
                  Foundation · Since 2004
                </span>
              </div>
            </div>
            <p className="text-xs text-gray-300 leading-relaxed">
              Aaghaz Foundation is a non-profit founded in 2004 in Lucknow with
              just Rs 2,000 and one needy student. Two decades on, we still
              believe the same simple thing: empowerment through education
              builds a more resilient society — one verified scholarship at a
              time.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 mt-6 bg-secondary hover:bg-secondary-dark text-white px-5 py-2.5 text-xs uppercase tracking-widest font-bold rounded-full transition-colors"
            >
              <Heart size={14} fill="currentColor" />
              Donate Today
            </Link>
          </motion.div>

          {/* Navigation */}
          <motion.div variants={itemVariants} className="lg:ml-8">
            <h5 className="text-[14px] uppercase tracking-widest font-bold mb-6 text-secondary">
              Quick Links
            </h5>
            <ul className="text-xs space-y-3 uppercase tracking-widest text-gray-300">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-primary transition-colors"
                >
                  What We Do
                </Link>
              </li>
              <li>
                <Link
                  to="/services/student-aid"
                  className="hover:text-primary transition-colors"
                >
                  Apply for Student Aid
                </Link>
              </li>
              <li>
                <Link
                  to="/services/become-volunteer"
                  className="hover:text-primary transition-colors"
                >
                  Become a Volunteer
                </Link>
              </li>
              <li>
                <Link
                  to="/services/launch-scholarship"
                  className="hover:text-primary transition-colors"
                >
                  Launch a Scholarship
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="hover:text-primary transition-colors"
                >
                  News &amp; Events
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Connect */}
          <motion.div variants={itemVariants}>
            <h5 className="text-[14px] uppercase tracking-widest font-bold mb-6 text-secondary">
              Reach Us
            </h5>
            <ul className="text-xs space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <MapPin
                  size={16}
                  className="shrink-0 mt-0.5 text-primary"
                />
                <span className="leading-relaxed">
                  <strong className="text-white">Registered Office</strong>
                  <br />
                  57 Ganesh Gunj, Lucknow,
                  <br />
                  Uttar Pradesh — 226018, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={14} className="text-primary" />
                <a
                  href="tel:+919876543210"
                  className="hover:text-primary transition-colors"
                >
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={14} className="text-primary" />
                <a
                  href="mailto:aaghaz.foundation@gmail.com"
                  className="hover:text-primary transition-colors break-all"
                >
                  aaghaz.foundation@gmail.com
                </a>
              </li>
            </ul>

            <h6 className="text-[12px] uppercase tracking-widest font-bold mt-8 mb-4 text-secondary">
              Follow Us
            </h6>
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/aaghazfoundation"
                aria-label="Facebook"
                className="w-9 h-9 inline-flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-primary hover:border-primary transition-colors"
              >
                <Facebook size={15} />
              </a>
              <a
                href="https://www.instagram.com/aaghazfoundation"
                aria-label="Instagram"
                className="w-9 h-9 inline-flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-primary hover:border-primary transition-colors"
              >
                <Instagram size={15} />
              </a>
              <a
                href="https://twitter.com/aaghazfoundation"
                aria-label="Twitter"
                className="w-9 h-9 inline-flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-primary hover:border-primary transition-colors"
              >
                <Twitter size={15} />
              </a>
              <a
                href="https://www.youtube.com/@aaghazfoundation"
                aria-label="YouTube"
                className="w-9 h-9 inline-flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-primary hover:border-primary transition-colors"
              >
                <Youtube size={15} />
              </a>
            </div>
          </motion.div>

          {/* Latest News */}
          <motion.div variants={itemVariants}>
            <h5 className="text-[14px] uppercase tracking-widest font-bold mb-6 text-secondary">
              Latest News
            </h5>
            <ul className="space-y-4 text-xs text-gray-300">
              <li className="border-b border-white/10 pb-3">
                <Link
                  to="/blog"
                  className="hover:text-primary transition-colors block leading-snug"
                >
                  Aaghaz Foundation Supports Orphans Living In A Graveyard
                </Link>
                <span className="text-[10px] tracking-widest uppercase text-gray-500 mt-1 block">
                  February 15, 2018
                </span>
              </li>
              <li className="border-b border-white/10 pb-3">
                <Link
                  to="/blog"
                  className="hover:text-primary transition-colors block leading-snug"
                >
                  Rs 2 Lakh Scholarship in Pune Techie's Name
                </Link>
                <span className="text-[10px] tracking-widest uppercase text-gray-500 mt-1 block">
                  February 15, 2018
                </span>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="hover:text-primary transition-colors block leading-snug"
                >
                  Aaghaz Opens A School For The Poor
                </Link>
                <span className="text-[10px] tracking-widest uppercase text-gray-500 mt-1 block">
                  February 20, 2018
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          variants={itemVariants}
          className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-gray-400"
        >
          <p>
            © {new Date().getFullYear()} Aaghaz Foundation. All Rights Reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              to="/privacy-policy"
              className="hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-of-service"
              className="hover:text-primary transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              to="/contact"
              className="hover:text-primary transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};
