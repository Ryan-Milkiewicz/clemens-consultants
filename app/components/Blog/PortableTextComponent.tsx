import type { PortableTextComponents } from "@portabletext/react";

export const portableTextComponents: PortableTextComponents = {
  block: {
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold text-[#1e3557] mt-8 mb-3 pb-2 border-b border-gray-200">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-bold text-[#1e3557] mt-8 mb-3">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-bold text-[#47a4a4] mt-6 mb-2 pl-3 border-l-4 border-[#47a4a4]">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg font-semibold text-[#1e3557] mt-4 mb-2">
        {children}
      </h4>
    ),
    normal: ({ children }) => (
      <p className="text-gray-700 mb-4 leading-relaxed text-base">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-[#c8a96e] pl-4 my-6 text-gray-600 italic">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-outside ps-6 mb-4 text-gray-700 space-y-1">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-outside ps-6 mb-4 text-gray-700 space-y-1">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="leading-relaxed">{children}</li>,
    number: ({ children }) => <li className="leading-relaxed">{children}</li>,
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-bold text-[#1e3557]">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ value, children }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#47a4a4] hover:text-[#1e3557] underline transition-colors"
      >
        {children}
      </a>
    ),
  },
};
