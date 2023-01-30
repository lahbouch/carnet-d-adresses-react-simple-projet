import React, { useContext } from 'react'
import Contact from './Contact'
import { v4 } from 'uuid';
import { globalContext } from '../contexts/GlobalContext'
import swal from 'sweetalert';

export default function Contacts() {

    const { contacts, setContacts } = useContext(globalContext)
    const { search } = useContext(globalContext)
    const { sort } = useContext(globalContext)



    //Trier
    if (sort) {

        const sortAlphVille = contacts.sort(function (a, b) {
            return a.ville.localeCompare(b.ville);
        });

        setContacts(sortAlphVille)
    } else {
        const sortAlphVille = contacts.sort(function (a, b) {
            return b.ville.localeCompare(a.ville);
        });

        setContacts(sortAlphVille)
    }

    //supprimer

    const deleteContact = (contactId) => {
        setContacts(
            contacts.filter(
                (({ id }) => id !== contactId)
            )
        )
        swal("le contact a ete supprimer!");

    }





    //search
    let r = []
    if (search !== '') {
        r = contacts.filter(({ ville }) => ville.toLowerCase().includes(search.toLowerCase()))
    } else {
        r = contacts
    }




    return (
        <section>
            {console.log(r.length)}
            <h2 className='sec_title'>
                {r.length + " contacts"}
            </h2>

            {
                r.map(({ id, nom, ville, tel }) =>
                    <Contact key={v4()} id={id} nom={nom} ville={ville} tel={tel} del={deleteContact} />
                )
            }

        </section>

    )
}
