import React from "react";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="card">
      <div className="card1">
        <h2>𝘛𝘸𝘦𝘦𝘵𝘭𝘦𝘳</h2>
        <input type="text" placeholder="user-name" />
        <input type="text" placeholder="email" />
        <input type="text" placeholder="password" />
        <button className="waves-effect waves-light btn-small">signup</button>
        <h5>
          <Link to="/Signin"> You already have an account </Link>
        </h5>
      </div>
    </div>
  );
}

export default Signup;
