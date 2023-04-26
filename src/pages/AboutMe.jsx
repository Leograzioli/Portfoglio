import { BsFillArrowDownCircleFill } from "react-icons/bs";
import curriculum from "../assets/leonardo-grazioli-cv.pdf";

export default function AboutMe() {
    return (
        <section id="about" className='max-w-[1200px] mx-auto mt-12 pb-8'>
            <h2 className='text-4xl text-center sm:text-start text-transparent bg-clip-text bg-gradient-to-t from-primary-dark to-secondary dark:bg-gradient-to-b dark:from-white dark:to-secondary font-bold pb-2'>Who am I?</h2>

            <h4 className="text-2xl">  </h4>

            <div className='mt-12 text-center sm:text-start'>
                <a className='px-4 py-2 bg-primary-dark dark:bg-white text-white dark:text-secondary-dark font-semibold rounded-xl hover:transition-all hover:bg-[#1c365a] inline-flex items-center gap-x-2' href={curriculum} download={curriculum} >Download CV <BsFillArrowDownCircleFill className="animate-bounce" /> </a>
            </div>
        </section>
    )
}
