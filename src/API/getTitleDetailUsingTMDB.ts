export default async function getTitleDetailUsingTMDB(titleName: string) {
    try {
        const response = await fetch(`https://nodeapi-production-a976.up.railway.app/api/v1/tmdb/getTitleByName?title_name=${titleName.replace(/ /g, '%20')}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        };
        return (await response.json());
    } catch (err) {
        throw new Error('Erro ao buscar detalhes do título na TMDB', { cause: err });
    };
};