import Img from './Img'

export default function Project({ project: proj, navigate, openLightbox }) {
  const images = (proj.images || []).map(f => `/art/work/${proj.id}/${f}`)

  function open(idx) {
    openLightbox({ images, index: idx })
  }

  return (
    <div className="px-9 pt-6 pb-16">
      {/* Back */}
      <button
        onClick={() => navigate('work')}
        className="text-xs text-ink/55 hover:text-ink transition-colors duration-200 mb-6 inline-block cursor-pointer"
      >
        ← back to work
      </button>

      {/* Header */}
      <div className="grid grid-cols-2 gap-10 mb-8 items-end">
        <h1 className="font-serif text-5xl font-light italic tracking-[-0.02em] leading-[1.05]">
          {proj.title}
        </h1>
        <div className="text-xs leading-relaxed text-ink/55">
          <div className="flex gap-6 mb-3 text-[11px] tracking-[0.06em] uppercase">
            <span>{proj.tag}</span>
            <span>{proj.year}</span>
          </div>
          {proj.description && <p>{proj.description}</p>}
        </div>
      </div>

      {/* Hero — image 1 */}
      {images.length >= 1 && (
        <div
          className="aspect-[4/3] overflow-hidden mb-3 cursor-pointer"
          onClick={() => open(0)}
        >
          <Img src={images[0]} alt={proj.title} className="hover:scale-[1.02] transition-transform duration-700 ease-[cubic-bezier(.2,.7,.3,1)]" />
        </div>
      )}

      {/* Plates — images 2–3 */}
      {images.length >= 2 && (
        <div className="grid grid-cols-2 gap-3 mb-3">
          {images.slice(1, 3).map((src, i) => (
            <div
              key={i}
              className="aspect-[4/5] overflow-hidden cursor-pointer"
              onClick={() => open(i + 1)}
            >
              <Img src={src} alt={`${proj.title} ${i + 2}`} className="hover:scale-[1.02] transition-transform duration-700 ease-[cubic-bezier(.2,.7,.3,1)]" />
            </div>
          ))}
        </div>
      )}

      {/* Wide — image 4 */}
      {images.length >= 4 && (
        <div
          className="aspect-video overflow-hidden mb-3 cursor-pointer"
          onClick={() => open(3)}
        >
          <Img src={images[3]} alt={`${proj.title} 4`} className="hover:scale-[1.02] transition-transform duration-700 ease-[cubic-bezier(.2,.7,.3,1)]" />
        </div>
      )}

      {/* Extra images 5+ */}
      {images.length > 4 && (
        <div className="grid grid-cols-3 gap-3 mt-3">
          {images.slice(4).map((src, i) => (
            <div
              key={i}
              className="aspect-[4/5] overflow-hidden cursor-pointer"
              onClick={() => open(i + 4)}
            >
              <Img src={src} alt={`${proj.title} ${i + 5}`} className="hover:scale-[1.02] transition-transform duration-700 ease-[cubic-bezier(.2,.7,.3,1)]" />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
