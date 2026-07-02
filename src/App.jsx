import { useState, useEffect } from 'react'
import content from './content.js'
import Nav from './components/Nav'
import Home from './components/Home'
import Work from './components/Work'
import Project from './components/Project'
import About from './components/About'
import Contact from './components/Contact'
import Lightbox from './components/Lightbox'

export default function App() {
  const [page, setPage] = useState('home')
  const [project, setProject] = useState(null)
  const [lightbox, setLightbox] = useState(null) // { images: string[], index: number }

  useEffect(() => {
    document.title = `${content.name} — Portfolio`
  }, [])

  function navigate(id, data) {
    setPage(id)
    if (id === 'project' && data) setProject(data)
    window.scrollTo(0, 0)
  }

  return (
    <div className="min-h-screen bg-paper text-ink font-sans">
      <Nav page={page} navigate={navigate} name={content.name} />
      <main>
        <div key={page} className="animate-fade">
          {page === 'home'    && <Home    content={content} navigate={navigate} />}
          {page === 'work'    && <Work    content={content} navigate={navigate} />}
          {page === 'project' && project  && <Project project={project} navigate={navigate} openLightbox={setLightbox} />}
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
