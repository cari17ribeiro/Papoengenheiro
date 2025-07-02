const materias = [
  { nome: "Matemática", slug: "matematica" },
  { nome: "Física", slug: "fisica" },
  { nome: "Química", slug: "quimica" },
];

export default function Materias() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center p-8 bg-cover bg-center"
      style={{
        backgroundImage: 'url("https://i.imgur.com/nKv7ahZ.jpeg")', // Substitua pelo link da sua imagem de fundo
      }}
    >
      <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg w-full max-w-xl text-center">
        <h1 className="text-4xl font-bold text-blue-800 mb-6">Escolha a Matéria</h1>

        <ul className="grid gap-4">
          {materias.map((mat) => (
            <li key={mat.slug}>
              <a
                href={`/materias/${mat.slug}`}
                className="block w-full px-6 py-3 bg-blue-700 text-white rounded-xl shadow hover:bg-blue-800 transition-all duration-200 text-lg font-medium"
              >
                {mat.nome}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
