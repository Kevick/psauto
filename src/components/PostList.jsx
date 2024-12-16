import { useState, useEffect } from "react";
import { supabase } from "../supabaseClient"; // Importando o cliente Supabase

export default function PostList() {
  const [posts, setPosts] = useState([]); // Armazena os posts

  useEffect(() => {
    // Função para buscar os posts do Supabase
    const fetchPosts = async () => {
      try {
        // Consultando os posts na tabela 'posts'
        const { data, error } = await supabase
          .from("posts")
          .select("*") // Seleciona todos os campos
          .order("created_at", { ascending: false }); // Ordena os posts pela data de criação, do mais recente ao mais antigo

        if (error) throw error; // Lança erro se houver algum

        setPosts(data); // Atualiza o estado com os dados dos posts
      } catch (error) {
        console.error("Erro ao buscar os posts:", error.message);
      }
    };

    fetchPosts(); // Chama a função para buscar os posts quando o componente for montado
  }, []); // O array vazio significa que o efeito só será executado uma vez, após o primeiro render

  // Função para verificar se o link é de vídeo ou imagem
  const isVideo = (url) => {
    const videoExtensions = ["mp4", "avi", "mov", "webm"];
    const extension = url.split(".").pop().toLowerCase();
    return videoExtensions.includes(extension);
  };

  return (
    <div className="bg-white p-6 rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Posts</h2>
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post.id} className="mb-4">
            <h3 className="text-lg font-bold">{post.title}</h3>
            <p>{post.content}</p>
            {post.mediaUrl && (
              <div className="mt-2">
                {/* Verifica se a URL é de vídeo ou imagem */}
                {isVideo(post.mediaUrl) ? (
                  <iframe
                    width="100%"
                    height="315"
                    src={post.mediaUrl}
                    frameBorder="0"
                    allowFullScreen
                    title="Post Video"
                  ></iframe>
                ) : (
                  <img
                    src={post.mediaUrl} // A URL correta do arquivo
                    alt={post.title}
                    className="w-full mt-2"
                  />
                )}
              </div>
            )}
          </div>
        ))
      ) : (
        <p>Nenhum post encontrado.</p>
      )}
    </div>
  );
}
