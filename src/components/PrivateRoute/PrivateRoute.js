import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
// import { LoggedInUserContext } from '../../App';
import UserContext from '../../UserContext';



const PrivateRoute = ({children,...rest}) => {
    const [user,setUser]=  useContext(UserContext);

    console.log(user);
    
    return <>
        <Route
            {...rest}
            render={({location}) =>
                user?.email ? (  //chainin root 
                    children
                ):(
                    <Redirect
                    to={{
                        pathname:"/login",
                        state:{from:location}
                    }}
                   />
                ) 
            }    
        />  
    </>
};

export default PrivateRoute;