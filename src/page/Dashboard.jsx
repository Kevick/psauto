import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PostForm from "../components/PostForm";
import PostList from "../components/PostList";
import ProtectedRoute from "../components/ProtectedRoute"; // Importando a rota protegida

export default function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const checkSession = async () => {
      const token = localStorage.getItem("authToken");

      if (!token) {
        navigate("/login"); // Redireciona se o token não existir
      }
    };

    checkSession(); // Verifica se o token existe ao carregar o componente
  }, [navigate]);

  return (
    <ProtectedRoute>
      <div className="bg-gray-100 min-h-screen p-8">
        <h1 className="text-3xl font-bold mb-4">Painel de Controle - Postagens</h1>

        <PostForm />
        <PostList />
      </div>
    </ProtectedRoute>
  );
}
