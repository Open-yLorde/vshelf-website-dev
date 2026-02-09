import React from "react";
import { verifyLogin } from "../../functions/verifyLogin";
import { Link, useNavigate } from "react-router-dom";
import apiURL from "../../API/apiURL";

export default function Register() {
    const navigate = useNavigate();

    const [errorMessage, setErrorMessage] = React.useState<string | null | undefined>('');

    const [email, setEmail] = React.useState<string>('');
    const [password, setPassword] = React.useState<string>('');
    const [username, setUsername] = React.useState<string>('');

    React.useEffect(() => {
        verifyLogin().then((res) => {
            if (res) {
                navigate('/')
            };
        });
    }, []);

    return (
        <div className="auth-container">
            <img src="/favicon.ico" alt="VShelf Logo" className="logo" />
            <h1 id="formTitle">Criar Conta</h1>
            <form id="registerForm" onSubmit={(e) => {
                e.preventDefault();

                if (!email || !password || !username) {
                    setErrorMessage('Preencha todos os campos.');
                    setTimeout(() => setErrorMessage(''), 4000);
                };

                fetch(`${apiURL}/auth/register`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    credentials: 'include',
                    body: JSON.stringify({
                        email: email,
                        username: username,
                        password: password
                    }),
                }).then(res => {
                    if (res.status != 200) {
                        return setErrorMessage('Não foi possível criar sua conta, tente novamente mais tarde.');
                    };
                    return res.json();
                }).then((data) => {
                    if (data) {
                        navigate('/login');
                    };
                });
            }}>
                <input type="email" id="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />

                <input type="text" maxLength={45} minLength={3} id="nickname" placeholder="Nome de usuário" onChange={(e) => setUsername(e.target.value)} required />

                {/* <div id="nicknameError" className="error"></div> */}
                {/* <input type="text" maxLength={45} minlength={1} id="displayName" placeholder="Nome de exibição" required /> */}

                <input type="password" id="password" minLength={8} placeholder="Senha" onChange={(e) => setPassword(e.target.value)} required />
                <div className="strength" id="strengthBar"></div>
                <div id="passwordError" className="error">{errorMessage}</div>

                <div>
                    <span className="text-sm text-gray-400">Ao criar uma conta você declara estar de acordo com nossos <a href="/license.pdf" target="_blank" className="cursor-pointer underline font-bold">termos de serviço</a>.</span>
                </div>
                <button type="submit">Criar conta</button>
            </form>

            <Link to={'/login'}>
                <div className="toggle-link" id="toggleLogin">Já possui uma conta? Entrar</div>
            </Link>
            <div className="footer">© 2025 VShelf</div>
        </div>
    );
}