import { createContext, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/UserSlice";

export const GlobleContext = createContext(null);

export const useGlobalContext = () => useContext(GlobleContext);

const GlobalProvider = ({ children }) => {
const dispatch = useDispatch();
const user = useSelector((state) => state?.user);

const logout = ()=>{
    dispatch(logout([]))
}

return(
    <GlobleContext.Provider value={{logout}}>
        {children}
    </GlobleContext.Provider>
)
}
export default GlobalProvider