import React from 'react';
import {Link} from 'react-router-dom';



 const Nav = () => {
     
         return (
        <>
        <nav>
            <Link to ="/bar" >
            <button>Bar</button>
            </Link>

            <Link to = '/radar'>
            <button>Render</button>
            </Link>
      </nav>
      </>


    )
}

export default Nav;
