import React from 'react'

function Nav() {
    return (
        <nav>
        <div class="nav-wrapper white">
          <a href="#" class="brand-logo right">Logo</a>
          <ul id="nav-mobile" class="left hide-on-med-and-down">
            <li><a href="sass.html">signin</a></li>
            <li><a href="badges.html">signup</a></li>
            <li><a href="collapsible.html">Profile</a></li>
          </ul>
        </div>
      </nav>
    )
}

export default Nav
