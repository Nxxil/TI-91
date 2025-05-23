import React from "react";

export default function ConstruccionPage() {
    return (
        <div
            style={{
                minHeight: "80vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "1rem",
            }}
        >
            <svg
                width="96"
                height="96"
                fill="none"
                viewBox="0 0 24 24"
                style={{
                    maxWidth: "40vw",
                    maxHeight: "40vw",
                    minWidth: "64px",
                    minHeight: "64px",
                }}
            >
                <path fill="#fbbf24" d="M12 2L2 22h20L12 2z" />
                <circle cx="12" cy="17" r="1" fill="#fff" />
                <rect x="11" y="10" width="2" height="5" rx="1" fill="#fff" />
            </svg>
            <h1
                style={{
                    fontSize: "clamp(1.5rem, 5vw, 2.5rem)",
                    margin: "1rem 0 0.5rem",
                    textAlign: "center",
                }}
            >
                Sitio en construcción
            </h1>
            <p
                style={{
                    fontSize: "clamp(1rem, 3vw, 1.2rem)",
                    textAlign: "center",
                }}
            >
                Estamos trabajando para traerte una mejor experiencia. ¡Vuelve pronto!
            </p>
        </div>
    );
}