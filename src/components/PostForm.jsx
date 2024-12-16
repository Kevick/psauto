import { useState } from "react";
import { supabase, supabaseUrl } from "../supabaseClient";

export default function PostForm() {
  const [title, setTitle] = useState(""); // Título do post
  const [content, setContent] = useState(""); // Conteúdo do post
  const [files, setFiles] = useState([]); // Arquivos (imagens ou vídeos)
  const [isLoading, setIsLoading] = useState(false); // Estado de carregamento

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(selectedFiles);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Inicia o carregamento

    let mediaDownloadUrls = []; // Array para armazenar URLs das mídias

    if (files.length > 0) {
      try {
        for (let file of files) {
          const fileName = `${Date.now()}_${encodeURIComponent(file.name)}`;

          const { error } = await supabase.storage
            .from("posts") 
            .upload(`public/${fileName}`, file);

          if (error) {
            console.error("Erro ao fazer upload:", error.message);
            alert("Erro ao fazer upload do arquivo.");
            setIsLoading(false);
            return;
          }

          mediaDownloadUrls.push(`${supabaseUrl}/storage/v1/object/public/posts/public/${fileName}`);
        }
      } catch (error) {
        console.error("Erro ao fazer upload:", error.message);
        alert("Erro ao fazer upload do arquivo.");
        setIsLoading(false);
        return;
      }
    }

    try {
      const formattedUrls = `{${mediaDownloadUrls.join(',')}}`;

      const { error } = await supabase
        .from("posts")
        .insert([
          {
            title,
            content,
            mediaurl: formattedUrls,
          },
        ]);

      if (error) throw error;

      setTitle("");
      setContent("");
      setFiles([]);
      alert("Post criado com sucesso!");
    } catch (error) {
      console.error("Erro ao criar o post:", error.message);
      alert("Erro ao criar o post.");
    } finally {
      setIsLoading(false); // Termina o carregamento
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md mb-6">
      <h2 className="text-xl font-bold mb-4">Criar Post</h2>
      <input
        type="text"
        className="w-full p-2 border border-gray-300 rounded mb-4"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="w-full p-2 border border-gray-300 rounded mb-4"
        placeholder="Conteúdo"
        rows="5"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <input
        type="file"
        className="w-full p-2 border border-gray-300 rounded mb-4"
        multiple
        onChange={handleFileChange}
      />
      <button
        type="submit"
        className={`w-full py-2 rounded ${isLoading ? "bg-blue-300" : "bg-blue-500 hover:bg-blue-600"} text-white`}
        disabled={isLoading} // Desativa o botão durante o carregamento
      >
        {isLoading ? (
          <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-2"></div>
            Criando...
          </div>
        ) : (
          "Criar Post"
        )}
      </button>
    </form>
  );
}
