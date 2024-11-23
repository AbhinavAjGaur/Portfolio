import React from 'react';
import newspaper from "../../images/news-paper.png";
import pgrental from "../../images/PgRentalLogo.png";
import funflix from "../../images/Funflix.png";
import crud from "../../images/CRUD.png";

const Portfolio = () => {
  const cardItem=
  [
    {
      id:1,
      logo:newspaper,
      name:"Newspaper",
      message:"The Newspaper Project is a dynamic website that delivers the latest daily news across various categories, tailored to match the preferences of each reader.",
      videoLink : "https://youtube.com/newspaper-video",
      sourceCode: "https://github.com/AbhinavAjGaur/newspaper"
    },
    {
      id:2,
      logo:pgrental,
      name:"PG Rental",
      message:"The PG-Rental Project serves as a seamless platform connecting tenants searching for rental accommodations with landlords looking to rent out their properties.(In Development)",
      videoLink : "https://youtube.com/newspaper-video",
      sourceCode: "https://github.com/AbhinavAjGaur/PG-Rental"
    },
    {
      id:3,
      logo:funflix,
      name:"Funflix",
      message:"The Funflix Project is a platform that showcases the latest shows and movies from around the world, complete with cast information, detailed summaries, and trailers.",
      videoLink : "https://youtube.com/newspaper-video",
      sourceCode: "https://github.com/AbhinavAjGaur/Funflix"
    },
    {
      id:4,
      logo:crud,
      name:"CRUD",
      message:"The CRUD Operation Project demonstrates the implementation of basic Create, Read, Update, and Delete operations in a serverless environment.",
      videoLink : "https://youtube.com/newspaper-video",
      sourceCode: "https://github.com/AbhinavAjGaur/CRUD"
    }
  ]
  
  return (
    <div name="Portfolio" className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10">
      <div>
        <h1 className="text-3xl font-bold mb-5">Portfolio</h1>
        <span className="underline font-semibold">Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-5">
          {cardItem.map(({id,logo,name,message,videoLink,sourceCode})=>(
            <div className="md:w-[300px] md:h-[390px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-105 duration-300 z-0" key ={id}>
              <img src={logo} className="w-[120px] h-[120px] p-1 rounded-full border-[2px]" alt="" />
              <div>
                <div className="px-2 font-bold text-xl mb-2 ">{name}</div>
                <p className='px-2 text-gray-700'>{message}
                </p>
              </div>
              <div className="justify-around px-6 py-4 space-x-3">
                <button onClick={()=> window.open(videoLink, "_blank")} className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-4 rounded'>Video</button>
                <button onClick={() => window.open(sourceCode, "_blank")} className='bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-4 rounded'>Source code</button>
              </div>
            </div>
          ))
          }
        </div>
      </div>
    </div>
  )
}

export default Portfolio
