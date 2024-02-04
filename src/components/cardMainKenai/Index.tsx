import React from "react";
import { Link } from "react-router-dom";
import { CardMainContainer } from "./Style";

interface MovieProps{
  id: number, 
  title: string,
  poster_path: string
}

const CardMain: React.FC<{ movieProp: MovieProps }> = ({ movieProp }) => {
  
  return(
    <CardMainContainer>
      <Link to={`/movie/${movieProp.id}`}>
        <div className="movie-img">
          <img src={`https://image.tmdb.org/t/p/w1280${movieProp.poster_path}`} alt={movieProp.title} />
        </div>
        <div className="movie-info">
          <h3>{movieProp.title}</h3>
        </div>
      </Link>
    </CardMainContainer>
  )
}

export default CardMain;