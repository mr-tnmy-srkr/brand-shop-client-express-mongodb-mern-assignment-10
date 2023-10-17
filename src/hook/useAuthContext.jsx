import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const useAuthContext = () => {
    const contextHook = useContext(AuthContext)
    return contextHook;
};

export default useAuthContext;