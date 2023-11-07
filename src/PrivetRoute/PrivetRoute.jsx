import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


const PrivetRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    if(loading){
        return <>
        <Skeleton/>
        <Skeleton count={10} />
        </>
    }
    if(user){
       return children;
    }
    return <Navigate to='/login'></Navigate>
};
PrivetRoute.propTypes={
    children: PropTypes.node
}

export default PrivetRoute;