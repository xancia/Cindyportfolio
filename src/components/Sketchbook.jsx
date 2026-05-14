import Img from './Img'

export default function Sketchbook({ content, openLightbox }) {
  const { sketchbook = [], sketchbookIntro } = content
  const images = sketchbook.map(s => `/art/sketchbook/${s.file}`)

  return (
    <div className="px-9 py-9 pb-16">
      {/* Header */}
      <div className="max-w-lg mb-8">
        <p className="text-[11px] tracking-[0.14em] uppercase text-ink/55 mb-3">
          Personal &amp; in-progress
        </p>
        <h1 className="font-serif text-[44px] font-light italic tracking-[-0.02em] leading-[1.05] mb-3.5">
          Sketchbook.
        </h1>
        <p className="text-[13px] leading-relaxed text-ink/55">
          {sketchbookIntro || 'A loose archive of personal work.'}
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-4 gap-2">
        {sketchbook.map((item, i) => (
          <div
            key={i}
            className="group cursor-pointer"
            onClick={() => openLightbox({ images, index: i })}
          >
            <div className="aspect-square overflow-hidden">
              <Img
                src={`/art/sketchbook/${item.file}`}
                alt={`Sketchbook ${i + 1}`}
                className="transition-transform duration-500 ease-[cubic-bezier(.2,.7,.3,1)] group-hover:scale-[1.05]"
              />
            </div>
            <p className="mt-1.5 text-[10px] tracking-[0.05em] text-ink/55 font-mono">
              {String(i + 1).padStart(2, '0')} · {item.year}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
