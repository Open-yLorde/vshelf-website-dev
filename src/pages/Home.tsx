import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <main className="flex flex-1 flex-col items-center justify-center text-center px-6 gap-5">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">
          Bem-vindo(a)
          <span className="text-[#9d7bff] font-semibold">👋</span>
        </h1>

        <p className="text-gray-400 max-w-xl leading-relaxed mb-8">
          A versão de Windows está pausada e sem previsão de retorno. <br />
        </p>

        <>
          <div className="flex flex-wrap justify-center gap-10">
            {/* {localStorage.getItem("token") && (
              <button
                className="bg-[#1a1a26] hover:bg-[#232334] text-white px-6 py-3 rounded-lg border border-[#2a2a3c] transition-all duration-300 cursor-pointer">
                📚 Meus Títulos
              </button>
            )} */}
            {/* <Link to={'titulo/add'} draggable={false}>
                <button
                  className="bg-[#1a1a26] hover:bg-[#232334] text-white px-6 py-3 rounded-lg border border-[#2a2a3c] transition-all duration-300 cursor-pointer">
                  ➕ Adicionar
                </button>
              </Link> */}
            <Link to={'adicionar-novo-titulo'} draggable={false}>
              <button
                className="bg-[#1a1a26] hover:bg-[#232334] text-white px-6 py-3 rounded-lg border border-[#2a2a3c] transition-all duration-300 cursor-pointer">
                ➕ Adicionar (v2)
              </button>
            </Link>
            {/* <button
            className="bg-[#1a1a26] hover:bg-[#232334] text-white px-6 py-3 rounded-lg border border-[#2a2a3c] transition-all duration-300">
            ⚙️ Configurações
            </button> */}
          </div>

          <div className="w-24 h-[2px] bg-[#2e2e3f] my-5 rounded-full"></div>
        </>

        <section className="text-gray-400">
          <h2 className="text-lg font-semibold mb-2 text-white">O que é o VShelf?</h2>
          <p className="text-gray-400 max-w-xl leading-relaxed mb-8">
            Somos um gerenciador de título que permite salvar seus títulos e compartilhar para que você possa recomendar este título também! Usamos a base de dados do <a href="https://www.themoviedb.org/" target="_blank" className="text-[#9d7bff] underline"><b>TMDB ↗</b></a> para fornecer informações sobre os títulos, como sinopse, data de lancamento, etc.<br />
          </p>
          <p className="text-gray-400 max-w-xl leading-relaxed mb-8">
            <b>Não somos um player de mídia, apenas um gerenciador de títulos.</b>
          </p>
        </section>

        <hr className="border border-[#222] w-1/3" />

        <section className="text-gray-400">
          <h2 className="text-lg font-semibold mb-2 text-white">Adicionar título sem estar conectado?</h2>
          <p className="text-gray-400 max-w-xl leading-relaxed mb-8">
            Ao adicionar título sem estar logado, ele será salvo como "Autor Desconhecido" e não ficará vinculado à sua conta no VShelf, porém ainda poderá ser visualizado por outros usuários e também compartilhado.
            <br />
          </p>
        </section>
        
        <hr className="border border-[#222] w-1/3" />

        <section className="text-gray-400">
          <h2 className="text-lg font-semibold mb-2 text-white">Sobre a versão de navegador:</h2>
          <p className="text-gray-400 max-w-xl leading-relaxed mb-8">
            Isso é um passo importante para melhorar a experiência do usuário e tornar o VShelf ainda mais eficiente
            e mais compatível com todos os usuários.
            <br />
          </p>
        </section>
        
      </main>
      <Footer />
    </>
  )
}
