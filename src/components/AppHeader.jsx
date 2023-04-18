import { useState } from 'react'
import { FiMenu } from "react-icons/fi"
import { NavLink } from 'react-router-dom'
import lightLogo from '../assets/light-logo.png'
//import darkLogo from '../assets/dark-logo.jpg'

export default function AppHeader() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <header className='py-10'>
        <div className="max-w-[1300px] mx-auto flex flex-wrap justify-between content-center w-full">

          {/* logo */}
          <div>
            <img src={lightLogo} className='h-14 border  border-secondary' alt="" />
          </div>

          <div className='flex items-center'>
            <FiMenu onClick={() => setIsOpen(!isOpen)} className='sm:hidden block dark:text-white border-2 border-secondary dark:border p-1 rounded h-10 w-10 cursor pointer' />
          </div>

          {/* links */}
          <nav className={`${isOpen ? 'block text-center mt-3' : 'hidden'} w-full sm:flex sm:items-center sm:w-auto`}>
            <ul className='sm:flex text-secondary-dark dark:text-secondary font-semibold text-lg'>

              <li>
                <NavLink className={({ isActive }) => isActive ? 'dark:text-white underline text-primary-dark sm:ml-6' : 'sm:ml-6'} to={'/'}>Home</NavLink>
              </li>
              <li>
                <NavLink className={({ isActive }) => isActive ? 'dark:text-white underline text-primary-dark sm:ml-6' : 'sm:ml-6'} to={'/projects'}>Projects</NavLink>
              </li>
              <li>
                <NavLink className={({ isActive }) => isActive ? 'dark:text-white underline text-primary-dark sm:ml-6' : 'sm:ml-6'} to={'/1'}>About me</NavLink>
              </li>

            </ul>

          </nav>

        </div>
      </header>
    </>
  )
}
