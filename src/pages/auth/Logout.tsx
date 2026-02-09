import React from "react";
// import Loading from "../../components/Loading";
import apiURL from "../../API/apiURL";

export default function Logout() {
    React.useEffect(() => {
        fetch(`${apiURL}/auth/logout`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            credentials: 'include'
        }).then(() => {
            location.href = '/';
        })
    }, [])

    return <></>

    // return (
    //     <>
    //         <Loading title="VShelf - Deslogado" url="/" subtitle="Você se deconectou com sucesso!" />
    //     </>
    // )
}
