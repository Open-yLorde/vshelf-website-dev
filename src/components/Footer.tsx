export default function Footer() {
    // DSA_G_PyShelf_API
    return (
        <>
            <footer className="flex justify-between items-center px-8 py-3 text-gray-500 text-sm border-t border-[#1e1e2b]">
                <span>© 2025 VShelf. All rights reserved.</span>
                <a href="https://github.com/VShelf" target="_blank" className="hover:text-[#9d7bff] transition-colors ml-4">GitHub ↗</a>
            </footer>
            <footer className="flex justify-between items-center px-8 py-3 text-gray-500 text-sm border-t border-[#1e1e2b]">
                <span>Desenvolvido por <b>DSA Group LTDA.</b></span>
                <a href="/license.pdf" target="_blank" className="hover:text-[#9d7bff] transition-colors ml-4">EULA ↗</a>
                <span className="ml-4">Powered By <a href="https://railway.com" className="hover:text-[#9d7bff] underline font-bold" target="_blank">Railway ↗</a></span>
            </footer>
        </>
    );
};