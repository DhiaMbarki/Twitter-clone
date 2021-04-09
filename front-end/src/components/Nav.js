import React from 'react'
import {Link} from 'react-router-dom'
function Nav() {
    return (
        <nav>
        <div class="nav-wrapper black">
          <Link to="/" class="brand-logo right">Tweetler</Link>
          <ul id="nav-mobile" class="left ">
            <li><Link to="/signin">𝒔𝒊𝒈𝒏𝒊𝒏</Link></li>
            <li><Link to="/signup">𝒔𝒊𝒈𝒏𝒖𝒑</Link></li>
            <li><Link to="/profile">𝑷𝒓𝒐𝒇𝒊𝒍𝒆</Link></li>
            <li><Link to="/addpost">𝒏𝒆𝒘 𝑻𝒘𝒆𝒆𝒕</Link></li>

          </ul>
        </div>
      </nav>
    )
}

export default Nav
