import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./page/Login";
import Dashboard from "./page/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute"; // Importando o ProtectedRoute
import PsautoWebsite from './page/PsautoWebsite'; // Importando o componente PsautoWebsite

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PsautoWebsite />} /> {/* Rota para a página inicial */}
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
