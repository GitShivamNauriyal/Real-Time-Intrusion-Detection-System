import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="z-10 bg-gray-950 px-10 py-4 flex justify-between items-center">
            <span className="text-orange-400 font-bold text-xl">
                <NavLink to="/">Intrusion Detection System</NavLink>
            </span>
            <div className="flex gap-6 mr-8">
                <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                        isActive
                            ? "text-orange-400 font-semibold"
                            : "text-gray-200 hover:text-orange-300 transition"
                    }
                >
                    Dashboard
                </NavLink>
                <NavLink
                    to="/about"
                    className={({ isActive }) =>
                        isActive
                            ? "text-orange-400 font-semibold"
                            : "text-gray-200 hover:text-orange-300 transition"
                    }
                >
                    About
                </NavLink>
            </div>
        </nav>
    );
}
