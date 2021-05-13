import React from 'react';
import { useHistory } from "react-router-dom";

const MovieList = (props) => {
	const history = useHistory();
	const handleRoute = (movies) =>{ 
		history.push({
			pathname: '/detail',
			data:  movies
		});
	  }
	return (
		<>
			{props.movies.map((movie, id) => (
				<div onClick={() => handleRoute(movie)} className='image-container d-flex justify-content-start m-3' key={id}>
					<img src={movie.imgsrc} alt='movie'></img>
					<div className='overlay d-flex align-items-center justify-content-center'>
						{movie.name}
					</div>
				</div>
			))
			}
		</>
	);
};

export default MovieList;
