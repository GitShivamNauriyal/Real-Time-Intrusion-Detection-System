import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import LogSection from "./components/LogsSection";
import Dashboard from "./Dashboard";

function App() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-gray-100 font-sans px-4 py-8">
            <Dashboard />
        </div>
    );
}

export default App;
