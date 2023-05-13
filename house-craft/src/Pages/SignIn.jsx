import { useState } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate,Navigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import OAuth from "../components/OAuth";
import { ReactComponent as ArrowRightIcon } from "../assets/svg/keyboardArrowRightIcon.svg";
import visibiltyIcon from "../assets/svg/visibilityIcon.svg";

function SignIn() {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
  const navigate = useNavigate();

  //this will define the OnChange in our input below see (line 32)
  const onChange = (e) => {
    // this allows either password or email IDs to be displayed
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };
  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (userCredential.user) {
        navigate("/");
      }
    } catch (error) {
      toast.error("bad user Credentials");
    }
  };
  return (
    <>
      <div className="pageContainer">
        <header>
          <p className="pageHeader">Welcome back! We missed you.</p>
        </header>
        {/* this shows the value is going to be the email that we destructured from state*/}
        <form onSubmit={onSubmit}>
          <input
            type="email"
            className="emailInput"
            placeholder="Email"
            id="email"
            value={email}
            onChange={onChange}
          />
          {/* this conditional is to set the and if the  password is true text will be rendered see (line 36) */}
          <div className="passwordInputDiv">
            <input
              type={showPassword ? "text" : "password"}
              className="passwordInput"
              placeholder="Password"
              id="password"
              value={password}
              onChange={onChange}
            />
            <img
              src={visibiltyIcon}
              alt="show password"
              className="showPassword"
              onClick={() => setShowPassword((prevState) => !prevState)}
            />
          </div>
          {/* this will link to the forgot password route see App.js (line 20) */}
          <Link to="/forgot-password" className="forgotPasswordLink">
            Trouble signing in?
          </Link>
          <div className="signInBar">
            <p className="signIn Text">Sign In</p>
            <button className="signInButton">
              <ArrowRightIcon fill="#ffffff" width="34px" height="34px" />
            </button>
          </div>
        </form>
        <OAuth/> 
        <Link to="/sign-up" className="registerLink">
          Sign-Up Here!
        </Link>
        {/* <Navigate to="/" /> */}
      </div>
    </>
  );
}
export default SignIn;
