"use client";

import { useEffect, useState } from "react";
import { notFound } from "next/navigation";

interface Conteudo {
  titulo: string;
  tipo: string;
  link: string;
}

const tiposDisponiveis = ["Resumo", "Mapa Mental", "Exercício"];

export default function MateriaPage({ params }: { params: { slug: string } }) {
  const [conteudos, setConteudos] = useState<Conteudo[]>([]);
  const [busca, setBusca] = useState("");
  const [tipoSelecionado, setTipoSelecionado] = useState("Resumo");

  useEffect(() => {
    async function carregarDados() {
      try {
        const res = await fetch(`/dados/${params.slug}.json`);
        if (!res.ok) throw new Error("Arquivo não encontrado");
        const data = await res.json();
        setConteudos(data);
      } catch {
        notFound();
      }
    }

    carregarDados();
  }, [params.slug]);

  const filtrados = conteudos.filter(
    (item) =>
      item.tipo.toLowerCase() === tipoSelecionado.toLowerCase() &&
      item.titulo.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <main
      className="min-h-screen p-8 bg-cover bg-center"
      style={{
        backgroundImage: 'url("https://i.imgur.com/nKv7ahZ.jpeg")',
      }}
    >
      <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-800 mb-6 text-center capitalize">
          Conteúdos de {params.slug}
        </h1>

        {/* Campo de busca */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Buscar conteúdo..."
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        {/* Abas por tipo */}
        <div className="flex justify-center gap-4 mb-8">
          {tiposDisponiveis.map((tipo) => (
            <button
              key={tipo}
              onClick={() => setTipoSelecionado(tipo)}
              className={`px-4 py-2 rounded-full border font-medium transition ${
                tipoSelecionado === tipo
                  ? "bg-blue-700 text-white shadow"
                  : "bg-white text-blue-700 border-blue-700 hover:bg-blue-100"
              }`}
            >
              {tipo}
            </button>
          ))}
        </div>

        {/* Cards de conteúdo filtrados */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtrados.length > 0 ? (
            filtrados.map((item, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-semibold text-blue-700 mb-2">{item.titulo}</h3>
                <p className="text-sm text-gray-600 mb-3">Tipo: {item.tipo}</p>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition"
                >
                  Acessar
                </a>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center col-span-full">
              Nenhum conteúdo encontrado para &quot;{tipoSelecionado}&quot;.
            </p>
          )}
        </div>
      </div>
    </main>
  );
}
