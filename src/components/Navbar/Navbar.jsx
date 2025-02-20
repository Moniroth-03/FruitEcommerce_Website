import React from 'react'
import { FaLeaf } from "react-icons/fa";

const Navbar = () => {
  return <nav>
    <div className="container">
        {/* Logo section */}
        <div className="text-2xl flex item-center gap-2 font-bold uppercase">
           <p className="text-primary">Fruit</p> 
           <p className="text-secondary">Store</p>
           <FaLeaf className="text-green-500" />
        </div>
        {/* Menu section */}
    </div>
  </nav>
}

export default Navbar