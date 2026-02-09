import type IAddTitle from "../interfaces/IAddTitle";

export default async function addNewTitle({ title_id, title_type, title_name, owner_id, owner_rate, owner_note }: IAddTitle) {
    await fetch(`https://flintapi-production.up.railway.app/api/vshelf/title/v2/upload`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title_id: title_id,
            title_type: title_type,
            title_name: title_name,
            owner_id: owner_id,
            owner_rate: owner_rate,
            owner_note: owner_note
        })
    }).then(res => {
        if (res.status != 200) {
            window.alert('Erro ao adicionar título.');
            throw new Error(`HTTP error! status: ${res.status}`);
        };

        return res.json();
    }).then(res => {
        window.location.href = `/title/${res.id}`
        return res.id;
    }).catch(err => {
        throw new Error('Erro ao adicionar novo título', { cause: err });
    });
};