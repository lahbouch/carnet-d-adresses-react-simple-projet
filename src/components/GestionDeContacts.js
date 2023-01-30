import SearchBar from './SearchBar'
import Contacts from './Contacts'
import '../App.css'


export default function GestionDeContacts() {
    return (
        <main className='container'>
            <h1 className='title'>Gestion De Contacts</h1>
            <SearchBar />
            <Contacts />
        </main>
    )
}
