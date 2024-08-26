import { CircularProgress } from '@mui/material';
import UseData from "../../hooks/useData";
import CastCard from '../../components/CastCard/CastCard';

export default function SingleTvSeries() {

    const { singleTvSeries, imageUrl, singleTvSeriesCrew, singleTvseriesCast, keywords } = UseData()


    return (
        <div key={singleTvSeries.id}>
            <singlemoviCategoryCategory />

            <div className="relative box-border h-[655px] ">
                <div className="back absolute z-0 top-0 left-0 right-0 bottom-0 bg-gray-500/50"></div>
                <div className="image relative ">
                    <img className="absolute w-full object-cover z-[-10] h-[655px]" src={imageUrl + singleTvSeries.backdrop_path} alt={singleTvSeries.title} />
                </div>
                <div className="my-container px-10  py-[30px] z-[0] relative flex justify-between flex-wrap">

                    <div className="movie w-[25%]">
                        <img className="w-[300px] h-[450px] rounded-lg" src={imageUrl + singleTvSeries.poster_path} alt={singleTvSeries.title} />

                    </div>

                    <div className="w-[73%]">

                        <p className="text-[35.2px] font-[700] text-white hover:text-gray-400 cursor-pointer">
                            {singleTvSeries.title} <span>({singleTvSeries.release_date?.slice(0, 4)})</span>
                        </p>
                        <div >

                            <p className="text-white">
                                {singleTvSeries.release_date} {(singleTvSeries.origin_country)}

                            </p>
                        </div>
                        <div className='mt-6 flex items-center gap-2'>

                            <div className="relative !w-[60px] !h-[60px] rounded-[50%] cursor-pointer hover:scale-110 transition-transform duration-200 ease-in-out">
                                <CircularProgress
                                    className='!w-[60px] !h-[60px] bg-black rounded-[50%]'
                                    variant="determinate"
                                    value={Math.floor(singleTvSeries.vote_average * 10)}
                                />
                                <p className="absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] text-white">
                                    {Math.floor(singleTvSeries.vote_average * 10)}%
                                </p>
                            </div>

                            <p className='text-white'>
                                User <br /> Score
                            </p>

                            <div id="vibes_label" className="group flex items-center justify-center space-2 rating_false reactions_false bg-tmdb-dark-blue rounded-full cursor-pointer hover:scale-105 transition ease-in-out duration-150 bg-[#032541] p-2" data-role="tooltip">
                                <div className="flex items-center justify-center">
                                    <div id="vibes_content" className="flex items-center text-white font-bold cursor-pointer transform">
                                        <div className="flex flex-nowrap items-center whitespace-nowrap">
                                            What's your <span className="flex pl-1 underline underline-offset-2 decoration-2 decoration-tmdb-light-blue">Vibe</span>?
                                            <span id="vibes_tooltip" className="glyphicons_v2 circle-info !invert ml-1" data-element="vibes_label"></span>
                                        </div>


                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="mt-6">
                            <p className='italic font-semibold text-[17.6px] text-gray-400'>
                                {singleTvSeries.tagline}
                            </p>
                            <p className='text-white text-[20px] font-semibold'>Overview</p>
                            <p className='text-white '>
                                {
                                    singleTvSeries.overview
                                }
                            </p>
                        </div>
                        <div className="mt-6 grid grid-cols-3 gap-5">
                            {
                                singleTvSeriesCrew?.slice(0, 11).map((item, index) => {
                                    return (
                                        <div >
                                            <p key={index} className='text-white text-[16px] '>
                                                {item.name}
                                            </p>
                                            <p className='text-white text-[14.4px] '>
                                                {item.job}
                                            </p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className="my-container px-10">
                <div className="title my-5 text-[22.4px] font-semibold">
                    Top Billed Cast
                </div>

                <div className="row flex items-start">
                    <div className="cast flex overflow-hidden gap-3 overflow-x-auto pb-5 w-[90%]">
                        {
                            singleTvseriesCast?.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <CastCard
                                            image={item.profile_path}
                                            altText={item.name}
                                            name={item.name}
                                            cast={item.character}
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>

                    <div className="info w-[25%] ps-5">
                        <p className='font-semibold mt-3'>
                            Status
                            <br />
                            <span className='font-[500]'>
                                {singleTvSeries.status}
                            </span>
                        </p>

                        <p className='font-semibold mt-3'>
                            Original Language
                            <br />
                            <span className='font-[500]'>
                                {singleTvSeries.spoken_languages?.map(lang => lang.name).join(', ')}
                            </span>
                        </p>

                        <p className='font-semibold mt-3'>
                            Budget
                            <br />
                            <span className='font-[500]'>
                                ${singleTvSeries.budget?.toLocaleString()}
                            </span>
                        </p>


                        <p className='font-semibold mt-3'>
                            Revenue
                            <br />
                            <span className='font-[500]'>
                                ${singleTvSeries.revenue?.toLocaleString()}
                            </span>
                        </p>


                        <div className='mt-3 '>

                            <p className='font-semibold'>
                                Keywords
                            </p>

                            <div className='mt-3'>

                                {
                                    keywords?.map((item, index) => {
                                        return (
                                            <button key={index} className='me-2 mb-2 bg-gray-300 p-2 rounded-lg '>
                                                {item.name}
                                            </button>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}