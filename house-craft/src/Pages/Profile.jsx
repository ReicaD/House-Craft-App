import { useState } from "react";
import { getAuth } from "firebase/auth";

function Profile() {
  const auth = getAuth();
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });
  // console.log(auth);
  // useEffect(() => {
  //   setUser(auth.currentUser);
  //   console.log(user);
  // }, []);
  return <></>;
  // user ? <h1>{user.displayName}</h1> : "Not logged in";
}

export default Profile;
