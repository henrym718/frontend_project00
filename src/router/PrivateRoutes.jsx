import { Outlet, Navigate } from 'react-router-dom';
import useAuthContext from '../hooks/useAuthContext';

const PrivateRoutes = () => {
    const { auth } = useAuthContext();

    return auth?.accessToken ? <Outlet /> : <Navigate to="/unauthorized" replace />;
};

export default PrivateRoutes;
