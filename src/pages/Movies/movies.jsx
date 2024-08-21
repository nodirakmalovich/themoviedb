import MainCard from "../../components/mainCard/mainCard"
import UseData from "../../hooks/useData"
import rightArrow from '../../assets/arrowRight.svg'
import { useState } from "react";
import MovieCardSec from "../../components/movieCard/movieCard";
import { Button } from "@mui/material";

export default function MoviesPages() {



    const { PopularMovies } = UseData()

    console.log(PopularMovies);

    const [isOpen, setIsOpen] = useState(false);
    const [isOpenSec, setIsOpenSec] = useState(true);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleToggleFilter = () => {
        setIsOpenSec(!isOpenSec)
    }


    return (
        <div className="">

            <div className="popular my-container px-10 py-[30px]">
                <h1 className="text-[1.6em] font-semibold">Popuar movies</h1>

                <div className="popular_row flex flex-wrap justify-between gap-[30px]">

                    <div className="popular_left w-[260px] ">

                        <div className="sort shadow-lg border-[1px] rounded-lg">
                            <div className="sort_title py-[14px] px-[16px] flex justify-between items-center border-b-[1px]" onClick={handleToggle}>
                                <p className="font-semibold">Sort</p>
                                <img className={`w-4 h-4 ${isOpen ? 'rotate-90' : 'rotate-0'}`} src={rightArrow} alt="rightArrow" />
                            </div>

                            <div className={`sort_result py-[14px] px-[16px] ${isOpen ? 'flex' : 'hidden'} justify-between items-center`}>
                                <p>Sort Results By</p>
                            </div>
                        </div>


                        <div className="filter shadow-lg border-[1px] rounded-lg mt-3">
                            <div className="filter_title py-[14px] px-[16px] flex justify-between items-center border-b-[1px]" onClick={handleToggleFilter}>
                                <p className="font-semibold">Filter</p>
                                <img className={`w-4 h-4 ${isOpenSec ? 'rotate-90' : 'rotate-0'}`} src={rightArrow} alt="rightArrow" />
                            </div>

                            <div className={`filter_result py-[14px] px-[16px] ${isOpenSec ? 'flex' : 'hidden'} justify-between items-center`}>

                                <div className="filter flex flex-wrap gap-3">
                                    <h3>Show Me</h3>

                                    <div className="w-full flex items-center">
                                        <input type="radio" id="everything" name="filter" checked />
                                        <label htmlFor="everything" className="ml-2">everything</label>
                                    </div>

                                    <div className="w-full flex items-center">
                                        <input type="radio" id="havent" name="filter" />
                                        <label htmlFor="havent" className="ml-2">Movies I Haven't Seen</label>
                                    </div>

                                    <div className="w-full flex items-center">
                                        <input type="radio" id="have" name="filter" />
                                        <label htmlFor="have" className="ml-2">Movies I Have Seen</label>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>

                    <div className="popular_right w-[75%]">
                        <div className="popular_right_wrapper grid grid-cols-5 gap-[30px] justify-between">
                            {
                                PopularMovies.map((movie, index) => {
                                    return (
                                        <div key={index} className="shadow-lg rounded-[8px] ">
                                            <MovieCardSec
                                                imageSrc={movie.poster_path}
                                                altText={movie.title}
                                                key={index}
                                                vote={movie.vote_average}
                                                title={movie.title}
                                                releseDate={movie.release_date}
                                            />
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <button className="w-full text-center mt-[30px] h-[50px] bg-[#01b4e4] rounded-lg text-white font-semibold text-2xl">
                            Load more
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}