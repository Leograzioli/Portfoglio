import { BrowserRouter, Route, Routes } from 'react-router-dom'

//components and pages
import AppHeader from './components/AppHeader'
import AppHome from './pages/AppHome'
import AppProjects from './pages/AppProjects'
import React from 'react'
import AppFooter from './components/AppFooter'
import AboutMe from './pages/AboutMe'

function App() {


  return (
    <div className="App bg-primary dark:bg-primary-dark h-screen overflow-y-scroll ">

      <BrowserRouter>

        <header className='px-[10%] w-[calc(100%-17px)] bg-primary dark:bg-primary-dark z-20 fixed shadow-[0_8px_6px_-4px_rgba(246,246,246,1)] dark:shadow-[0_8px_6px_-4px_rgba(28,38,52,1)]'>
          <AppHeader />
        </header>

        <main className='pt-[136px] w-[100%] px-[10%]'>
          <Routes>
            <Route path="/" element={<AppHome />} />
            <Route path="/projects" element={<AppProjects />} />
            <Route path="/about-me" element={<AboutMe />} />
          </Routes>
        </main>

        <footer className='max-w-[100%] bg-primary dark:bg-primary-dark px-[10%]'>
          <AppFooter />
        </footer>

      </BrowserRouter>
    </div>
  )
}

export default App
