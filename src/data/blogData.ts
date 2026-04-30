export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string; // Full HTML/Markdown content
  image: string;
  date: string;
  author: string;
  category: string;
  tags?: string; // Comma-separated tags
  createdAt?: string; // Raw ISO date for URL generation
}

/**
 * Generate a WordPress-style date-based URL for a blog post.
 * e.g., /2026/01/21/post-slug
 */
export const getBlogPostUrl = (slug: string, createdAt?: string): string => {
  const cleanSlug = slug.replace(/^\/+/, "");
  if (createdAt) {
    const d = new Date(createdAt);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `/${year}/${month}/${day}/${cleanSlug}`;
  }
  // Fallback if no createdAt
  return `/blog/${cleanSlug}`;
};

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "rs-2000-scholarship-changed-life",
    title: "How a Rs 2,000 Scholarship Changed a Life",
    excerpt:
      "A look back at our very first beneficiary and how a small contribution paved the way for a successful engineering career.",
    content: `
      <p>In 2004, Aaghaz Foundation started with a simple belief and a collection of just Rs 2,000. That small amount was used to pay the school fees of a student who was on the verge of dropping out due to financial constraints.</p>
      <h3>The First Step</h3>
      <p>Our founder, Mazhar Farooqui, alongside a few friends, decided that no child should have to give up on education simply because their family couldn't afford the fees. That first student went on to complete his schooling, pursued an engineering degree, and is now working at a top multinational company.</p>
      <p>This single success story became the blueprint for everything Aaghaz has done since. It proved that sometimes, all a student needs is a small push at the right time.</p>
    `,
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80",
    date: "Feb 10, 2026",
    author: "Mazhar Farooqui",
    category: "Success Stories",
  },
  {
    id: "2",
    slug: "inside-rahmani-30-preparing-next-generation",
    title: "Inside Rahmani 30: Preparing the Next Generation",
    excerpt:
      "Explore how our partnership with Rahmani 30 is providing free, intensive coaching to brilliant minds in Uttar Pradesh.",
    content: `
      <p>The Rahmani 30 initiative is one of our most ambitious projects, aimed at identifying and nurturing exceptionally talented students from underprivileged backgrounds.</p>
      <h3>Intensive Coaching</h3>
      <p>Students selected for this program receive free residential coaching for highly competitive exams like IIT-JEE, NEET, and CA. The boarding model removes daily distractions and travel time, allowing students to focus entirely on their academics.</p>
      <h3>Proven Track Record</h3>
      <p>Year after year, this initiative has produced qualifiers from communities that had historically never sent a child to these premier institutions. It is a testament to the fact that talent is universal, even if opportunity is not.</p>
    `,
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=1200&q=80",
    date: "Jan 25, 2026",
    author: "Aaghaz Team",
    category: "Programs",
  },
  {
    id: "3",
    slug: "impact-of-memorial-scholarships",
    title: "The Impact of Memorial Scholarships",
    excerpt:
      "How families are honouring their loved ones by funding the education of deserving students in perpetuity.",
    content: `
      <p>Losing a loved one is incredibly difficult, but many of our donors have found a profound way to heal: by launching a memorial scholarship in their name.</p>
      <h3>A Living Tribute</h3>
      <p>A memorial scholarship ensures that a child can complete their school or college education. Rather than a static monument, this creates a living tribute—a student who will carry forward the gift of education.</p>
      <p>We work closely with donor families to co-design the criteria for the scholarship, whether it's supporting a girl in STEM or a first-generation college-goer, and provide annual reports on the student's progress.</p>
    `,
    image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=1200&q=80",
    date: "Jan 12, 2026",
    author: "Donor Relations",
    category: "Donor Impact",
  },
  {
    id: "4",
    slug: "day-at-lcgc-lucknow",
    title: "A Day at the Lucknow Coaching & Guidance Centre",
    excerpt:
      "Step inside the LCGC, a safe and structured space where over 200 children come to study and dream every week.",
    content: `
      <p>Since 2011, the Lucknow Coaching & Guidance Centre (LCGC) has been a sanctuary for students from neighbourhoods lacking basic educational resources.</p>
      <h3>More Than Just Tuition</h3>
      <p>LCGC offers structured after-school classes, a quiet library, computer access, and one-on-one career counselling. For many students, it is the only place where they can study peacefully without the distractions of a crowded home.</p>
      <p>Our dedicated volunteer teachers ensure that every child receives the attention they need to excel in their board exams and beyond.</p>
    `,
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
    date: "Dec 30, 2025",
    author: "LCGC Coordinator",
    category: "Programs",
  },
  {
    id: "5",
    slug: "why-we-need-pre-scholarship-field-surveys",
    title: "Why We Do Pre-Scholarship Field Surveys",
    excerpt:
      "Transparency is our core value. Here is why our volunteers visit every home before approving a scholarship.",
    content: `
      <p>At Aaghaz Foundation, we do not rely on generic application forms. Every single student who receives aid has been personally met by our volunteers.</p>
      <h3>Ensuring Genuine Need</h3>
      <p>A minimum of two volunteers visit the applicant's home and school to verify their financial background and academic record. This strict verification process protects our donors' trust and ensures that funds reach those who genuinely cannot afford their fees.</p>
    `,
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1200&q=80",
    date: "Dec 15, 2025",
    author: "Field Operations",
    category: "Process",
  },
  {
    id: "6",
    slug: "meet-our-volunteers-backbone-aaghaz",
    title: "Meet Our Volunteers: The Backbone of Aaghaz",
    excerpt:
      "Celebrating the dedicated individuals who identify students in need and mentor them throughout the year.",
    content: `
      <p>Aaghaz is entirely volunteer-driven. We do not have a massive corporate office or a high-paid administrative staff. What we have is an army of dedicated volunteers.</p>
      <h3>From Surveys to Mentorship</h3>
      <p>Our volunteers don't just conduct pre-scholarship surveys; they act as mentors. They stay in touch with the beneficiaries, check their report cards, and offer gentle accountability throughout the academic year. Without them, our work would be impossible.</p>
    `,
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80",
    date: "Nov 28, 2025",
    author: "Aaghaz Team",
    category: "Volunteering",
  },
  {
    id: "7",
    slug: "bridging-gap-financial-aid-emergencies",
    title: "Bridging the Gap: Financial Aid During Emergencies",
    excerpt:
      "How rapid, one-time financial interventions can save a student's entire academic year from being derailed.",
    content: `
      <p>Sometimes, a family is doing everything right, but an unexpected medical emergency or job loss wipes out the savings meant for school fees.</p>
      <h3>Timely Intervention</h3>
      <p>Aaghaz Foundation steps in during these critical moments to pay the pending fees directly to the school. This ensures that the child is not pulled out of class or denied their admit card for board exams due to circumstances beyond their control.</p>
    `,
    image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=1200&q=80",
    date: "Nov 10, 2025",
    author: "Financial Aid Committee",
    category: "Financial Aid",
  },
  {
    id: "8",
    slug: "from-beneficiary-to-donor",
    title: "From Beneficiary to Donor: A Full Circle",
    excerpt:
      "The beautiful reality of former Aaghaz students returning years later to fund the education of the next batch.",
    content: `
      <p>One of the most rewarding aspects of our work is seeing former beneficiaries return to Aaghaz—not to ask for help, but to offer it.</p>
      <h3>Paying It Forward</h3>
      <p>Many students we supported a decade ago are now employed in stable jobs. They frequently reach out to sponsor a current student's education, proving that a single act of kindness can create a ripple effect that spans generations.</p>
    `,
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80",
    date: "Oct 25, 2025",
    author: "Aaghaz Team",
    category: "Success Stories",
  },
  {
    id: "9",
    slug: "education-not-privilege-vision-2025",
    title: "Education is Not a Privilege: Our Vision for the Future",
    excerpt:
      "Looking ahead at how we plan to expand our reach and ensure no child is left behind.",
    content: `
      <p>Despite significant progress, millions of children in India still drop out of school due to financial barriers. Our vision is simple: education must be a fundamental right, not a privilege reserved for those who can afford it.</p>
      <p>We are actively expanding our volunteer base and partnering with more institutions to ensure our safety net catches as many deserving students as possible.</p>
    `,
    image: "https://images.unsplash.com/photo-1488998427799-e3362cec87c3?auto=format&fit=crop&w=1200&q=80",
    date: "Oct 12, 2025",
    author: "Mazhar Farooqui",
    category: "Vision",
  },
  {
    id: "10",
    slug: "partnering-for-change-csr-aaghaz",
    title: "Partnering for Change: CSR and Aaghaz",
    excerpt:
      "How corporate partnerships are helping us scale our impact and build stronger communities.",
    content: `
      <p>Corporate Social Responsibility (CSR) is a powerful tool for social change. Aaghaz Foundation works with socially conscious companies to launch corporate-named scholarships and fund learning centres.</p>
      <h3>Transparent Reporting</h3>
      <p>Because of our strict field survey processes and direct-to-school payment model, corporate partners receive crystal-clear reports suitable for CSR audits, knowing exactly how and where their funds were utilized.</p>
    `,
    image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=1200&q=80",
    date: "Sep 30, 2025",
    author: "Partnerships Desk",
    category: "Partnerships",
  },
];
