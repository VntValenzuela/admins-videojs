import React, { useState, useEffect } from 'react'
import './Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from "./MovieList";
import MovieListHeading from './MovieListHeading';
import SearchBox from './SearchBox';

const Home = () => {
	const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState('');

	const getMovieRequest = async () => {
		const url = `https://mocki.io/v1/d7796acb-1cb4-4e09-8064-680b921d74bf `;

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
	};

	useEffect(() => {
		getMovieRequest();
	}, []);

    return (
		<div className='container-fluid movie-app'>
			<div className='row d-flex align-items-center mt-4 mb-4'>
				<MovieListHeading heading='Movies' />
				<SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
			</div>
			<div className='row'>
				<MovieList movies={movies} />
			</div>
		</div>
	);
};

export default Home;





