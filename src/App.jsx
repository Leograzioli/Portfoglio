
import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HiLightBulb, HiMoon } from 'react-icons/hi'

//components and pages
import AppHeader from './components/AppHeader'
import AppHome from './pages/AppHome'
import AppProjects from './pages/AppProjects'

function App() {

  const [theme, setTheme] = useState(localStorage.getItem('theme'))

  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }, [theme])

  const handleClick = () => {

    if (theme != 'dark') {
      localStorage.setItem('theme', 'dark')
      setTheme(localStorage.getItem('theme'))
    } else if (theme == 'dark') {
      localStorage.setItem('theme', 'light')
      setTheme(localStorage.getItem('theme'))
    }
  }

  return (
    <div className="App bg-primary dark:bg-primary-dark h-screen overflow-auto px-[10%]">
      <div className="max-w-[1300px] mx-auto relative ">

        <button onClick={handleClick} className='bg-primary-dark dark:bg-white text-white dark:text-black py-1 px-2 rounded absolute right-3 top-2'>{theme === "dark" ? <HiLightBulb /> : <HiMoon />}</button>
    
      </div>

      <BrowserRouter>
        <AppHeader />
        <main>
          <Routes>
            <Route path="/" element={<AppHome />} />
            <Route path="/projects" element={<AppProjects />} />
          </Routes>

        </main>

      </BrowserRouter>
    </div>
  )
}

export default App
