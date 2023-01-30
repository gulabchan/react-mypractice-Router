import {Link} from 'react-router-dom'
import React from 'react'

const NavBar=()=>{
  return(<div>
    
    <br/>
    
    <ul>
      <li><Link to="/about">About</Link></li>
     <li> <Link to="/">Home</Link></li>
      </ul>
    </div>
    
    )
}

export default NavBar;