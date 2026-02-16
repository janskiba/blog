import './App.css'
import { Menu } from './components/Menu'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="min-w-screen min-h-screen bg-linear-to-br  from-gray-900 via-gray-800 to-gray-900">
      <header className="sticky top-0 backdrop-blur-md border-b border-b-slate-600 z-20">
        <div className=" mx-auto  ">
          <Menu />
        </div>
      </header>
      <main className="mx-auto max-w-3xl ">
        <Outlet />
      </main>
    </div>
  )
}

export default App
