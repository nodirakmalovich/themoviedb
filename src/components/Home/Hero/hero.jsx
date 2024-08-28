import { useEffect, useRef, useState } from 'react';
import UseData from '../../../hooks/useData'
import './hero.scss'
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Hero() {

    const { moviesData, imageUrl, discoverMoviesData } = UseData()

    const [randomIndex, setRandomIndex] = useState(null);

    const {t} = useTranslation()

    const searchRef = useRef()
    const route = useNavigate()

    useEffect(() => {
        if (discoverMoviesData.length > 0) {
            const randomIdx = Math.floor(Math.random() * discoverMoviesData.length);
            setRandomIndex(randomIdx);
        }
    }, [discoverMoviesData]);


    const movie = discoverMoviesData[randomIndex];



    const searchHandle = (e) => {
        e.preventDefault()

        route(`/search?query=${searchRef.current.value}`)
    }


    return (
        <div className='my-container lg:w-full'>
            <div className="hero h-[300px] flex items-center p-0 m-0   relative">


                <div className='flex justify-center items-center  h-[236px] px-10 py-[30px] w-full'>

                    <img
                        src={imageUrl + movie?.backdrop_path}
                        alt={moviesData[0]?.tile}
                        className=' absolute top-0 bottom-0 right-0 left-0 z-0 w-full h-[300px]'
                    />

                    <div className="hero_bg h-[300px] absolute z-10 top-0 bottom-0 right-0 left-0 "></div>

                    <div className='hero_row  w-full  z-30'>
                        <h1 className='text-[48px] leading-none	 font-[700] text-white'>
                            {t('Welcome.')}
                        </h1>
                        <p className='text-[32px] leading-none	pb-[30px] font-semibold text-white mb-5'>
                            {t("Millions of movies, TV shows and people to discover. Explore now.")}
                        </p>

                        <form className='relative '>
                            <label>
                                <input ref={searchRef}  className='hero_row_input ' type="text" placeholder={t('Search for a movie, tv show, person......')} />

                            </label>

                            <input onClick={searchHandle} className='absolute top-0 z-10 hero_row_input_search ' type="submit" value={t("Search")} />

                        </form>
                    </div>

                </div>

            </div>
        </div>
    )
}