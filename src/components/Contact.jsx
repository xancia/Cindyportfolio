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
    <div className="px-9 pb-16 max-w-[520px] mx-auto">
      <h2 className="font-serif text-5xl font-light italic tracking-[-0.02em] text-center mt-8 mb-8">
        Let&apos;s work together.
      </h2>

      {contactTagline && (
        <p className="text-[13px] leading-[1.7] text-ink/55 text-center mb-8">
          {contactTagline}
        </p>
      )}

      <div>
        {rows.map(([label, value, href], i) => (
          <div
            key={label}
            className={`py-5 flex justify-between items-center border-b border-ink/8 ${
              i === 0 ? 'border-t border-ink/8' : ''
            }`}
          >
            <span className="text-[11px] tracking-[0.1em] uppercase text-ink/55">{label}</span>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-serif italic text-base hover:border-b hover:border-ink transition-all"
            >
              {value}
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
