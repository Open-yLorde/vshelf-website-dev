import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface ILoading {
    title: string;
    subtitle: string;
    url: string;
}

export default function Loading({ title, subtitle, url }: ILoading) {
    const navigate = useNavigate();
    const [progress, setProgress] = useState(0);
    const [timeLeft, setTimeLeft] = useState(3);

    useEffect(() => {
        const progressInterval = setInterval(() => {
            setProgress((prev) => (prev < 100 ? prev + 100 / 30 : 100));
        }, 100);

        const countdownInterval = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    clearInterval(progressInterval);
                    clearInterval(countdownInterval);
                    window.location.href = url;
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => {
            clearInterval(progressInterval);
            clearInterval(countdownInterval);
        };
    }, [navigate]);

    return (
        <div style={styles.page}>
            <div style={styles.container}>
                <div style={styles.icon}>
                    <svg viewBox="0 0 24 24" style={styles.svg}>
                        <path d="M9 16.17l-3.88-3.88a.996.996 0 111.41-1.41L9 13.34l8.46-8.46a.996.996 0 111.41 1.41L9 16.17z" />
                    </svg>
                </div>

                <h1 style={styles.title}>{title}</h1>
                <p style={styles.text}>
                    {subtitle}
                </p>

                <div style={styles.progressBar}>
                    <div style={{ ...styles.progress, width: `${progress}%` }}></div>
                </div>

                <div style={styles.redirect}>
                    Redirecionando em {timeLeft} segundo{timeLeft !== 1 && "s"}...
                </div>

                <div style={styles.footer}>© 2025 VShelf</div>
            </div>
        </div>
    );
}
const styles: Record<string, React.CSSProperties> = {
    page: {
        // background: "radial-gradient(circle at top, #1b1b20, #0d0d10)",
        // height: "100vh",
        marginTop: "30px",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        fontFamily: "'Inter', sans-serif",
    },
    container: {
        background: "#141418",
        padding: "50px 60px",
        borderRadius: "18px",
        boxShadow: "0 0 40px rgba(0,0,0,0.4)",
        textAlign: "center",
        border: "1px solid #222",
        maxWidth: "400px",
        width: "90%",
        position: "relative",
        animation: "fadeIn 0.6s ease-out",
    },
    icon: {
        width: "80px",
        height: "80px",
        margin: "0 auto 20px",
        borderRadius: "50%",
        background: "#00ff99",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    svg: {
        width: "45px",
        height: "45px",
        fill: "#0d0d10",
        background: "#00ff99",
    },
    title: {
        fontSize: "1.6rem",
        fontWeight: 600,
        marginBottom: "10px",
        background: "#141418",
    },
    text: {
        fontSize: "0.95rem",
        color: "#bbb",
        marginBottom: "25px",
        background: "#141418",
    },
    progressBar: {
        height: "6px",
        width: "100%",
        background: "#1f1f24",
        borderRadius: "5px",
        overflow: "hidden",
    },
    progress: {
        height: "100%",
        background: "linear-gradient(90deg, #6b63ff, #00ff99)",
        transition: "width 0.1s linear",
    },
    redirect: {
        marginTop: "15px",
        fontSize: "0.85rem",
        color: "#888",
        background: "#141418",
    },
    footer: {
        marginTop: "25px",
        fontSize: "0.8rem",
        color: "#555",
        background: "#141418",
    },
};
