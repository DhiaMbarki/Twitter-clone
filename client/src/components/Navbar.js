import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { UidContext } from "./AppContext";
import InfNav from "./InfNav";
import Logout from "./Log/Logout";

const Navbar = () => {
  const uid = useContext(UidContext);
  const userData = useSelector((state) => state.userReducer);

  return (
    <nav>
      <div className="nav-container">
        <div className="logo">
          <NavLink exact to="/">
            <div className="logo">
              <h3> 𝕋𝕨𝕖𝕖𝕥𝕝𝕖𝕣 </h3>
            </div>
          </NavLink>

        </div>
        {uid ? (
          <ul>
            <li></li>
            <li className="welcome">
              <NavLink exact to="/profil">
                <h5 className="chang" >Hello {userData.pseudo}</h5>
              </NavLink>
            </li>
            <Logout />
          </ul>
          
        ) : (
          
          <ul>
            <li></li>
            <li>
              <NavLink exact to="/profil">
                <h4 className="chang">logout</h4>
              </NavLink>
            </li>
          </ul>
        )}
      </div>
      
    </nav>
  );
};

export default Navbar;
