import Clock from "../../components/clock/Index";
import { Link } from "react-router-dom";
import { HeaderPerfil, HomeContainer, HomeMain } from "./Style";
import Perfil1 from "../../assets/3.png"
import Perfil2 from "../../assets/7.png"

const Home = () =>{
  return(
    <HomeContainer>
      <HeaderPerfil>
        <h1>Kenai</h1>
        <Clock />
      </HeaderPerfil>
      <HomeMain>
        <div className="mainDesc">
          <h3>Bem-vindo de volta ao Kenie</h3>
          <p>Quem está usando ?</p>
        </div>
        <div className="mainPerfis">
          <Link to="/kenai" className="card-link">
            <div className="perfil-card">
              <img src={Perfil2} alt="perfil 1" />
              <p>Gguife</p>
            </div>
          </Link>
          <Link to="/kenai" className="card-link">
            <div className="perfil-card">
              <img src={Perfil1} alt="Perfil 2" />
              <p>Covidado</p>
            </div>
          </Link>
        </div>
      </HomeMain>
    </HomeContainer>
  )
}

export default Home;