import React, { useContext, useDebugValue } from 'react';
import { Link } from 'react-router-dom';

import UserContext from '../../UserContext';
import './Header.css';

const Header = () => {
    const [user,setUser] =  useContext(UserContext); 

    console.log(user);

    return (

        <header>
            <div className="container">
                <div className="navbar">
                     <div className="logo__img--box">
                         <Link to="/"><img className="logo" src="https://i.ibb.co/1bBcdyW/logo.png" alt=""/></Link>
                     </div>
                   <nav className="navbar__nav">
                            <Link className="nav__link"  to="/">Home</Link>
                            <Link className="nav__link" to="/">Destination</Link>
                            <Link className="nav__link" to="/">Blog</Link>
                            <Link className="nav__link" to="/">Contact</Link>
                            {/* <Link className="btn__primary" to="/">Login</Link> */}

                            {
                              user.email ? <Link className="nav__link" to="/">{user.displayName}</Link>
                              :
                             <Link className="btn__primary" to="/login">Login</Link>
                            }

                            {/* {
                                user.email ? <Link className="btn__primary" to="/">Login</Link>
                            :
                            
                                user.email && <Link className="nav__link" to="/">{user.displayname}</Link>
                                
                            }  */}
                            
                   </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;