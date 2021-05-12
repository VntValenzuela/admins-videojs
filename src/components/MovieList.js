import React from 'react';

const MovieList = (props) => {
	return (
		<>
			{props.movies.map((movie, id) => (
				<div className='image-container d-flex justify-content-start m-3' key={id}>
					<img src={movie.imgsrc} alt='movie'></img>
					<div className='overlay d-flex align-items-center justify-content-center'>
						{movie.name}
					</div>
				</div>
			))}
		</>
	);
};

export default MovieList;
