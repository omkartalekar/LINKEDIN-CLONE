import React, { useState } from "react";
import { auth } from "./firebase";
import "./Login.css";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch=useDispatch();

  const loginToApp = (e) => {
    e.preventDefault();

    auth.signInWithEmailAndPassword(email,password)
    .then(userAuth=>{
        dispatch(login({
            email:userAuth.user.email,
            uid:userAuth.user.uid,
            displayName:userAuth.user.displayName,
            profileUrl:userAuth.user.photoURL,
        }))
    })
    .catch((error)=>alert(error))
  };
  const register = () => {
      if(!name){
          return alert("Please enter a full name!");
      }
      auth.createUserWithEmailAndPassword(email,password).then((userAuth)=>{
          userAuth.user.updateProfile({
              displayName:name,
              photoURL:profilePic,
          })
          .then(()=>{
              dispatch(login({
                  email:userAuth.user.email,
                  uid:userAuth.user.uid,
                  displayName:name,
                  photUrl:profilePic,
              }))
          })
      }).catch(error=>alert(error));
  };
  return (
    <div className="login">
      <img
        src="https://www.pinclipart.com/picdir/middle/55-557165_graphic-transparent-library-file-logo-wikimedia-commons-transparent.png"
        alt="linkedin_logo"
        
      />

      <form>
        <input type="text" placeholder="Full Name (required if registering)" 
        value={name}
        onChange={(e) => setName(e.target.value)}/>

        <input type="text" placeholder="Profile pic URL (optional)" 
        value={profilePic} onChange={(e)=>setProfilePic(e.target.value)}/>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />

        <input
          type="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" onClick={loginToApp}> Sign In
        </button>
      </form>

      <p>
        Not a member?{" "}
        <span className="login__register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
};

export default Login;
