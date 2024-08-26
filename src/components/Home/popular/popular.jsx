import UseData from "../../../hooks/useData"
import { format } from 'date-fns';

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import MainCard from "../../mainCard/mainCard";
import { useNavigate } from "react-router-dom";




export default function PopularMovies() {


    const route = useNavigate();
    const { PopularMoviesData } = UseData()




    const DateFormatter = ({ date }) => {
        return (
            <p>
                {format(new Date(date), 'MMM dd, yyyy')}
            </p>
        );
    };

    const categories = [
        {
            name: '',

        },

    ]


    function handleSingleMovie(movieId) {

        route(`/tv-info/${movieId}`);
    }

    return (
        <div className="my-container px-10 pt-[400px]">
            <div className="flex gap-[20px] items-center">
                <p className="text-2xl text-black font-semibold">What's Popular</p>

                <div className="flex  justify-center ">
                    <div className=" h-[28px] border-[#032541] border-[1px] rounded-[30px] flex items-center justify-between">
                        <TabGroup>
                            <TabList className="flex gap-4 items-center justify-between">
                                {categories.map(({ name }) => (
                                    <Tab
                                        key={name}
                                        className="category_list rounded-full py-1 px-5 h-[28px] font-semibold outline-none data-[selected]:bg-[#032541] data-[selected]:text-[#1ed5c4] w-[116px]"
                                    >
                                        {name}
                                    </Tab>
                                ))}
                            </TabList>

                        </TabGroup>
                    </div>
                </div>

            </div>


            <div className=" flex py-5 overflow-x-auto gap-[20px] scrolling">

                {
                    PopularMoviesData?.map((movie, index) => {
                        return (
                            <div key={index}
                                onClick={() => { handleSingleMovie(movie.id) }}>

                                <MainCard
                                    imageSrc={movie.poster_path}
                                    altText={movie.original_name}

                                    vote={movie.vote_average}
                                    title={movie.original_name}
                                    releseDate={movie.first_air_date}
                                />
                            </div>

                        )
                    })
                }
            </div>
        </div>
    )
}