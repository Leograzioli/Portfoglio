import { useEffect, useState } from 'react';
import { projects } from '../db/database'
import { BsArrowUpRight, BsGithub } from 'react-icons/bs'
import { AiOutlineClose } from 'react-icons/ai'

export default function () {

    const [isOpen, setIsOpen] = useState(false)
    const [img, setImg] = useState('')


    useEffect(() => {
        document.title = 'Leo Grazioli - Projects';
    }, []);

    const handleClick = (img) => {
        setIsOpen(true)
        setImg(img)
        console.log(projects.length)
    }

    return (
        <>
            <section id='projects' className='max-w-[1200px] mx-auto mt-12'>
                <h2 className='text-4xl text-center sm:text-start text-transparent bg-clip-text bg-gradient-to-t from-primary-dark to-secondary dark:bg-gradient-to-b dark:from-white dark:to-secondary font-bold pb-2'>My Projects</h2>
                
                <div className='mt-16 text-center dark:text-white text-sm relative'> 
                    <p>*click on a image to preview*</p>
                    <p className='absolute right-0 top-0'>Projects Found: {projects.length}</p>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 mt-2 '>
                    {projects.map((project, i) => {
                        return (
                            <div key={i} className='relative bg-primary-dark text-white dark:text-primary-dark dark:bg-primary max-w-[330px] ms_shadow rounded-tl-xl rounded-br-xl mb-8 mx-auto'>

                                {/* icons in absolute position */}
                                {project.href && <a href={project.href} target='_blank' className='absolute right-4 border- top-4 p-2 rounded-full bg-primary-dark dark:text-white '> <BsArrowUpRight /></a>}
                                {project.github && <a href={project.github} target='_blank' className='absolute border right-4 top-14 text-3xl rounded-full bg-white text-primary-dark'> <BsGithub /></a>}

                                {/* image */}
                                <div onClick={() => handleClick(project.imgPath)} className='rounded-tl-xl rounded-br-xl p-2 overflow-hidden'>
                                    <img className='rounded-tl-xl rounded-br-xl h-[200px] w-[314px] object-cover ' src={`${project.imgPath}`} alt="product" />
                                </div>

                                {/* description */}
                                <div className='p-4 flex flex-col justify-between min-h-[220px]'>
                                    <div className=''>
                                        <h2 className='text-2xl font-semibold'>{project.title}</h2>
                                    </div>
                                    <p className='text-sm mt-2'>{project.description}</p>
                                    <div className='grid grid-cols-3 mt-4' >
                                        {project.technologies && project.technologies.map((tech, i) => {
                                            return (
                                                <p key={i} className='mr-1'>
                                                    <span className='font-bold'>#</span>{tech}
                                                </p>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    )}
                </div>

                {/* modal */}
                {isOpen && <div className='h-screen bg-black/[0.5] absolute top-0 right-0 left-0 z-50 flex justify-center items-center'>
                    <div className='border-4 border-white relative' >
                        <p onClick={() =>{ setImg(''), setIsOpen(false) } } className='absolute top-3 right-5 text-2xl bg-secondary rounded-xl text-semibold p-2'><AiOutlineClose /></p>
                        <img className='max-h-[700px] max-w-[1200px]' src={img} alt="" />
                    </div>
                </div>}

            </section>
        </>
    )
}
