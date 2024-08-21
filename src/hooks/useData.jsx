import axios from "axios";
import { useEffect, useState, useLocation } from "react";
import SearchedMovies from "../pages/searchedMovies/searchedMovies";

export default function UseData() {

    const [moviesData, setMoviesData] = useState([])
    const [discoverMoviesData, setDiscoverMoviesData] = useState([])
    const [trendingMoviesData, settrendingMoviesData] = useState([])
    const [latestMoviesData, setLatestMoviesData] = useState([])
    const [PopularMoviesData, setPopularMoviesData] = useState([])
    const [PopularMovies, setPopularMovies] = useState([])




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

        console.log(trendingMoviesData);
    }

    function getLatestMovies() {
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
            .then(res => {
                console.log(res);
                setLatestMoviesData(res?.data.results)
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }



    function getPopularMovies() {
        axios.get(`https://api.themoviedb.org/3/tv/on_the_air?api_key=${API_KEY}`)
            .then(res => {
                console.log(res);
                setPopularMoviesData(res?.data.results)
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }


    function getPopular() {
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
            .then(res => {
                console.log(res);
                setPopularMovies(res?.data.results)
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }


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



    return { moviesData, imageUrl, latestMoviesData, PopularMoviesData, discoverMoviesData, trendingMoviesData, getTrendingMovies, PopularMovies}
}