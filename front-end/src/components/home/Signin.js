import React from 'react'
import { Link } from "react-router-dom";


function Signin() {
    return (
        <div>
        
      
        <div className="card">
            <div className="card1">
        <h2>𝘛𝘸𝘦𝘦𝘵𝘭𝘦𝘳</h2>
        <input type="text"
        placeholder="email"
        />
         <input type="text"
        placeholder="password"
        />
       <button className="waves-effect waves-light btn-small">signin</button>
       <h5>
<Link to="/Signup"> You don't have an account ..</Link>
</h5>
      </div>
        </div>
        
        </div>
    )
}

export default Signin
