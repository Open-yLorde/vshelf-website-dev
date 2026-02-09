import React from "react";
import { HeadProvider } from "react-head";
import addNewTitle from "../../API/addNewTitle";
import { Plus } from "lucide-react";
import apiURL from "../../API/apiURL";

export default function NovoTituloV2() {
    const [title, setTitle] = React.useState<string>('');
    const [nota, setNota] = React.useState<string>('');
    const [rate, setRate] = React.useState<string>('0');

    const [disabledAdd, setDisabledAdd] = React.useState<boolean>(true);
    const [message, setMessage] = React.useState<string>('');
    const [status, setStatus] = React.useState<'default' | 'inProgress' | 'success'>('default');

    const [titleId, setTitleId] = React.useState<string>('');
    const [titleType, setTitleType] = React.useState<string>('');

    const [results, setResults] = React.useState<any>([]);

    async function verifyTitle() {
        setResults([]);

        setStatus('inProgress');
        const timeout = new Promise((reject) => setTimeout(reject, 10000, 'TIME_OUT'));
        await Promise.race([fetch(`${apiURL}/tmdb/get_title_only_by_name/${title.replace(/ /g, '%20')}`), timeout])
            .then((res: any) => {
                if (res.status != 200) {
                    setMessage('Não foi possível encontrar o título informado. Verifique o nome do título e tente novamente.');
                    setTimeout(() => setMessage(''), 10000);
                    setStatus('default');
                    return;
                };
                return res.json();
            })
            .then((res: any) => {
                if (res?.status == 'success') {
                    setStatus('success');
                    setDisabledAdd(false);

                    setTitleId(res.id);
                    setTitleType(res.type);

                    setResults(res.data.results);
                    return;
                };
            })
            .catch(err => {
                if (err == 'TIME_OUT') {
                    setMessage('A solicitação demorou muito para responder. Verifique o nome do título e tente novamente.');
                    setTimeout(() => setMessage(''), 10000);
                    setStatus('default');
                    return;
                };
                throw new Error('Erro ao buscar detalhes do título na TMDB', { cause: err });
            })
            .finally(() => {
                console.log(status);
            });
    };

    return (
        <>
            <HeadProvider>
                <title>VShelf - Adicionar Título</title>
                <meta property="og:title" content="VShelf — Novo Título" />
                <meta property="og:type" content="website" />
                <meta name="description" content="Adicione um novo título ao VShelf." />
            </HeadProvider>
            <div>
                <div className="bg-[#0f0f16] border border-[#1f1f2b] rounded-2xl shadow-lg p-6 w-full max-w-md mx-auto text-white">
                    <h2 className="text-2xl font-semibold mb-6 text-center text-white">
                        Adicionar Título
                    </h2>

                    <form className="space-y-4" onSubmit={async (e) => {
                        e.preventDefault();
                        await addNewTitle({
                            title_id: titleId,
                            title_type: titleType,
                            title_name: title,
                            owner_id: localStorage.getItem('user_id') || '0',
                            owner_rate: rate,
                            owner_note: nota
                        });
                    }}>
                        {/* Campo: Título */}
                        <div>
                            <label className="block text-sm mb-1 text-gray-300">Título ({title.length}/60)*</label>
                            <div className="flex w-full gap-2 items-center">
                                <input
                                    type="text"
                                    minLength={3}
                                    maxLength={60}
                                    required={true}
                                    onChange={(e) => {
                                        setTitle(e.target.value);
                                        if (disabledAdd == false) {
                                            setStatus('default');
                                            setDisabledAdd(true);
                                        };
                                    }}
                                    placeholder="Qual título deseja adicionar?"
                                    className="w-full bg-[#141420] border border-[#242437] rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#8b6bff] transition"
                                />
                            </div>
                        </div>

                        {/* Campo: Nota */}
                        <div>
                            <label className="block text-sm mb-1 text-gray-300">Nota ({nota.length}/300)*</label>
                            <textarea
                                placeholder="Escreva uma nota sobre o título"
                                rows={3}
                                required={true}
                                onChange={(e) => {
                                    setNota(e.target.value);
                                    if (disabledAdd == false) {
                                        setStatus('default')
                                        setDisabledAdd(true);
                                    };
                                }}
                                maxLength={300}
                                minLength={3}
                                className="w-full bg-[#141420] border border-[#242437] rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 resize-none focus:outline-none focus:ring-2 focus:ring-[#8b6bff] transition"
                            />
                        </div>

                        {/* Campo: Rate */}
                        <div>
                            <label className="block text-sm mb-1 text-gray-300">Avaliação pessoal</label>
                            <div className="flex items-center gap-2">
                                <input
                                    type="number"
                                    min={0}
                                    max={10}
                                    minLength={0}
                                    maxLength={10}
                                    step={1}
                                    placeholder="0"
                                    // value={rate}
                                    onChange={(e) => {
                                        // if (e.target.value > '10') {
                                        //     return e.target.value = '10';
                                        // };
                                        setRate(e.target.value);
                                    }}
                                    className="w-24 bg-[#141420] border border-[#242437] rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#8b6bff] transition"
                                />
                                <span className="text-gray-400">/ 10</span>
                            </div>
                        </div>

                        <span className="text-red-400 text-sm">{message}</span>

                        {/* Botão */}
                        {disabledAdd &&
                            title.length >= 3 && nota.length >= 3 && (
                                <button
                                    type="button"
                                    className="w-full mt-4 bg-gradient-to-r from-gray-500 to-gray-700 text-white font-semibold py-2 rounded-lg transition cursor-pointer"
                                    onClick={verifyTitle}
                                >
                                    Verificar
                                </button>
                            )
                        }
                        {/* {disabledAdd == true ? (
                            <>
                                {title.length >= 3 && nota.length >= 3 && (
                                    <button
                                        type="button"
                                        className="w-full mt-4 bg-gradient-to-r from-gray-500 to-gray-700 text-white font-semibold py-2 rounded-lg transition cursor-pointer"
                                        onClick={verifyTitle}
                                    >
                                        Verificar
                                    </button>
                                )}
                            </>
                        ) : (
                            <button
                                type="submit"
                                className="w-full mt-4 bg-gradient-to-r from-[#6b63ff] to-[#512faf] text-white font-semibold py-2 rounded-lg hover:opacity-90 transition cursor-pointer"
                            >
                                Adicionar
                            </button>
                        )} */}
                    </form>
                </div>
            </div>

            <div className="flex flex-col max-w-2/3 mx-auto mt-10 gap-4 mb-20">
                {results.map((item: any, index: any) => {
                    return (
                        <div key={index} className="flex items-center p-4 w-full bg-[#1a1a26] rounded-lg justify-between">
                            <img className="w-20 h-20 rounded-md" src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${item?.poster_path}`} alt={item?.name} />
                            <div className="max-w-3/4 mr-auto ml-4">
                                <h2 className="text- font-semibold mt-2">{item?.name || item?.title}</h2>
                                <p className="text-gray-400 mt-2 text-sm">{item?.overview}</p>
                            </div>
                            <div className="h-full flex items-center my-auto">
                                <Plus className="w-10 h-10 hover:opacity-80 cursor-pointer" onClick={() => {

                                }} />
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    );
};