import React from "react";
import SpinLoading from "../components/SpinLoading";
import loadTitleView from "../API/loadTitleView";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import { HeadProvider } from "react-head";
import formatData from "../functions/formatData";

export default function TituloV2() {
    const [loaded, setLoaded] = React.useState(false);

    const [author, setAuthor] = React.useState<any>();
    const [api_1, setApi_1] = React.useState<any>();
    const [title, setTitle] = React.useState<any>();

    const { id } = useParams();
    if (!id) {
        return <Loading title="Título não encontrado" subtitle="redirecionando para a página inicial." url="/" />
    };

    async function loadTitle() {
        await loadTitleView({ id: id as string }).then((res: any) => {
            if (!res && res == null) {
                window.alert('Título não encontrado.');
                window.location.href = '/';
                return;
            };
            setApi_1(res.api_1.title);
            setTitle(res.api_2.data);
            setAuthor(res.user);

            //console.log(res.api_1.title);
            //console.log(res.api_2.data);
            //console.log(res.user);
        });

        setLoaded(true);
    };

    React.useEffect(() => {
        loadTitle();
    }, []);

    return (
        <SpinLoading loaded={loaded}>
            <HeadProvider>
                <title>VShelf - Adicionar Título</title>
                <meta property="og:title" content="VShelf — Novo Título" />
                <meta property="og:type" content="website" />
                <meta name="description" content="Adicione um novo título ao VShelf." />
            </HeadProvider>
            <div className="bg-[#0b0b0e] text-white min-h-screen h-full flex items-center justify-center p-6">
                <div className="max-w-3xl w-full bg-[#14141c] rounded-2xl shadow-xl overflow-hidden border border-[#1f1f2a]">
                    {/* <!-- Imagem de fundo --> */}
                    <div className="relative w-full h-64">
                        <img id="background" src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2${title?.backdrop_path}`} alt="Banner" className="w-full h-full object-cover opacity-80" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#14141c] via-transparent to-transparent"></div>
                    </div>

                    {/* <!-- Conteúdo principal --> */}
                    <div className="p-6 sm:p-8">
                        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                            {/* <!-- Capa --> */}
                            <img id="capa" src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2${title?.poster_path}`} alt="Capa" className="w-40 h-52 object-cover rounded-lg shadow-lg border border-[#222]" />

                            {/* <!-- Informações --> */}
                            <div className="flex flex-col gap-2 text-center sm:text-left">
                                <h1 id="title" className="text-3xl font-bold uppercase tracking-wide">{title?.name || title?.title}</h1>
                                <p className="text-gray-400 font-semibold text-lg">
                                    Nota pública: <span id="nota" className="text-yellow-400">{String(title?.vote_average).slice(0, 3)}/10</span>
                                </p>

                                {api_1?.owner_id != '0' && (
                                    <p className="text-gray-400 font-semibold text-lg">
                                        Nota pessoal: <span id="nota" className="text-yellow-400">{api_1?.estrelas * 2}/10</span>
                                    </p>
                                )}

                                <div className="mt-2 space-y-1 text-gray-300 text-sm">
                                    <p><b>Gênero:</b> <span id="genero">{title?.genres.map((genero: any) => `${genero.name}`).join(', ')}</span></p>
                                    <p><b>Tipo:</b> <span id="tipo">{api_1?.title_type}</span></p>
                                    <p><b>Popularidade:</b> <span id="popularidade" className="text-yellow-400">{String(title?.popularity).slice(0, 3)}/10</span></p>
                                    {title?.created_by != null && (
                                        <p><b>Criador:</b> <span id="criador">{title?.created_by[0].name}</span></p>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* <!-- Nota pessoal --> */}
                        <div className="mt-8 border-t border-[#1f1f2a] pt-6">
                            <h2 className="text-xl font-semibold uppercase">Nota:</h2>
                            <p id="nota2" className="text-gray-400 italic mt-1">{api_1?.owner_note}</p>
                        </div>

                        {/* <!-- Sinopse --> */}
                        <div className="mt-8 mb-3">
                            <h2 className="text-xl font-semibold uppercase">Sinopse:</h2>
                            <p id="sinopse" className="text-gray-400 italic mt-2 leading-relaxed">{title?.overview}</p>
                        </div>

                        {/* <!-- Sobre o autor --> */}
                        <div className="mt-8 mb-3">
                            <h2 className="text-xl font-semibold uppercase">Autor do post:</h2>
                            <div className="mt-2 space-y-1 text-gray-300 text-sm">
                                <p><b>Apelido:</b> <span>{api_1?.owner_id == '0' ? 'Desconhecido' : author?.display_name}</span></p>
                                <p><b>Enviado em:</b> <span>{formatData(api_1?.created_at)}</span></p>
                                <p><b>Nota do autor:</b> <span>{api_1?.owner_rate}/10</span></p>
                            </div>
                        </div>

                        {/* <!-- Mais sobre o título --> */}
                        <div className="mt-8 mb-3">
                            <h2 className="text-xl font-semibold uppercase">Mais sobre o título:</h2>
                            <div className="mt-2 space-y-1 text-gray-300 text-sm">
                                <p><b>Nome original:</b> <span>{title?.original_name || title?.original_title}</span></p>
                                <p><b>Status:</b> <span>{title?.status}</span></p>
                                <p><b>Data que foi ao ar:</b> <span>{String(title?.first_air_date || title?.release_date).replaceAll('-', '/')}</span></p>
                                {title?.number_of_seasons != null && (
                                    <p><b>Número de temporadas:</b> <span>{title?.number_of_seasons}</span></p>
                                )}
                                {title?.number_of_episodes != null && (
                                    <p><b>Número de episódios:</b> <span>{title?.number_of_episodes}</span></p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SpinLoading>
    );
};