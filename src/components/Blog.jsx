import { useState, useEffect } from "react";
import { supabase } from "../supabaseClient"; // Importando o cliente Supabase
import { FileText, Image, Video } from 'lucide-react'; // Ícones para os posts

const Blog = () => {
  const [posts, setPosts] = useState([]); // Armazena todos os posts
  const [visiblePosts, setVisiblePosts] = useState([]); // Armazena os posts visíveis
  const [selectedPost, setSelectedPost] = useState(null); // Armazena o post selecionado para o modal
  const [showMore, setShowMore] = useState(3); // Controla a quantidade de posts a serem exibidos
  const [loading, setLoading] = useState(false); // Controla o carregamento

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true); // Define que estamos carregando
      try {
        // Consultando os posts na tabela 'posts'
        const { data, error } = await supabase
          .from("posts")
          .select("*") // Seleciona todos os campos
          .order("created_at", { ascending: false }); // Ordena os posts pela data de criação, do mais recente ao mais antigo

        if (error) throw error; // Lança erro se houver algum

        setPosts(data); // Armazena todos os posts
        setVisiblePosts(data.slice(0, 3)); // Exibe os 3 primeiros posts
      } catch (error) {
        console.error("Erro ao buscar os posts:", error.message);
      } finally {
        setLoading(false); // Define que o carregamento terminou
      }
    };

    fetchPosts(); // Chama a função para buscar os posts quando o componente for montado
  }, []); // O array vazio significa que o efeito só será executado uma vez, após o primeiro render

  // Função para abrir o modal com o post selecionado
  const handlePostClick = (post) => {
    setSelectedPost(post);
  };

  // Função para fechar o modal
  const closeModal = () => {
    setSelectedPost(null);
  };

  // Função para verificar se o link é de vídeo ou imagem
  const isVideo = (url) => {
    const videoExtensions = ["mp4", "avi", "mov", "webm"];
    const extension = url.split(".").pop().toLowerCase();
    return videoExtensions.includes(extension);
  };

  // Função para carregar mais posts
  const loadMore = () => {
    const newShowMore = showMore + 3; // Aumenta em 3 posts a serem exibidos
    setShowMore(newShowMore);
    setVisiblePosts(posts.slice(0, newShowMore)); // Exibe os novos posts
  };

  return (
    <section id="blog" className="py-16 bg-gray-900">
      <div className="container mx-auto">
        <h3 className="text-3xl text-center mb-12 text-red-500">Blog</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {visiblePosts.length > 0 ? (
            visiblePosts.map((post) => (
              <div
                key={post.id}
                className="bg-gray-800 p-8 rounded-lg text-center hover:bg-gray-700 transition cursor-pointer"
                onClick={() => handlePostClick(post)} // Ação de clique no post
              >
                <div className="flex justify-center mb-6">
                  {/* Ícone de acordo com o tipo de mídia */}
                  {post.mediaUrl ? (
                    post.mediaUrl.includes("youtube.com") ? (
                      <Video size={50} className="text-red-500" />
                    ) : (
                      <Image size={50} className="text-red-500" />
                    )
                  ) : (
                    <FileText size={50} className="text-red-500" />
                  )}
                </div>
                <h4 className="text-2xl font-bold mb-4">{post.title}</h4>
                <p className="text-gray-400 mb-4">{post.content}</p>
                {/* Exibindo a mídia se houver */}
                {post.mediaUrl && (
                  <div className="mt-4">
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
                        className="w-full mt-4 rounded-lg"
                      />
                    )}
                  </div>
                )}
              </div>
            ))
          ) : (
            <p className="text-center text-gray-400">Nenhuma postagem encontrada.</p>
          )}
        </div>

        {/* Botão Carregar Mais */}
        {posts.length > visiblePosts.length && (
          <div className="text-center mt-8">
            <button
              onClick={loadMore}
              className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
              disabled={loading}
            >
              {loading ? "Carregando..." : "Carregar Mais"}
            </button>
          </div>
        )}
      </div>

      {/* Modal para exibir o post completo */}
      {selectedPost && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-gray-900 p-8 rounded-lg shadow-lg text-center max-w-4xl w-full">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-2xl"
            >
              ×
            </button>
            <h4 className="text-3xl font-bold mb-6 text-red-500">{selectedPost.title}</h4>
            <p className="text-gray-300 mb-4">{selectedPost.content}</p>
            {selectedPost.mediaUrl && (
              <div className="mt-4">
                {isVideo(selectedPost.mediaUrl) ? (
                  <iframe
                    width="100%"
                    height="315"
                    src={selectedPost.mediaUrl}
                    frameBorder="0"
                    allowFullScreen
                    title="Post Video"
                  ></iframe>
                ) : (
                  <img
                    src={selectedPost.mediaUrl}
                    alt={selectedPost.title}
                    className="w-full mt-4 rounded-lg"
                  />
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Blog;