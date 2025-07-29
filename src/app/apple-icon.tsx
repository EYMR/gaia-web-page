import {ImageResponse} from "next/og"

export const size = {
    width: 180,
    height: 180,
}
export const contentType = "image/png"

export default function AppleIcon() {
    return new ImageResponse(
        <div
            style={{
                fontSize: 48,
                background: "white",
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                padding: "20px",
            }}
        >
            {/* Logo */}
            <svg width="120" height="80" viewBox="0 0 100 70" style={{display: "block", marginBottom: "10px"}}>
                {/* Mountain peaks */}
                <path
                    d="M15 45 L30 15 L45 30 L60 10 L75 35"
                    stroke="#000"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />

                {/* Flowing organic shape */}
                <path
                    d="M40 25 Q50 20 55 30 Q60 40 50 45 Q40 50 35 40 Q30 30 40 25 Z"
                    stroke="#000"
                    strokeWidth="2.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />

                {/* Additional flowing elements */}
                <path
                    d="M30 40 Q40 35 45 45 Q50 55 40 55 Q30 55 30 45"
                    stroke="#000"
                    strokeWidth="2.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>

            {/* GAIA text */}
            <div
                style={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    color: "#000",
                    fontFamily: "system-ui, -apple-system, sans-serif",
                    letterSpacing: "2px",
                }}
            >
                GAIA
            </div>
        </div>,
        {
            ...size,
        },
    )
}
