import { BsLinkedin, BsGithub, BsFacebook, BsTwitter } from "react-icons/bs"

export default function AppFooter() {
    return (
        <>
            <section id='social-links' className="w-[1200px] mx-auto" >

                <ul className='dark:text-white text-primary-dark text-2xl flex justify-end items-center gap-x-6 pt-3'>

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

            <div >
                <div className='h-[1px] w-[1200px] mx-auto bg-primary-dark dark:bg-primary mt-3'></div>
            </div>

            <div className="text-center w-[1200px] mx-auto font-bold text-primary-dark dark:text-white pt-6 pb-10"> Copyright &#169; </div>
        </>
    )
}
