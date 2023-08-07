import React from 'react'

const Subreddit = () => {
    return (
        <div name="subreddit" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                  <p className="text-4xl font-bold inline border-b-4 border-gray-400">Subreddit Scrape</p>
                </div>

                <p className="text-xl mt-20">
                Scraping Starbucks subreddit
                </p>
                <p>Code: https://colab.research.google.com/drive/1j-8oKCPxsVvEbihJ77csTejAf24MV2DW</p>


            </div>

        </div>
    )

};
export default Subreddit;