import { Link } from "react-router-dom";

export const ActionBlocksSection = () => {
  const blocks = [
    {
      title: "Launch Scholarship",
      text: "Many of our donors choose to support Aaghaz by offering scholarships. They can chose to launch a memorial scholarship",
      image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=600&q=80",
      link: "/services/launch-scholarship",
    },
    {
      title: "Join us as Donor",
      text: "Join the Aaghaz donor base by registering with us. A member of the team will get in touch with you and answer any questions you may have.",
      image: "https://images.unsplash.com/photo-1488998427799-e3362cec87c3?auto=format&fit=crop&w=600&q=80",
      link: "/services/join-as-donor",
    },
    {
      title: "Become Volunteer",
      text: "Aaghaz is a volunteer-driven organisation. Our volunteers identify students in need of financial assistance and work with the core team",
      image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=600&q=80",
      link: "/services/become-volunteer",
    },
  ];

  return (
    <section className="py-20 px-6 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blocks.map((block, index) => (
            <Link
              key={index}
              to={block.link}
              className="group flex flex-col bg-white border border-gray-100 shadow-sm rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={block.image}
                  alt={block.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-display font-bold text-accent mb-4 group-hover:text-primary transition-colors">
                  {block.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                  {block.text}
                </p>
                <div className="mt-auto text-primary font-bold text-xs uppercase tracking-widest inline-flex items-center gap-2">
                  Learn More
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
