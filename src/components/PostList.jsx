import { useState, useEffect } from "react";
import { supabase } from "../supabaseClient"; // Importando o cliente Supabase

export default function PostList() {
  const [posts, setPosts] = useState([]); // Armazena os posts

  useEffect(() => {
    fetchPosts(); // Busca os posts ao montar o componente
  }, []);

  // Função para buscar os posts do Supabase
  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;

      setPosts(data);
    } catch (error) {
      console.error("Erro ao buscar os posts:", error.message);
    }
  };

  // Função para remover um post
  const handleDelete = async (postId) => {
    const confirmDelete = window.confirm("Tem certeza que deseja excluir este post?");
    if (!confirmDelete) return;

    try {
      const { error } = await supabase.from("posts").delete().eq("id", postId);

      if (error) throw error;

      // Remove o post deletado da lista sem fazer outra consulta
      setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));

      alert("Post removido com sucesso!");
    } catch (error) {
      console.error("Erro ao remover o post:", error.message);
      alert("Erro ao remover o post.");
    }
  };

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
          <div key={post.id} className="mb-4 border-b pb-4">
            <h3 className="text-lg font-bold">{post.title}</h3>
            <p>{post.content}</p>
            {post.mediaUrl && (
              <div className="mt-2">
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
                    src={post.mediaUrl}
                    alt={post.title}
                    className="w-full mt-2"
                  />
                )}
              </div>
            )}
            <button
              onClick={() => handleDelete(post.id)}
              className="mt-2 bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
            >
              Excluir
            </button>
          </div>
        ))
      ) : (
        <p>Nenhum post encontrado.</p>
      )}
    </div>
  );
}
