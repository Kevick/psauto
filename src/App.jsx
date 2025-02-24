import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PsautoWebsite from './page/PsautoWebsite'; // Importando o componente PsautoWebsite

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PsautoWebsite />} /> {/* Rota para a página inicial */}
      </Routes>
    </Router>
  );
}

export default App;
