export default function Contact({ content }) {
  const { contact, contactTagline } = content

  const rows = [
    contact.email     && ['email',     contact.email,     `mailto:${contact.email}`],
    contact.instagram && ['instagram', contact.instagram,
      `https://instagram.com/${contact.instagram.replace('@', '')}`],
    contact.arena     && ['are.na',    contact.arena,     `https://are.na${contact.arena}`],
    contact.linkedin  && ['linkedin',  contact.linkedin,  `https://linkedin.com${contact.linkedin}`],
  ].filter(Boolean)

  return (
    <div className="px-6 sm:px-9 pb-16 max-w-[560px] mx-auto">
      <h2 className="font-display font-bold text-4xl sm:text-5xl tracking-[-0.02em] text-center mt-10 mb-6">
        let&apos;s work together!
      </h2>

      {contactTagline && (
        <p className="text-[13px] leading-[1.7] text-ink/55 text-center mb-9">
          {contactTagline}
        </p>
      )}

      {contact.email && (
        <div className="text-center mb-10">
          <a
            href={`mailto:${contact.email}`}
            className="inline-block bg-ink text-paper rounded-full px-7 py-3 text-sm font-medium transition-all duration-300 hover:bg-accent hover:-translate-y-0.5"
          >
            email me →
          </a>
        </div>
      )}

      <div>
        {rows.map(([label, value, href], i) => (
          <div
            key={label}
            className={`py-5 flex justify-between items-center border-b border-ink/10 ${
              i === 0 ? 'border-t border-ink/10' : ''
            }`}
          >
            <span className="text-[11px] tracking-[0.12em] uppercase text-ink/45">{label}</span>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium pb-0.5 border-b border-transparent hover:text-accent hover:border-accent transition-colors duration-200"
            >
              {value}
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
