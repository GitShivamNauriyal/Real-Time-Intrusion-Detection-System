const Footer = () => {
    return (
        <div className="z-10 bg-gradient-to-tr from-gray-900 via-gray-950 to-gray-900 text-gray-300 py-16 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
                {/* Brand */}
                <div className="col-span-2 pr-16">
                    <h2 className="text-orange-400 text-xl font-bold mb-4">
                        Real-time Intrusion Detection System
                    </h2>
                    <p className="text-sm">
                        A Modern Network Security Dashboard.
                    </p>
                    <p className="text-sm">
                        Built for Cybersecurity Elective project 2025.
                    </p>
                </div>

                {/* Navigation */}
                <div>
                    <h3 className="text-orange-400 font-semibold mb-3">
                        Navigation
                    </h3>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <a href="/" className="hover:text-orange-400">
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="/dashboard"
                                className="hover:text-orange-400"
                            >
                                Dashboard
                            </a>
                        </li>
                        <li>
                            <a href="/about" className="hover:text-orange-400">
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/GitShivamNauriyal/Real-Time-Intrusion-Detection-System"
                                className="hover:text-orange-400"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Team */}
                <div>
                    <h3 className="text-orange-400 font-semibold mb-3">Team</h3>
                    <ul className="space-y-2 text-sm">
                        <li>Shivam Nauriyal</li>
                        <li>Krish Gupta</li>
                        <li>Ashish Bisht</li>
                        <li>Bhaavya Srivastava</li>
                    </ul>
                </div>

                {/* GitHub */}
                <div>
                    <h3 className="text-orange-400 font-semibold mb-3">
                        Project
                    </h3>
                    <p className="text-sm mb-2">
                        View the source code and contribute on GitHub:
                    </p>
                    <a
                        href="https://github.com/GitShivamNauriyal/Real-Time-Intrusion-Detection-System"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-orange-400 hover:underline text-sm"
                    >
                        <i className="pi pi-github" />
                        Github
                    </a>
                </div>
            </div>

            {/* Bottom */}
            <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
                © 2025 Intrusion Detection System | Cybersecurity Project
            </div>
        </div>
    );
};

export default Footer;
