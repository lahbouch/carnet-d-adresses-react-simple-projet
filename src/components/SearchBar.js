import React, { useContext } from 'react'
import { globalContext } from '../contexts/GlobalContext'
import { Link } from 'react-router-dom'


export default function SearchBar() {
    const { search, setSearch } = useContext(globalContext)
    const { sort, setSort } = useContext(globalContext)
    console.log(search, sort);
    return (
        <form className='searchBar' >
            {/* le bar de chercher */}
            <input
                className='q'
                type="text"
                placeholder='ville...'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            {/* Ajouter une contact */}
            <Link to='/ajouter' className='btn'>+</Link>

            {/* Trier les contact */}
            <input
                className='btn'
                type="button"
                value='Trier'
                onClick={() => setSort(!sort)}
            />
        </form>
    )
}
