import { useEffect } from 'react';
import { projects } from '../db/database'
import { BsArrowUpRight, BsGithub } from 'react-icons/bs'

export default function () {

    useEffect(() => {
        document.title = 'Leo Grazioli - Projects';
    }, []);

    return (
        <>
            <section id='projects' className='max-w-[1100px] mx-auto mt-12'>
                <h2 className='text-4xl text-center sm:text-start font-bold text-primary-dark dark:text-primary'>My Projects</h2>

                <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4'>
                    {projects.map((project, i) => {
                        return (
                            <div key={i} className='relative bg-primary-dark text-white dark:text-primary-dark dark:bg-primary max-w-[330px] ms_shadow rounded-tl-xl rounded-br-xl mt-10 mx-auto'>
                                {project.href && <a href={project.href} target='_blank' className='absolute right-4 top-4 p-2 rounded-full bg-primary-dark dark:text-white '> <BsArrowUpRight /></a>}
                                {project.github && <a href={project.github} target='_blank' className='absolute right-4 top-14 text-3xl rounded-full bg-white text-primary-dark'> <BsGithub /></a>}
                                {/* image */}
                                <div className='rounded-tl-xl rounded-br-xl p-2 overflow-hidden'>
                                    <img className='rounded-tl-xl rounded-br-xl min-h-[200px] object-cover' src={`${project.imgPath}`} alt="product" />
                                </div>

                                {/* description */}
                                <div className='p-4 flex flex-col justify-between'>
                                    <div className='min-h-[80px]'>
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
            </section>
        </>
    )
}
