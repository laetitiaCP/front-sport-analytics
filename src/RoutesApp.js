import './RoutesApp.css';
import {Route, Routes} from "react-router-dom";
import Home from "./Pages/Home/home";
import Profil from "./Pages/Profil/profil";
import Reglages from "./Pages/Reglages/reglages";
import Communaute from "./Pages/Communaute/communaute";

function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
        { /*<Route path="/profil/:id" element={<Profil />} />*/ }
        <Route path="/profil" element={<Profil />} />
        <Route path="/reglages" element={<Reglages />} />
        <Route path="/communaute" element={<Communaute />} />
    </Routes>
  );
}

export default RoutesApp;
