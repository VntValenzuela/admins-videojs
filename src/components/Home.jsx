import React, { useState, useEffect, useContext } from 'react'
import './Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Image } from "react-bootstrap"
import MovieList from "./MovieList";
import SearchBox from './SearchBox';
import logo from '../assets/logo.png'
import { Redirect } from 'react-router-dom'
import {LoginAuth} from '../helper/Context'

function Home () {

	const [movies, setMovies] = useState([]);
	const [prevMovies, setPrevMovies] = useState([]);
    const [searchValue, setSearchValue] = useState('');
	const {auth, setAuth} = useContext(LoginAuth)

	const getMovieRequest = async () => {
		const url = `https://varplayerapi.herokuapp.com/movie`;

		const response = await fetch(url);
		const responseJson = await response.json();
		setPrevMovies(responseJson);
		setMovies(responseJson);	
	};
	const searchMovie = () => {
		let arraymovies = [];
		for(var i = 0; i < movies.length; i++)
		{
		if(searchValue.length > 0)
		{
			if (movies[i].name.substr(0, searchValue.length).toUpperCase() == searchValue.toUpperCase()) 
			{	
				const foundMovie = movies[i];
				arraymovies.push(foundMovie);
			}
		}
		else
		{
			arraymovies = prevMovies;
		}
		}
		if(arraymovies.length === 0)
		{
			arraymovies = prevMovies;	
		}
		else
		{
			setMovies(arraymovies);
		}

		
		

	  }
	  useEffect(() => {
		getMovieRequest();
	}, []);

	useEffect(() => {
		searchMovie(searchValue);
	}, [searchValue]);


	if(!auth) {
		return <Redirect to='/login'/>
	}
    return (
		<div className='container-fluid movie-app'>
			<Image src={logo} className="topleft"/>
			<div className='row d-flex'>
				<SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
			</div>
			<div className='movies d-flex'>
				<MovieList movies={movies} />
			</div>
		</div>
	);
};

export default Home;





