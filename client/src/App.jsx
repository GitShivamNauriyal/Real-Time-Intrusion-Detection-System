// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Dashboard from "./Dashboard";
import About from "./components/About";
import Landing from "./components/Landing";
import "./App.css";

function Layout({ children }) {
    return (
        <div className="flex flex-col min-h-screen bg-gray-950">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
        </div>
    );
}

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
