import Header from '@/components/header'
import Sidebar from '@/components/sidebar'
import Hero from '@/components/hero'
import Projects from '@/components/projects'
import Skills from '@/components/skills'
import Contact from '@/components/contact'
import BlogList from '@/components/blog-list'

export default function Home() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <Hero />
          <Projects />
          <Skills />
          <section className="mb-8">
            <h2 className="text-3xl font-bold mb-4">Latest Blog Posts</h2>
            <BlogList />
          </section>
          <Contact />
        </main>
      </div>
    </div>
  )
}

