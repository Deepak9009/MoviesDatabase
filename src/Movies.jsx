import React from 'react';
import {NavLink} from 'react-router-dom';
import { useGlobalContext } from './Context'

const Movies = () => {
  const { movies,isLoading } = useGlobalContext();
  console.log(movies);
  // Check if movie is defined before mapping over it
  if (isLoading) {
    return (
      <section className=" ">
        <div className="loading">Loading....</div>;
      </section>
    );
  }

  return (
   
      <section className='movie-page'>
        <div className="grid grid-4-col">
          {movies && movies.map((curMovie) => {
            const { Title, Poster, imdbID } = curMovie;//Destructuring
            const sortmovie=Title.substring(0,15);
            return (
              <NavLink to={`movie/${imdbID}`} key={imdbID}>
                <div className="card">
                  <div className="card-info">
                    <h2>{Title.length>15?`${sortmovie}...`:sortmovie}</h2>
                    <img src={Poster} alt={imdbID} />
                  </div>
                </div>
              </NavLink >
            );
          })}
        </div>
      </section>
  );
};

export default Movies;

