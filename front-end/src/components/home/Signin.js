import React from 'react'
import { Link } from "react-router-dom";


function Signin() {
    return (
        <div>
        
      
        <div className="cardd">
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
           
<Link  to="/Signup"> <p className="colll">I don't have an account ..</p></Link>
</h5>
      </div>
        </div>
        
        </div>
    )
}

export default Signin
