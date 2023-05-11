import { useNavigate, useLocation } from "react-router-dom";
import { ReactComponent as OfferIcon } from "../assets/svg/localOfferIcon.svg";
import { ReactComponent as ExploreIcon } from "../assets/svg/exploreIcon.svg";
import { ReactComponent as PersonOutlineIcon } from "../assets/svg/personOutlineIcon.svg";

function NavBar() {
  //the hook below will help navigate around the navbar footer
  const navigate = useNavigate();
  const location = useLocation();
  
  const pathMatchRoute = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };

  return (
    <footer className="navbar">
      <div className="navbarNav">
        <ul className="navbarListItems">
          <li className="navbarListItem" onClick={() => navigate("/")}>
            <ExploreIcon
              fill={pathMatchRoute("/") ? "#2c2c2c" : "#C71585"}
              with="36px"
              height="36px"
            />
            <p
              className={
                pathMatchRoute("/")
                  ? "navBarListItemNameActive"
                  : "navbarListItem"
              }
            >
              Explore
            </p>
          </li>
          <li className="navbarListItem" onClick={() => navigate("/offers")}>
            <OfferIcon
              fill={pathMatchRoute("/offers") ? "#2c2c2c" : "#C71585"}
              with="36px"
              height="36px"
            />
            <p
              className={
                pathMatchRoute("/offers")
                  ? "navBarListItemNameActive"
                  : "navbarListItem"
              }
            >
              Offers
            </p>
          </li>
          <li className="navbarListItem" onClick={() => navigate("/profile")}>
            <PersonOutlineIcon
              fill={pathMatchRoute("/profile") ? "#2c2c2c" : "#C71585"}
              with="36px"
              height="36px"
            />
            <p
              className={
                pathMatchRoute("/profile")
                  ? "navBarListItemNameActive"
                  : "navbarListItem"
              }
            >
              Profile
            </p>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default NavBar;
