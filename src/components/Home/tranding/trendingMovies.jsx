import UseData from "../../../hooks/useData"
import './trandingMovies.scss'
import { Tab, TabGroup, TabList } from '@headlessui/react'
import MainCard from "../../mainCard/mainCard";
import { useNavigate } from "react-router-dom";



export default function TrendingMovies() {

    const { trendingMoviesData, getTrendingMovies } = UseData()

    const route = useNavigate();


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


    function handleSingleMovie(movieId) {

        route(`/movie-info/${movieId}`);
    }


    return (
        <div className="my-container pt-[30px] px-10 tranding_movies">
            <div className="flex gap-[20px] items-center">

                <div className="flex  justify-center items-center gap-5">

                    <p className="text-2xl text-black font-semibold">Trending</p>
                    <div className=" h-[28px] border-[#032541] border-[1px] rounded-[30px] flex items-center justify-between">
                        <TabGroup onChange={(index) => handleTabChange(categories[index].action)}>
                            <TabList className="flex gap-4">
                                <div className='items-center flex gap-[20px]'>
                                    <div className='gap-0 rounded-full border-slate-900 border-[1px]'>
                                        {categories.map(({ name }) => (
                                            <Tab
                                                key={name}
                                                className="rounded-full py-[2px] px-[20px] text-slate-900 font-semibold cursor-pointer focus:outline-none data-[selected]:bg-[rgb(3,37,65)] data-[selected]:text-teal-600"
                                            >
                                                {name}
                                            </Tab>
                                        ))}
                                    </div>
                                </div>
                            </TabList>

                        </TabGroup>
                    </div>
                </div>

            </div>


            <div className=" flex  py-5 overflow-x-auto gap-[20px] scrolling ">

                {
                    trendingMoviesData?.map((movie, index) => {
                        return (
                            <div key={index} onClick={() => { handleSingleMovie(movie.id) }}>

                                <MainCard
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
        </div>
    )
}