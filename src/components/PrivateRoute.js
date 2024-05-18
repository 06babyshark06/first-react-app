import { Navigate } from "react-router-dom";

const PrivateRoute=({children})=> {
    const userInfo=localStorage.getItem('userInfo');
    if (!userInfo) return <Navigate to={'/login'} replace={true}/>
    return children;
}
export default PrivateRoute;