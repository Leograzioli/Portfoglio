import { useEffect } from "react";
import leo from '../assets/leo.png'
import curriculum from '../assets/leonardo-grazioli-cv.pdf'
import { BsFillArrowDownCircleFill } from 'react-icons/bs'

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
        </>
    )
}
