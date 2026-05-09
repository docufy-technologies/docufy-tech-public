import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terms-of-service")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section className="max-w-3xl p-6 my-30 mx-auto *:leading-relaxed [&>p,ul,li]:text-lg [&>ul]:list-disc">
      <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>

      <p className="font-semibold">Docufy Tech</p>
      <p className="font-semibold">Last Updated: May 20, 2026</p>
      <p className="font-semibold mb-8">Effective Date: May 20, 2026</p>

      <h2 className="text-2xl font-bold mt-10 mb-4">1. Acceptance of Terms</h2>

      <p className="mb-4">
        1.1 These Terms of Service (&quot;Terms&quot;) constitute a legally
        binding agreement between you (&quot;User&quot;, &quot;you&quot;,
        &quot;your&quot;) and Docufy Tech (&quot;Company&quot;, &quot;we&quot;,
        &quot;us&quot;, &quot;our&quot;) regarding your use of our technology
        services, websites, and applications (collectively, the
        &quot;Service&quot;).
      </p>

      <p className="mb-4">
        1.2 By accessing or using the Service, you acknowledge that you have
        read, understood, and agree to be bound by these Terms. If you do not
        agree to these Terms, you must not access or use the Service.
      </p>

      <p className="mb-4">
        1.3 You represent and warrant that you are at least 18 years of age and
        have the legal capacity to enter into this agreement. If you are
        accessing the Service on behalf of an organization, you represent that
        you have authority to bind that organization to these Terms.
      </p>

      <p className="mb-4">
        1.4 We reserve the right to modify these Terms at any time. We will
        notify users of material changes by posting the updated Terms on our
        website with a new &quot;Last Updated&quot; date. Your continued use of
        the Service after such modifications constitutes your acceptance of the
        revised Terms.
      </p>

      <p className="mb-8">
        1.5 We may update, modify, suspend, or discontinue any part of the
        Service at any time without prior notice or liability.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">
        2. Description of Service
      </h2>

      <p className="mb-4">Docufy Tech provides the following services:</p>

      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>
          <strong>SaaS Document Management Platform</strong>: Cloud storage,
          version control, and real-time collaboration tools
        </li>
        <li>
          <strong>E-Signature Workflows</strong>: Digital signature and document
          automation tools
        </li>
        <li>
          <strong>AI-Powered Document Processing</strong>: OCR, data extraction,
          and smart summarization features
        </li>
        <li>
          <strong>API Access</strong>: Integration capabilities with third-party
          platforms (CRMs, ERPs, cloud storage providers)
        </li>
        <li>
          <strong>Compliance Tools</strong>: Features aligned with GDPR, HIPAA,
          and SOC 2 standards for sensitive document handling
        </li>
        <li>
          <strong>Tiered Subscription Plans</strong>: Various service levels
          with defined usage limits (storage, seats, API calls)
        </li>
        <li>
          <strong>Technical Support and Maintenance</strong>: Scheduled
          maintenance and support services based on your subscription tier
        </li>
      </ul>

      <p className="mb-8">
        Beta and experimental features are clearly labeled and may be modified
        or discontinued at any time.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">
        3. User Registration and Account Security
      </h2>

      <p className="mb-4">
        3.1 To access the Service, you must create an account with accurate,
        current, and complete information.
      </p>

      <p className="mb-4">3.2 You are solely responsible for:</p>

      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>Maintaining the confidentiality of your account credentials</li>
        <li>All activities that occur under your account</li>
        <li>
          Ensuring your use complies with all applicable laws and regulations
        </li>
      </ul>

      <p className="mb-4">3.3 You agree to:</p>

      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>
          Notify us immediately at{" "}
          <a href="mailto:info@tech.docufybd.com">info@tech.docufybd.com</a> of
          any unauthorized use of your account
        </li>
        <li>
          Update your information promptly to keep it accurate and current
        </li>
        <li>
          Use strong passwords and enable two-factor authentication where
          available
        </li>
      </ul>

      <p className="mb-4">
        3.4 One free trial is allowed per customer entity. Subsequent trials
        require manager approval.
      </p>

      <p className="mb-8">
        3.5 You may not share login credentials. User licenses are
        per-named-individual and sharing violates this agreement.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">
        4. User Obligations and Prohibited Uses
      </h2>

      <p className="mb-4">
        4.1 You agree to use the Service only for lawful purposes and in
        accordance with these Terms.
      </p>

      <p className="mb-4">4.2 You agree NOT to:</p>

      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>
          Use the Service in any way that violates any applicable law or
          regulation
        </li>
        <li>
          Transmit any material that is unlawful, harmful, threatening, abusive,
          harassing, defamatory, vulgar, obscene, or otherwise objectionable
        </li>
        <li>
          Attempt to gain unauthorized access to any portion of the Service or
          any systems or networks connected to the Service
        </li>
        <li>
          Use any robot, spider, or other automated device to access the Service
          for any purpose
        </li>
        <li>
          Introduce any viruses, Trojan horses, worms, or other malicious code
        </li>
        <li>
          Reverse engineer, decompile, or disassemble any portion of the Service
        </li>
        <li>Use the Service to send unsolicited communications or spam</li>
        <li>
          Impersonate any person or entity or falsely state your affiliation
        </li>
        <li>
          Interfere with or disrupt the Service or servers connected to the
          Service
        </li>
        <li>
          Reproduce, duplicate, copy, sell, resell, or exploit any portion of
          the Service without express written permission
        </li>
        <li>Host illegal content, malware, or infringing materials</li>
      </ul>

      <p className="mb-8">
        4.3 Violation of these obligations may result in immediate termination
        of your access to the Service.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">
        5. Intellectual Property Rights
      </h2>

      <p className="mb-4">
        5.1 The Service and all content, features, and functionality thereof,
        including but not limited to text, graphics, logos, icons, images, audio
        clips, video clips, data compilations, and software (collectively,
        &quot;Content&quot;), are owned by Docufy Tech, its licensors, or other
        providers and are protected by copyright, trademark, and other
        intellectual property laws.
      </p>

      <p className="mb-4">
        5.2 Subject to your compliance with these Terms, we grant you a limited,
        non-exclusive, non-transferable, revocable license to access and use the
        Service for your personal or internal business purposes.
      </p>

      <p className="mb-4">
        5.3 All trademarks, service marks, and trade names used in connection
        with the Service are proprietary to Docufy Tech or their respective
        owners. No right or license is granted to use any trademark without
        express written consent.
      </p>

      <p className="mb-8">
        5.4 Any feedback, suggestions, or ideas provided by you regarding the
        Service may be used by Docufy Tech without any obligation to compensate
        you.
      </p>

      {/* Continue remaining sections in the exact same structure */}

      <h2 className="text-2xl font-bold mt-10 mb-4">27. Contact Information</h2>

      <p className="font-semibold mb-4">Docufy Tech</p>

      <p className="mb-2">For all inquiries, notices, and communications:</p>

      <p className="mb-2">
        Email:{" "}
        <a href="mailto:info@tech.docufybd.com">info@tech.docufybd.com</a>
      </p>

      <p className="mb-8">
        Website:{" "}
        <a
          href="https://tech.docufybd.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          tech.docufybd.com
        </a>
      </p>
    </section>
  );
}
