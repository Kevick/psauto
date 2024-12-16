import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient"; // Importando o cliente Supabase

export default function Login() {
  const [email, setEmail] = useState(""); // Armazenando o email
  const [password, setPassword] = useState(""); // Armazenando a senha
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      // Chama o método do Supabase para fazer o login com email e senha
      const { user, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });

      if (error) {
        alert("Erro de autenticação: " + error.message);
        return;
      }

      // Usando o método correto para obter a sessão
      const session = await supabase.auth.getSession();

      if (session.data) {
        // Armazenando o token no localStorage
        localStorage.setItem("authToken", session.data.access_token);
        navigate("/dashboard"); // Redireciona para o dashboard após login
      } else {
        alert("Token não encontrado.");
      }
    } catch (error) {
      console.error("Erro ao autenticar:", error.message);
      alert("Erro ao autenticar usuário. Tente novamente.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4">Login</h1>

        <input
          type="email"
          className="w-full p-2 border border-gray-300 rounded mb-4"
          placeholder="Digite o email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="w-full p-2 border border-gray-300 rounded mb-4"
          placeholder="Digite a senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          onClick={handleLogin}
        >
          Entrar
        </button>
      </div>
    </div>
  );
}
