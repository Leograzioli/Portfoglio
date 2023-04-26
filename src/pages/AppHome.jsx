import { useEffect } from "react";
import leo from '../assets/leo.png'
import curriculum from '../assets/leonardo-grazioli-cv.pdf'
import { BsFillArrowDownCircleFill, BsBootstrapFill } from 'react-icons/bs'
import { SiHtml5, SiCss3, SiTailwindcss, SiMysql } from 'react-icons/si'
import { IoLogoJavascript } from 'react-icons/io'
import { FaVuejs, FaReact, FaPhp, FaLaravel, FaSass } from 'react-icons/fa'

export default function homepage() {

    useEffect(() => {
        document.title = 'Leo Grazioli - Home';
    }, []);

    return (
        <>
            <section id='profile' className="max-w-[1200px] mx-auto">
                <div className="items-end grid grid-cols-1 lg:grid-cols-2 mt-16 ">

                    <div className="lg:pt-24 order-2 lg:order-1 " >

                        {/* title */}
                        <h2 className="text-transparent bg-clip-text bg-gradient-to-t from-primary-dark to-secondary dark:bg-gradient-to-b dark:from-white dark:to-secondary font-bold text-4xl mt-8 lg:mt-0 sm:text-6xl">Leonardo Grazioli</h2>

                        {/* sub-title and description */}
                        <p className="font-semibold text-transparent bg-clip-text bg-gradient-to-t from-primary-dark to-black dark:from-primary-dark dark:to-white text-lg sm:text-xl mt-3">Full Stack Web Developer </p>
                        <p className="text-secondary-dark text-sm mt-10 dark:text-secondary leading-6 lg:pr-12">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, modi pariatur. Fuga enim maxime tempore ex provident et dolorem necessitatibus explicabo sunt perferendis? Consequuntur suscipit delectus quam asperiores velit cupiditate?
                        </p>

                        {/* download cv button */}
                        <div className='mt-12'>
                            <a className='px-4 py-2 bg-primary-dark dark:bg-white text-white dark:text-secondary-dark font-semibold rounded-xl hover:transition-all hover:bg-[#1c365a] inline-flex items-center gap-x-2 hover:scale-x-105' href={curriculum} download={curriculum} >Download CV <BsFillArrowDownCircleFill className="animate-bounce"/> </a>
                        </div>
                    </div>

                    {/* profile image */}
                    <div className='flex lg:justify-end order-1 lg:order-2'>
                        <img className='h-[335px] w-[335px] sm:h-[440px] sm:w-[440px] object-cover bg-gradient-to-b from-primary-dark to-secondary dark:from-secondary dark:to-primary  rounded-full ' src={leo} alt="profile image" />
                    </div>
                </div>
            </section>

            <section id="skills">
                <div className="max-w-[1200px] mx-auto mt-28">
                    <h2 className="text-4xl text-transparent bg-clip-text bg-gradient-to-t from-primary-dark to-secondary dark:bg-gradient-to-b dark:from-white dark:to-secondary font-semibold ">Skills</h2>

                    {/* skill icons  */}
                    <div className="flex flex-wrap gap-2 text-4xl mt-4 pb-4">

                        <div className="overflow-hidden max-w-[40px] hover:max-w-[120px] transition-[max-width] duration-700 flex items-center p-0.5 dark:bg-white bg-primary-dark text-white dark:text-black rounded">
                            <div>
                                <SiHtml5 className="text-[#e44d26] bg-white p-0.5 rounded" />
                            </div>
                            <div className="text-sm font-semibold text-center px-2">Html</div>
                        </div>

                        <div className="overflow-hidden max-w-[40px] hover:max-w-[120px] transition-[max-width] duration-700 flex items-center p-0.5 dark:bg-white bg-primary-dark text-white dark:text-black rounded">
                            <div>
                                <SiCss3 className="text-[#264de4] bg-white p-0.5 rounded" />
                            </div>
                            <div className="text-sm font-semibold text-center px-2">Css</div>
                        </div>

                        <div className="overflow-hidden max-w-[40px] hover:max-w-[120px] transition-[max-width] duration-700 flex items-center p-0.5 dark:bg-white bg-primary-dark text-white dark:text-black rounded">
                            <div>
                                <BsBootstrapFill className="text-[#673ab7] bg-white  p-0.5 rounded" />
                            </div>
                            <div className="text-sm font-semibold text-center px-2">Bootstrap</div>
                        </div>

                        <div className="overflow-hidden max-w-[40px] hover:max-w-[120px] transition-[max-width] duration-700 flex items-center p-0.5 dark:bg-white bg-primary-dark text-white dark:text-black rounded">
                            <div>
                                <FaSass className="text-[#cf649a] bg-white  p-0.5 rounded" />
                            </div>
                            <div className="text-sm font-semibold text-center px-2">Sass</div>
                        </div>

                        <div className="overflow-hidden max-w-[40px] hover:max-w-[120px] transition-[max-width] duration-700 flex items-center p-0.5 dark:bg-white bg-primary-dark text-white dark:text-black rounded">
                            <div>
                                <SiTailwindcss className="text-[#38bdf8] bg-white p-0.5 rounded" />
                            </div>
                            <div className="text-sm font-semibold text-center px-2">Tailwind</div>
                        </div>

                        <div className="overflow-hidden max-w-[40px] hover:max-w-[120px] transition-[max-width] duration-700 flex items-center p-0.5 dark:bg-white bg-primary-dark text-white dark:text-black rounded">
                            <div>
                                <IoLogoJavascript className="text-black bg-[#f7df1e] p-1.5 rounded-md" />
                            </div>
                            <div className="text-sm font-semibold text-center px-2">Javascript</div>
                        </div>

                        <div className="overflow-hidden max-w-[40px] hover:max-w-[120px] transition-[max-width] duration-700 flex items-center p-0.5 dark:bg-white bg-primary-dark text-white dark:text-black rounded">
                            <div>
                                <FaVuejs className="text-[#41b883] bg-white pt-0.5 rounded" />
                            </div>
                            <div className="text-sm font-semibold text-center px-2">Vue.js</div>
                        </div>

                        <div className="overflow-hidden max-w-[40px] hover:max-w-[120px] transition-[max-width] duration-700 flex items-center p-0.5 dark:bg-white bg-primary-dark text-white dark:text-black rounded">
                            <div>
                                <FaReact className="text-[#5ed3f3] bg-white p-0.5 rounded" />
                            </div>
                            <div className="text-sm font-semibold text-center px-2">React</div>
                        </div>

                        <div className="overflow-hidden max-w-[40px] hover:max-w-[120px] transition-[max-width] duration-700 flex items-center p-0.5 dark:bg-white bg-primary-dark text-white dark:text-black rounded">
                            <div>
                                <FaPhp className="text-[#4d588e] bg-white p-0.5 rounded" />
                            </div>
                            <div className="text-sm font-semibold text-center px-2">Php</div>
                        </div>

                        <div className="overflow-hidden max-w-[40px] hover:max-w-[120px] transition-[max-width] duration-700 flex items-center p-0.5 dark:bg-white bg-primary-dark text-white dark:text-black rounded">
                            <div>
                                <FaLaravel className="text-[#f63424] bg-white p-0.5 rounded" />
                            </div>
                            <div className="text-sm font-semibold text-center px-2">Laravel</div>
                        </div>


                        <div className="overflow-hidden max-w-[40px] hover:max-w-[120px] transition-[max-width] duration-700 flex items-center p-0.5 dark:bg-white bg-primary-dark text-white dark:text-black rounded">
                            <div>
                                <SiMysql className="text-[#005e86] bg-white p-0.5 rounded" />
                            </div>
                            <div className="text-sm font-semibold text-center px-2">MySql</div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
