import React from 'react'
import {FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'

const SocialLinks =() => {

    const links =[
        {
            id: 1,
            child: (
                <>
                LinkedIn <FaLinkedin size={35} />
                </>
                ),
                href: 'https://www.linkedin.com/in/amanda-chan-b07857282/',
                style: 'rounded-tr-md'


        },
        {
            id: 2,
            child: (
                <>
                Email <HiOutlineMail size={35} />
                </>
                ),
                href: 'amandachan273@gmail.com',



        },



    ];
    return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
        <ul>

            {links.map(({id, child, href, style, download}) => (
            <li key={id} className={"flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-zinc-500" + " " + style}>
                <a
                 href={href}
                 className="flex justify-between items-center w-full text-white"
                 download={download}
                 target='_blank'>

                {child}

                </a>

            </li>

            ))}

        </ul>

    </div>
    )

};
export default SocialLinks;