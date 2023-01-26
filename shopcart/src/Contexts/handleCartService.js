import { createContext, useState } from "react";

export const HandleCartContext = createContext({
    cartCount: 0,
    setcartCount: () => {}
})

 const HandleCartContextProvider = ({children}) =>{
    const [cartCount, setcartCount] = useState(0);
    const value = {cartCount, setcartCount}
    // For handling cart count on update
    return <HandleCartContext.Provider value={value}>{children}</HandleCartContext.Provider>
}
export default HandleCartContextProvider;