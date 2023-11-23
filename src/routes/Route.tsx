import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "../pages/home";
import Hardskills from "../pages/hardskills";
import Projetos from "../pages/projetos";
import NavBar from '../componets/navbar';
import { useLocation } from 'react-router-dom';
import ServiceDesk from '../componets/projetosAcademicos/ServiceDesk';
import GestorCobrancas from '../componets/projetosAcademicos/GestorCobrancas';
import DailyBot from '../componets/projetosAcademicos/DailyBot';


export default function Rotas() {
    return (
      <BrowserRouter>
        <NavBar/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/hardskills" element={<Hardskills />} />
                <Route path="/projetos" element={<Projetos />} />
                <Route path="/projetos/serviceDesk" element={<ServiceDesk />} />
                <Route path="/projetos/gestorCobrancas" element={<GestorCobrancas />} />
                <Route path="/projetos/dailyBot" element={<DailyBot />} />
                <Route path="*" element={<h1>Page not found</h1>} />
            </Routes>
        </BrowserRouter>
    )
}


