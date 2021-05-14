import React, { useState, useEffect, useContext } from 'react'
import './Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from "./MovieList";
import SearchBox from './SearchBox';
import { Redirect } from 'react-router-dom'
import {LoginAuth} from '../helper/Context'
import { Button, Dropdown, ButtonGroup } from "react-bootstrap"

function Home () {

	const [movies, setMovies] = useState([]);
	const [prevMovies, setPrevMovies] = useState([]);
    const [searchValue, setSearchValue] = useState('');
	const [dropdownValue, setDropDownValue] = useState('All');
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

	  const filterMovie = () => {
		console.log(dropdownValue);
		let arraymovies = [];
		for(var i = 0; i < movies.length; i++)
		{
			if(movies[i].genre == dropdownValue)
			{
				const foundMovie = movies[i];
				arraymovies.push(foundMovie);	
			}
		}
		if(arraymovies.length === 0)
		{
			console.log("entro al prev");
			arraymovies = prevMovies;	
			setMovies(arraymovies);
		}
		else
		{
			console.log("entro al set");
			setMovies(arraymovies);
			arraymovies = [];
		}	
	
	}

	  useEffect(() => {
		getMovieRequest();
	}, []);

	useEffect(() => {
		searchMovie();
	}, [searchValue]);

	useEffect(() => {
		filterMovie();
	}, [dropdownValue]);


	if(!auth) {
		return <Redirect to='/login'/>
	}
    return (
		<div className='container-fluid movie-app'>
			<style type="text/css">
                    {`
                    .btn-login {
                    background-color: red;
                    color: white;
                    opacity: 1;
                    }
                    `}
                </style>
			<h2>Home</h2>
			<div className='d-flex'>
				<Dropdown as={ButtonGroup}
						onSelect={(event) => setDropDownValue(event)}>
					<Button variant="login">Genre</Button>
					<Dropdown.Toggle split variant="login" id="dropdown-split-basic" />
					<Dropdown.Menu>
						<Dropdown.Item eventKey="All">All</Dropdown.Item>
						<Dropdown.Item eventKey="Action">Action</Dropdown.Item>
						<Dropdown.Item eventKey="Drama">Drama</Dropdown.Item>
						<Dropdown.Item eventKey="Comedy">Comedy</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
				<SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
			</div>
			<div className='movies d-flex'>
				<MovieList movies={movies} />
			</div>
		</div>
	);
};

export default Home;




