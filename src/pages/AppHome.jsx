import { useEffect } from "react";
import leo from '../assets/leo.png'
import curriculum from '../assets/leonardo-grazioli-cv.pdf'
import { BsFillArrowDownCircleFill, BsBootstrapFill } from 'react-icons/bs'
import { SiHtml5, SiCss3, SiTailwindcss, SiMysql } from 'react-icons/si'
import { IoLogoJavascript } from 'react-icons/io'
import { FaVuejs, FaReact, FaPhp, FaLaravel } from 'react-icons/fa'

export default function homepage() {

    useEffect(() => {
        document.title = 'Leo Grazioli - Home';
    }, []);

    return (
        <>
            <section id='profile' className="max-w-[1200px] mx-auto">
                <div className="items-end grid grid-cols-1 lg:grid-cols-2 mt-16 ">

                    <div className="lg:pt-24 order-2 lg:order-1 " >

                        <h2 className="text-transparent bg-clip-text bg-gradient-to-t from-primary-dark to-secondary dark:bg-gradient-to-b dark:from-white dark:to-secondary font-bold text-4xl mt-8 lg:mt-0 sm:text-6xl">Leonardo Grazioli</h2>
                        <p className="font-semibold text-transparent bg-clip-text bg-gradient-to-t from-primary-dark to-black dark:from-primary-dark dark:to-white text-lg sm:text-xl mt-3">Full Stack Web Developer </p>
                        <p className="text-secondary-dark text-sm mt-10 dark:text-secondary leading-6 lg:pr-12">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, modi pariatur. Fuga enim maxime tempore ex provident et dolorem necessitatibus explicabo sunt perferendis? Consequuntur suscipit delectus quam asperiores velit cupiditate?
                        </p>

                        <div className='mt-12'>
                            <a className='px-4 py-2 bg-primary-dark dark:bg-white text-white dark:text-secondary-dark font-semibold rounded-xl hover:transition-all hover:bg-[#1c365a] inline-flex items-center gap-x-2' href={curriculum} download={curriculum} >Download CV <BsFillArrowDownCircleFill /> </a>
                        </div>

                    </div>

                    <div className='flex lg:justify-end order-1 lg:order-2'>
                        <img className='h-[335px] w-[335px] sm:h-[440px] sm:w-[440px] object-cover bg-gradient-to-b from-primary-dark to-secondary dark:from-secondary dark:to-primary  rounded-full ' src={leo} alt="profile image" />
                    </div>
                </div>
            </section>
            <section id="study">
                <div className="max-w-[1200px] mx-auto mt-28">
                    <h2 className="text-4xl text-transparent bg-clip-text bg-gradient-to-t from-primary-dark to-secondary dark:bg-gradient-to-b dark:from-white dark:to-secondary font-semibold ">Skills</h2>
                    <div className="flex flex-wrap gap-1 text-4xl mt-4 pb-4">
                        <SiHtml5 className="text-[#e44d26] bg-white p-0.5 rounded" />
                        <SiCss3 className="text-[#264de4] bg-white p-0.5 rounded" />
                        <BsBootstrapFill className="text-[#673ab7] bg-white border p-0.5 rounded" />
                        <SiTailwindcss className="text-[#38bdf8] bg-white p-0.5 rounded" />
                        <IoLogoJavascript className="text-black bg-[#f7df1e] p-0.5 border-4 rounded" />
                        <FaVuejs className="text-[#41b883] bg-white pt-0.5 rounded" />
                        <FaReact className="text-[#5ed3f3] bg-white t-0.5 rounded" />
                        <FaPhp className="text-[#4d588e] bg-white p-0.5 rounded" />
                        <FaLaravel className="text-[#f63424] bg-white p-0.5 rounded" />
                        <SiMysql className="text-[#005e86] bg-white p-0.5 rounded" />
                        
                    </div>
                </div>
            </section>
        </>
    )
}
