import { PropsWithChildren, useContext, useMemo } from "react";
import { useUserSessionQuerty } from "../queries/useUserSessionQuery";
import { createContext } from 'react';

interface IAuthProvider {
    isDeveloper: boolean;
}

const AuthContext = createContext<IAuthProvider>({
    isDeveloper: false
})

export function AuthProvider({ children }: PropsWithChildren) {
    const { data: user } = useUserSessionQuerty()
    
    const isDeveloper = useMemo(() => {
        if (!user) return false;

        return user.role === "Developer";
    }, [user])

    return (
        <AuthContext.Provider value={{ isDeveloper }}>
        {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => useContext(AuthContext);