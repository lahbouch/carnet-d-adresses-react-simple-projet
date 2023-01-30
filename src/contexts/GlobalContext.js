import { createContext, useState } from 'react';

export const globalContext = createContext();


function GlobalContextProvider({ children }) {

    const [search, setSearch] = useState('')
    const [contacts, setContacts] = useState([])
    const [sort, setSort] = useState(false)



    return (
        <globalContext.Provider value={{ search, setSearch, sort, setSort, contacts, setContacts }}>
            {children}
        </globalContext.Provider>
    );
}

export default GlobalContextProvider