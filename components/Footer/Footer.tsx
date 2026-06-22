import React from "react";
import { CONTACT_EMAIL, socials } from "@/lib/socials.lib";
import SocialIcon from "@/components/ui/SocialIcon";

const quickLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

const Footer = () => {
  return (
    <footer className="w-full border-t border-zinc-200 bg-white px-4 py-12 md:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          {/* Brand */}
          <div className="max-w-sm">
            <a href="#home" className="flex items-center gap-2 text-lg font-semibold tracking-tight text-zinc-900">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-zinc-900 text-sm font-bold text-white">
                YS
              </span>
              Yug Singh
            </a>
            <p className="mt-4 text-sm leading-relaxed text-zinc-500">
              Creating impactful digital experiences through clean code and
              thoughtful design.
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-4 inline-block text-sm font-medium text-zinc-700 transition-colors hover:text-zinc-900"
            >
              {CONTACT_EMAIL}
            </a>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold text-zinc-900">Quick Links</h3>
            <ul className="mt-4 grid grid-cols-2 gap-x-8 gap-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-zinc-500 transition-colors hover:text-zinc-900"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-sm font-semibold text-zinc-900">Connect</h3>
            <div className="mt-4 flex gap-2.5">
              {socials.map((social) => (
                <a
                  key={social.key}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-500 transition-all duration-300 hover:-translate-y-0.5 hover:border-zinc-300 hover:text-zinc-900 hover:shadow-sm"
                >
                  <SocialIcon name={social.key} className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 h-px w-full bg-zinc-200" />

        <div className="mt-6 flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="text-xs text-zinc-500">
            © {new Date().getFullYear()} Yug Singh. All rights reserved.
          </p>
          <p className="text-xs text-zinc-400">
            Built with Next.js, Tailwind CSS &amp; Framer Motion.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
