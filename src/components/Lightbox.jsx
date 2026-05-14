import { useState, useEffect } from 'react'

export default function Lightbox({ images, initialIndex, onClose }) {
  const [index, setIndex] = useState(initialIndex)

  useEffect(() => {
    const prev = () => setIndex(i => (i - 1 + images.length) % images.length)
    const next = () => setIndex(i => (i + 1) % images.length)

    const onKey = e => {
      if (e.key === 'Escape')     onClose()
      if (e.key === 'ArrowLeft')  prev()
      if (e.key === 'ArrowRight') next()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [images.length, onClose])

  return (
    <div
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
      onClick={e => e.target === e.currentTarget && onClose()}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-5 right-7 text-[32px] leading-none text-white/60 hover:text-white transition-colors"
        aria-label="Close"
      >
        ×
      </button>

      {/* Prev */}
      <button
        onClick={() => setIndex(i => (i - 1 + images.length) % images.length)}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-[40px] leading-none text-white/40 hover:text-white transition-colors px-4 py-5 select-none"
        aria-label="Previous"
      >
        ‹
      </button>

      <img
        src={images[index]}
        alt=""
        className="max-w-[90vw] max-h-[90vh] object-contain block"
      />

      {/* Next */}
      <button
        onClick={() => setIndex(i => (i + 1) % images.length)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-[40px] leading-none text-white/40 hover:text-white transition-colors px-4 py-5 select-none"
        aria-label="Next"
      >
        ›
      </button>

      {/* Counter */}
      {images.length > 1 && (
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/40 text-xs tracking-widest font-mono">
          {index + 1} / {images.length}
        </div>
      )}
    </div>
  )
}
