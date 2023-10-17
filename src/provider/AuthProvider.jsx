import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { createContext, useState } from 'react';
import { auth } from '../firebase/firebaseConfig';

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

//signup
const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //login
  const userLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };



const authInfo = {
    user,
    loading,
    createUser,
    userLogin
}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;