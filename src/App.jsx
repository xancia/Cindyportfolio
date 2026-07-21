import { useState, useEffect } from 'react'
import content from './content.js'
import Nav from './components/Nav'
import Home from './components/Home'
import Work from './components/Work'
import Project from './components/Project'
import About from './components/About'
import Contact from './components/Contact'
import Lightbox from './components/Lightbox'

// Every page lives at its own URL hash so the browser back button,
// refresh, and sharing a direct link to a project all work:
//   #/          home
//   #/work      work grid
//   #/about     about
//   #/contact   contact
//   #/project/<id>  a single project
function routeFromHash() {
  const [page, id] = window.location.hash.replace(/^#\/?/, '').split('/')
  if (page === 'project') {
    const project = content.projects.find(p => p.id === id)
    if (project) return { page: 'project', project }
    return { page: 'work', project: null }
  }
  if (['work', 'about', 'contact'].includes(page)) return { page, project: null }
  return { page: 'home', project: null }
}

export default function App() {
  const [route, setRoute] = useState(routeFromHash)
  const [lightbox, setLightbox] = useState(null) // { images: string[], index: number }
  const { page, project } = route

  useEffect(() => {
    function onHashChange() {
      setRoute(routeFromHash())
      setLightbox(null)
      window.scrollTo(0, 0)
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  useEffect(() => {
    const suffix = page === 'project' && project ? project.title : page === 'home' ? 'Portfolio' : page
    document.title = `${content.name} — ${suffix}`
  }, [page, project])

  function navigate(id, data) {
    const hash = id === 'home' ? '#/' : id === 'project' ? `#/project/${data.id}` : `#/${id}`
    if (window.location.hash === hash) {
      window.scrollTo(0, 0)
      return
    }
    window.location.hash = hash
  }

  return (
    <div className="min-h-screen bg-paper text-ink font-sans">
      <Nav page={page} name={content.name} />
      <main>
        <div key={page === 'project' && project ? `project-${project.id}` : page} className="animate-fade">
          {page === 'home'    && <Home    content={content} navigate={navigate} />}
          {page === 'work'    && <Work    content={content} />}
          {page === 'project' && project  && <Project project={project} openLightbox={setLightbox} />}
          {page === 'about'   && <About   content={content} />}
          {page === 'contact' && <Contact content={content} />}
        </div>
      </main>

      {lightbox && (
        <Lightbox
          images={lightbox.images}
          initialIndex={lightbox.index}
          onClose={() => setLightbox(null)}
        />
      )}
    </div>
  )
}
