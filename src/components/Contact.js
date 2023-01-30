import React from 'react'
import { Link } from 'react-router-dom'
export default function Contact({ id, nom, ville, tel, del }) {
    return (
        <div className='contact'>
            <h3>{nom}</h3>
            <p>{ville}</p>
            <p>{tel}</p>
            <input className='btn' style={{
                marginRight: '10px'
            }} type="button" value="supprimer" onClick={() => del(id)} />
            <Link className='btn' to={'/modifier/' + id}>modifier</Link>

        </div>
    )
}
