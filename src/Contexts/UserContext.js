import React, { createContext } from 'react';
import useUser from '../hooks/useUser';

export const UserContext = createContext();

export default function UserProvider({children}) {
    const {Login, GetUserById, ChangeImageProfile, CreateUser, LogOut, loading, authenticated} = useUser();

    return (
        <UserContext.Provider value={{Login, GetUserById, ChangeImageProfile, CreateUser, LogOut, loading, authenticated}}>
            {children}
        </UserContext.Provider>
    );
}
