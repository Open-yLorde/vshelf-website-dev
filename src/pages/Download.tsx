import { HeadProvider } from 'react-head'

export default function Download() {
  return (
    <>
      <HeadProvider>
        <title>VShelf - Download</title>
        <meta property="og:title" content="VShelf — Download" />
        <meta property="og:type" content="website" />
        <meta name="description" content="Faça o download do VShelf para windows." />
      </HeadProvider>

      <div className="mt-5">
        <div className="flex flex-col gap-3 items-center text-center">
          <div
            className="w-28 h-28 flex items-center justify-center border border-[#222] rounded-2xl shadow-lg transition-shadow duration-300" style={{ background: 'white' }}>
            <span className="text-6xl font-bold text-[#2a2d39] select-none" style={{ background: 'white' }}>V</span>
          </div>

          <h1 className="text-3xl font-semibold mt-6">Baixe o <span className="text-[#9d7bff]">VShelf</span></h1>
          <p className="text-gray-400 mt-2 max-w-md">
            Gerencie e organize seus filmes e séries de forma simples e inteligente.
          </p>

          <a href="https://github.com/VShelf/windows/releases/download/v1.2.23/vshelf-1.2.23-setup.exe"
            className="mt-6 bg-gradient-to-r from-[#6b63ff] to-[#512faf] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition-all duration-300">
            {/* ⬇️  */}
            Download para Windows
          </a>

          <div className="mt-10 text-sm text-gray-500 flex flex-col items-center gap-1">
            <p>Versão atual: <span className="text-gray-300 font-medium">v1.2.23</span></p>
            <p>Compatível com Windows 10 e 11</p>
            <p className='text-red-400'>Esta é a última versão da FlintAPI por motivos de segunça.</p>
            <p className='text-purple-400'>A nova versão contará com o DSAG_PyShelf_API</p>
          </div>

          <div className="w-24 h-[2px] bg-[#1f1f2a] my-8 rounded-full"></div>

          <footer className="text-sm text-gray-500">
            <p>
              Visite nosso
              <a href="https://github.com/vshelf/windows" target="_blank"
                className="text-[#9d7bff] hover:underline mr-2">{' '}GitHub ↗</a>
            </p>
            <p className="mt-1 text-gray-600">© 2025 VShelf. Todos os direitos reservados.</p>
          </footer>
        </div>
      </div>
    </>
  )
};