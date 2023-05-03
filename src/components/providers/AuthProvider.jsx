import React, { createContext } from 'react';

const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const authInfo = { name: 'sabit' }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;