import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="z-10 bg-gradient-to-tr from-gray-950 via-gray-900 to-gray-950 border-b border-orange-500/40 px-4 md:px-10 py-4 flex justify-between items-center shadow-sm">
            <span className="text-orange-400 font-extrabold text-2xl tracking-wide">
                <NavLink to="/" className="hover:text-orange-300 transition">
                    Intrusion Detection System
                </NavLink>
            </span>
            <div className="flex gap-4 md:gap-8 mr-2 md:mr-8">
                <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                        isActive
                            ? "text-orange-400 font-semibold border-b-2 border-orange-400 pb-1"
                            : "text-gray-200 hover:text-orange-300 transition pb-1"
                    }
                >
                    Dashboard
                </NavLink>
                <NavLink
                    to="/about"
                    className={({ isActive }) =>
                        isActive
                            ? "text-orange-400 font-semibold border-b-2 border-orange-400 pb-1"
                            : "text-gray-200 hover:text-orange-300 transition pb-1"
                    }
                >
                    About
                </NavLink>
            </div>
        </nav>
    );
}
