import { useState } from 'react'
import Img from './Img'

export default function Work({ content, navigate }) {
  const { projects } = content
  const tags = ['All', ...[...new Set(projects.map(p => p.tag))]]
  const [filter, setFilter] = useState('All')

  const filtered = filter === 'All' ? projects : projects.filter(p => p.tag === filter)

  return (
    <div className="px-6 sm:px-9 py-8 pb-16 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex flex-wrap justify-between items-end gap-4 mb-9">
        <h2 className="font-display font-bold text-4xl sm:text-5xl tracking-[-0.02em]">
          all work
        </h2>
        <div className="flex flex-wrap gap-2 text-xs">
          {tags.map(tag => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`rounded-full px-3.5 py-1.5 border transition-colors duration-200 cursor-pointer ${
                tag === filter
                  ? 'bg-ink text-paper border-ink'
                  : 'text-ink/55 border-ink/15 hover:border-ink/50 hover:text-ink'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map(proj => (
          <div
            key={proj.id}
            className="group cursor-pointer"
            onClick={() => navigate('project', proj)}
          >
            <div className="aspect-[4/5] overflow-hidden rounded-xl">
              <Img
                src={`/art/work/${proj.id}/${proj.cover || proj.images[0]}`}
                alt={proj.title}
                className="transition-transform duration-700 ease-[cubic-bezier(.2,.7,.3,1)] group-hover:scale-[1.04]"
              />
            </div>
            <div className="mt-2.5 px-0.5 flex justify-between items-baseline">
              <span className="text-sm font-medium transition-colors duration-200 group-hover:text-accent">
                {proj.title}
              </span>
              <span className="text-[10px] text-ink/50 tracking-[0.06em]">{proj.tag} · {proj.year}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
