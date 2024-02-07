import { useState, useEffect } from "react";
import Header from "../../components/header/Index";
import CardMain from "../../components/cardMainKenai/Index";
import { KenaiContainer, KenaiMoviesCard } from "./Style";
import { MovieService } from "../../api/api";
import { ThreeCircles } from 'react-loader-spinner'

interface Movie {
  id: number,
  title: string,
  poster_path: string
}

const Kenai = () =>{
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  const getMovies = async () =>{
    try{
      const {data: {results}} = await MovieService.getAllMovies();
      setMovies(results); 
    }catch(error){
      console.error("Erro ao obter filmes:", error);
    }finally{
      setLoading(false);
    }
  }

  useEffect(() =>{
    getMovies();
  }, [])

  return(
    <>
      {loading ? (
        <div className="spinner">  
          <ThreeCircles
            visible={true}
            height="100"
            width="100"
            color="#FFA634"
            ariaLabel="three-circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
            />
          </div>
      ) : (
        // Caso contrário, exiba os filmes
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
      )}
    </>
  )
}

export default Kenai;