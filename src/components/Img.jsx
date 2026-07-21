import { useState } from 'react'

export default function Img({ src, alt, className = '', eager = false }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div className="w-full h-full bg-placeholder flex items-center justify-center p-4 text-center text-[10px] tracking-[0.1em] uppercase text-ink/55">
        {alt || 'image'}
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt || ''}
      onError={() => setFailed(true)}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      className={`w-full h-full object-cover ${className}`}
    />
  )
}
