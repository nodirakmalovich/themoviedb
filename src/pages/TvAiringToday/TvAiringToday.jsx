import UseData from "../../hooks/useData"
import MovieCardSec from "../../components/movieCard/movieCard";
import Category from "../../components/categry/categry";
import { useNavigate } from "react-router-dom";

export default function TvAiringToday() {

    const { tvAiringToday } = UseData()
    const route = useNavigate();

    function handleSingleMovie(movieId) {

        route(`/tv-info/${movieId}`);
    }

    return (
        <div className="">

            <div className="popular my-container px-10 py-[30px]">
                <h1 className="text-[1.6em] font-semibold">Popuar movies</h1>

                <div className="popular_row flex flex-wrap justify-between gap-[30px]">

                    <div className="popular_left w-[260px] ">
                        <Category />
                    </div>

                    <div className="popular_right w-[75%]">
                        <div className="popular_right_wrapper grid grid-cols-5 gap-[30px] justify-between">
                            {
                                tvAiringToday.map((movie, index) => {
                                    return (
                                        <div key={index} className="shadow-lg rounded-[8px] ">
                                            <MovieCardSec
                                                imageSrc={movie.poster_path}
                                                altText={movie.name}
                                                key={index}
                                                vote={movie.vote_average}
                                                title={movie.name}
                                                releseDate={movie.first_air_date}
                                                onClick={() => { handleSingleMovie(movie.id) }}
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