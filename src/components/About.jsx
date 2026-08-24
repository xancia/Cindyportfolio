import Img from './Img'
import asset from '../asset.js'

export default function About({ content }) {
  const { name, about, resume } = content

  return (
    <div className="px-6 sm:px-9 py-8 pb-16 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-8 md:gap-12">
      {/* Portrait */}
      <div className="aspect-[4/5] overflow-hidden rounded-2xl max-w-sm">
        <Img
          src={asset(about.portrait || '/art/portrait.jpg')}
          alt={`Portrait of ${name}`}
        />
      </div>

      {/* Content */}
      <div>
        <h2 className="font-display font-bold text-4xl sm:text-5xl tracking-[-0.02em] mb-6">
          Artist Bio<br />
          ₊˚ ✧ ‿︵‿୨୧‿︵‿ ✧ ₊˚
        </h2>

        {(about.bio || []).map((para, i) => (
          <p key={i} className="text-sm leading-[1.8] text-ink/75 max-w-[480px] mb-3.5">{para}</p>
        ))}

        {resume && (
          <a
            href={asset(resume)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 rounded-full px-6 py-2.5 text-sm border border-ink/20 transition-all duration-300 hover:border-accent hover:text-accent hover:-translate-y-0.5"
          >
            download my resume ↓
          </a>
        )}

        {about.education && (
          <>
            <p className="text-[11px] tracking-[0.14em] uppercase text-accent mt-8 mb-2">Education</p>
            <p className="text-sm">{about.education}</p>
          </>
        )}

        {about.recognition && (
          <>
            <p className="text-[11px] tracking-[0.14em] uppercase text-accent mt-7 mb-2">Recognition</p>
            <p className="text-sm">{about.recognition}</p>
          </>
        )}

        {about.clients?.length > 0 && (
          <>
            <p className="text-[11px] tracking-[0.14em] uppercase text-accent mt-7 mb-2.5">Selected Clients</p>
            <div className="grid grid-cols-2 gap-x-6 gap-y-1.5 text-[13px]">
              {about.clients.map((c, i) => <div key={i}>{c}</div>)}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
