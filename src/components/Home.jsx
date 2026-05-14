import Img from './Img'

const ASPECT = {
  big:  'aspect-[4/5]',
  wide: 'aspect-video',
  sq:   'aspect-square',
  tall: 'aspect-[3/4]',
}

function groupRows(projects) {
  const featured = projects.filter(p => p.homeSize)
  const rows = []
  let i = 0
  while (i < featured.length) {
    const p = featured[i]
    if (p.homeSize === 'big' || p.homeSize === 'wide') {
      rows.push([p])
      i++
    } else {
      const next = featured[i + 1]
      if (next && (next.homeSize === 'sq' || next.homeSize === 'tall')) {
        rows.push([p, next])
        i += 2
      } else {
        rows.push([p])
        i++
      }
    }
  }
  return rows
}

export default function Home({ content, navigate, openLightbox }) {
  const { projects, name, location } = content
  const years = projects.map(p => p.year)
  const yearRange = `${Math.min(...years)}—${Math.max(...years)}`
  const rows = groupRows(projects)

  return (
    <div className="pb-20">
      {/* Intro strip */}
      <div className="flex justify-between items-baseline px-9 pt-5 pb-7 text-[11px] tracking-[0.14em] uppercase text-ink/55">
        <span>Selected work · {yearRange}</span>
        <button onClick={() => navigate('work')} className="text-ink cursor-pointer">
          Index ↗
        </button>
      </div>

      {/* Reel rows */}
      {rows.map((row, ri) => (
        <div
          key={ri}
          className="grid gap-3.5 px-9 mb-3.5"
          style={{ gridTemplateColumns: `repeat(${row.length}, 1fr)` }}
        >
          {row.map(proj => (
            <div
              key={proj.id}
              className="group cursor-pointer"
              onClick={() => navigate('project', proj)}
            >
              <div className={`overflow-hidden ${ASPECT[proj.homeSize]}`}>
                <Img
                  src={`/art/work/${proj.id}/${proj.cover || proj.images[0]}`}
                  alt={proj.title}
                  className="transition-transform duration-700 ease-[cubic-bezier(.2,.7,.3,1)] group-hover:scale-[1.03]"
                />
              </div>
              <div className="mt-2.5 flex justify-between items-baseline opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="font-serif italic text-[13px]">{proj.title}</span>
                <span className="text-[10px] text-ink/55 tracking-[0.04em]">{proj.tag} · {proj.year}</span>
              </div>
            </div>
          ))}
        </div>
      ))}

      {/* Footer */}
      <div className="mt-14 px-9 text-center">
        <button
          onClick={() => navigate('work')}
          className="font-serif italic text-[18px] border-b border-ink pb-0.5 cursor-pointer"
        >
          See all work, indexed →
        </button>
        <p className="mt-20 text-[11px] tracking-[0.14em] uppercase text-ink/55">
          {name} — © {new Date().getFullYear()} · {location}
        </p>
      </div>
    </div>
  )
}
