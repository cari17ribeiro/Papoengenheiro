export default function Home() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center p-8 text-center bg-cover bg-center"
      style={{
        backgroundImage: 'url("https://i.imgur.com/nKv7ahZ.jpeg")', // Substitua pelo link da sua imagem
      }}
    >
      {/* Fundo escurecido opcional */}
      <div className="bg-white/80 p-8 rounded-2xl shadow-lg backdrop-blur-sm max-w-2xl w-full flex flex-col items-center">
        {/* LOGO */}
        <img
          src="https://i.imgur.com/zGTkm8j.png"
          alt="Logo Papo Engenheiro"
          className="w-32 h-32 mb-4 rounded-full shadow-lg"
        />

        {/* Título */}
        <h1 className="text-4xl font-bold text-blue-800 mb-2">PapoTeca 📘</h1>

        {/* Subtítulo */}
        <p className="text-lg text-gray-700 max-w-xl mb-6">
          Aqui você encontra resumos, mapas mentais e listas de exercícios organizadas por matéria para facilitar sua jornada na faculdade de engenharia.
        </p>

        {/* Botão */}
        <a
          href="/materias"
          className="px-6 py-3 bg-blue-700 text-white rounded-2xl shadow hover:bg-blue-800 transition-all duration-200 text-lg font-medium"
        >
          Acessar Conteúdos
        </a>

        {/* Redes sociais */}
        <div className="mt-8 flex gap-6 text-blue-700 text-xl">
          <a href="https://instagram.com/papoengenheiro" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href="https://tiktok.com/@papoengenheiro" target="_blank" rel="noopener noreferrer">
            TikTok
          </a>
        </div>
      </div>
    </main>
  );
}
