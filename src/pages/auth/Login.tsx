import React from "react";
import { verifyLogin } from "../../functions/verifyLogin";
import { Link, useNavigate } from "react-router-dom";
import apiURL from "../../API/apiURL";

export default function Login() {
    const navigate = useNavigate();

    const [errorMessage, setErrorMessage] = React.useState<string | null | undefined>('');

    const [email, setEmail] = React.useState<string>('');
    const [password, setPassword] = React.useState<string>('');

    React.useEffect(() => {
        verifyLogin().then((res) => {
            if (res) {
                navigate('/')
            }
        })
    }, []);

    return (
        <div>
            <div className="auth-container">
                <img src="./favicon.ico" alt="VShelf Logo" className="logo" />
                <h1>Entrar usando VShelf</h1>
                <form id="authForm" onSubmit={(e) => {
                    e.preventDefault();

                    if (!email || !password) {
                        setErrorMessage('Preencha todos os campos.');
                        setTimeout(() => setErrorMessage(''), 4000);
                    };

                    fetch(`${apiURL}/auth/login`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Accept': 'application/json'
                        },
                        body: JSON.stringify({
                            email: email,
                            password: password
                        }),
                        credentials: 'include'
                    }).then(res => {
                        if (res.status == 401) {
                            setErrorMessage('Email ou senha incorretos.');
                            setTimeout(() => setErrorMessage(''), 3000);
                            return;
                        } else if (res.status != 200) {
                            return setErrorMessage('Erro ao efetuar login. Por favor tente novamente mais tarde.');  
                        };
                        return res.json();
                    }).then((data) => {
                        if (data) {
                            location.href = '/login';
                        };
                    });
                }}>
                    <input type="email" id="email" minLength={3} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                    <input type="password" id="password" minLength={8} onChange={(e) => setPassword(e.target.value)} placeholder="Senha" required />
                    <div id="passwordError" className="error">{errorMessage}</div>
                    <button type="submit">Entrar</button>
                </form>
                <Link to={'/register'}>
                    <div className="toggle-link" id="toggleMode">Não possui uma conta? Criar</div>
                </Link>
                <div className="footer">© 2025 VShelf</div>
            </div>
        </div>
    );
}