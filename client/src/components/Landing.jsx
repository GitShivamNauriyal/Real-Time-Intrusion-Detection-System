import { useNavigate } from "react-router-dom";
import MatrixBackground from "./MatrixBackground";

export default function Landing() {
    const navigate = useNavigate();

    return (
        <div className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden bg-gradient-to-tr from-gray-900 via-gray-950 to-gray-900">
            {/* Matrix background */}
            <MatrixBackground speed={80} />

            {/* Content */}
            <div className="relative z-10">
                <h1 className="text-4xl md:text-5xl font-bold text-orange-400 mb-4 drop-shadow-[0_2px_24px_rgba(251,146,60,0.4)]">
                    Welcome to{" "}
                    <span className="block text-4xl md:text-5xl">
                        Real-time Intrusion Detection System
                    </span>
                </h1>
                <p className="text-gray-300 mb-6 max-w-xl mx-auto text-lg">
                    Monitor, analyze, and manage your network security logs with
                    our modern dashboard.
                </p>
                <button
                    onClick={() => navigate("/dashboard")}
                    className="px-6 py-2 rounded bg-orange-500 hover:bg-orange-400 text-white font-semibold text-lg transition shadow-lg"
                >
                    Go to Dashboard
                </button>
            </div>
        </div>
    );
}
