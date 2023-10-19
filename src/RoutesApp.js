import './RoutesApp.css';
import {Route, Routes} from "react-router-dom";
import Home from "./Pages/Home/home";
import Profil from "./Pages/Profil/profil";
import Reglages from "./Pages/Reglages/reglages";
import Communaute from "./Pages/Communaute/communaute";
import Erreur404 from "./Pages/Page404/Erreur404";

/**
 * Routes to access application
 * @returns {JSX.Element}
 * @constructor
 */
function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/:id/profil" element={<Profil />} />
        <Route path="/reglages" element={<Reglages />} />
        <Route path="/communaute" element={<Communaute />} />
        <Route path="/*" element={<Erreur404 />} />
    </Routes>
  );
}

export default RoutesApp;
