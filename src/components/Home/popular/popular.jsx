import UseData from "../../../hooks/useData"
import { format } from 'date-fns';
import dot from '../../../assets/dot.svg'

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'




export default function PopularMovies() {


    const { PopularMoviesData, imageUrl } = UseData()



    const DateFormatter = ({ date }) => {
        return (
            <p>
                {format(new Date(date), 'MMM dd, yyyy')}
            </p>
        );
    };

    const categories = [
        {
            name: 'Popular',

        },

    ]

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
                                        className="category_list rounded-full py-1 px-5 h-[28px] font-semibold outline-none data-[selected]:bg-[#032541] data-[selected]:text-[#1ed5c4]"
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
                            <div key={index}>
                                <div className="card relative w-[150px] ">

                                    <img className="icon absolute top-[5px]  right-[5px] rounded-[50%] w-[25.6px] h-[25.6px]" src={dot} alt="" />

                                    <img src={imageUrl + movie?.poster_path} alt={movie?.original_name} className="rounded-[8px] w-[150px] h-[225px]" />

                                    <div className="absolute top-[210px] w-[34px] h-[34px] bg-black rounded-[50%] left-[10px] flex justify-center items-center">
                                        <p className="text-white text-[16px] relative">
                                            {Math.floor(movie.vote_average * 10)}
                                            <span className="text-[9.6px] absolute">%</span>

                                        </p>
                                    </div>

                                    <div className="content pt-[26px] px-[10px]">

                                        <p className="w-[130px] font-[700] text-black">
                                            {movie?.original_name}
                                        </p>

                                        <DateFormatter date={movie.first_air_date} />

                                    </div>

                                </div>

                            </div>

                        )
                    })
                }
            </div>
        </div>
    )
}