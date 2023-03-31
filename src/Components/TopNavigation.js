import React from 'react'
import {Link} from "react-router-dom"
function TopNavigation() {
  return (
    <div>
        <nav>
           <Link to="/Dashboard">Dashboard</Link>
           <Link to="/Messages">Messages</Link> 
           <Link to="/Orders">Orders</Link>
           <Link to="/Help">Help</Link>
        </nav>
    </div>
  )
}

export default TopNavigation