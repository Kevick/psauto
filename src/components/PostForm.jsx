import { useState } from "react";
import { supabase, supabaseUrl } from "../supabaseClient"; // Importando o cliente Supabase

export default function PostForm() {
  const [title, setTitle] = useState(""); // Título do post
  const [content, setContent] = useState(""); // Conteúdo do post
  const [files, setFiles] = useState([]); // Arquivos (imagens ou vídeos)

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(selectedFiles);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let mediaDownloadUrls = []; // Array para armazenar URLs das mídias

    // Verifica se há arquivos para upload
    if (files.length > 0) {
      try {
        for (let file of files) {
          const fileName = `${Date.now()}_${encodeURIComponent(file.name)}`; // Gerando um nome único e codificando o nome do arquivo

          const { error } = await supabase.storage
            .from("posts") // Nome do Bucket
            .upload(`public/${fileName}`, file);

          if (error) {
            console.error("Erro ao fazer upload:", error.message);
            alert("Erro ao fazer upload do arquivo.");
            return;
          }

          // Corrigindo a URL pública do arquivo armazenado
          mediaDownloadUrls.push(`${supabaseUrl}/storage/v1/object/public/posts/public/${fileName}`);
        }
      } catch (error) {
        console.error("Erro ao fazer upload:", error.message);
        alert("Erro ao fazer upload do arquivo.");
        return;
      }
    }

    try {
      // Formatar o array para a inserção no banco de dados
      const formattedUrls = `{${mediaDownloadUrls.join(',')}}`; // Formato correto para o PostgreSQL

      // Salva o post na tabela 'posts' no Supabase (Banco de Dados)
      const { error } = await supabase
        .from("posts")
        .insert([
          {
            title,
            content,
            mediaurl: formattedUrls, // Inserir o array formatado corretamente
          },
        ]);

      if (error) throw error;

      // Limpa os campos após o envio
      setTitle("");
      setContent("");
      setFiles([]);
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
        multiple
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
