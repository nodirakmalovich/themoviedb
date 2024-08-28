import UseData from "../../../hooks/useData"
import './lastMovies.scss'
import { useState } from 'react';

import { Tab, TabGroup, TabList, } from '@headlessui/react'
import MovieCard from "../../movieBannerCard/movieBannerCard";
import { useTranslation } from "react-i18next";
import i18n from "../../../i18n";


export default function LastMovies() {

    const { latestMoviesData, imageUrl } = UseData()

    const [hoveredMovieBackdrop, setHoveredMovieBackdrop] = useState(null);
    
    const {t} = useTranslation()

    let movieId = 0




    const handleMouseEnter = (backdropPath) => {
        setHoveredMovieBackdrop(backdropPath);
    };

    const handleMouseLeave = () => {
        setHoveredMovieBackdrop(null);
    };


    const categories = [
        {
            name: i18n.t('Popular'),

        },
        {
            name: i18n.t('In Theaters'),

        },

    ]


    return (
        <div className="my-container ">
            <div className="last_movies box-border my-5">
                <div className="last_movies_row relative ">
                    <img
                        src={hoveredMovieBackdrop ? imageUrl + hoveredMovieBackdrop : imageUrl + latestMoviesData[0]?.backdrop_path}
                        alt={hoveredMovieBackdrop ? "Hovered Movie" : latestMoviesData[0]?.title}
                        className="absolute top-0 right-0 left-0 bottom-0 object-cover w-full h-[369px] z-0"
                    />

                    <div className="last_movies_row_bg absolute z-10 bg-[#0000009d] top-0 bottom-0 left-0 right-0 h-[369px]"></div>

                    <div className="last_movies_row_wrapper box-border absolute pt-[30px] z-20 ">

                        <div className="flex gap-[20px] items-center px-10 ">
                            <p className="text-2xl text-white font-semibold">{t("Latest Trailers")}</p>

                            <div className="md:flex  justify-center hidden">
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

                        <div className="flex py-5 gap-[20px] lastMovies_row ps-10 w-[1300px] overflow-x-auto h-[316px] overflow-hidden movieCard">
                            {
                                latestMoviesData.map((movie, index) => {
                                    return (
                                        <div key={index}>
                                            <MovieCard
                                                imageSrc={movie.poster_path}
                                                altText={movie.title}
                                                title={movie.title}
                                                onMouseEnter={() => handleMouseEnter(movie.backdrop_path)}
                                                onMouseLeave={handleMouseLeave}
                                            />
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

