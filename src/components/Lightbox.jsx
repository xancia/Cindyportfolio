import { useState, useEffect, useRef } from 'react'

export default function Lightbox({ images, initialIndex, onClose }) {
  const [index, setIndex] = useState(initialIndex)
  const swipe = useRef(null)
  const closeRef = useRef(null)

  const prev = () => setIndex(i => (i - 1 + images.length) % images.length)
  const next = () => setIndex(i => (i + 1) % images.length)

  useEffect(() => {
    const onKey = e => {
      if (e.key === 'Escape')     onClose()
      if (e.key === 'ArrowLeft')  setIndex(i => (i - 1 + images.length) % images.length)
      if (e.key === 'ArrowRight') setIndex(i => (i + 1) % images.length)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [images.length, onClose])

  // Quietly load the neighbouring images so arrows/swipes feel instant
  useEffect(() => {
    ;[index - 1, index + 1].forEach(i => {
      const img = new Image()
      img.src = images[(i + images.length) % images.length]
    })
  }, [index, images])

  // Swipe left/right on touch screens
  function onPointerDown(e) {
    swipe.current = e.clientX
  }
  function onPointerUp(e) {
    if (swipe.current == null) return
    const dx = e.clientX - swipe.current
    swipe.current = null
    if (dx > 48) prev()
    else if (dx < -48) next()
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
      onClick={e => e.target === e.currentTarget && onClose()}
    >
      {/* Close */}
      <button
        ref={closeRef}
        onClick={onClose}
        className="absolute top-5 right-7 text-[32px] leading-none text-white/60 hover:text-white transition-colors cursor-pointer"
        aria-label="Close"
      >
        ×
      </button>

      {/* Prev */}
      {images.length > 1 && (
        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-[40px] leading-none text-white/40 hover:text-white transition-colors px-4 py-5 select-none cursor-pointer"
          aria-label="Previous image"
        >
          ‹
        </button>
      )}

      <img
        src={images[index]}
        alt=""
        draggable={false}
        className="max-w-[90vw] max-h-[90vh] object-contain block select-none"
        style={{ touchAction: 'pan-y pinch-zoom' }}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerCancel={() => { swipe.current = null }}
      />

      {/* Next */}
      {images.length > 1 && (
        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-[40px] leading-none text-white/40 hover:text-white transition-colors px-4 py-5 select-none cursor-pointer"
          aria-label="Next image"
        >
          ›
        </button>
      )}

      {/* Counter */}
      {images.length > 1 && (
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/40 text-xs tracking-widest font-mono">
          {index + 1} / {images.length}
        </div>
      )}
    </div>
  )
}
