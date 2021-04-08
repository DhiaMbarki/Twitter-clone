import React from 'react'
import {Link} from 'react-router-dom'
function Nav() {
    return (
        <nav>
        <div class="nav-wrapper black">
          <Link to="/" class="brand-logo right">Tweetler</Link>
          <ul id="nav-mobile" class="left ">
            <li><Link to="/signin">signin</Link></li>
            <li><Link to="/signup">signup</Link></li>
            <li><Link to="/profile">Profile</Link></li>
          </ul>
        </div>
      </nav>
    )
}

export default Nav
