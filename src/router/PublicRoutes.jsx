import { Navigate, Outlet } from 'react-router-dom';
import useAuthContext from './../hooks/useAuthContext';

const PublicRoutes = () => {
    const { auth } = useAuthContext();

    return !auth?.accessToken ? <Outlet /> : <Navigate to="/" replace />;
};

export default PublicRoutes;
