import { useContext } from 'react';
import authContext from '../context/authProvider';

const useAuthContext = () => {
    return useContext(authContext);
};

export default useAuthContext;
