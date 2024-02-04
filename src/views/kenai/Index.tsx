import { useState, useEffect } from "react";
import Header from "../../components/header/Index";
import CardMain from "../../components/cardMainKenai/Index";
import { KenaiContainer, KenaiMoviesCard } from "./Style";
import { MovieService } from "../../api/api";

interface Movie {
  id: number
}

const Kenai = () =>{
  const [movies, setMovies] = useState<Movie[]>([]);

  const getMovies = async () =>{
    try{
      const {data: {results}} = await MovieService.getAllMovies();
      setMovies(results); 
    }catch(error){
      console.error("Erro ao obter filmes:", error);
    }
  }

  useEffect(() =>{
    getMovies();
  }, [])

  return(
    <KenaiContainer>
      <Header />
      <KenaiMoviesCard>
        {movies.map((movie) => (
          <div key={movie.id}>
            <CardMain movieProp={movie} />
          </div>
        ))}
      </KenaiMoviesCard>
    </KenaiContainer>
  )
}

export default Kenai;