const LINKS = ['work', 'sketchbook', 'about', 'contact']

export default function Nav({ page, navigate, name }) {
  return (
    <nav className="flex justify-between items-baseline px-9 py-5 border-b border-ink/8 sticky top-0 bg-warm z-10">
      <button
        onClick={() => navigate('home')}
        className="font-serif italic text-[22px] tracking-[-0.02em] cursor-pointer"
      >
        {name}
      </button>

      <div className="flex gap-7 text-xs tracking-[0.04em]">
        {LINKS.map(link => {
          const active = page === link || (page === 'project' && link === 'work')
          return (
            <button
              key={link}
              onClick={() => navigate(link)}
              className={`lowercase pb-0.5 border-b transition-colors duration-200 cursor-pointer ${
                active
                  ? 'text-ink border-ink'
                  : 'text-ink/55 border-transparent hover:text-ink hover:border-ink'
              }`}
            >
              {link}
            </button>
          )
        })}
      </div>
    </nav>
  )
}
