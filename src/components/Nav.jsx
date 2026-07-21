const LINKS = ['work', 'about', 'contact']

export default function Nav({ page, name }) {
  return (
    <nav className="flex justify-between items-center px-6 sm:px-9 py-5 sticky top-0 bg-paper/85 backdrop-blur-sm z-40">
      <a
        href="#/"
        className="font-display font-bold text-[20px] tracking-[-0.01em] cursor-pointer transition-colors duration-200 hover:text-accent"
      >
        {name}
      </a>

      <div className="flex gap-6 sm:gap-8 text-[13px]">
        {LINKS.map(link => {
          const active = page === link || (page === 'project' && link === 'work')
          return (
            <a
              key={link}
              href={`#/${link}`}
              className={`lowercase pb-0.5 border-b-2 transition-colors duration-200 cursor-pointer ${
                active
                  ? 'text-accent border-accent'
                  : 'text-ink/55 border-transparent hover:text-ink'
              }`}
            >
              {link}
            </a>
          )
        })}
      </div>
    </nav>
  )
}
