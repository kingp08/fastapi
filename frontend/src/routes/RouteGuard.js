import React from 'react';
import { Route, Redirect } from 'react-router-dom';
 
const RouteGuard = ({ component: Component, ...rest }) => {
 
   function hasJWT() {
       return !!localStorage.getItem("token");
   }
 
   return (
       <Route {...rest}
           render={props => (
               hasJWT() ?
                   <Component {...props} />
                   :
                   <Redirect to={ '/login' } />
           )}
       />
   );
};
 
export default RouteGuard;