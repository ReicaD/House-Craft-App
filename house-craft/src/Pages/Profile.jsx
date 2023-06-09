import { useState } from "react";
import { getAuth, updateProfile } from "firebase/auth";
import { db } from "../firebase.config";
import { updateDoc, doc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";

function Profile() {
  const auth = getAuth();
  const [changeDetails, setChangeDetails] = useState(false);
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });
  const { name, email } = formData;
  const navigate = useNavigate();
  //this will logout form firebase
  const onLogout = () => {
    auth.signOut();
    navigate("/");
  };
  const onSubmit = async () => {
    try {
      if (auth.currentUser.displayName !== name) {
        // updates the display name to the name and the form so it can take care of updating Actual
        await updateProfile(auth.currentUser, {
          displayName: name,
        });
        //update in firestore
        const userRef = doc(db, "users", auth.currentUser.uid);
        await updateDoc(userRef, {
          name,
        });
      }
    } catch (error) {
      console.log("something is wrong ==>", error);
      toast.error("Couldn't update profile Details");
    }
  };

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };
  // console.log(onChange);
  return (
    <div className="profile">
      <header className="profileHeader">
        <p className="pageHeader">My Profile</p>
        <button type="button" className="logOut" onClick={onLogout}>
          logOut
        </button>
      </header>
      <main>
        <div className="perofileDetailsHeader">
          <p className="profileDetailsText">personal Details</p>
          <p
            className="changePersonalDetails"
            onClick={() => {
              changeDetails && onSubmit();
              setChangeDetails((prevState) => !prevState);
            }}
          >
            {changeDetails ? "done" : "change"}
          </p>
        </div>
        {/* //the class below will give dynamic changes depending if the data renders true of false */}
        <div className="profileCard">
          <form action="" className="">
            {/* changing details and disabling the details if the change is false  */}
            <input
              type="text"
              id="name"
              className={!changeDetails ? "profileName" : "ProfileNameActive"}
              disabled={!changeDetails}
              value={name}
              onChange={onChange}
            />
            <input
              type="text"
              id="email"
              className={!changeDetails ? "profileEmail" : "ProfileEmailActive"}
              disabled={!changeDetails}
              value={email}
              onChange={onChange}
            />
          </form>
        </div>
      </main>
    </div>
  );
}

export default Profile;

// console.log(name)
// console.log(auth);
// useEffect(() => {
//   setUser(auth.currentUser);
//   console.log(user);
// }, [])
