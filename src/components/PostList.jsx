import { useState, useEffect } from "react";
import { supabase } from "../supabaseClient"; // Importando o cliente Supabase
import Slider from "react-slick"; // Importando o componente Slider

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

      console.log(data); // Verifique os dados retornados
      setPosts(data);
    } catch (error) {
      console.error("Erro ao buscar os posts:", error.message);
    }
  };

  // Função para verificar se o link é de vídeo ou imagem
  const isVideo = (url) => {
    const videoExtensions = ["mp4", "avi", "mov", "webm"];
    const extension = url.split(".").pop().toLowerCase();
    return videoExtensions.includes(extension);
  };

  // Função para remover um post e seus arquivos do bucket
  const handleDelete = async (postId, mediaUrls) => {
    const confirmDelete = window.confirm("Tem certeza que deseja excluir este post?");
    if (!confirmDelete) return;

    try {
      // Deletando arquivos do bucket
      for (let url of mediaUrls) {
        // Verifica o caminho do arquivo no bucket
        const fileName = url.split("/public/").pop(); // Extrai o nome do arquivo após "/public/"
        console.log(`Tentando excluir o arquivo: ${fileName}`);

        const { error: deleteError } = await supabase
          .storage
          .from("posts") // Nome do seu bucket
          .remove([`public/${fileName}`]); // Remove o arquivo da pasta 'public'

        if (deleteError) {
          console.error("Erro ao deletar o arquivo do bucket:", deleteError.message);
        } else {
          console.log(`Arquivo ${fileName} deletado com sucesso.`);
        }
      }

      // Deletando o post no banco de dados
      const { error } = await supabase.from("posts").delete().eq("id", postId);

      if (error) throw error;

      // Remove o post deletado da lista sem fazer outra consulta
      setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));

      alert("Post e arquivos removidos com sucesso!");
    } catch (error) {
      console.error("Erro ao remover o post ou arquivos:", error.message);
      alert("Erro ao remover o post ou os arquivos.");
    }
  };

  // Configuração do Carousel
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="bg-white p-6 rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Posts</h2>
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post.id} className="mb-4 border-b pb-4">
            <h3 className="text-lg font-bold">{post.title}</h3>
            <p>{post.content}</p>
            {post.mediaurl && (
              <div className="mt-2">
                {Array.isArray(post.mediaurl) && post.mediaurl.length > 1 ? (
                  // Carousel quando há múltiplas imagens
                  <Slider {...carouselSettings}>
                    {post.mediaurl.map((url, index) => (
                      <div key={index}>
                        {isVideo(url) ? (
                          <iframe
                            width="100%"
                            height="315"
                            src={url}
                            frameBorder="0"
                            allowFullScreen
                            title={`Post Video ${index}`}
                          ></iframe>
                        ) : (
                          <img
                            src={url}
                            alt={`Post Media ${index}`}
                            className="w-full mt-2"
                            onError={(e) => {
                              e.target.src = "https://via.placeholder.com/150"; // Fallback em caso de erro
                            }}
                          />
                        )}
                      </div>
                    ))}
                  </Slider>
                ) : (
                  // Exibe uma imagem única ou vídeo
                  <div>
                    {isVideo(post.mediaurl[0]) ? (
                      <iframe
                        width="100%"
                        height="315"
                        src={post.mediaurl[0]}
                        frameBorder="0"
                        allowFullScreen
                        title="Post Video"
                      ></iframe>
                    ) : (
                      <img
                        src={post.mediaurl[0]}
                        alt="Post Media"
                        className="w-full mt-2"
                        onError={(e) => {
                          e.target.src = "https://via.placeholder.com/150"; // Fallback em caso de erro
                        }}
                      />
                    )}
                  </div>
                )}
              </div>
            )}
            <button
              onClick={() => handleDelete(post.id, post.mediaurl)}
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
