import Img from './Img'

export default function Project({ project: proj, navigate, openLightbox }) {
  const images = (proj.images || []).map(f => `/art/work/${proj.id}/${f}`)

  function open(idx) {
    openLightbox({ images, index: idx })
  }

  return (
    <div className="px-6 sm:px-9 pt-5 pb-16 max-w-6xl mx-auto">
      {/* Back */}
      <button
        onClick={() => navigate('work')}
        className="text-xs text-ink/55 hover:text-accent transition-colors duration-200 mb-6 inline-block cursor-pointer"
      >
        ← back to all work
      </button>

      {/* Header */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 mb-8 items-end">
        <h1 className="font-display font-bold text-4xl sm:text-5xl tracking-[-0.02em] leading-[1.05]">
          {proj.title}
        </h1>
        <div className="text-sm leading-relaxed text-ink/60">
          <div className="flex gap-3 mb-3">
            {[proj.tag, proj.year].map(chip => (
              <span key={chip} className="rounded-full bg-accent-soft text-accent px-3 py-1 text-[11px] tracking-[0.04em]">
                {chip}
              </span>
            ))}
          </div>
          {proj.description && <p>{proj.description}</p>}
        </div>
      </div>

      {/* Hero — image 1 */}
      {images.length >= 1 && (
        <div
          className="aspect-[4/3] overflow-hidden rounded-xl mb-4 cursor-pointer"
          onClick={() => open(0)}
        >
          <Img src={images[0]} alt={proj.title} className="hover:scale-[1.02] transition-transform duration-700 ease-[cubic-bezier(.2,.7,.3,1)]" />
        </div>
      )}

      {/* Plates — images 2–3 */}
      {images.length >= 2 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          {images.slice(1, 3).map((src, i) => (
            <div
              key={i}
              className="aspect-[4/5] overflow-hidden rounded-xl cursor-pointer"
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
          className="aspect-video overflow-hidden rounded-xl mb-4 cursor-pointer"
          onClick={() => open(3)}
        >
          <Img src={images[3]} alt={`${proj.title} 4`} className="hover:scale-[1.02] transition-transform duration-700 ease-[cubic-bezier(.2,.7,.3,1)]" />
        </div>
      )}

      {/* Extra images 5+ */}
      {images.length > 4 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
          {images.slice(4).map((src, i) => (
            <div
              key={i}
              className="aspect-[4/5] overflow-hidden rounded-xl cursor-pointer"
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
