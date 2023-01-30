import React, { useContext, useState } from 'react'
import { useParams } from 'react-router';
import { globalContext } from '../contexts/GlobalContext'
import { v4 } from 'uuid'
import { Link } from 'react-router-dom'
import swal from 'sweetalert';

const UpdateContact = () => {
    const { contacts, setContacts } = useContext(globalContext)
    const { id } = useParams()
    const contact = contacts.filter((obj) => obj.id === id)[0]
    console.log(contacts);
    const [nom, setNom] = useState(contact.nom)
    const [ville, setVille] = useState(contact.ville)
    const [tel, setTel] = useState(contact.tel)

    const submit = () => {

        const updatedContacts = contacts.map((obj) => {

            if (obj.id === id) {
                obj.nom = nom
                obj.ville = ville
                obj.tel = tel
            }
            return obj
        })


        setContacts(updatedContacts)
        swal("modifier une contact:", nom + " contact a ete modifier", "success");



    }
    return (
        <div>
            <input className='q' type="text" value={nom} onChange={(e) => setNom(e.target.value)} />
            <input className='q' type="text" value={ville} onChange={(e) => setVille(e.target.value)} />
            <input className='q' type="number" value={tel} onChange={(e) => setTel(e.target.value)} />
            <input className='btn' style={{ marginRight: '10px' }} type="button" value="enregistrer" onClick={submit} />
            <Link className='btn' to='/' >Acceuil</Link>
        </div>
    );
}

export default UpdateContact;
