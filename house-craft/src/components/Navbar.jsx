import { useNavigate, useLocation } from "react-router-dom";
import { ReactComponent as OfferIcon } from "../assets/svg/localOfferIcon.svg";
import { ReactComponent as ExploreIcon } from "../assets/svg/exploreIcon.svg";
import { ReactComponent as PersonOutlineIcon } from "../assets/svg/personOutlineIcon.svg";

function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <footer className="navbar">
      <div className="navbarNav">
        <ul className="navbarListItems">
          <li className="navbarListItem" onClick={() => navigate("/")}>
            <ExploreIcon fill="#8FBC8B" with="36px" height="36px" />
            <p>Explore</p>
          </li>
          <li className="navbarListItem" onClick={() => navigate("/offer")}>
            <OfferIcon fill="#8FBC8B" with="36px" height="36px" />
            <p>Offer</p>
          </li>
          <li className="navbarListItem" onClick={() => navigate("/profile")}>
            <PersonOutlineIcon fill="#8FBC8B" with="36px" height="36px" />
            <p>Profile</p>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default NavBar;
