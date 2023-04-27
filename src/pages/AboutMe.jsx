import { BsFillArrowDownCircleFill, BsFillEnvelopeFill } from "react-icons/bs";
import curriculum from "../assets/leonardo-grazioli-cv.pdf";
import leo from '../assets/leo.png'
import { useState } from "react";

export default function AboutMe() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <section id="about" className='max-w-[1200px] mx-auto mt-12'>
            <h4 className="text-xl text-center text-primary-dark dark:text-secondary font-semibold "> A bit more about me </h4>

            {/* profile image */}
            <div className='flex justify-center mt-8'>
                <img className='h-[315px] w-[315px] sm:h-[410px] sm:w-[410px] object-cover bg-gradient-to-b from-primary-dark to-secondary dark:from-secondary dark:to-primary  rounded-full ' src={leo} alt="profile image" />
            </div>

            <h2 className='text-6xl text-center  text-transparent bg-clip-text bg-gradient-to-t from-primary-dark to-secondary dark:bg-gradient-to-b dark:from-white dark:to-secondary font-bold mt-8'>Who am I?</h2>

            {/* description */}
            <p className="text-primary-dark dark:text-secondary text-center mt-8 px-12">
                Hi, im Leonardo Grazioli and I'm a Full-stack Web Developer. <br />

                I was born on Brasil and got the italian citizenship when I was 19 years old and since then I live on Italy.
            </p>

            <h2 className='text-2xl text-center  text-transparent bg-clip-text bg-gradient-to-t from-primary-dark to-secondary dark:bg-gradient-to-b dark:from-white dark:to-secondary font-bold mt-8 pb-4'>Why I decided to start programming?</h2>


            <p className="text-primary-dark dark:text-secondary text-center  px-12">

                After 8 years of experience as warehouse specialist i decided to do something t i always loved.
                the passion for video-games and technology pushed me to dive into the development world. So i started from <span className="font-bold text-black dark:text-white">Html</span> and  <span className="font-bold text-black dark:text-white">Css</span> with <span className="font-bold text-black dark:text-white">Bootstrap, Tailwind</span> and <span className="font-bold text-black dark:text-white">Sass</span>  <br />
                and after a short time i started <span className="font-bold text-black dark:text-white">Javascript</span>  with <span className="font-bold text-black dark:text-white">Vue.js</span> and <span className="font-bold text-black dark:text-white">React</span> and later on <span className="font-bold text-black dark:text-white">Php</span> with <span className="font-bold text-black dark:text-white">Laravel</span> framework. <br />
            </p>


            <div className='mt-12 flex flex-wrap justify-center gap-4'>
                <div className='cursor-pointer px-4 max-w-[180px] sm:me-4 py-2 bg-primary-dark dark:bg-white text-white dark:text-secondary-dark font-semibold rounded-xl hover:transition-all hover:bg-[#1c365a] inline-flex justify-center items-center gap-x-2 hover:scale-x-105' href={curriculum} download={curriculum} >Download CV <BsFillArrowDownCircleFill className="animate-bounce" /> </div>
                <div onClick={() => { setIsOpen(true) }} className='cursor-pointer max-w-[180px] px-4 py-2 bg-primary-dark dark:bg-white text-white dark:text-secondary-dark font-semibold rounded-xl hover:transition-all hover:bg-[#1c365a] flex justify-center items-center gap-x-2 hover:scale-x-105' href={curriculum} download={curriculum} >Contact Me <BsFillEnvelopeFill /> </div>
            </div>

            {/* modal */}
            {isOpen && <div className=" h-screen bg-[#00000099] position absolute top-0 left-0 right-0 z-50 flex justify-center items-center">
                <div className=" bg-primary dark:bg-primary-dark rounded-md px-8 py-10">
                    <h2 className="text-primary-dark dark:text-primary text-3xl text-center font-bold">Are you sure?</h2>
                    <p className="text-center text-primary-dark dark:text-primary mt-4 font-semibold">This action will open your Email app <br />
                    </p>
                    <small className="block text-center text-primary">you can do it manually with: leograzioli@gmail.com</small>

                    <div className="flex justify-center gap-x-4 mt-6">
                        <div onClick={() => {setIsOpen(false)}} className="cursor-pointer bg-red-600 rounded-md px-2 py-1 text-primary">Cancel</div>
                        <div onClick={() => {window.open('mailto:leograzioli@gmail.com')}} className="cursor-pointer bg-green-600 rounded-md px-2 py-1 text-primary">Confirm</div>
                    </div>
                </div>

            </div>}
        </section>
    )
}
