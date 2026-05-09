import { createFileRoute } from "@tanstack/react-router";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/faq")({
  component: RouteComponent,
});

const faqSections = [
  {
    title: "General & Service Information",
    items: [
      {
        q: "What core SaaS solutions does Docufy Tech offer to businesses operating under Bangladesh jurisdiction and global markets?",
        a: "Docufy Tech provides six core solutions: SaaS Document Management Platform, E-Signature Workflows, AI-Powered Document Processing, API Access, Compliance Tools, and Technical Support, all built to meet Bangladesh regulatory requirements and global compliance standards.",
      },
      {
        q: "Why should Bangladesh-based businesses choose Docufy Tech over global document management SaaS providers?",
        a: "We operate under Bangladesh jurisdiction with BIAC arbitration for all contracts, eliminating cross-border legal friction for local operations. You get custom pricing tailored to your budget, a 99.9% uptime SLA, AI-powered features built for regional needs, and compliance with both global (GDPR, HIPAA, SOC2) and local data regulations.",
      },
      {
        q: "Are e-signatures executed via Docufy Tech's workflows legally valid under Bangladesh law?",
        a: "Yes, all e-signatures processed through our E-Signature Workflows comply with Bangladesh's Information and Communication Technology (ICT) Act 2006 and relevant digital signature regulations, carrying the same legal validity as handwritten signatures for business and regulatory documents. We provide audit trails and compliance certificates for all executed e-signatures upon request.",
      },
      {
        q: "Does Docufy Tech use rigid tiered pricing, or can I get a custom plan for my business?",
        a: "We offer fully custom pricing based on your business size, document volume, required features (e.g., e-signature, AI extraction, API integrations), and compliance needs. We never lock you into unused features or overcharge for small-scale usage, so you only pay for what your business actually uses.",
      },
    ],
  },
  {
    title: "Pricing & Billing",
    items: [
      {
        q: "Why does Docufy Tech not publish a public pricing page for its services?",
        a: "We use a fully custom pricing model where every quote is tailored to your specific requirements, document volume, user count, compliance needs, and selected support tier. Pricing is only provided after a dedicated requirements gathering session to ensure you only pay for the features and support your business needs, so no public pricing page is available.",
      },
      {
        q: "How do I get a pricing quote for Docufy Tech's SaaS products?",
        a: "We do not have a public pricing page, contact our sales team at info@tech.docufybd.com or via tech.docufybd.com to discuss your specific requirements, and we will create a custom quote aligned to your needs.",
      },
      {
        q: "What information should I prepare before requesting a custom quote from Docufy Tech?",
        a: "Have the following ready: number of user seats needed, which Docufy Tech products you are interested in, your preferred subscription term (monthly, annual, or multi-year), and any enterprise-specific requirements to ensure we apply all eligible discounts to your quote.",
      },
      {
        q: "How does billing work for Docufy Tech's monthly and annual subscription plans?",
        a: "Monthly plans are billed on the same date each month. Annual plans are billed upfront, with a 14-day full refund window after purchase; cancellations after 14 days receive a prorated refund minus a 10% processing fee.",
      },
      {
        q: "Can I change my subscription plan after signing up, and how is billing adjusted?",
        a: "Upgrades take effect immediately and are prorated for the remainder of your current billing cycle. Downgrades take effect at the start of your next billing cycle. All plan changes follow the same late payment and cancellation terms as your original contract.",
      },
      {
        q: "What enterprise-specific discounts and offerings does Docufy Tech provide?",
        a: "We offer enterprise-wide licenses for 500+ seats with a 15% discount, plus 10% off for 3+ year commitment terms. We also offer multi-product discounts: 20% off your second Docufy Tech product, 30% off your third or any additional products.",
      },
      {
        q: "How are multi-product subscriptions billed, and are discounts applied automatically?",
        a: "Multi-product subscriptions are billed per your chosen term (monthly or annual) for each product, with multi-product discounts applied automatically: 20% off your second product, 30% off any additional products beyond the second.",
      },
    ],
  },
  {
    title: "Support & Service Levels",
    items: [
      {
        q: "What support tiers does Docufy Tech offer, and what are the associated response times?",
        a: "We offer three support tiers: Enterprise (24/7 support, 1-hour response time), Professional (48-hour response time), and Free (72-hour response time). Free and Professional tier support is only available during our core service hours, while Enterprise tier includes round-the-clock coverage.",
      },
      {
        q: "What are Docufy Tech's core service hours, and how do they apply to support requests?",
        a: "Our core operational and support hours are 9am-6pm Bangladesh Standard Time (BST), Sunday to Thursday. Free and Professional tier requests are handled exclusively during these hours, while Enterprise tier clients receive 24/7 support including Fridays, Saturdays, and outside core hours.",
      },
      {
        q: "What uptime guarantee does Docufy Tech offer for mission-critical document operations?",
        a: "We target 99.9% uptime for all our SaaS tools, backed by redundant server infrastructure and 24/7 monitoring. You get a guaranteed service level agreement (SLA) for uptime and support response times, so your e-signature workflows, document access, and AI processing never stall during peak business hours.",
      },
      {
        q: "Do Enterprise tier clients receive formal Service Level Agreements (SLAs) for Docufy Tech's services?",
        a: "Yes, all Enterprise tier clients receive a formal SLA outlining 99.9% platform uptime guarantees, 1-hour support response times, 24/7 coverage, and penalties for SLA breaches. SLAs for Professional and Free tiers are defined by their respective support response time commitments, all aligned to Bangladesh jurisdiction and our core service hour policies.",
      },
    ],
  },
  {
    title: "Technical Features & Integration",
    items: [
      {
        q: "How does Docufy Tech's AI-powered OCR and data extraction improve my existing document workflows?",
        a: "Our AI automatically scans and extracts key data from unstructured documents like invoices, contracts, and forms with high accuracy, then generates smart summaries of lengthy files. This cuts manual data entry time by up to 70%, integrates directly with your existing CRMs, ERPs, and cloud storage via our API, and keeps all extracted data fully encrypted and compliant.",
      },
      {
        q: "How does Docufy Tech's AI smart summarization work for complex, lengthy documents?",
        a: "Our AI condenses lengthy contracts, policy documents, and reports into key takeaways in seconds, highlighting critical clauses, deadlines, and action items. It integrates with our OCR tool, so even scanned PDFs get accurate summaries, saving your team hours of manual review time per document.",
      },
      {
        q: "What API access options are available for integrating Docufy Tech's platform with existing business systems?",
        a: "All subscribed clients receive full RESTful API access to integrate our platform with existing ERP, CRM, HR, and custom systems. API documentation and integration technical support are included in all paid tiers, with custom rate limits and endpoint access tailored to your requirements during the scoping process.",
      },
      {
        q: "Can Docufy Tech integrate with our existing CRM, ERP, and cloud storage tools?",
        a: "Yes, our API integrations connect seamlessly with popular CRMs (Salesforce, HubSpot), ERPs (SAP, Oracle), and cloud storage platforms (AWS S3, Google Drive, Dropbox). We also offer custom integration support for niche tools, so your document workflows sync automatically with your existing tech stack without manual data transfers.",
      },
      {
        q: "How does Docufy Tech's e-signature workflow better than standalone e-signature tools?",
        a: "Our e-signature is built directly into our full document management suite, so you can prepare, send, sign, and store documents in one platform. You get built-in audit trails, compliance checks, and automatic filing post-signature, plus AI-powered summaries of signed agreements, unlike standalone tools that require separate storage and compliance setup.",
      },
      {
        q: "How do Docufy Tech's Compliance Tools align with Bangladesh's regulatory requirements for document management?",
        a: "Our Compliance Tools meet all Bangladesh jurisdiction mandates for document retention, audit trails, e-signature validity, and data localization. We also support global compliance standards for cross-border clients, with all processing adhering to Bangladesh's local data protection regulations.",
      },
    ],
  },
  {
    title: "Legal & Compliance",
    items: [
      {
        q: "Which laws govern my use of Docufy Tech's SaaS services?",
        a: "Your use of Docufy Tech's SaaS services is governed exclusively by the laws of Bangladesh, including the Contract Act 1872, Digital Security Act 2023, Information and Communication Technology Act 2006, and Arbitration Act 2001. No other jurisdiction's laws apply to this agreement.",
      },
      {
        q: "How are legal disputes between me and Docufy Tech resolved?",
        a: "All disputes arising from or relating to your use of Docufy Tech's services will be resolved via binding arbitration administered by the Bangladesh International Arbitration Centre (BIAC) in Dhaka, Bangladesh. Arbitration proceedings will be conducted in the English language, in accordance with the Arbitration Act 2001 and BIAC's applicable procedural rules.",
      },
      {
        q: "Can I file a lawsuit against Docufy Tech in a court outside of Bangladesh?",
        a: "No. You expressly agree that any legal proceeding not subject to the mandatory BIAC arbitration requirement must be filed exclusively in the competent courts located in Dhaka, Bangladesh. You waive any objection to the jurisdiction or venue of these Bangladesh courts for such proceedings.",
      },
      {
        q: "What data privacy regulations apply to my personal data if I am an EU or California resident?",
        a: "If you are a resident of the European Union, your personal data is handled in compliance with the General Data Protection Regulation (GDPR). If you are a resident of California, your personal data is handled in compliance with the California Consumer Privacy Act (CCPA). Docufy Tech does not knowingly collect or process personal data from individuals under 13 years of age globally.",
      },
      {
        q: "Who owns the content I upload to Docufy Tech's platform?",
        a: "You retain all intellectual property rights to your User Content uploaded to Docufy Tech's platform. Docufy Tech is granted a limited, non-exclusive license to host, process, and display your User Content solely to provide the SaaS services you have subscribed to, with no transfer of ownership to Docufy Tech.",
      },
      {
        q: "Can Docufy Tech use my User Content for purposes other than providing the subscribed services?",
        a: "No. Docufy Tech's license to your User Content is strictly limited to hosting, processing, and displaying that content solely to deliver the SaaS services you have subscribed to. We will not use your User Content for marketing, training AI models, or any other purpose without your explicit prior written consent.",
      },
      {
        q: "What happens to my data if I terminate my Docufy Tech subscription?",
        a: "Upon termination of your subscription, you have 30 days to export all your User Content and associated personal data from Docufy Tech's systems. After this 30-day period, all your User Content and personal data will be permanently deleted from our active systems, with no retention beyond what is legally required.",
      },
      {
        q: "What is the maximum liability Docufy Tech has to me for any claims related to the services?",
        a: "Docufy Tech's total aggregate liability to you for any claims arising from or relating to the services is capped at the higher of (1) the total fees you paid to Docufy Tech in the 12 months preceding the claim, or (2) $10,000 USD. This cap applies to all liability claims including breach of contract, negligence, or statutory violations, except where mandated otherwise by applicable Bangladesh law.",
      },
      {
        q: "Is Docufy Tech liable for service outages caused by natural disasters or internet disruptions?",
        a: "Docufy Tech is not liable for any failure or delay in providing services caused by events beyond our reasonable control, including but not limited to natural disasters, war, armed conflict, widespread internet outages, or government-imposed restrictions. These force majeure events excuse performance for the duration of the event.",
      },
      {
        q: "Does Docufy Tech comply with Bangladesh's Digital Security Act 2023 and ICT Act 2006?",
        a: "Yes. Docufy Tech operates in full compliance with all applicable Bangladesh digital laws, including the Digital Security Act 2023 and Information and Communication Technology Act 2006. We implement required technical and organizational measures to meet our obligations under these statutes for all users.",
      },
      {
        q: "What data security measures does Docufy Tech have in place beyond standard compliance?",
        a: "We offer Bangladesh-based data residency options for local businesses to meet data sovereignty requirements, use AES-256 encryption for all documents at rest and in transit, and enforce role-based access controls. We also provide BIAC arbitration for any security-related disputes, giving you more legal recourse than overseas providers.",
      },
    ],
  },
  {
    title: "Account Management",
    items: [
      {
        q: "How do I cancel my 14-day free trial before it auto-converts to a paid plan?",
        a: "Submit a cancellation request at least 24 hours before your 14-day free trial ends to avoid auto-conversion to a monthly paid plan. You can cancel via email to info@tech.docufybd.com or through your trial account dashboard.",
      },
      {
        q: "What are the key contract terms I should know before signing a Docufy Tech agreement?",
        a: "All agreements include a 14-day free trial that auto-converts to a monthly plan unless cancelled 24 hours before the trial ends. Contracts auto-renew by default, you must provide 30 days' notice before your renewal date to cancel. Late payments incur a 1.5% monthly fee, and accounts with overdue payments over 60 days are suspended, with data retained for 90 days post-suspension.",
      },
      {
        q: "What happens to my data if my account is suspended for late payment?",
        a: "If your account is suspended after 60 days of overdue payment, we retain your data for 90 days post-suspension. You can reactivate your account within that window by settling all overdue payments plus the 1.5% monthly late fee to regain access.",
      },
      {
        q: "How can I initiate a requirements gathering session to receive a tailored pricing quote for Docufy Tech's services?",
        a: "Contact our team at info@tech.docufybd.com or via our website tech.docufybd.com to schedule a discovery session with our business analysts. We will map your document workflows, compliance obligations, integration needs, and support expectations before providing a no-obligation tailored quote.",
      },
      {
        q: "What compliance certifications does Docufy Tech maintain, and how do they protect my business?",
        a: "We adhere to GDPR, HIPAA, and SOC2 compliance frameworks, with built-in tools to help your team meet these standards for document storage, sharing, and e-signatures. All documents are encrypted at rest and in transit, with full audit trails for every access and edit, so you avoid regulatory penalties and build trust with your own clients.",
      },
    ],
  },
] as const;

function RouteComponent() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-30 mt-10 [&>h1,h2,h3,h4,h5,h6,p,span,ul,li]:font-body!">
      <div className="mb-10 max-w-3xl">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl font-body">
          Frequently Asked Questions
        </h1>
        <p className="mt-4 text-lg">
          Clear answers on pricing, support, compliance, and platform features.
        </p>
      </div>

      <div className="space-y-10">
        {faqSections.map((section) => (
          <div key={section.title} className="space-y-4">
            <h2 className="text-2xl font-medium tracking-tight text-accent">
              {section.title}
            </h2>
            <Accordion type="multiple">
              {section.items.map((item, index) => (
                <AccordionItem key={item.q} value={`${section.title}-${index}`}>
                  <AccordionTrigger className="text-base sm:text-lg hover:no-underline hover:text-primary">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-base sm:text-lg text-muted-foreground">
                      {item.a}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))}
      </div>

      <p className="mt-12 text-base sm:text-lg text-muted-foreground">
        Need a tailored quote? Reach us at{" "}
        <a
          href="mailto:info@tech.docufybd.com"
          className="underline underline-offset-3"
        >
          info@tech.docufybd.com
        </a>{" "}
        .
      </p>
    </section>
  );
}
