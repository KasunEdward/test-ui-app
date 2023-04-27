import { createContext, useState } from "react";
// import axios from "axios";

const AuthContext = createContext();
/**
 * Adds two numbers and returns the result.
 *
 * @param {number} a The first number to add.
 * @param {number} b The second number to add.
 * @returns {number} The sum of `a` and `b`.
 */
const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState({});
    return (
        <AuthContext.Provider value = {{auth, setAuth}}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider};