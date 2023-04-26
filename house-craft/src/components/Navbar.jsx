import { useNavigate, useLocation } from "react-router-dom";
import { ReactComponent as OfferIcon } from "../assets/svg/localOfferIcon.svg";
import { ReactComponent as ExploreIcon } from "../assets/svg/exploreIcon.svg";
import { ReactComponent as PersonOutlineIcon } from "../assets/svg/personOutlineIcon.svg";

function NavBar() {
  return (
    <footer className="navbar">
      <div className="navbarNav">
        <ul className="navbarListItems">
          <li className="navbarListItem">
            <ExploreIcon fill="#C71585" with="36px" height="36px" />
            <p>Explore</p>
          </li>
          <li className="navbarListItem">
            <OfferIcon fill="#C71585" with="36px" height="36px" />
            <p>offerIcon</p>
          </li>
          <li className="navbarListItem">
            <PersonOutlineIcon fill="#C71585" with="36px" height="36px" />
            <p>PersonOutlineIcon</p>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default NavBar;
