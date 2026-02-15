import { Outlet } from "react-router-dom"
import { Menu } from "./Menu"

export function Layout() {
  return (
    <div className="min-h-screen bg-gradient-to-br  from-gray-900 via-gray-800 to-gray-900">
      <header className="sticky top-0 backdrop-blur-md border-b border-b-slate-600 z-20">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Menu />
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}