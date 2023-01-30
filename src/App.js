import GestionDeContacts from './components/GestionDeContacts';
import { Route, Routes } from "react-router-dom";
import AjouterContact from './components/AjouterContact'
import UpdateContact from './components/updateContact'
import GlobalContextProvider from './contexts/GlobalContext'
import './App.css'


function App() {

  return (
    <div className="App">
      <GlobalContextProvider>
        <Routes>
          <Route path="/" element={<GestionDeContacts />} />
          <Route path="/ajouter" element={<AjouterContact />} />
          <Route path="/modifier/:id" element={<UpdateContact />} />
        </Routes>
      </GlobalContextProvider>
    </div>
  );
}

export default App;
