import Image from "next/image";

const FOOTER_LINKS = [
  {
    title: "Services",
    links: [
      { label: "Audit & Assurance", href: "/services/audit" },
      { label: "Tax Services", href: "/services/tax" },
      { label: "Advisory & Consulting", href: "/services/advisory" },
      { label: "Accounting & Outsourcing", href: "/services/accounting" },
      { label: "Wealth Management", href: "/services/wealth" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "Construction & Real Estate", href: "/industries/construction" },
      { label: "Financial Services", href: "/industries/financial" },
      { label: "Healthcare Services", href: "/industries/healthcare" },
      { label: "Human Services", href: "/industries/human" },
      { label: "Nonprofit Organizations", href: "/industries/nonprofit" },
    ],
  },
  {
    title: "About",
    links: [
      { label: "Our Firm", href: "/about" },
      { label: "Leadership", href: "/about/leadership" },
      { label: "Careers", href: "/careers" },
      { label: "News & Insights", href: "/news" },
      { label: "Events", href: "/events" },
    ],
  },
  {
    title: "Client Resources",
    links: [
      { label: "Client Portal", href: "/client-portal" },
      { label: "Submit RFP", href: "/submit-rfp" },
      { label: "Subscribe", href: "/subscribe" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Use", href: "/terms" },
    ],
  },
];

const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Twitter",
    href: "https://twitter.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://youtube.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#1a2b45] text-white font-['Lato',sans-serif]">
      {/* Top CTA Banner */}
      <div className="border-b border-white/10 bg-[#152338]">
        <div className="max-w-7xl mx-auto px-16 py-8 flex items-center justify-between gap-6 max-md:flex-col max-md:px-6 max-md:text-center">
          <div>
            <p className="text-[#c8a96e] text-xs font-bold tracking-widest uppercase mb-1">
              Ready to get started?
            </p>
            <p className="text-white text-xl font-bold">
              Let's talk about how we can help your organization.
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <a
              href="/contact"
              className="bg-[#c8a96e] hover:bg-[#b8945a] text-white text-xs font-bold tracking-widest uppercase px-6 py-3 rounded-full transition-colors duration-200 whitespace-nowrap"
            >
              Contact Us
            </a>
            {/* <a
              href="/submit-rfp"
              className="border border-white/30 hover:border-[#c8a96e] hover:text-[#c8a96e] text-white text-xs font-bold tracking-widest uppercase px-6 py-3 rounded-full transition-colors duration-200 whitespace-nowrap"
            >
              Submit RFP
            </a> */}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-16 py-14 max-md:px-6">
        <div className="grid grid-cols-5 gap-10 max-lg:grid-cols-2 max-md:grid-cols-1">
          {/* Brand Column */}
          <div className="col-span-1 max-lg:col-span-2 max-md:col-span-1">
            <a href="/" className="inline-block mb-5">
              <Image
                src="/clemens-consultants-logo.png"
                alt="Clemens Consultants"
                width={180}
                height={40}
                className="brightness-0 invert"
              />
            </a>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Providing exceptional accounting, tax, and advisory services to
              businesses and individuals across the region.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-[#c8a96e] hover:text-[#c8a96e] transition-colors duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {FOOTER_LINKS.map((col) => (
            <div key={col.title}>
              <h4 className="text-[#c8a96e] text-xs font-bold tracking-widest uppercase mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/60 hover:text-white text-sm transition-colors duration-150"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info Row */}
        <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-3 gap-6 max-md:grid-cols-1">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-[#c8a96e]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="#c8a96e"
                strokeWidth="2"
                className="w-4 h-4"
              >
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
              </svg>
            </div>
            <div>
              <p className="text-white/40 text-xs uppercase tracking-wider mb-1">
                Phone
              </p>
              <a
                href="tel:8779173077"
                className="text-white text-sm font-semibold hover:text-[#c8a96e] transition-colors"
              >
                (518) 960-9227
              </a>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-[#c8a96e]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="#c8a96e"
                strokeWidth="2"
                className="w-4 h-4"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <div>
              <p className="text-white/40 text-xs uppercase tracking-wider mb-1">
                Email
              </p>
              <a
                href="mailto:info@clemensconsultants.com"
                className="text-white text-sm font-semibold hover:text-[#c8a96e] transition-colors"
              >
                info@clemensconsultants.com
              </a>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-[#c8a96e]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="#c8a96e"
                strokeWidth="2"
                className="w-4 h-4"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <div>
              <p className="text-white/40 text-xs uppercase tracking-wider mb-1">
                Office
              </p>
              <p className="text-white text-sm font-semibold">
                54 1st Dyke Rd Unit 2, Averill Park, NY 12018
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-[#152338]">
        <div className="max-w-7xl mx-auto px-16 py-4 flex items-center justify-between max-md:flex-col max-md:gap-2 max-md:px-6 max-md:text-center">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} Clemens Consultants. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Use", "Accessibility"].map((item) => (
              <a
                key={item}
                href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-white/40 hover:text-white/70 text-xs transition-colors duration-150"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
