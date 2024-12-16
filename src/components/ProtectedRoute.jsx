import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { supabase } from "../supabaseClient"; // Importando o cliente Supabase

const ProtectedRoute = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true); // Para controlar o carregamento da sessão
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkSession = async () => {
      const { data: session, error } = await supabase.auth.getSession();

      if (error || !session) {
        setIsAuthenticated(false); // Se não houver sessão ou houver erro, não está autenticado
      } else {
        setIsAuthenticated(true); // Caso contrário, está autenticado
      }

      setIsLoading(false); // Finaliza o carregamento
    };

    checkSession();
  }, []); // O useEffect só será executado uma vez após o primeiro render

  if (isLoading) {
    return <div>Carregando...</div>; // Você pode renderizar um loading enquanto verifica a sessão
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />; // Redireciona para o login se não estiver autenticado
  }

  return children; // Retorna o conteúdo protegido se o usuário estiver autenticado
};

export default ProtectedRoute;
