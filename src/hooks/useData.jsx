import axios from "axios";
import { useEffect, useState, useLocation } from "react";
import SearchedMovies from "../pages/searchedMovies/searchedMovies";
import { useParams } from "react-router-dom";

export default function UseData() {

    const [moviesData, setMoviesData] = useState([])
    const [discoverMoviesData, setDiscoverMoviesData] = useState([])
    const [trendingMoviesData, settrendingMoviesData] = useState([])
    const [latestMoviesData, setLatestMoviesData] = useState([])
    const [PopularMoviesData, setPopularMoviesData] = useState([])
    const [PopularMovies, setPopularMovies] = useState([])
    const [nowPlayingMovies, setNowPlayingMovies] = useState([])
    const [upcomingMovies, setUpcomingMovies] = useState([])
    const [topRatedMovies, setTopRatedMovies] = useState([])
    const [tvPopular, setTvPopular] = useState([])
    const [tvAiringToday, setTvAiringToday] = useState([])
    const [tvOnTheAir, setTvOnTheAir] = useState([])
    const [tvTopRated, setTvTopRated] = useState([])
    const [popularPerson, setPopularPerson] = useState([])

    const [singleMovie, setSingleMovie] = useState([])
    const [singleMovieRecomendation, setSingleMovieRecomendation] = useState([])
    const [singleMovieReview, setSingleMovieReview] = useState([])


    const [singleTvSeries, setSingleTvSeries] = useState([])
    const [singlePerson, setSinglePerson] = useState([])

    const [singleMovieCrew, setSingleMovieCrew] = useState([])
    const [singleMovieCast, setSingleMovieCast] = useState([])
    const [singlePersonCast, setSinglePersonCast] = useState([])


    const [singleTvSeriesCrew, setSingleTvSeriesCrew] = useState([])
    const [singleTvseriesCast, setSingleTvseriesCast] = useState([])
    const [keywords, setKeywords] = useState([])
    const params = useParams();




    const API_KEY = "d9597dea5ef13f08402498b3f088e59d"
    const imageUrl = 'https://image.tmdb.org/t/p/w500'
    let day = 'day'


    function getMovies() {
        axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`)
            .then(res => {
                setMoviesData(res?.data.results)
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }

    function getDiscoverMovies() {
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`)
            .then(res => {
                setDiscoverMoviesData(res?.data.results)
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }

    function getTrendingMovies(action = 'day') {
        axios.get(`https://api.themoviedb.org/3/trending/movie/${action}?api_key=${API_KEY}`)
            .then(res => {
                settrendingMoviesData(res?.data.results)
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });

    }

    function getLatestMovies() {
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
            .then(res => {
                setLatestMoviesData(res?.data.results)
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }

    function getPopularMovies() {
        axios.get(`https://api.themoviedb.org/3/tv/on_the_air?api_key=${API_KEY}`)
            .then(res => {
                setPopularMoviesData(res?.data.results)
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }

    function getPopular() {
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
            .then(res => {
                setPopularMovies(res?.data.results)
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }

    function getNowPlayingMovies() {
        axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`)
            .then(res => {
                setNowPlayingMovies(res?.data.results)
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }

    function getUpcomingMovies() {
        axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`)
            .then(res => {
                setUpcomingMovies(res?.data.results)
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }

    function getTopRatedMovies() {
        axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`)
            .then(res => {
                setTopRatedMovies(res?.data.results)
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }

    function getTvPopular() {
        axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}`)
            .then(res => {
                setTvPopular(res?.data.results)
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }

    function getTvAiringToday() {
        axios.get(`https://api.themoviedb.org/3/tv/airing_today?api_key=${API_KEY}`)
            .then(res => {
                setTvAiringToday(res?.data.results)
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }

    function getOnTheAir() {
        axios.get(`https://api.themoviedb.org/3/tv/on_the_air?api_key=${API_KEY}`)
            .then(res => {
                setTvOnTheAir(res?.data.results)
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }

    function getTvTopRated() {
        axios.get(`https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}`)
            .then(res => {
                setTvTopRated(res?.data.results)
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }


    function getPopularPerson() {
        axios.get(`https://api.themoviedb.org/3/person/popular?api_key=${API_KEY}`)
            .then(res => {
                setPopularPerson(res?.data.results)
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }

    function getSingleMovie() {
        if (!params.movieId) {
            console.warn("Moive Id is missing");
            return;
        }

        axios.get(`https://api.themoviedb.org/3/movie/${params.movieId.replace(':', '')}?api_key=${API_KEY}`)
            .then(res => {
                setSingleMovie(res?.data)
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });

        axios.get(`https://api.themoviedb.org/3/movie/${params.movieId.replace(':', '')}/recommendations?api_key=${API_KEY}`)
            .then(res => {
                setSingleMovieRecomendation(res?.data.results)
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });


        axios.get(`https://api.themoviedb.org/3/movie/${params.movieId.replace(':', '')}/reviews?api_key=${API_KEY}`)
            .then(res => {
                setSingleMovieReview(res?.data.results)

            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });



        axios.get(` https://api.themoviedb.org/3/tv/${params.movieId.replace(':', '')}?api_key=${API_KEY}`)
            .then(res => {
                setSingleTvSeries(res?.data)
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }



    function getSingleMovieCast() {
        if (!params.movieId) {
            console.warn("Moive Id is missing");
            return;
        }

        axios.get(`https://api.themoviedb.org/3/movie/${params.movieId.replace(':', '')}/credits?api_key=${API_KEY}`)
            .then(res => {
                setSingleMovieCrew(res?.data.crew)
                setSingleMovieCast(res?.data.cast)
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });


        axios.get(`https://api.themoviedb.org/3/tv/${params.movieId.replace(':', '')}/credits?api_key=${API_KEY}`)
            .then(res => {
                setSingleTvSeriesCrew(res?.data.crew)
                setSingleTvseriesCast(res?.data.cast)
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }

    function getKeywords() {

        axios.get(`https://api.themoviedb.org/3/movie/${params.movieId.replace(':', '')}/keywords?api_key=${API_KEY}`)
            .then(res => {
                setKeywords(res?.data.keywords)
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }

    function getSinglePerson() {
        if (!params.movieId) {
            console.warn("person's Id is missing");
            return;
        }

        axios.get(`https://api.themoviedb.org/3/person/${params.movieId.replace(':', '')}?api_key=${API_KEY}`)
            .then(res => {
                setSinglePerson(res?.data)
                console.log(res);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });


        axios.get(`https://api.themoviedb.org/3/person/${params.movieId.replace(':', '')}/movie_credits?api_key=${API_KEY}`)
            .then(res => {
                setSinglePersonCast(res?.data.cast)
                console.log(res);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }

    

    

    useEffect(() => {
        if (!params.movieId) {
            console.warn("Person's Id is missing");
            return;
        }
        getSinglePerson();
    }, [params.movieId]);

    useEffect(() => {
        if (!params.movieId) {
            console.warn("Movie Id is missing");
            return;
        }
        getKeywords();
    }, [params.movieId]);

    useEffect(() => {
        getSingleMovieCast();
    }, [params.movieId]);

    useEffect(() => {
        getSingleMovie();
    }, [params.movieId]);


    useEffect(() => {
        getPopularPerson()
    }, [])

    useEffect(() => {
        getTvTopRated()
    }, [])

    useEffect(() => {
        getOnTheAir()
    }, [])

    useEffect(() => {
        getMovies()
    }, [])

    useEffect(() => {
        getDiscoverMovies()
    }, [])

    useEffect(() => {
        getTrendingMovies()
    }, [])

    useEffect(() => {
        getLatestMovies()
    }, [])

    useEffect(() => {
        getPopularMovies()
    }, [])

    useEffect(() => {
        getPopular()
    }, [])

    useEffect(() => {
        getNowPlayingMovies()
    }, [])

    useEffect(() => {
        getUpcomingMovies()
    }, [])

    useEffect(() => {
        getTopRatedMovies()
    }, [])

    useEffect(() => {
        getTvPopular()
    }, [])

    useEffect(() => {
        getTvAiringToday()
    }, [])




    return { moviesData, imageUrl, latestMoviesData, PopularMoviesData, discoverMoviesData, trendingMoviesData, getTrendingMovies, PopularMovies, nowPlayingMovies, upcomingMovies, topRatedMovies, tvPopular, tvAiringToday, tvOnTheAir, tvTopRated, popularPerson, singleMovie, singleMovieCrew, singleMovieCast, keywords, singleTvSeries, singleTvSeriesCrew, singleTvseriesCast, singlePerson, singlePersonCast, singleMovieReview, singleMovieRecomendation }
}