import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import SearchedMovieCard from '../../components/searchedMovieCard/searchedMovieCard';
import { IoMdSearch } from "react-icons/io";

export default function SearchedMovies() {
    const query = new URLSearchParams(useLocation().search);
    const [searchQuery, setSearchQuery] = useState(query.get('query') || '');
    const [searchedMoviesData, setSearchedMoviesData] = useState([]);
    const searchRef = useRef(null);

    const route = useNavigate();


    function handleSingleMovie(movieId) {

        route(`/movie-info/${movieId}`);
    }

    const searchList = [
        { title: "Movies" },
        { title: "TV Shows" },
        { title: "People" },
        { title: "Companies" },
        { title: "Collections" },
        { title: "Keywords" },
        { title: "Networks" },
    ];

    useEffect(() => {
        if (searchQuery) {
            axios
                .get(`https://api.themoviedb.org/3/search/movie?query=${searchQuery}`, {
                    headers: {
                        Authorization:
                            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMjQxMWVlNzkzNzNhYmU3OWRiNGRiYTNmZjkzYTJkZCIsIm5iZiI6MTcyMzgxNzI2OS4zMDI5Niwic3ViIjoiNjY1MDE5MjViYzIyOGJlYjkyMDY4NTdlIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.ojfuxR6gKJw-eRX748azY3Dqomeu2Rk7ME0SbaHFyCQ",
                        accept: "application/json",
                    },
                })
                .then((resp) => setSearchedMoviesData(resp.data.results));
        }
    }, [searchQuery]);

    const handleSearch = (event) => {
        event.preventDefault();
        setSearchQuery(searchRef.current.value);
    };

    return (
        <div>
            <div className="search border-b-[1px]">
                <div className="my-container relative px-10">
                    <form className='relative' onSubmit={handleSearch}>
                        <input
                            type="text"
                            className='w-full outline-none px-[30px] py-[10px] italic text-[#acacac]'
                            placeholder='Search'
                            ref={searchRef}
                            defaultValue={searchQuery}
                        />
                        <input type="submit" className='absolute w-0' />
                    </form>
                    <IoMdSearch className='absolute top-[10px] w-[25px] h-[25px]' />
                </div>
            </div>

            <div className='flex gap-[30px] my-container pt-[50px] px-10'>
                <div className="leftside w-[300px]">

                    <div className="leftside_wrapper w-[260px] border-[#e3e3e3] border-[1px] rounded-[8px]">
                        <div className="leftside_wrapper_header bg-[#01b3e4] p-5 text-white font-semibold rounded-t-[8px]">
                            Search Results
                        </div>
                        <div className="leftside_wrapper_item">
                            <ul>
                                {searchList.map((item, index) => (
                                    <li className='hover:bg-[#999] py-[10px] px-[20px] cursor-pointer' key={index}>{item.title}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>

                <div>
                    {searchedMoviesData.map((movie, index) => (
                        <div onClick={() => { handleSingleMovie(movie.id) }} key={index} className="searchedMovies shadow-lg">
                            <SearchedMovieCard
                                imageSrc={movie.poster_path}
                                altText={movie.title}
                                title={movie.title}
                                releaseDate={movie.release_date}
                                description={movie.overview.slice(0, 225) + '...'}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
