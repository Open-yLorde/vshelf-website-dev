import React from "react";
import { HeadProvider } from "react-head";
// import addNewTitle from "../../API/addNewTitle";

export default function NovoTitulo() {
    const [title, setTitle] = React.useState<string>('');
    const [nota, setNota] = React.useState<string>('');

    async function handleSubmit() {
        // const stream = document.getElementById('stream') as HTMLSelectElement;
        // const classificacao = document.getElementById('classificacao') as HTMLSelectElement;
        // const genero = document.getElementById('genero') as HTMLSelectElement;
        // const status = document.getElementById('status') as HTMLSelectElement;
        // const tipo = document.getElementById('tipo') as HTMLSelectElement;
        // const estrelas = document.getElementById('estrelas') as HTMLSelectElement;
        
        // await addNewTitle({
        //     titulo: title,
        //     nota: nota,
        //     stream: stream?.value,
        //     classificacao: classificacao?.value,
        //     genero: genero?.value,
        //     status: status?.value,
        //     tipo: tipo?.value,
        //     estrelas: estrelas?.value
        // });
    };

    return (
        <>
            <HeadProvider>
                <title>VShelf - Novo Título</title>
                <meta property="og:title" content="VShelf — Novo Título" />
                <meta property="og:type" content="website" />
                <meta name="description" content="Adicione um novo título ao VShelf." />
            </HeadProvider>
            <div>
                <div className="bg-[#0f0f16] border border-[#1f1f2b] rounded-2xl shadow-lg p-6 w-full max-w-md mx-auto text-white">
                    <h2 className="text-2xl font-semibold mb-6 text-center text-white">
                        Adicionar Título
                    </h2>

                    <form className="space-y-4" onSubmit={handleSubmit}>
                        {/* Campo: Título */}
                        <div>
                            <label className="block text-sm mb-1 text-gray-300">Título ({title.length}/60)</label>
                            <input
                                type="text"
                                maxLength={60}
                                required={true}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="Qual título deseja adicionar?"
                                className="w-full bg-[#141420] border border-[#242437] rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#8b6bff] transition"
                            />
                        </div>

                        {/* Campo: Nota */}
                        <div>
                            <label className="block text-sm mb-1 text-gray-300">Nota ({nota.length}/300)</label>
                            <textarea
                                placeholder="Escreva uma nota sobre o título"
                                rows={3}
                                required={true}
                                onChange={(e) => setNota(e.target.value)}
                                maxLength={300}
                                className="w-full bg-[#141420] border border-[#242437] rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 resize-none focus:outline-none focus:ring-2 focus:ring-[#8b6bff] transition"
                            />
                        </div>

                        {/* Linha dupla 1 */}
                        <div className="grid grid-cols-2 gap-3">
                            <div>
                                <label className="block text-sm mb-1 text-gray-300">Stream</label>
                                <select id="stream" className="w-full bg-[#141420] border border-[#242437] rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#8b6bff] transition">
                                    <option value={'Apple TV+'}>Apple TV+</option>
                                    <option value={'Netflix'}>Netflix</option>
                                    <option value={'Amazon Prime'}>Amazon Prime</option>
                                    <option value={'Disney+'}>Disney+</option>
                                    <option value={'HBO Max'}>HBO Max</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm mb-1 text-gray-300">Classificação</label>
                                <select id="classificacao" className="w-full bg-[#141420] border border-[#242437] rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#8b6bff] transition">
                                    <option value={'Livre'}>Livre</option>
                                    <option value={'+10'}>+10</option>
                                    <option value={'+12'}>+12</option>
                                    <option value={'+14'}>+14</option>
                                    <option value={'+16'}>+16</option>
                                    <option value={'+18'}>+18</option>
                                </select>
                            </div>
                        </div>

                        {/* Linha dupla 2 */}
                        <div className="grid grid-cols-2 gap-3">
                            <div>
                                <label className="block text-sm mb-1 text-gray-300">Gênero</label>
                                <select id="genero" className="w-full bg-[#141420] border border-[#242437] rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#8b6bff] transition">
                                    <option value={'Ação'}>Ação</option>
                                    <option value={'Drama'}>Drama</option>
                                    <option value={'Comédia'}>Comédia</option>
                                    <option value={'Ficção'}>Ficção</option>
                                    <option value={'Terror'}>Terror</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm mb-1 text-gray-300">Status</label>
                                <select id="status" className="w-full bg-[#141420] border border-[#242437] rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#8b6bff] transition">
                                    <option value={'Nunca Assistido'}>Nunca Assistido</option>
                                    <option value={'Assistindo'}>Assistindo</option>
                                    <option value={'Concluído'}>Concluído</option>
                                    <option value={'Interrompido'}>Interrompido</option>
                                </select>
                            </div>
                        </div>

                        {/* Linha dupla 3 */}
                        <div className="grid grid-cols-2 gap-3">
                            <div>
                                <label className="block text-sm mb-1 text-gray-300">Tipo</label>
                                <select id="tipo" className="w-full bg-[#141420] border border-[#242437] rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#8b6bff] transition">
                                    <option value={'Animação'}>Animação</option>
                                    <option value={'Anime'}>Anime</option>
                                    <option value={'Dorama'}>Dorama</option>
                                    <option value={'Série'}>Série</option>
                                    <option value={'Filme'}>Filme</option>
                                    <option value={'Documentário'}>Documentário</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm mb-1 text-gray-300">Estrelas</label>
                                <select id="estrelas" className="w-full bg-[#141420] border border-[#242437] rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#8b6bff] transition">
                                    <option value={'1'}>1 Estrela</option>
                                    <option value={'2'}>2 Estrelas</option>
                                    <option value={'3'}>3 Estrelas</option>
                                    <option value={'4'}>4 Estrelas</option>
                                    <option value={'5'}>5 Estrelas</option>
                                </select>
                            </div>
                        </div>

                        {/* Botão */}
                        <button
                            type="submit"
                            className="w-full mt-4 bg-gradient-to-r from-[#6b63ff] to-[#512faf] text-white font-semibold py-2 rounded-lg hover:opacity-90 transition"
                        >
                            Adicionar
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};