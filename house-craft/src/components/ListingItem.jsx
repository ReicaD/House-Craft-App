import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Delection } from "../assets/svg/deleteIcon.svg";
import bedIcon from "../assets/svg/bedIcon.svg";
import bathubIcon from "../assets/svg/bathtubIcon.svg";

// destructing the Id for listing items and linking it ti the props
// import { Link } from "react-router-dom"; // Make sure to import Link

function ListingItem({ listing, id }) {
    console.log("hello", listing.imgUrls[0]);
  return (
    <li className="categoryListing">
      <Link
        to={`category/${listing.type}/${id}`}
        className="categoryListingLnk"
      >
      <img src={listing.imgUrls[0] }alt= {listing.name} className="categoryListingImg"/>
 
      </Link>
    </li>
  );
}

export default ListingItem;

 