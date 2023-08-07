import React from 'react'
import HeroImage from '../assets/heroImage.jpg';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import {Link} from 'react-scroll';

const Home = () => {
    return(
        <div name="home" className="flex h-screen w-full bg-gradient-to-b
        from-black via-black to-gray-800 ">
            <div className="max-w-screen-lg mx-auto flex flex-col items-center
            justify-center h-full px-4 md:flex-row" >
                <div className="flex flex-col justify-center h-full">
                    <h2 className="text-4xl sm:text-7xl font-bold text-white">
                        Hi,
                        I am an aspiring software engineer and data analyst.
                    </h2>
                    <p className="text-gray-500 py-4 max-w-md">
                    I am a recent Computer Science grad that is passionate about building web applications
                    and working with data. I love working with React, Tailwind, and Python.
                    </p>

                    <div>
                        <Link to="portfolio" smooth duration={500} className="group text-white w-fit px-6 py-3 my-2
                        flex items-center rounded-md bg-gradient-to-r from-zinc-400 to-slate-500 cursor-pointer">
                            Portfolio
                            <span className="group-hover:rotate-90 duration-300">
                                <MdOutlineKeyboardArrowRight size={25} className="ml-1"/>
                            </span>

                        </Link>
                    </div>
                </div>

                <div>
                    <img
                    src={HeroImage}
                    alt="my profile"
                    className="rounded-xl mx-auto w-2/3 md:w-full"
                    />
                </div>
            </div>
        </div>
    )

}
export default Home