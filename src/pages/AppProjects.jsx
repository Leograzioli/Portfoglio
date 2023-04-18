import { projects } from '../db/database'

export default function () {
    return (
        <>
            <section id='projects' className='max-w-[1300px] mx-auto mt-12'>
                <h2 className='text-4xl text-center sm:text-start font-bold text-primary-dark dark:text-primary'>My Projects</h2>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
                    {projects.map((project, i) => {
                        return (
                            <div key={i} className='bg-primary-dark text-white dark:text-primary-dark dark:bg-primary max-w-[350px] ms_shadow rounded-tl-xl rounded-br-xl mt-6 mx-auto'>

                                {/* image */}
                                <div className='rounded-tl-xl rounded-br-xl p-2 overflow-hidden'>
                                    <img className='rounded-tl-xl rounded-br-xl' src={`${project.imgPath}`} alt="product" />
                                </div>

                                {/* description */}
                                <div className='p-4'>
                                    <h2 className='text-2xl font-semibold'>{project.title}</h2>
                                    <p className='text-sm'>{project.description}</p>
                                    <div className='grid grid-cols-3 mt-2' >
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
