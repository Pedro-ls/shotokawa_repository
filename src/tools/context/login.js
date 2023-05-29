"use Client"
import { createContext, useContext, useState } from 'react'

const context = createContext()


export const AuthContext = ({ children }) => {

    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);

    const login = async ({ email, password }) => {

        const { user, token } = await (await fetch('http://localhost:3000/api/login_fake', {
            body: JSON.stringify({
                email,
                password
            }),
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        })).json();



        setUser(user)

        setToken(token)

        return await new Promise((resolve) => resolve())
    }
    const logout = async () => {
        setUser({})
        setToken({})
        return await new Promise((resolve) => resolve())
    }

    return (
        <context.Provider value={{ login, logout, user, token }}>
            {children}
        </context.Provider>
    )
}

export const useAuth = () => {
    return useContext(context)
}