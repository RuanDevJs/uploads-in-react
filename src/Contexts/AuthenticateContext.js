import React, { createContext } from 'react';
import useAuthenticate from '../hooks/useAuthenticate';

export const AuthenticateContext = createContext();

export function AuhtenticateProvider({children}) {
    const {SignIn, SignOut, LogOut, id, authenticated, loading} = useAuthenticate();

    return (
        <AuthenticateContext.Provider value={{SignIn, SignOut, LogOut, id, authenticated, loading}}>
            {children}
        </AuthenticateContext.Provider>
    );
}
