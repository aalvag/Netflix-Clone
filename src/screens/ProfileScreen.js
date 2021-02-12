import React from "react";
import Nav from "../components/Nav";
import "./ProfileScreen.css";
import profileicon from "../Images/profileicon.png";
import { useSelector } from "react-redux";
import { auth } from "../firebase";
import PlansScreen from "./PlansScreen";

function ProfileScreen() {
  const { user } = useSelector((state) => state.user);

  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img src={profileicon} alt="" />
          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="profileScrenn__plans">
              <h3>Plans</h3>
              <PlansScreen></PlansScreen>

              <button
                onClick={() => auth.signOut()}
                className="profileScreen__signOut"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
