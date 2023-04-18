import { BsLinkedin, BsGithub, BsFacebook, BsTwitter} from "react-icons/bs"
import leo from '../assets/leo.png'
import curriculum from '../assets/leonardo-grazioli-cv.pdf'


export default function homepage() {

    return (
        <>
            <section id='profile' className="max-w-[1300px] mx-auto">
                <div className="items-end grid grid-cols-1 lg:grid-cols-2 mt-16 ">

                    <div className="lg:pt-24 order-2 lg:order-1 " >

                        <h2 className="text-transparent bg-clip-text bg-gradient-to-t from-primary-dark to-secondary dark:bg-gradient-to-b dark:from-white dark:to-secondary font-bold text-4xl mt-8 lg:mt-0 sm:text-6xl">Leonardo Grazioli</h2>
                        <p className="font-semibold text-transparent bg-clip-text bg-gradient-to-t from-primary-dark to-black dark:from-primary-dark dark:to-white text-lg sm:text-xl mt-3">Full Stack Web Developer </p>
                        <p className="text-secondary-dark text-sm mt-10 dark:text-secondary leading-6 lg:pr-12">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, modi pariatur. Fuga enim maxime tempore ex provident et dolorem necessitatibus explicabo sunt perferendis? Consequuntur suscipit delectus quam asperiores velit cupiditate?
                        </p>

                        {/* <div className='flex justify-around text-center dark:bg-white bg-primary-dark text-white dark:text-primary-dark  p-2 mt-12 rounded-md font-semibold'>
                            <div className='mr-2'>#Html</div>
                            <div className='mr-2'>#Css</div>
                            <div className='mr-2'>#Javascript</div>
                            <div className='mr-2'>#PHP</div>

                        </div> */}
                        <div className='mt-12'>
                            <a className='px-4 py-2 bg-primary-dark dark:bg-white text-white dark:text-secondary-dark font-semibold rounded-xl hover:transition-all hover:bg-[#1c365a]' href={curriculum} download={curriculum} >Download CV</a>
                        </div>

                    </div>

                    <div className='flex lg:justify-end order-1 lg:order-2'>
                        <img className='h-[335px] w-[335px] sm:h-[440px] sm:w-[440px] object-cover bg-gradient-to-b from-primary-dark to-secondary dark:from-secondary dark:to-primary  rounded-full ' src={leo} alt="profile image" />
                    </div>
                </div>
            </section>

            <section id='social-links' className='max-w-[1300px] mx-auto mt-20'>

                <ul className='dark:text-white text-primary-dark text-2xl flex justify-end items-center gap-x-6'>

                    <li className='hover:transition-all hover:scale-125 hover:text-[#0a66c2]'>
                        <a href="https://www.linkedin.com/in/leonardo-grazioli" title='https://www.linkedin.com/in/leonardo-grazioli' target="_blank">
                            <BsLinkedin />
                        </a>
                    </li>

                    <li className='hover:transition-all hover:scale-125 hover:text-[#24292f] dark:hover:text-secondary'>
                        <a href="https://github.com/Leograzioli" title='https://github.com/Leograzioli' target="_blank">
                            <BsGithub />
                        </a>
                    </li>

                    <li className='hover:transition-all hover:scale-125 hover:text-[#1877f2]'>
                        <a href="https://www.facebook.com/leo.grazioli" title='https://www.facebook.com/leo.grazioli' target="_blank">
                            <BsFacebook />
                        </a>
                    </li>

                    <li className='hover:transition-all hover:scale-125 hover:text-[#1d9bf0]'>
                        <a href="https://twitter.com/Leograzioli" title='https://twitter.com/Leograzioli' target="_blank">
                            <BsTwitter />
                        </a>
                    </li>
                </ul>

            </section>

            <div className='h-[1px] max-w-[1300px] mx-auto bg-primary-dark dark:bg-primary mt-3'></div>

        </>
    )
}
