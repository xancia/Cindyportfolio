import { useState } from 'react'
import Img from './Img'

export default function Work({ content, navigate }) {
  const { projects } = content
  const years = projects.map(p => p.year)
  const yearRange = `${Math.min(...years)}—${Math.max(...years)}`
  const tags = ['All', ...[...new Set(projects.map(p => p.tag))]]
  const [filter, setFilter] = useState('All')

  const filtered = filter === 'All' ? projects : projects.filter(p => p.tag === filter)

  return (
    <div className="px-9 py-9 pb-16">
      {/* Header */}
      <div className="flex justify-between items-baseline mb-8">
        <h2 className="font-serif text-4xl font-light italic tracking-[-0.02em]">
          Work, {yearRange}
        </h2>
        <div className="flex gap-4 text-xs">
          {tags.map(tag => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`pb-0.5 border-b transition-colors duration-200 cursor-pointer ${
                tag === filter
                  ? 'text-ink border-ink'
                  : 'text-ink/55 border-transparent hover:text-ink hover:border-ink'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-3 gap-4">
        {filtered.map(proj => (
          <div
            key={proj.id}
            className="group cursor-pointer"
            onClick={() => navigate('project', proj)}
          >
            <div className="aspect-[4/5] overflow-hidden">
              <Img
                src={`/art/work/${proj.id}/${proj.cover || proj.images[0]}`}
                alt={proj.title}
                className="transition-transform duration-700 ease-[cubic-bezier(.2,.7,.3,1)] group-hover:scale-[1.03]"
              />
            </div>
            <div className="mt-2 flex justify-between items-baseline">
              <span className="font-serif italic text-sm">{proj.title}</span>
              <span className="text-[10px] text-ink/55 tracking-[0.06em]">{proj.tag} · {proj.year}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
