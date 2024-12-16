import { useState } from "react";
import { supabase, supabaseUrl } from "../supabaseClient"; // Importando o cliente Supabase

export default function PostForm() {
  const [title, setTitle] = useState(""); // Título do post
  const [content, setContent] = useState(""); // Conteúdo do post
  const [file, setFile] = useState(null); // Arquivo (imagem ou vídeo)

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let mediaDownloadUrl = ""; // Variável para armazenar a URL da mídia

    // Verifica se há um arquivo para upload
    if (file) {
      const fileName = `${Date.now()}_${encodeURIComponent(file.name)}`; // Gerando um nome único e codificando o nome do arquivo

      try {
        // Enviando o arquivo para o Supabase Storage com o nome único
        const { error } = await supabase.storage
          .from("posts") // Nome do Bucket
          .upload(`public/${fileName}`, file);

        if (error) {
          console.error("Erro ao fazer upload:", error.message);
          alert("Erro ao fazer upload do arquivo.");
          return;
        }

        // Corrigindo a URL pública do arquivo armazenado
        // O Supabase já adiciona o 'public/' na URL, então não precisamos adicionar novamente.
        mediaDownloadUrl = `${supabaseUrl}/storage/v1/object/public/posts/public/${fileName}`;
      } catch (error) {
        console.error("Erro ao fazer upload:", error.message);
        alert("Erro ao fazer upload do arquivo.");
        return;
      }
    }

    try {
      // Salva o post na tabela 'posts' no Supabase (Banco de Dados)
      const { error } = await supabase
        .from("posts")
        .insert([
          {
            title,
            content,
            mediaUrl: mediaDownloadUrl, // URL da mídia (imagem ou vídeo)
          },
        ]);

      if (error) throw error;

      // Limpa os campos após o envio
      setTitle("");
      setContent("");
      setFile(null);
      alert("Post criado com sucesso!");
    } catch (error) {
      console.error("Erro ao criar o post:", error.message);
      alert("Erro ao criar o post.");
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
        onChange={handleFileChange}
      />
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
      >
        Criar Post
      </button>
    </form>
  );
}
