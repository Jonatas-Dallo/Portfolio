import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "../pages/home";
import Projetos from "../pages/projetos";
import NavBar from '../componets/navbar';
import ServiceDesk from '../componets/projetosAcademicos/ServiceDesk';
import GestorCobrancas from '../componets/projetosAcademicos/GestorCobrancas';
import DailyBot from '../componets/projetosAcademicos/DailyBot';
import SobreMim from '../pages/sobreMim';


export default function Rotas() {
    return (
      <BrowserRouter>
        <NavBar/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sobre" element={<SobreMim />} />
                <Route path="/projetos" element={<Projetos />} />
                <Route path="/projetos/serviceDesk" element={<ServiceDesk />} />
                <Route path="/projetos/gestorCobrancas" element={<GestorCobrancas />} />
                <Route path="/projetos/dailyBot" element={<DailyBot />} />
                <Route path="*" element={<h1>Page not found</h1>} />
            </Routes>
        </BrowserRouter>
    )
}


