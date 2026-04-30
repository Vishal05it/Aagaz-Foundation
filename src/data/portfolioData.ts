export interface PortfolioItem {
  id: string;
  title: string;
  services: string;
  date: string;
  location: string;
  heroImage: string;
  description: string[];
  galleryImages: string[];
  videoUrl?: string; // YouTube ID
  testimonial?: {
    quote: string;
    author: string;
  };
}

// Aaghaz Foundation — real-world impact stories
export const portfolioData: PortfolioItem[] = [
  {
    id: "graveyard-orphans",
    title: "Orphans Living In A Graveyard",
    services: "Emergency Aid, School Enrolment, Mentorship",
    date: "2018",
    location: "Lucknow, Uttar Pradesh",
    heroImage:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1600&q=80",
    description: [
      "When a journalist friend brought to our notice that a small group of children had been living and studying among graves on the outskirts of Lucknow, our volunteers reached the site within 48 hours.",
      "What followed was an end-to-end intervention — temporary shelter, school enrolment for every child, monthly ration support for the older sister who had been keeping the family together, and a network of donors who committed to the children's education for the next decade.",
      "Today, three of those children are in college on Aaghaz scholarships, and one has cleared her Class XII board exams with a first division.",
    ],
    galleryImages: [
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=900&q=80",
    ],
    testimonial: {
      quote:
        "We did not know what tomorrow looked like. Aaghaz did not lecture us — they simply showed up and stayed.",
      author: "The eldest sister, now in college",
    },
  },
  {
    id: "pune-techie-scholarship",
    title: "A Memorial Scholarship in Pune",
    services: "Memorial Scholarship, Annual Reporting",
    date: "2019",
    location: "Pune, Maharashtra",
    heroImage:
      "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=1600&q=80",
    description: [
      "After losing their son — a young software engineer in Pune — to a sudden illness, his family decided his name would not fade. They reached out to Aaghaz Foundation to launch a Rs 2 lakh annual scholarship in his memory.",
      "Together we designed the criteria: three students, every year, from low-income families in Maharashtra and UP, with a special preference for first-generation engineering aspirants.",
      "Three years on, nine students have completed cycles of education on this scholarship — and the family has met five of them in person.",
    ],
    galleryImages: [
      "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1488998427799-e3362cec87c3?auto=format&fit=crop&w=900&q=80",
    ],
    testimonial: {
      quote:
        "Knowing that nine students have continued their education in our son's name — that has helped us heal in a way we did not expect.",
      author: "A donor family",
    },
  },
  {
    id: "school-for-poor",
    title: "A School For The Poor In Lucknow",
    services: "LCGC Operations, After-school Tuition, Library",
    date: "2018 — Present",
    location: "Lucknow, Uttar Pradesh",
    heroImage:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1600&q=80",
    description: [
      "What began in 2011 as a small after-school tuition room above a tailoring shop in Ganesh Gunj has grown into a full-fledged learning centre — the Lucknow Coaching & Guidance Centre (LCGC) — that now serves 200+ children a week.",
      "Children come for tuition, but they stay for the library, the computer lab and the quiet table to do their homework. Many of our most senior volunteers today are former LCGC students who came back to teach.",
      "This story is, in many ways, the heart of Aaghaz Foundation: not big buildings or noisy campaigns, but a steady, lit-up room that says \"come in, sit down, and study.\"",
    ],
    galleryImages: [
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=900&q=80",
    ],
  },
  {
    id: "rahmani-30-cohort",
    title: "First Rahmani 30 UP Cohort",
    services: "Rahmani 30 Initiative, IIT-JEE / NEET Coaching, Boarding",
    date: "2020 — 2022",
    location: "Uttar Pradesh",
    heroImage:
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=1600&q=80",
    description: [
      "Aaghaz partnered with Rahmani 30 to identify and support a cohort of 30 students from underserved districts of UP for two years of intensive residential coaching.",
      "From the first written test to final boarding allocation, our volunteers handled the entire on-the-ground operation — verifying family backgrounds, conducting interviews, and helping families understand the residential model.",
      "By the end of the two years, the cohort produced multiple IIT, NEET and CA qualifiers — many of them the first in their family to ever sit a national-level competitive exam.",
    ],
    galleryImages: [
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80",
    ],
    testimonial: {
      quote:
        "I had never even heard the word IIT before the Rahmani test. Two years later, I was inside one.",
      author: "An Aaghaz × Rahmani 30 alumnus",
    },
  },
  {
    id: "girl-students-hardoi",
    title: "Keeping Hardoi's Girls In School",
    services: "Student Aid, Uniforms, Bicycles, Mentorship",
    date: "2021 — Present",
    location: "Hardoi, Uttar Pradesh",
    heroImage:
      "https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=1600&q=80",
    description: [
      "After a local teacher reached out to us about a cluster of girls who were being pulled out of school to help at home, our team began a year-long programme: school fees, uniforms, sanitary supplies, and a bicycle each so distance was no longer an excuse.",
      "Just as importantly, our volunteers spent time with the parents — slowly, respectfully — until they began to see schooling as an investment, not an indulgence.",
      "Three years on, every single girl from that first batch is still in school. Two have completed Class XII and have applied to nursing colleges with Aaghaz support.",
    ],
    galleryImages: [
      "https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80",
    ],
    testimonial: {
      quote:
        "Now my daughter cycles to school every morning. The neighbours used to talk. Now they ask me how to apply.",
      author: "Mother of an Aaghaz beneficiary, Hardoi",
    },
  },
  {
    id: "csr-employee-giving",
    title: "Corporate Employee Giving Programme",
    services: "CSR Partnership, Payroll Giving, Employee Volunteering",
    date: "2022 — Present",
    location: "Bengaluru &amp; Hyderabad",
    heroImage:
      "https://images.unsplash.com/photo-1488998427799-e3362cec87c3?auto=format&fit=crop&w=1600&q=80",
    description: [
      "When a Bengaluru-based technology company approached us about a meaningful CSR partnership, we co-designed a programme combining payroll-deduction giving, an annual employee volunteering trip to LCGC, and a sponsored cohort of 25 students every year.",
      "Two years in, the programme has supported 50+ students through full school years and brought 80+ employees out of cubicles and into classrooms.",
      "We design every corporate partnership the same way: full reporting, audit-ready paperwork, and real students at the other end of every rupee.",
    ],
    galleryImages: [
      "https://images.unsplash.com/photo-1488998427799-e3362cec87c3?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=900&q=80",
    ],
  },
];
