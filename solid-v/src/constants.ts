type QuestionnaireItems = { question: string; answer: string }[];
type FAQItems = { category: string; questionnaire: QuestionnaireItems }[];

export const faqItems: FAQItems = [
  {
    category: "About The Business",
    questionnaire: [
      {
        question: "What is Docufy Tech?",
        answer:
          "Docufy Tech is the technological services subsidiary and operating brand of Docufy.",
      },
      {
        question: "What kind of clients do you work with?",
        answer:
          "We work with international businesses and enterprise clients looking for a reliable technology partner.",
      },
      {
        question: "What makes Docufy Tech different?",
        answer:
          "We focus on two trust pillars throughout every project, delivery integrity and research-driven execution.",
      },
    ],
  },
  {
    category: "Services",
    questionnaire: [
      {
        question: "What services do you offer?",
        answer:
          "Our services include new website builds, bug fixes, website migration, UI/UX redesign, performance optimization, web application development, and requirement documents like Project/Product Overviews, BRDs, PRDs, FRDs, and SRSs.",
      },
      {
        question: "Do you only build websites?",
        answer:
          "No. We also support product discovery, documentation, planning, and related technical work alongside web development.",
      },
      {
        question: "Do you provide project overviews and documentation?",
        answer:
          "Yes. We create project or product overviews, BRDs, PRDs, FRDs, and SRSs when those deliverables are part of the agreed scope.",
      },
    ],
  },
  {
    category: "Process and Delivery",
    questionnaire: [
      {
        question: "How do you approach a project?",
        answer:
          "Every project starts with research so the solution matches the business goal, not just the brief.",
      },
      {
        question: "What do you mean by delivery integrity?",
        answer:
          "What we promise is what we build, with scope, expectations, and timelines kept aligned throughout the project.",
      },
      {
        question: "Will my request become a binding project immediately?",
        answer:
          "No. A quote request, demo request, email, or Calendly booking is only an invitation to discuss a possible engagement.",
      },
    ],
  },
  {
    category: "Ownership and Security",
    questionnaire: [
      {
        question: "Do I own the work you deliver?",
        answer:
          "Yes. You receive the complete source code and handoff materials so your team can maintain, extend, and own it without dependency.",
      },
      {
        question: "Is security considered during projects?",
        answer:
          "Yes. Security is considered from the start with practical safeguards aligned to project scope.",
      },
      {
        question: "Can I send confidential files or sensitive information?",
        answer:
          "Only if we request it or a separate confidentiality agreement is in place. Otherwise, please avoid sharing sensitive data.",
      },
    ],
  },
  {
    category: "Privacy and Legal",
    questionnaire: [
      {
        question: "How do you handle personal data?",
        answer:
          "We handle personal data according to our Privacy Policy and use it to respond to enquiries, schedule meetings, manage records, and deliver services.",
      },
      {
        question: "Do you sell my personal data?",
        answer: "No. We do not sell personal data.",
      },
      {
        question: "How long do you keep enquiry data?",
        answer:
          "If no formal engagement begins, preliminary enquiry data is generally retained for no longer than 90 days after discussions conclude.",
      },
    ],
  },
  {
    category: "Contact and Meetings",
    questionnaire: [
      {
        question: "How can I contact Docufy Tech?",
        answer:
          "You can reach us at info@tech.docufybd.com or through the booking link on the website.",
      },
      {
        question: "How do I book a meeting?",
        answer:
          "Use the Calendly link on the site to schedule a meeting with our team.",
      },
      {
        question: "What time zone do you use for meetings?",
        answer:
          "Meeting times and response windows are interpreted in Dhaka, Bangladesh time, GMT+6, unless stated otherwise.",
      },
    ],
  },
] as const;
