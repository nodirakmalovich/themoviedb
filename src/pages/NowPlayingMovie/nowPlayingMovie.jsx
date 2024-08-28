import UseData from "../../hooks/useData"
import MovieCardSec from "../../components/movieCard/movieCard";
import Category from "../../components/categry/categry";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function NowPlayingMovies() {



    const { nowPlayingMovies } = UseData()
    const route = useNavigate();
    const {t} = useTranslation()

    function handleSingleMovie(movieId) {

        route(`/movie-info/${movieId}`);
    }


    return (
        <div className="">

            <div className="popular my-container px-10 py-[30px]">
                <h1 className="text-[1.6em] font-semibold">{t("Now Playing Movies")}</h1>

                <div className="popular_row flex flex-wrap justify-between gap-[30px]">

                    <div className="popular_left xl:w-[260px] w-full ">
                        <Category />
                    </div>

                    <div className="popular_right xl:w-[75%] w-full">
                        <div className="popular_right_wrapper grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2  gap-[30px] justify-between">
                            {
                                nowPlayingMovies.map((movie, index) => {
                                    return (
                                        <div key={index}  className="shadow-lg rounded-[8px] ">
                                            <MovieCardSec
                                                imageSrc={movie.poster_path}
                                                altText={movie.title}
                                                key={index}
                                                vote={movie.vote_average}
                                                title={movie.title}
                                                releseDate={movie.release_date}
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