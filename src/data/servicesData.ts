// Aaghaz Foundation — Programs / "What We Do"
// The shape mirrors the original ServiceData interface so existing components keep working.

export interface ServiceData {
  id: string;
  title: string;
  heroImage: string;
  heroTitle: string;
  intro: {
    heading: string;
    subheading: string;
    description: string[];
  };
  whyChooseUs: {
    title: string;
    items: { title: string; description: string }[];
  };
  signatureServices: {
    title: string;
    items: { title: string; description: string; features?: string[] }[];
  };
  process: {
    title: string;
    description: string;
    steps: { title: string; description: string }[];
  };
  testimonials?: {
    quote: string;
    author: string;
    location: string;
  }[];
  portfolioImages: string[];
}

export const servicesData: ServiceData[] = [
  {
    id: "student-aid",
    title: "Student Aid",
    heroImage:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1600&q=80",
    heroTitle: "STUDENT AID — KEEPING DESERVING CHILDREN IN SCHOOL",
    intro: {
      heading: "STUDENT AID PROGRAM",
      subheading:
        "Need-based financial assistance for school and college students across India.",
      description: [
        "Before you continue to apply for financial assistance, please read the eligibility criteria below and agree to our terms and conditions. Aaghaz Foundation supports meritorious students from economically weak backgrounds — we cover school fees, college tuition, exam fees, books, uniforms and hostel rent for those who genuinely cannot afford them.",
        "Every applicant is reviewed by our volunteer team through an in-person pre-scholarship survey. We do not run a generic application form — every story is verified, and every rupee is tracked.",
      ],
    },
    whyChooseUs: {
      title: "Who is eligible",
      items: [
        {
          title: "Genuine financial need",
          description:
            "Annual family income should ordinarily fall below the threshold defined by your state for an Economically Weaker Section household.",
        },
        {
          title: "Consistent academic record",
          description:
            "We support meritorious students — typically a minimum of 60% in the most recent qualifying exam, with some flexibility for first-generation learners.",
        },
        {
          title: "Recommended through a verifiable source",
          description:
            "A teacher, neighbour, journalist, social worker or earlier Aaghaz beneficiary should be able to vouch for the student's circumstances.",
        },
      ],
    },
    signatureServices: {
      title: "What student aid covers",
      items: [
        {
          title: "School Fees & Exam Fees",
          description:
            "From Class I to Class XII — annual fees, board exam fees, lab fees and re-admission charges for verified students.",
        },
        {
          title: "College & University Tuition",
          description:
            "Graduation, post-graduation and professional course tuition, partially or fully covered depending on family circumstances.",
        },
        {
          title: "Books, Uniforms & Stationery",
          description:
            "One-time and annual support for textbooks, school uniforms, school bags and basic stationery.",
        },
        {
          title: "Hostel & Daily Living",
          description:
            "For students who study away from home, support towards hostel rent, mess fees and travel back to family during holidays.",
        },
      ],
    },
    process: {
      title: "How to apply",
      description:
        "From recommendation to disbursement, here's exactly what happens:",
      steps: [
        {
          title: "1. Submit the application",
          description:
            "Use the Apply for Student Aid form on our website with basic details and supporting documents.",
        },
        {
          title: "2. Pre-scholarship survey",
          description:
            "A minimum of two volunteers visit the family and the student's school to verify the application in person.",
        },
        {
          title: "3. Aaghaz committee review",
          description:
            "The verified case is presented to our committee, which approves the amount and the duration of support.",
        },
        {
          title: "4. Disbursement & follow-up",
          description:
            "Funds are paid directly to the school or college wherever possible, and our volunteers stay in touch with the student through the year.",
        },
      ],
    },
    testimonials: [
      {
        quote:
          "I was about to drop out after Class X because my father could not pay the board fees. Aaghaz volunteers came home, met my mother, and within a week the fees were paid. Today I am in the second year of my B.Sc.",
        author: "Sumaiya R.",
        location: "Lucknow, UP",
      },
      {
        quote:
          "We had no idea organisations like this existed. The volunteers were respectful, the process was clear, and we never felt like we were begging.",
        author: "Mother of an Aaghaz beneficiary",
        location: "Hardoi, UP",
      },
    ],
    portfolioImages: [
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=900&q=80",
    ],
  },

  {
    id: "scholarships",
    title: "Scholarships",
    heroImage:
      "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=1600&q=80",
    heroTitle: "SCHOLARSHIPS — INVESTING IN A STUDENT'S FUTURE",
    intro: {
      heading: "AAGHAZ SCHOLARSHIPS",
      subheading:
        "Annual, merit-cum-means and memorial scholarships for students across India.",
      description: [
        "Many of our donors choose to support Aaghaz by offering scholarships. They can choose to launch a memorial scholarship — in the name of a parent, a sibling, a teacher or a friend — or contribute to our annual general scholarship pool that funds the highest-priority cases.",
        "Every scholarship is awarded after a verified pre-scholarship survey, and donors receive an annual report on the students their contribution has supported.",
      ],
    },
    whyChooseUs: {
      title: "Why launch a scholarship with Aaghaz",
      items: [
        {
          title: "Verified, transparent disbursement",
          description:
            "Every recipient is met in person before approval. Funds are paid directly to the institution wherever possible.",
        },
        {
          title: "Co-designed criteria",
          description:
            "You decide the broad criteria — region, gender, course of study, academic threshold — and we operate within it.",
        },
        {
          title: "Annual reports to donors",
          description:
            "We share photographs, results and short notes from the students every year so you can see the difference your scholarship makes.",
        },
      ],
    },
    signatureServices: {
      title: "Types of scholarships",
      items: [
        {
          title: "Memorial Scholarship",
          description:
            "Honour someone you love by funding a child's school or college education in their name. Starts at Rs 50,000 per year per student; we are happy to design something at any budget.",
        },
        {
          title: "Annual General Scholarship",
          description:
            "Contribute any amount to our central scholarship pool. We allocate it across the highest-priority verified cases.",
        },
        {
          title: "Corporate / CSR Scholarship",
          description:
            "Companies can launch a CSR-funded scholarship cohort, adopt a class or fund a learning centre — with full reporting suitable for CSR audits.",
        },
        {
          title: "Subject-Specific Awards",
          description:
            "Targeted scholarships for girls in STEM, first-generation college-goers, or students preparing for civil services and competitive exams.",
        },
      ],
    },
    process: {
      title: "How a scholarship is launched",
      description: "",
      steps: [
        {
          title: "1. Initial conversation",
          description:
            "Tell us about who you'd like to honour, your budget and the kind of student you want to support.",
        },
        {
          title: "2. Criteria & MOU",
          description:
            "We co-write the criteria, sign a simple MOU and confirm the disbursement schedule.",
        },
        {
          title: "3. Selection & disbursement",
          description:
            "We select students from our verified pipeline and pay the institutions directly.",
        },
        {
          title: "4. Annual reporting",
          description:
            "Each year you receive a report with the student's progress, photographs and a personal note.",
        },
      ],
    },
    testimonials: [
      {
        quote:
          "We launched a scholarship in our son's name. Knowing that three students are completing their education because of him every year — that has helped our family heal in a way we did not expect.",
        author: "A donor family",
        location: "Pune",
      },
    ],
    portfolioImages: [
      "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=900&q=80",
    ],
  },

  {
    id: "financial-assistance",
    title: "Financial Assistance",
    heroImage:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1600&q=80",
    heroTitle: "FINANCIAL ASSISTANCE — TIMELY HELP WHEN A FAMILY NEEDS IT MOST",
    intro: {
      heading: "FINANCIAL ASSISTANCE PROGRAM",
      subheading:
        "Emergency and recurring financial support for educational expenses.",
      description: [
        "Sometimes a family is doing everything right and is still one missed fee instalment away from a child dropping out. Aaghaz Foundation provides timely financial assistance — sometimes a one-time intervention, sometimes ongoing year-on-year — so that a temporary crisis does not become a permanent loss of education.",
        "We work case-by-case. Every appeal is verified by our volunteer team before approval, but we move fast: most genuine emergencies are resolved within seven working days.",
      ],
    },
    whyChooseUs: {
      title: "What we cover",
      items: [
        {
          title: "Last-minute fee crises",
          description:
            "Board exam admit cards being withheld, college fees due, or hostel deposits — we step in where the difference between continuing and dropping out is a single payment.",
        },
        {
          title: "Loss of an earning parent",
          description:
            "Where a family has lost the primary earner, we fund the children's continuing education for the rest of the academic year.",
        },
        {
          title: "Medical emergencies that derail education",
          description:
            "When a parent's medical emergency wipes out savings meant for school, we help bridge the gap so the children stay enrolled.",
        },
      ],
    },
    signatureServices: {
      title: "Types of assistance",
      items: [
        {
          title: "One-time emergency aid",
          description:
            "Fast-tracked payment of an urgent fee directly to the institution.",
        },
        {
          title: "Recurring monthly support",
          description:
            "For long-term cases, regular monthly assistance until the family stabilises or the child finishes the course.",
        },
        {
          title: "Coaching & mentorship",
          description:
            "Where the gap is academic rather than financial, free access to LCGC and our partner Rahmani 30 centres.",
        },
      ],
    },
    process: {
      title: "How we move on a case",
      description: "",
      steps: [
        {
          title: "1. Recommendation",
          description:
            "A teacher, neighbour, journalist or volunteer flags the case to us.",
        },
        {
          title: "2. Same-week verification",
          description:
            "Two volunteers visit the family and the institution; reports are submitted within 72 hours.",
        },
        {
          title: "3. Committee approval",
          description:
            "The Aaghaz committee approves the amount and the disbursement route.",
        },
        {
          title: "4. Direct payment & follow-up",
          description:
            "Funds are paid to the institution; the volunteer team checks in monthly until the academic year is complete.",
        },
      ],
    },
    portfolioImages: [
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=900&q=80",
    ],
  },

  {
    id: "rahmani-30",
    title: "Rahmani 30 Initiative",
    heroImage:
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=1600&q=80",
    heroTitle: "RAHMANI 30 — INTENSIVE COACHING FOR EXTRAORDINARY MINDS",
    intro: {
      heading: "THE RAHMANI 30 INITIATIVE IN UTTAR PRADESH",
      subheading:
        "Free, intensive, residential coaching for IIT-JEE, NEET, CA and competitive exams.",
      description: [
        "Aaghaz Foundation has tied up with Rahmani 30 to open and operate learning centres in Uttar Pradesh, where students from underprivileged backgrounds undergo intensive coaching for IIT-JEE, NEET, CA and other competitive examinations.",
        "Selected students study, board and live at the centre at no cost to their families. The combination of disciplined academics, expert faculty and a supportive peer group has produced consistent results year on year.",
      ],
    },
    whyChooseUs: {
      title: "Why this programme matters",
      items: [
        {
          title: "Talent without a fair shot",
          description:
            "Many brilliant students never see a competitive exam syllabus simply because their families cannot afford coaching. Rahmani 30 closes that gap.",
        },
        {
          title: "Residential model",
          description:
            "Boarding removes the daily distractions and travel time that hold back rural and small-town students.",
        },
        {
          title: "Proven track record",
          description:
            "The Rahmani 30 programme has produced IIT, AIIMS and CA qualifiers from communities that had never sent a child to those institutions before.",
        },
      ],
    },
    signatureServices: {
      title: "What the programme includes",
      items: [
        {
          title: "Free coaching",
          description:
            "Full-time instruction in physics, chemistry, mathematics, biology and aptitude — no fees, no hidden costs.",
        },
        {
          title: "Boarding & meals",
          description:
            "On-site hostel and a balanced diet so students can focus entirely on their studies.",
        },
        {
          title: "Mock tests & mentorship",
          description:
            "Regular all-India level mock examinations and one-on-one mentoring with senior faculty and alumni.",
        },
        {
          title: "Career placement support",
          description:
            "Post-result guidance on counselling, college selection, scholarships and student loans.",
        },
      ],
    },
    process: {
      title: "Selection process",
      description: "",
      steps: [
        {
          title: "1. Entrance test",
          description:
            "An aptitude-based admissions test held annually across selected districts of UP.",
        },
        {
          title: "2. Family verification",
          description:
            "Aaghaz volunteers verify the financial background of shortlisted candidates.",
        },
        {
          title: "3. Interview & onboarding",
          description:
            "Final selection through a panel interview, followed by orientation at the centre.",
        },
        {
          title: "4. Two years of intensive coaching",
          description:
            "Class XI and XII covered alongside the entrance-exam syllabus, with continuous evaluation.",
        },
      ],
    },
    portfolioImages: [
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=900&q=80",
    ],
  },

  {
    id: "lcgc",
    title: "LCGC",
    heroImage:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1600&q=80",
    heroTitle: "LCGC — LUCKNOW COACHING & GUIDANCE CENTRE",
    intro: {
      heading: "LUCKNOW COACHING & GUIDANCE CENTRE",
      subheading:
        "A safe, structured place to study, dream and prepare — running since 2011.",
      description: [
        "Since 2011, Aaghaz has been successfully running a facility called the Lucknow Coaching & Guidance Centre (LCGC). It is exactly what its name suggests — a place where children from neighbourhoods that cannot afford private tuition can come every day after school for structured coaching, a quiet library, computer access and dedicated mentorship.",
        "LCGC is built on a simple insight: brilliant children fail not because they lack ability but because they lack a quiet, well-lit, supportive space to study. We provide that space.",
      ],
    },
    whyChooseUs: {
      title: "What LCGC offers",
      items: [
        {
          title: "After-school tuition",
          description:
            "Daily classes for school subjects (Maths, Science, English, Hindi) for Class VI to Class XII.",
        },
        {
          title: "Library & computer access",
          description:
            "A growing library of textbooks and reference material, plus computers with supervised internet access.",
        },
        {
          title: "Career counselling",
          description:
            "One-on-one career guidance for older students preparing for entrance exams, college admissions and government jobs.",
        },
        {
          title: "Soft skills & life skills",
          description:
            "Spoken English, basic computer literacy, communication and confidence-building workshops.",
        },
      ],
    },
    signatureServices: {
      title: "How LCGC runs",
      items: [
        {
          title: "Daily classes",
          description:
            "Regular tuition timetables aligned with the school year and the UP board calendar.",
        },
        {
          title: "Volunteer & paid faculty",
          description:
            "A mix of paid teachers and dedicated volunteers — many of them former Aaghaz beneficiaries.",
        },
        {
          title: "Free of cost to students",
          description:
            "Children who attend LCGC do not pay anything. The centre is funded entirely by donors and grants.",
        },
        {
          title: "Open to all communities",
          description:
            "Religion, caste, gender — none of it matters at LCGC. If you want to study, the door is open.",
        },
      ],
    },
    process: {
      title: "How to enrol",
      description: "",
      steps: [
        {
          title: "1. Walk in or write to us",
          description:
            "Visit the centre at 57 Ganesh Gunj, Lucknow, or email aaghaz.foundation@gmail.com.",
        },
        {
          title: "2. Quick assessment",
          description:
            "A short conversation with our coordinator to understand the student's class, school and goals.",
        },
        {
          title: "3. Class allocation",
          description:
            "The student is placed into the appropriate batch and timetable.",
        },
        {
          title: "4. Continuous mentorship",
          description:
            "Regular reviews and parent meetings ensure the child is making real progress.",
        },
      ],
    },
    portfolioImages: [
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=900&q=80",
    ],
  },

  {
    id: "become-volunteer",
    title: "Become a Volunteer",
    heroImage:
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1600&q=80",
    heroTitle: "BECOME AN AAGHAZ FIELD VOLUNTEER",
    intro: {
      heading: "AAGHAZ IS A VOLUNTEER-DRIVEN ORGANISATION",
      subheading:
        "Our volunteers are the reason this works. Join us, and a child somewhere finishes school because of it.",
      description: [
        "Aaghaz is a volunteer-driven organisation. Our volunteers identify students in need of financial assistance, conduct pre-scholarship surveys with the core team, and stay in touch with beneficiaries throughout the academic year.",
        "If you have two free hours a week and a willingness to listen, you can change a life. We need volunteers in cities and small towns across India — especially in Uttar Pradesh, Bihar, Maharashtra and the National Capital Region.",
      ],
    },
    whyChooseUs: {
      title: "What volunteers do",
      items: [
        {
          title: "Pre-scholarship field surveys",
          description:
            "Visit a recommended student's home and school to verify the case before approval.",
        },
        {
          title: "Mentorship & follow-up",
          description:
            "Stay in touch with one or two beneficiaries through the academic year — calls, occasional visits, gentle accountability.",
        },
        {
          title: "Online support",
          description:
            "Documentation, social media, fundraising events, donor communication — work that can be done remotely.",
        },
      ],
    },
    signatureServices: {
      title: "Volunteer roles",
      items: [
        {
          title: "Field volunteer",
          description:
            "On-the-ground surveys and mentorship in your own city or district.",
        },
        {
          title: "Online mentor",
          description:
            "Weekly video calls with assigned students for academic and career guidance.",
        },
        {
          title: "Communications & content",
          description:
            "Help us tell stories well — writing, photography, video, social media, donor reports.",
        },
        {
          title: "Fundraising lead",
          description:
            "Organise small-group fundraisers, runs, college events or workplace giving campaigns.",
        },
      ],
    },
    process: {
      title: "How to join",
      description: "",
      steps: [
        {
          title: "1. Register your interest",
          description:
            "Fill the Become a Field Volunteer form on our website with your basic details and city.",
        },
        {
          title: "2. Quick conversation",
          description:
            "A team member will get in touch within a few working days for a short call to understand your interests and availability.",
        },
        {
          title: "3. Orientation",
          description:
            "A short induction on Aaghaz's values, processes and the volunteer code of conduct.",
        },
        {
          title: "4. Your first case",
          description:
            "We assign you your first survey or mentee — and pair you with an experienced volunteer for the first few weeks.",
        },
      ],
    },
    portfolioImages: [
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=900&q=80",
    ],
  },

  {
    id: "join-as-donor",
    title: "Join us as Donor",
    heroImage:
      "https://images.unsplash.com/photo-1488998427799-e3362cec87c3?auto=format&fit=crop&w=1600&q=80",
    heroTitle: "JOIN US AS A DONOR — FUND A FUTURE",
    intro: {
      heading: "JOIN THE AAGHAZ DONOR BASE",
      subheading:
        "One-time, monthly or memorial — every contribution is tracked and reported.",
      description: [
        "Join the Aaghaz donor base by registering with us. A member of the team will get in touch with you to walk you through the kind of support you'd like to provide and answer any questions you may have.",
        "Donations to Aaghaz Foundation are eligible for tax exemption under Section 80G in India. We absorb our administrative costs through founder funding and volunteer effort, so 100% of your donation goes towards student aid.",
      ],
    },
    whyChooseUs: {
      title: "Ways to give",
      items: [
        {
          title: "One-time donation",
          description:
            "Give any amount, just once. We will use it for the highest-priority verified case currently in our pipeline.",
        },
        {
          title: "Monthly recurring",
          description:
            "Set up a small monthly contribution. It is the single most effective way to keep a child in school year-on-year.",
        },
        {
          title: "Sponsor a child",
          description:
            "Cover one specific student's annual expenses end-to-end and receive that student's progress reports.",
        },
        {
          title: "Launch a memorial scholarship",
          description:
            "Honour a loved one. Co-design the criteria. Receive an annual report.",
        },
      ],
    },
    signatureServices: {
      title: "What your donation pays for",
      items: [
        {
          title: "Rs 1,000",
          description:
            "Buys textbooks, uniforms and stationery for one school child for an academic year.",
        },
        {
          title: "Rs 5,000",
          description:
            "Covers an entire year's school fees for a student in a government-aided school.",
        },
        {
          title: "Rs 25,000",
          description:
            "Covers a year of college tuition or hostel for an undergraduate student.",
        },
        {
          title: "Rs 50,000+",
          description:
            "Funds a full memorial scholarship in your loved one's name, with annual reports.",
        },
      ],
    },
    process: {
      title: "Becoming a donor",
      description: "",
      steps: [
        {
          title: "1. Register",
          description:
            "Fill the Join us as Donor form with your contact details and area of interest.",
        },
        {
          title: "2. We call you back",
          description:
            "A team member walks you through the giving options that best fit your goals.",
        },
        {
          title: "3. Donate online or by transfer",
          description:
            "Standard online payment, NEFT/UPI or international bank transfer for NRIs and foreign donors.",
        },
        {
          title: "4. Receipts & reports",
          description:
            "Tax-exemption receipt within 7 working days, plus annual reports on the students you've supported.",
        },
      ],
    },
    portfolioImages: [
      "https://images.unsplash.com/photo-1488998427799-e3362cec87c3?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80",
    ],
  },

  {
    id: "launch-scholarship",
    title: "Launch Scholarship",
    heroImage:
      "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=1600&q=80",
    heroTitle: "LAUNCH A SCHOLARSHIP IN A LOVED ONE'S NAME",
    intro: {
      heading: "LAUNCH A MEMORIAL OR NAMED SCHOLARSHIP",
      subheading:
        "Many of our donors choose to support Aaghaz by offering scholarships in someone's name.",
      description: [
        "A memorial scholarship is one of the most enduring tributes we know. It honours a parent, a sibling, a teacher or a friend by ensuring that, every year, one or more deserving students complete the education they could not otherwise afford.",
        "We design each scholarship together with you — its name, its criteria, its duration — and we report back every year on the lives it has touched.",
      ],
    },
    whyChooseUs: {
      title: "What we co-design with you",
      items: [
        {
          title: "Name & dedication",
          description:
            "The scholarship is named exactly as you wish — \"The XYZ Memorial Scholarship\" or any other phrasing.",
        },
        {
          title: "Eligibility criteria",
          description:
            "Region, age, gender, course, academic threshold — defined together and documented in a simple MOU.",
        },
        {
          title: "Duration & cohort size",
          description:
            "Decide whether the scholarship runs for one year or many, and how many students it covers each year.",
        },
        {
          title: "Reporting cadence",
          description:
            "Annual or semester-wise reports with photographs, results and short notes from the students.",
        },
      ],
    },
    signatureServices: {
      title: "Sample scholarship structures",
      items: [
        {
          title: "Single-year, single-student",
          description:
            "Rs 50,000 covers one student's school or college year end-to-end. Ideal for a personal tribute.",
        },
        {
          title: "Three-year cohort",
          description:
            "Rs 1.5–3 lakh over three years sponsors a student through their full graduation programme.",
        },
        {
          title: "Annual rolling cohort",
          description:
            "A long-term commitment that funds 1–5 students every year in perpetuity in your loved one's name.",
        },
        {
          title: "Subject or region-specific",
          description:
            "Scholarships restricted to girls in STEM, students from a specific district, or first-generation learners — your choice.",
        },
      ],
    },
    process: {
      title: "How to launch a scholarship",
      description: "",
      steps: [
        {
          title: "1. Tell us the story",
          description:
            "Share who you'd like to honour and why. We will listen, and we will not rush you.",
        },
        {
          title: "2. Co-design the scholarship",
          description:
            "We agree on the name, criteria, duration and budget — and capture everything in a short, plain-English MOU.",
        },
        {
          title: "3. Selection of students",
          description:
            "Aaghaz selects students from our verified pipeline who match your criteria.",
        },
        {
          title: "4. Disbursement & annual reporting",
          description:
            "Funds are disbursed directly to the institutions, and you receive a detailed report every year.",
        },
      ],
    },
    portfolioImages: [
      "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1488998427799-e3362cec87c3?auto=format&fit=crop&w=900&q=80",
    ],
  },
];
