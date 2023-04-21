import { BrowserRouter, Route, Routes } from 'react-router-dom'

//components and pages
import AppHeader from './components/AppHeader'
import AppHome from './pages/AppHome'
import AppProjects from './pages/AppProjects'
import React from 'react'
import AppFooter from './components/AppFooter'

function App() {


  return (
    <div className="App bg-primary dark:bg-primary-dark h-screen overflow-y-scroll ">

      <BrowserRouter>

        <header className='px-[10%] w-[calc(100%-17px)] bg-primary dark:bg-primary-dark z-10 fixed'>
          <AppHeader />
        </header>

        <main className='pt-[136px] w-[calc(100%-17px)] px-[10%]'>
          <Routes>
            <Route path="/" element={<AppHome />} />
            <Route path="/projects" element={<AppProjects />} />
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
