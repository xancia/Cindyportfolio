import Img from './Img'

export default function About({ content }) {
  const { name, about } = content
  const firstName = name.split(' ')[0]

  return (
    <div className="px-9 py-9 pb-16 grid grid-cols-[1fr_1.5fr] gap-12">
      {/* Portrait */}
      <div className="aspect-[4/5] overflow-hidden">
        <Img
          src={about.portrait || '/art/portrait.jpg'}
          alt={`Portrait of ${name}`}
        />
      </div>

      {/* Content */}
      <div>
        <h2 className="font-serif text-4xl font-light italic tracking-[-0.02em] mb-6">
          Hello — I&apos;m {firstName}.
        </h2>

        {(about.bio || []).map((para, i) => (
          <p key={i} className="text-sm leading-[1.7] opacity-85 max-w-[460px] mb-3.5">{para}</p>
        ))}

        {about.education && (
          <>
            <p className="text-[11px] tracking-[0.12em] uppercase text-ink/55 mt-7 mb-2.5">Education</p>
            <p className="text-sm">{about.education}</p>
          </>
        )}

        {about.recognition && (
          <>
            <p className="text-[11px] tracking-[0.12em] uppercase text-ink/55 mt-7 mb-2.5">Recognition</p>
            <p className="text-sm">{about.recognition}</p>
          </>
        )}

        {about.clients?.length > 0 && (
          <>
            <p className="text-[11px] tracking-[0.12em] uppercase text-ink/55 mt-7 mb-2.5">Selected Clients</p>
            <div className="grid grid-cols-2 gap-x-6 gap-y-1.5 text-[13px] font-serif italic">
              {about.clients.map((c, i) => <div key={i}>{c}</div>)}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
