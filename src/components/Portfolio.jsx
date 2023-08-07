import React from "react";
import reddit from "../assets/portfolio/redditlogo.png";
import installNode from "../assets/portfolio/installNode.jpg";
import craigslist from "../assets/portfolio/craigslistlogo.png";
import movieRevenue from "../assets/portfolio/movieRevenue.jpeg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";
import Stopwords from "../assets/portfolio/Stopwords.png";
import {Link} from 'react-scroll';

import Subreddit from "../components/Subreddit.jsx"




const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: reddit,
      link: 'Subreddit.jsx',
      href: 'https://colab.research.google.com/drive/1j-8oKCPxsVvEbihJ77csTejAf24MV2DW',

    },
    {
      id: 2,
      src: movieRevenue,
      link: 'MovieRevenuePage.jsx',
      href: 'https://colab.research.google.com/drive/1T6ywmka3yHOBFbnsFa5hWAWBrFwRka82',
    },
    {
      id: 3,
      src: Stopwords,
      link: 'CraigslistPage.jsx',
      href: 'https://colab.research.google.com/drive/1nTXnZnjhAuABbR_J7q3Aqzq0b73O3bE6#scrollTo=8LkgGeNT8BjP',

    },

  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, link, href }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">

                <a href={href} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  View
                </a>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;


{/*
const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: reddit,
      link: 'Subreddit.jsx'
    },
    {
      id: 2,
      src: movieRevenue,
    },
    {
      id: 3,
      src: craigslist,
    },
    {
      id: 4,
      src: installNode,
    },

  ];

  return (
      <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, link }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">

                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  View

                </button>


              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;*/}