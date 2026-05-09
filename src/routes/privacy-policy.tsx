import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy-policy")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section className="max-w-3xl p-6 my-30 mx-auto *:leading-relaxed [&>p,ul,li]:text-lg [&>ul]:list-disc">
      <h1 className="text-4xl font-semibold mb-6">Privacy Policy</h1>
      <p>
        <strong>Docufy Tech</strong>
      </p>

      <p>
        <strong>Effective Date:</strong> May 07, 2026
      </p>
      <p className="mb-8">
        <strong>Last Updated:</strong> May 07, 2026
      </p>

      <h2 className="text-3xl font-semibold mt-12 mb-4">Introduction</h2>

      <p className="mb-4">
        Docufy Tech (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is
        committed to protecting the privacy and confidentiality of our clients
        and users. This privacy policy describes how we collect, use, disclose,
        and safeguard information when you use our technical documentation
        services (Project Overview, Business Requirement Specification, Software
        Requirement Specification, Functional Requirement Document, Product
        Requirement Document) and web development services.
      </p>

      <p className="mb-4">
        This policy applies globally to all clients, including those located
        outside Bangladesh. We comply with applicable privacy laws in your
        jurisdiction where required, in addition to Bangladesh regulations.
      </p>

      <h2 className="text-3xl font-semibold mt-12 mb-4">
        Information We Collect
      </h2>

      <p className="mb-4">
        We collect the following types of information, categorized by source and
        purpose:
      </p>

      <h3 className="text-2xl font-semibold mt-8 mb-4">
        Personal and Contact Information
      </h3>

      <ul className="pl-6 mb-6 space-y-2">
        <li>Name, email address, phone number, and business address</li>
        <li>Job title, company role, and organizational hierarchy details</li>
        <li>Billing and payment information</li>
        <li>
          Government-issued identification (where required for KYC compliance
          under Bangladesh law)
        </li>
      </ul>

      <h3 className="text-2xl font-semibold mt-8 mb-4">
        Technical Documentation and Project Data
      </h3>

      <p className="mb-4">
        Collected during our technical documentation services (BRS, SRS, FRD,
        PRD, Project Overview):
      </p>

      <ul className="pl-6 mb-6 space-y-2">
        <li>
          Project requirements, business process workflows, and stakeholder
          mappings
        </li>
        <li>
          Technical environment details (tech stack, infrastructure specs, API
          endpoints)
        </li>
        <li>User personas, journey maps, and functional specifications</li>
        <li>
          Source code snippets, algorithms, and proprietary technical data
        </li>
        <li>Project timelines, milestones, and approval records</li>
        <li>
          Feedback, revision notes, and communication logs related to
          deliverables
        </li>
      </ul>

      <h3 className="text-2xl font-semibold mt-8 mb-4">
        Web Development Service Data
      </h3>

      <p className="mb-4">Collected during web development projects:</p>

      <ul className="pl-6 mb-6 space-y-2">
        <li>System access credentials (SSH keys, admin passwords, API keys)</li>
        <li>
          Repository access (GitHub/GitLab/Bitbucket OAuth tokens or
          credentials)
        </li>
        <li>
          Cloud infrastructure access (AWS/Azure/GCP credentials, server
          details)
        </li>
        <li>
          Third-party service keys (payment gateways, analytics tools, email
          services)
        </li>
        <li>
          Client customer data (if processing end-user data for consumer-facing
          apps)
        </li>
      </ul>

      <h3 className="text-2xl font-semibold mt-8 mb-4">
        Automatically Collected Information
      </h3>

      <ul className="pl-6 mb-6 space-y-2">
        <li>IP addresses, device information, and browser type/version</li>
        <li>Website visit data (pages viewed, time spent, referring URLs)</li>
        <li>Cookies and similar tracking technologies (see Cookies section)</li>
      </ul>

      <h3 className="text-2xl font-semibold mt-8 mb-4">Communication Data</h3>

      <ul className="pl-6 mb-6 space-y-2">
        <li>Emails, chat messages, video call recordings, and meeting notes</li>
        <li>Support tickets, survey responses, and feedback submissions</li>
      </ul>

      <h2 className="text-3xl font-semibold mt-12 mb-4">
        How We Use Your Information
      </h2>

      <p className="mb-4">
        We use collected information for the following purposes, aligned with
        Bangladesh legal requirements and, where applicable, international
        privacy regulations (e.g., GDPR, CCPA) for foreign clients:
      </p>

      <ol className="list-decimal pl-6 mb-6 space-y-3">
        <li>
          Service Delivery: Create technical documentation deliverables, build
          web development projects, and manage project timelines/milestones.
        </li>
        <li>
          Communication: Coordinate with stakeholders, share project updates,
          and provide customer support.
        </li>
        <li>
          Billing and Compliance: Process payments, issue invoices, and maintain
          financial records per the Income Tax Ordinance 1984 (6-year retention
          requirement).
        </li>
        <li>
          Security and Improvement: Protect our systems, detect fraud, and
          enhance service quality per the Cyber Security Act 2023.
        </li>
        <li>
          Legal Obligations: Comply with the Companies Act 1994, Digital
          Security Act 2018, and other applicable Bangladesh regulations.
        </li>
      </ol>

      <h2 className="text-3xl font-semibold mt-12 mb-4">
        Data Sharing and Disclosure
      </h2>

      <p className="mb-4">
        We do not sell your personal information. We may share data in these
        circumstances:
      </p>

      <h3 className="text-2xl font-semibold mt-8 mb-4">Service Providers</h3>

      <p className="mb-4">
        We engage trusted third-party vendors to support service delivery,
        including:
      </p>

      <ul className="pl-6 mb-6 space-y-2">
        <li>
          Cloud hosting (Google Drive, Microsoft OneDrive, Dropbox Business)
        </li>
        <li>Project management tools (Jira, Trello, Asana, Monday.com)</li>
        <li>
          Communication platforms (Slack, Microsoft Teams, Zoom, Google Meet)
        </li>
        <li>
          Payment processors (Stripe, PayPal, Wise, local banking partners)
        </li>
        <li>Development tools (GitHub, GitLab, Figma, Postman)</li>
      </ul>

      <p className="mb-4">
        All third parties are bound by strict confidentiality agreements aligned
        with our privacy standards.
      </p>

      <h3 className="text-2xl font-semibold mt-8 mb-4">Legal Requirements</h3>

      <p className="mb-4">
        We disclose information when required by Bangladesh law, including:
      </p>

      <ul className="pl-6 mb-6 space-y-2">
        <li>
          Compliance with the Cyber Security Act 2023 and Digital Security Act
          2018
        </li>
        <li>
          Responding to lawful requests from public authorities like the
          Bangladesh Telecommunication Regulatory Commission (BTRC)
        </li>
        <li>Protecting our legal rights, property, or safety</li>
      </ul>

      <h3 className="text-2xl font-semibold mt-8 mb-4">Business Transfers</h3>

      <p className="mb-4">
        In case of merger, acquisition, or sale of company assets, your
        information may be transferred as a business asset, with continued
        privacy protections.
      </p>

      <h3 className="text-2xl font-semibold mt-8 mb-4">
        Cross-Border Transfers
      </h3>

      <p className="mb-4">
        For international clients, we transfer data outside Bangladesh only with
        appropriate safeguards per the Cyber Security Act 2023 and applicable
        foreign privacy laws:
      </p>

      <ul className="pl-6 mb-6 space-y-2">
        <li>
          For EU/EEA clients: Transfers use EU Standard Contractual Clauses
          (SCCs), rely on EU adequacy decisions, or comply with the EU-US Data
          Privacy Framework (DPF) where applicable.
        </li>
        <li>
          For US clients: Comply with the California Consumer Privacy Act (CCPA)
          and other state-level privacy laws.
        </li>
        <li>
          For other jurisdictions: Follow local data transfer regulations and
          conduct Transfer Impact Assessments (TIAs) for high-risk transfers.
        </li>
        <li>
          All transfers use AES-256 encryption for data at rest and TLS 1.3 for
          data in transit.
        </li>
      </ul>

      <h3 className="text-2xl font-semibold mt-8 mb-4">With Your Consent</h3>

      <p className="mb-4">
        We share information with third parties only when you provide explicit
        written consent.
      </p>

      <h2 className="text-3xl font-semibold mt-12 mb-4">
        Confidentiality Provisions for Technical Documentation
      </h2>

      <p className="mb-4">
        Given the sensitive nature of our technical documentation services, we
        maintain strict confidentiality standards:
      </p>

      <ol className="list-decimal pl-6 mb-6 space-y-3">
        <li>
          No Reuse: All client project documentation, requirement
          specifications, and proprietary information are never reused,
          reverse-engineered, or shared with other clients.
        </li>
        <li>
          Personnel Obligations: All employees, contractors, and subcontractors
          with access to client data are bound by enforceable confidentiality
          agreements.
        </li>
        <li>
          Data Segregation: Client data is logically separated from other
          projects to prevent accidental exposure.
        </li>
        <li>
          Return or Destruction: Upon project completion or termination, client
          documentation is either returned or securely destroyed per the
          Contract Act 1872 and our data retention policy.
        </li>
      </ol>

      <h2 className="text-3xl font-semibold mt-12 mb-4">Data Security</h2>

      <p className="mb-4">
        We implement industry-standard technical and organizational measures to
        protect your data per the Cyber Security Act 2023:
      </p>

      <ul className="pl-6 mb-6 space-y-2">
        <li>
          AES-256 encryption for data at rest, TLS 1.3 for data in transit
        </li>
        <li>
          Role-based access controls limiting data access to authorized
          personnel only
        </li>
        <li>
          Quarterly security audits and annual third-party penetration testing
        </li>
        <li>Mandatory data protection training for all staff</li>
        <li>
          24-hour breach notification commitment: We will notify you of any
          confirmed data breach within 24 hours, provide technical forensics
          support, and work alongside your incident response team.
        </li>
      </ul>

      <h2 className="text-3xl font-semibold mt-12 mb-4">User Rights</h2>

      <p className="mb-4">
        Depending on your jurisdiction, you have the following rights under
        Bangladesh law and applicable international privacy regulations (e.g.,
        GDPR, CCPA):
      </p>

      <ol className="list-decimal pl-6 mb-6 space-y-3">
        <li>
          Access: Request a copy of all personal information we hold about you.
        </li>
        <li>
          Correction: Request correction of inaccurate or incomplete data.
        </li>
        <li>
          Deletion: Request deletion of personal information, subject to legal
          retention requirements (6 years for financial records per Income Tax
          Ordinance 1984, or longer if required by your local law).
        </li>
        <li>
          Portability: Request a structured, machine-readable copy of your data
          where technically feasible (mandatory under GDPR for EU clients).
        </li>
        <li>
          Withdraw Consent: Withdraw consent for data processing at any time,
          without affecting prior lawful processing.
        </li>
        <li>
          Opt-Out of Sale/Sharing: For California clients, opt out of the sale
          or sharing of your personal information under CCPA.
        </li>
        <li>
          Audit: Enterprise clients may request third-party audits of our data
          handling practices per our service agreements.
        </li>
      </ol>

      <p className="mb-4">
        To exercise these rights, contact us through our website contact form.
        EU clients may also contact our designated GDPR representative (to be
        appointed upon request).
      </p>

      <h2 className="text-3xl font-semibold mt-12 mb-4">
        Cookies and Tracking
      </h2>

      <p className="mb-4">
        Our website uses cookies for the following purposes:
      </p>

      <ol className="list-decimal pl-6 mb-6 space-y-3">
        <li>Essential Cookies: Required for core website functionality.</li>
        <li>
          Analytics Cookies: Track website usage via tools like Google Analytics
          to improve user experience.
        </li>
        <li>
          Preference Cookies: Remember your settings and customization choices.
        </li>
      </ol>

      <p className="mb-4">
        For users in jurisdictions with cookie consent laws (e.g., EU, UK,
        California), we obtain explicit consent before placing non-essential
        cookies on your device. You can withdraw consent at any time via our
        cookie preference manager.
      </p>

      <p className="mb-4">
        You can manage cookie preferences via your browser settings. Disabling
        certain cookies may limit website functionality.
      </p>

      <h2 className="text-3xl font-semibold mt-12 mb-4">
        Third-Party Services
      </h2>

      <p className="mb-4">
        We integrate with third-party tools that collect information
        independently, including:
      </p>

      <ul className="pl-6 mb-6 space-y-2">
        <li>Cloud storage providers (Google Workspace, Microsoft 365)</li>
        <li>Payment processors (Stripe, PayPal)</li>
        <li>Analytics providers (Google Analytics, HubSpot)</li>
        <li>Development tools (GitHub, Figma)</li>
      </ul>

      <p className="mb-4">
        These parties have their own privacy policies, which we encourage you to
        review.
      </p>

      <h2 className="text-3xl font-semibold mt-12 mb-4">Data Retention</h2>

      <p className="mb-4">
        We retain information for the following periods per Bangladesh law:
      </p>

      <ol className="list-decimal pl-6 mb-6 space-y-3">
        <li>
          Project Documentation: Retained for the project duration plus 3 years,
          unless a longer period is required by contract or law.
        </li>
        <li>
          Financial Records: Retained for 6 years per the Income Tax Ordinance
          1984.
        </li>
        <li>
          Company Records: Retained per the Companies Act 1994 requirements.
        </li>
        <li>
          Website Data: Retained for 1 year, or longer for security
          investigations under the Cyber Security Act 2023.
        </li>
        <li>
          Personal Information: Retained only as long as necessary for the
          purposes collected, unless a longer retention period is legally
          required.
        </li>
      </ol>

      <p className="mb-4">
        Upon retention period expiry, data is securely deleted or anonymized.
      </p>

      <h2 className="text-3xl font-semibold mt-12 mb-4">
        International Data Transfers
      </h2>

      <p className="mb-4">
        For clients outside Bangladesh, we transfer data only with appropriate
        safeguards aligned with both Bangladesh law and your local privacy
        regulations:
      </p>

      <ul className="pl-6 mb-6 space-y-2">
        <li>
          EU/EEA Clients: Transfers comply with GDPR Articles 44-46 via EU
          Standard Contractual Clauses (SCCs), adequacy decisions, or the EU-US
          Data Privacy Framework (DPF). We conduct Transfer Impact Assessments
          (TIAs) for all high-risk transfers.
        </li>
        <li>
          US Clients: Comply with CCPA, CPRA, and other applicable state privacy
          laws. We do not sell personal information as defined under CCPA.
        </li>
        <li>
          Other Jurisdictions: Follow local data transfer rules, including
          obtaining explicit consent for transfers where required.
        </li>
        <li>
          All transfers use AES-256 encryption for data at rest and TLS 1.3 for
          data in transit.
        </li>
        <li>
          Regular compliance audits of cross-border transfer practices, with
          audit reports available to enterprise clients upon request.
        </li>
      </ul>

      <h2 className="text-3xl font-semibold mt-12 mb-4">
        Updates to This Policy
      </h2>

      <p className="mb-4">
        We may update this policy periodically to reflect changes in our
        practices or Bangladesh legal requirements. Material changes will be
        posted on our website with a new &quot;Last Updated&quot; date. We
        encourage you to review this policy regularly.
      </p>

      <h2 className="text-3xl font-semibold mt-12 mb-4">
        Governing Law and Jurisdiction
      </h2>

      <p className="mb-4">
        This privacy policy is primarily governed by the laws of Bangladesh. Any
        disputes arising from this policy are subject to the exclusive
        jurisdiction of the courts of Bangladesh, except where mandatory
        provisions of your local privacy laws (e.g., GDPR, CCPA) require
        otherwise. In such cases, the mandatory local provisions will apply to
        the extent required by law.
      </p>

      <h2 className="text-3xl font-semibold mt-12 mb-4">Legal Disclaimer</h2>

      <p className="mb-4">
        This privacy policy is provided for informational purposes only and does
        not constitute formal legal advice. While we have aligned this document
        with applicable Bangladesh laws including the Cyber Security Act 2023,
        Digital Security Act 2018, Right to Information Act 2009, and
        international privacy regulations (GDPR, CCPA) for foreign clients, you
        should review it with a qualified legal professional in your
        jurisdiction before implementation.
      </p>

      <p className="mb-4">
        Docufy Tech is not liable for any damages arising from the use of this
        policy template without proper legal review and customization to your
        specific business circumstances and applicable jurisdictions.
      </p>
    </section>
  );
}
