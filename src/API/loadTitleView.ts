export default async function loadTitleView({ id }: { id: string }) {
    try {
        const getIdAndType = await fetch(`https://flintapi-production.up.railway.app/api/vshelf/title/v2/${id}`).catch(err => {
            throw new Error('Erro ao carregar detalhes do título', { cause: err });
        })

        if (!getIdAndType.ok) return null;
        const getIdAndTypeRes = await getIdAndType.json();
        const { title_id, title_type, owner_id } = getIdAndTypeRes.title;

        if (title_id && title_type) {
            const response = await fetch(`https://nodeapi-production-a976.up.railway.app/api/v1/tmdb/loadTitlePage?id=${title_id}&type=${title_type}`).catch(err => {
                throw new Error('Erro ao carregar detalhes do título', { cause: err });
            });
            if (!response.ok) return null;
            // return (await response.json());

            const userResponse = await fetch(`https://flintapi-production.up.railway.app/api/user/${owner_id}`);

            return {
                api_1: getIdAndTypeRes,
                api_2: (await response.json()),
                user: (await userResponse.json())
            };
        };

        return null;
    } catch (err) {
        throw new Error('Erro ao carregar detalhes do título', { cause: err });
    };
};