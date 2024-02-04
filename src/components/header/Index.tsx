import { HeaderCotainer, HeaderContent } from "./Style";
import { FaRegUser } from "react-icons/fa";
import { MdNotificationsActive } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = () =>{
  return(
    <HeaderCotainer>
      <HeaderContent>
        <h1>Kenai</h1>
        <div className="header-nav">
          <Link to="/kenai">Início</Link>
          <p>Minha lista</p>
          <FaRegUser className="user-icon icon" />
          <MdNotificationsActive className="not-icon icon" />
        </div>
      </HeaderContent>
    </HeaderCotainer>
  )
}

export default Header;