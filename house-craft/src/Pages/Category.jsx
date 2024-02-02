import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  collection,
  query,
  where,
  orderBy,
  limit,
  startAfter,
  doc,
  getDocs,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../firebase.config";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";

function Category() {
  const [listings, setListings] = useState(null);
  const [loading, setLoading] = useState(true);

  const params = useParams();
  useEffect(() => {
    // console.log('this is p',params);
    const fetchListings = async () => {
      //this is to get reference by using collection
      try {
        const listingsRef = collection(db, "listings");
        console.log("=>", listingsRef);
        //getting the query by adding params.categoryName (categoryname will be fetched see app.js line:22)
        const q = query(
          listingsRef,
          where("type", "==", params.categoryName),
          orderBy("timestamp", "asc"),
          limit(10)
        );
        console.log("query", q);
        //excute query which will get the doc for the query
        const querySnap = await getDocs(q);
        console.log("QS", querySnap);
        // console.log('querySnap',querySnap);
        const listings = [];
        querySnap.forEach((doc) => {
          // console.log("doc", doc.data);
          return listings.push({
            id: doc.id,
            data: doc.data(),
          });
        });
        console.log("listings", listings);

        // setListings(listings);
        // console.log("listings", listings);
      } catch (error) {
        // toast.error("meek mill")
        console.log(error);
      }
    };
    fetchListings();
  }, []);
  return <div>Category</div>;
}

export default Category;
