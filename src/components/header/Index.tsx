import { HeaderCotainer, HeaderContent } from "./Style";
import { FaSearch, FaRegUser } from "react-icons/fa";
import { MdNotificationsActive } from "react-icons/md";

const Header = () =>{
  return(
    <HeaderCotainer>
      <HeaderContent>
        <h1>Kenai</h1>
        <div className="header-nav">
          <FaSearch className="search-icon icon" />
          <p>Início</p>
          <p>Minha lista</p>
          <FaRegUser className="user-icon icon" />
          <MdNotificationsActive className="not-icon icon" />
        </div>
      </HeaderContent>
    </HeaderCotainer>
  )
}

export default Header;