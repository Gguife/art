import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { MovieService } from "../../api/api.ts";
import Header from "../../components/header/Index.tsx"; 
import styled from "styled-components";
import { MovieContent, MovieMainContainter, MoviesCatalogo } from "./Style.ts";
import { IoMdStar, IoMdStarHalf } from "react-icons/io";
import Filme1 from "../../assets/item01.png";
import Filme2 from "../../assets/item02.png";
import Filme4 from "../../assets/item04.png";
import Filme5 from "../../assets/item05.png";

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
      <MovieMainContainter>
        <MovieContent>
          <div className="movies-info">
            <div className="stars">
              <IoMdStar className="star-icon" />
              <IoMdStar className="star-icon" />
              <IoMdStar className="star-icon" />
              <IoMdStar className="star-icon" />
              <IoMdStarHalf className="star-icon" />
            </div>
            <div className="movie-content">
              <h1>{movie.title}</h1>
              <p className="movie-lang">Original Leangue: <span>{movie.original_language}</span></p>
              <p className="movie-desc">{movie.overview}</p>
            </div>
            <Link to="/kenai" className="movie-button">Assistir Agora</Link>
          </div>
        </MovieContent>
        <MoviesCatalogo>
          <img src={Filme1} alt="" />
          <img src={Filme2} alt="" />
          <img src={Filme4} alt="" />
          <img src={Filme5} alt="" />
        </MoviesCatalogo>
      </MovieMainContainter>
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