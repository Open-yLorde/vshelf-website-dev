import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Download from "./pages/Download";
import Discord from "./pages/Discord";
// import AuthSuccess from "./pages/auth/AuthSuccess";
// import Titulo from "./pages/Titulo";
// import NovoTitulo from "./pages/titulo/NovoTitulo";
import Loading from "./components/Loading";
import NovoTituloV2 from "./pages/titulo/NovoTituloV2";
import Logout from "./pages/auth/Logout";
// import TituloV2 from "./pages/TituloV2";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: (
            <div>
                <Loading title="Erro ao acessar essa página" subtitle="Voltando para a página principal" url="/" />
            </div>
        ),
        children: [
            // PÁGINA INICIAL
            { path: '/', element: <Home /> },
            { path: 'home', element: <Home /> },
            { path: 'pagina-inicial', element: <Home /> },
            { path: 'inicio', element: <Home /> },

            // DOWNLOAD
            { path: 'download', element: <Download /> },
            { path: 'baixar', element: <Download /> },

            // DISCORD
            { path: 'discord', element: <Discord /> },
            { path: 'dc', element: <Discord /> },

            // AUTENTICAÇÃO
            // { path: 'auth/:token/:user_id', element: <AuthSuccess /> },
            { path: 'auth/logout', element: <Logout /> },
            { path: 'logout', element: <Logout /> },

            { path: 'login', element: <Login /> },
            { path: 'entrar', element: <Login /> },
            { path: 'logar', element: <Login /> },

            { path: 'register', element: <Register /> },
            { path: 'registro', element: <Register /> },

            // { path: 'auth/success', element: <AuthSuccess /> },

            // VER TÍTULO ADICIONAR POR USUÁRIO
            // { path: 'titulo/:id', element: <TituloV2 /> },
            // { path: 'title/:id', element: <TituloV2 /> },

            // { path: 'title-get/:id', element: <TituloV2 /> },
            // { path: 'title-info/:id', element: <TituloV2 /> },

            // ADICIONAR NOVO TÍTULO
            { path: 'adicionar-novo-titulo', element: <NovoTituloV2 /> },
            { path: 'add-new-title', element: <NovoTituloV2 /> },

            // { path: 'adicionar-novo-titulo-v2', element: <NovoTituloV2 /> }, // DESENVOLVIMENTO

            // DESENVOLVIMENTO

            // SOBRE
        ],
    }
]);

export default routes;