import { AuthContext } from "./AuthContext";
import { useContext } from "react";

export const useAuthContext = () => {
    return useContext(AuthContext)
};