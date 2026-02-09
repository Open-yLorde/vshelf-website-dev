import { HeadProvider } from "react-head";
import Loading from "../components/Loading";

export default function Discord() {
    return (
        <>
            <HeadProvider>
                <title>VShelf - Discord</title>
                <meta property="og:title" content="VShelf — Discord" />
                <meta property="og:type" content="website" />
                <meta name="description" content="Entre no nosso discord para falar com os desenvolvedores, tirar dúvidas e suporte." />
            </HeadProvider>
            <div>
                <Loading title="VShelf - Discord" subtitle="Um momento, estamos gerando um link para você" url="https://discord.com/invite/eKSCCp4uW8" />
            </div>
        </>
    );
};