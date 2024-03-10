import { createContext, useState } from 'react';

const ContextVariales = createContext({})

export const ContextVarialesProvider = ({children}) => {

    const domain = 'http://localhost:2023'
    // const domain = 'https://ecl-backend.vercel.app'
    const [view, setView] = useState(false)
    

    return (
        <ContextVariales.Provider value={{ view, setView }} >
            {children}
        </ContextVariales.Provider>
    )
}

export default ContextVariales;