import React from 'react'

const About = () => {
    return (
        <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                  <p className="text-4xl font-bold inline border-b-4 border-gray-400">About</p>
                </div>

                <p className="text-xl mt-20">
                I am born and raised in the Bay Area and graduated at Santa Clara University this summer with a B.S in
                Computer Science and Data Science emphasis. I have strong knowledge in computer science foundations and experience
                with multiple programming languages such as C++, Python, Java, etc. I am excited kickstart my career in
                software engineering, data analytics, and related fields. On my free time I enjoy crocheting, painting, and
                traveling.
                </p>

                <br />
                <p className="text-xl">

                </p>
            </div>

        </div>
    )

};
export default About;