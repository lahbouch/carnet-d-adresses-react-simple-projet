import React, { useContext, useRef } from 'react';
import { globalContext } from '../contexts/GlobalContext';
import { Link } from 'react-router-dom'
import { v4 } from 'uuid'
import swal from 'sweetalert';


export default function AjouterContact() {

    const { contacts, setContacts } = useContext(globalContext);

    console.log(contacts, setContacts);

    const refNom = useRef();
    const refVille = useRef();
    const refTel = useRef();


    const submitHandler = () => {
        const contactInfo = {
            'id': v4(),
            'nom': refNom.current.value,
            'ville': refVille.current.value,
            'tel': refTel.current.value
        }
        setContacts([...contacts, contactInfo])

        swal("Ajouter une contact :", refNom.current.value + " contact a ete ajouter", "success");

        refNom.current.value = ""
        refVille.current.value = ""
        refTel.current.value = ""

    }


    return (
        <form style={{
            display: 'flex',
            "flexDirection": 'column',
            "gap": '10px',
            'justifyContent': 'center',
            "textAlign": "center"
        }}>
            <input className='q' type="text" placeholder='nom' ref={refNom} />
            <input className='q' type="text" placeholder='ville' ref={refVille} />
            <input className='q' type="number" placeholder='06XXXXXXXX' ref={refTel} />
            <input className='btn' style={{ marginRight: "10px" }} type="button" value="Ajouter" onClick={submitHandler} />
            <Link className='btn' to='/' >Acceuill</Link>
        </form>
    );
}
