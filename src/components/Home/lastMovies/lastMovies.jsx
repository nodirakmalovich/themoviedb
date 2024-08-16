import UseData from "../../../hooks/useData"
import dot from "../../../assets/dot.svg"
import play from "../../../assets/play.svg"
import './lastMovies.scss'
import { useState } from 'react';

import { Tab, TabGroup, TabList, } from '@headlessui/react'


export default function LastMovies() {

    const { latestMoviesData, imageUrl } = UseData()

    const [hoveredMovieBackdrop, setHoveredMovieBackdrop] = useState(null);

    let movieId = 0



    const handleMouseEnter = (backdropPath) => {
        setHoveredMovieBackdrop(backdropPath);  
    };

    const handleMouseLeave = () => {
        setHoveredMovieBackdrop(null);  
    };


    const categories = [
        {
            name: 'Popular',

        },
        {
            name: 'In Theaters',

        },

    ]


    return (
        <div className="my-container">
            <div className="last_movies box-border ">
                <div className="last_movies_row relative ">
                    <img
                        src={hoveredMovieBackdrop ? imageUrl + hoveredMovieBackdrop : imageUrl + latestMoviesData[0]?.backdrop_path}
                        alt={hoveredMovieBackdrop ? "Hovered Movie" : latestMoviesData[0]?.title}
                        className="absolute top-0 right-0 left-0 bottom-0 object-cover w-full h-[369px] z-0"
                    />

                    <div className="last_movies_row_bg absolute z-10 bg-[#0000009d] top-0 bottom-0 left-0 right-0 h-[369px]"></div>

                    <div className="last_movies_row_wrapper box-border absolute pt-[30px] z-20 ">

                        <div className="flex gap-[20px] items-center px-10 ">
                            <p className="text-2xl text-white font-semibold">Latest Trailers</p>

                            <div className="flex  justify-center ">
                                <div className=" h-[28px] border-[#1ed5c4] border-[1px] rounded-[30px] flex items-center justify-between">
                                    <TabGroup>
                                        <TabList className="flex gap-4 items-center justify-between">
                                            {categories.map(({ name }) => (
                                                <Tab
                                                    key={name}
                                                    className="category_list rounded-full py-1 px-5 h-[28px] font-semibold  text-white outline-none data-[selected]:bg-[#1ed5c4] data-[selected]:text-[#032541]"
                                                >
                                                    {name}
                                                </Tab>
                                            ))}
                                        </TabList>

                                    </TabGroup>
                                </div>
                            </div>

                        </div>

                        <div className="flex py-5 gap-[20px] lastMovies_row ps-10 w-[1300px] overflow-x-auto scroll-m-0">
                            {
                                latestMoviesData.map((movie, index) => {
                                    return (
                                        <div key={index} className="card w-[300px] flex-shrink-0" onMouseEnter={() => handleMouseEnter(movie.backdrop_path)}
                                            onMouseLeave={handleMouseLeave}>
                                            <div className="card_wrapper relative">
                                                <div className="back absolute top-0 right-0 bottom-0 left-0 z-30 bg-gray-700/50 rounded-[10px]"></div>
                                                <img src={dot} alt="dot" className="absolute top-[5px] right-[5px] w-[25.6px] h-[25.6px]" />
                                                <div className="play absolute top-0 left-0 bottom-0 right-0 flex items-center justify-center z-50">
                                                    <img src={play} alt="play" className="w-16 h-16 mx-auto" />

                                                </div>
                                                <img src={imageUrl + movie.backdrop_path} alt={movie.title} className="w-[300px] h-[169px] rounded-[10px] z-20" />
                                            </div>
                                            <p className="text-white text-center font-semibold text-[19.2px] mt-5">
                                                {movie.title}
                                            </p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
