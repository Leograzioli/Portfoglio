import curriculum from '../assets/Leonardo.pdf'
import { BsFillArrowDownCircleFill } from 'react-icons/bs'

export default function DownloadBtn() {
  return (
    <>
        <a className='px-4 py-2 bg-primary-dark hover:bg-black dark:bg-primary dark:hover:bg-white text-white dark:text-secondary-dark font-semibold rounded-xl hover:transition-all inline-flex items-center gap-x-2 hover:translate-y-1' href={curriculum} download={'Leonardo_Grazioli_CV.pdf'} >Download CV <BsFillArrowDownCircleFill className="animate-bounce" /> </a>
    </>
  )
}
