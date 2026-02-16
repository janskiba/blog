import './App.css'
import { Footer } from './components/Footer'
import { Menu } from './components/Menu'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="w-full min-h-screen bg-linear-to-br  from-gray-900 via-gray-800 to-gray-900">
      <header className="sticky top-0 border-t border-gray-800/70 bg-gray-950/40 backdrop-blur-xl z-20">
          <Menu />
      </header>
      <main className="mx-auto max-w-3xl ">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App
