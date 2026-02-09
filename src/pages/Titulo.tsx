import React from "react";
import { HeadProvider } from "react-head";
import SpinLoading from "../components/SpinLoading";
import { useParams } from 'react-router-dom';
import type ITitle from "../interfaces/ITitle";
import type IPublicUser from "../interfaces/IPublicUser";

export default function Titulo() {
    const [loading, setLoading] = React.useState(false);
    const [title, setTitle] = React.useState<ITitle>();
    const [author, setAuthor] = React.useState<IPublicUser>();
    
    const { id } = useParams();

    const loadTitle = async () => {
        await fetch(`https://flintapi-production.up.railway.app/api/vshelf/title/${id}`)
            .then((res) => {
                return res.json();
            }).then(async (api) => {
                if (api.status == "success") {
                    setTitle(api.title);
                    await fetch(`https://flintapi-production.up.railway.app/api/user/${api.title.owner_id}`)
                        .then((res) => { return res.json() })
                        .then((api: any) => {
                            setLoading(true);
                            setAuthor(api);
                        }).catch(err => {
                            console.log(err);
                        });
                };
            }).catch((err) => {
                console.log(err);
            });

    };

    React.useEffect(() => {
        loadTitle();
    }, []);

    return (
        <SpinLoading loaded={loading}>
            <HeadProvider>
                <title>VShelf - Seu aplicativo de gerenciamento de títulos</title>
                <meta name="description"
                    content="Um aplicativo para desktops windows que permite gerenciar, avaliar, adicionar observações, compartilhar seus títulos favoritos e muito mais." />
                <meta property="og:title" content="VShelf — Download" />
                <meta property="og:type" content="website" />
            </HeadProvider >

            <div className="bg-[#0b0b0e] text-white min-h-screen h-full flex items-center justify-center p-6">
                <div className="max-w-3xl w-full bg-[#14141c] rounded-2xl shadow-xl overflow-hidden border border-[#1f1f2a]">
                    {/* <!-- Imagem de fundo --> */}
                    <div className="relative w-full h-64">
                        <img id="background" src={title?.background} alt="Banner" className="w-full h-full object-cover opacity-80" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#14141c] via-transparent to-transparent"></div>
                    </div>

                    {/* <!-- Conteúdo principal --> */}
                    <div className="p-6 sm:p-8">
                        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                            {/* <!-- Capa --> */}
                            <img id="capa" src={title?.image} alt="Capa" className="w-40 h-52 object-cover rounded-lg shadow-lg border border-[#222]" />

                            {/* <!-- Informações --> */}
                            <div className="flex flex-col gap-2 text-center sm:text-left">
                                <h1 id="title" className="text-3xl font-bold uppercase tracking-wide">{title?.titulo}</h1>
                                <p className="text-gray-400 font-semibold text-lg">
                                    Nota: <span id="nota" className="text-yellow-400">{title?.estrelas * 2}/10</span>
                                </p>

                                <div className="mt-2 space-y-1 text-gray-300 text-sm">
                                    <p><b>Stream:</b> <span id="stream">{title?.stream}</span></p>
                                    <p><b>Gênero:</b> <span id="genero">{title?.genero}</span></p>
                                    <p><b>Tipo:</b> <span id="tipo">{title?.tipo}</span></p>
                                    <p><b>Classificacao:</b> <span id="classNameificacao">{title?.classificacao}</span></p>
                                    <p><b>Carregado por:</b> <span id="classNameificacao">{author?.display_name}</span></p>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Nota pessoal --> */}
                        <div className="mt-8 border-t border-[#1f1f2a] pt-6">
                            <h2 className="text-xl font-semibold uppercase">Nota:</h2>
                            <p id="nota2" className="text-gray-400 italic mt-1">{title?.nota}</p>
                        </div>

                        {/* <!-- Sinopse --> */}
                        <div className="mt-8 mb-3">
                            <h2 className="text-xl font-semibold uppercase">Sinopse:</h2>
                            <p id="sinopse" className="text-gray-400 italic mt-2 leading-relaxed">{title?.sinopse}</p>
                        </div>
                    </div>
                </div>
            </div>
        </SpinLoading>
    );
};