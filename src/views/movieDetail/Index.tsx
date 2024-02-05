import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MovieService } from "../../api/api.ts";
import Header from "../../components/header/Index.tsx"; 
import styled from "styled-components";
import { MovieContent } from "./Style.ts";
import { IoMdStar, IoMdStarHalf } from "react-icons/io";

interface Movie {
  backdrop_path: string;
  title: string;
  overview: string;
  original_language: string;
}

const MovieDetail = () =>{
  const {id} = useParams();
  const [movie, setMovie] = useState<Movie | undefined>(undefined);
  
  useEffect(() => {
    const fetchMovie = async () =>{
      try{  
        const response = await MovieService.getMovie(id);
        setMovie(response.data);
      }
      catch(error){
        console.error("Erro ao obter os dados do filme!", error);
      };
    }

    fetchMovie();
  }, [])

  if(!movie){
    return <div>Carregando...</div>
  }

  return (
    <MovieContainer backdrop_path={movie.backdrop_path} >
      <Header />
      <MovieContent>
        <div className="stars">
          <IoMdStar className="star-icon" />
          <IoMdStar className="star-icon" />
          <IoMdStar className="star-icon" />
          <IoMdStar className="star-icon" />
          <IoMdStarHalf className="star-icon" />
        </div>
        <div className="movies-info">
          <h1>{movie.title}</h1>
          <p>Original Leangue: <span>{movie.original_language}</span></p>
          <p>{movie.overview}</p>
          <button>Assistir Agora</button>
        </div>
        <div className="movies-catalago">
          <p>Filme 1</p>
          <p>Filme 2</p>
          <p>Filme 3</p>
          <p>Filme 4</p>
          <p>Filme 5</p>
        </div>
      </MovieContent>
    </MovieContainer>
  )
}

const MovieContainer = styled.div<{ backdrop_path: string }>`
position: relative;
background-image: url(${props => `https://image.tmdb.org/t/p/w1280${props.backdrop_path}`});
background-size: cover;
background-position: center center;
height: 100vh;

&::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
}
`;




export default MovieDetail;