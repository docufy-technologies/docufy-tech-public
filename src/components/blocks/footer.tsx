import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";

function FooterAnchor({ label, href }: { label: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-muted-foreground hover:text-primary block duration-150"
    >
      {label}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="pb-16">
      <div className="mx-auto max-w-5xl px-6">
        <div className="my-8 flex flex-wrap justify-center gap-6">
          <FooterAnchor label="Who We Are" href="https://docufybd.com" />
          <FooterAnchor
            label="Privacy Policy"
            href="https://docufybd.com/privacy-policy"
          />
          <FooterAnchor
            label="Terms And Conditions"
            href="https://docufybd.com/terms-and-conditions"
          />
        </div>
        <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
          <a
            href="https://x.com/docufybd"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X/Twitter"
            className="text-muted-foreground hover:text-primary block"
          >
            <IconBrandX />
          </a>
          <a
            href="https://linkedin.com/company/docufybd"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground hover:text-primary block"
          >
            <IconBrandLinkedin />
          </a>
          <a
            href="https://facebook.com/docufy.bd"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-muted-foreground hover:text-primary block"
          >
            <IconBrandFacebook />
          </a>
          <a
            href="https://instagram.com/docufy_"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-muted-foreground hover:text-primary block"
          >
            <IconBrandInstagram />
          </a>
        </div>
        <span className="text-muted-foreground block text-center text-sm">
          {" "}
          © {new Date().getFullYear()} Docufy Tech, All rights reserved
        </span>
      </div>
    </footer>
  );
}
