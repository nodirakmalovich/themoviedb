import UseData from "../../../hooks/useData"
import './trandingMovies.scss'
import { Tab, TabGroup, TabList } from '@headlessui/react'
import MainCard from "../../mainCard/mainCard";



export default function TrendingMovies() {

    const { trendingMoviesData, getTrendingMovies } = UseData()



    const categories = [
        {
            name: 'Today',
            action: 'day'

        },
        {
            name: 'This Week',
            action: 'week'
        },

    ]

    const handleTabChange = (action) => {
        getTrendingMovies(action);
    };




    return (
        <div className="my-container pt-[30px] px-10 tranding_movies">
            <div className="flex gap-[20px] items-center">
                <p className="text-2xl text-black font-semibold">Trending</p>

                <div className="flex  justify-center ">
                    <div className=" h-[28px] border-[#032541] border-[1px] rounded-[30px] flex items-center justify-between">
                        <TabGroup onChange={(index) => handleTabChange(categories[index].action)}>
                            <TabList className="flex gap-4 items-center justify-between py-2">
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


            <div className=" flex  py-5 overflow-x-auto gap-[20px] scrolling ">

                {
                    trendingMoviesData?.map((movie, index) => {
                        return (
                            <MainCard
                                imageSrc={ movie.poster_path}
                                altText={movie.title}
                                key={index}
                                vote={movie.vote_average}
                                title={movie.title}
                                releseDate={movie.release_date}
                            />

                        )
                    })
                }
            </div>
        </div>
    )
}