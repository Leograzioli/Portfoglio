import { BrowserRouter, Route, Routes } from 'react-router-dom'

//components and pages
import AppHeader from './components/AppHeader'
import AppHome from './pages/AppHome'
import AppProjects from './pages/AppProjects'
import React from 'react'
import AppFooter from './components/AppFooter'

function App() {


  return (
    <div className="App bg-primary dark:bg-primary-dark h-screen overflow-auto ">

      <BrowserRouter>

        <header className='px-[10%]'>
          <AppHeader />
        </header>

        <main className='overflow-auto h-screen px-[10%]'>
          <Routes>
            <Route path="/" element={<AppHome />} />
            <Route path="/projects" element={<AppProjects />} />
          </Routes>
        </main>

        <footer className='absolute w-[calc(100%-17px)] bottom-0 right-0 left-0 bg-primary dark:bg-primary-dark shadow-[0_-10px_10px_-5px_rgba(246,246,246,1)] dark:shadow-[0_-10px_10px_-5px_rgba(28,38,52,1)]'>
          <AppFooter />
        </footer>

      </BrowserRouter>
    </div>
  )
}

export default App
