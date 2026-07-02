const LINKS = ['work', 'about', 'contact']

export default function Nav({ page, navigate, name }) {
  return (
    <nav className="flex justify-between items-center px-6 sm:px-9 py-5 sticky top-0 bg-paper/85 backdrop-blur-sm z-40">
      <button
        onClick={() => navigate('home')}
        className="font-display font-bold text-[20px] tracking-[-0.01em] cursor-pointer transition-colors duration-200 hover:text-accent"
      >
        {name}
      </button>

      <div className="flex gap-6 sm:gap-8 text-[13px]">
        {LINKS.map(link => {
          const active = page === link || (page === 'project' && link === 'work')
          return (
            <button
              key={link}
              onClick={() => navigate(link)}
              className={`lowercase pb-0.5 border-b-2 transition-colors duration-200 cursor-pointer ${
                active
                  ? 'text-accent border-accent'
                  : 'text-ink/55 border-transparent hover:text-ink'
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
