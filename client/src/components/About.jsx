"use client";

import { Button } from "primereact/button";
import { AnimatedTooltip } from "./AnumatedTooltip";

const people = [
    {
        id: 1,
        name: "Shivam Nauriyal",
        designation: "Frontend UI & UX",
        image: "/avatar1.png",
    },
    {
        id: 2,
        name: "Krish Gupta",
        designation: "Backend & Optimization",
        image: "/avatar2.png",
    },
    {
        id: 3,
        name: "Ashish Bisht",
        designation: "Report & Documentation",
        image: "/avatar3.png",
    },
    {
        id: 4,
        name: "Bhaavya Srivastava",
        designation: "Logic & Integration",
        image: "/avatar4.png",
    },
];

const About = () => {
    return (
        <div className="bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900 text-gray-200 px-6 py-16 min-h-screen">
            <div className="max-w-4xl mx-auto">
                {/* Heading */}
                <h1 className="text-4xl font-bold text-orange-400 mb-1">
                    About the Project
                </h1>
                <div className="border-t border-gray-600 mb-6 w-full" />

                {/* Project Overview */}
                <p className="text-lg mb-6">
                    Our Real-time Intrusion Detection System (IDS) is a modern,
                    web-based cybersecurity solution designed to help
                    organizations monitor, analyze, and respond to network
                    threats as they happen. Built with a focus on usability,
                    speed, and extensibility, this project empowers security
                    teams to visualize security events and take action in real
                    time.
                </p>

                {/* IDS Overview */}
                <h2 className="text-2xl font-semibold text-orange-300 mt-10 mb-1">
                    What is an Intrusion Detection System?
                </h2>
                <div className="border-t border-gray-600 mb-4 w-full" />
                <p className="mb-6">
                    An Intrusion Detection System (IDS) is a cybersecurity
                    solution that monitors network traffic for suspicious
                    activity and potential threats. Our IDS dashboard collects,
                    parses, and displays real-time logs, making it easier for
                    security teams to identify and respond to attacks,
                    unauthorized access, or anomalies.
                </p>

                {/* Project Abstract */}
                <h2 className="text-2xl font-semibold text-orange-300 mt-10 mb-1">
                    Project Abstract
                </h2>
                <div className="border-t border-gray-600 mb-4 w-full" />
                <p className="mb-6">
                    This IDS project provides an intuitive dashboard for
                    real-time network traffic analysis, threat detection, and
                    log management. By combining traditional rule-based
                    detection with a scalable architecture, it offers a strong
                    foundation for protecting digital infrastructure against
                    unauthorized access, attacks, and anomalies.
                </p>

                {/* System Architecture */}
                <h2 className="text-2xl font-semibold text-orange-300 mt-10 mb-1">
                    System Architecture
                </h2>
                <div className="border-t border-gray-600 mb-4 w-full" />
                <ul className="list-disc list-inside mb-6 space-y-2">
                    <li>
                        <span className="text-orange-400 font-semibold">
                            Packet Capture & Analysis:
                        </span>{" "}
                        Captures and inspects network packets for suspicious
                        activity.
                    </li>
                    <li>
                        <span className="text-orange-400 font-semibold">
                            Rule-Based Detection Engine:
                        </span>{" "}
                        Applies a set of customizable rules to identify known
                        threats and anomalies.
                    </li>
                    <li>
                        <span className="text-orange-400 font-semibold">
                            Web Dashboard:
                        </span>{" "}
                        Built with React and Next.js, it offers real-time
                        visualization of logs, alerts, and network statistics.
                    </li>
                    <li>
                        <span className="text-orange-400 font-semibold">
                            Backend API:
                        </span>{" "}
                        Handles log storage, export, and system controls,
                        supporting both real-time and historical analysis.
                    </li>
                </ul>

                {/* Key Features */}
                <h2 className="text-2xl font-semibold text-orange-300 mb-1">
                    Key Features
                </h2>
                <div className="border-t border-gray-600 mb-4 w-full" />
                <ul className="list-disc list-inside mb-6 space-y-2">
                    <li>
                        <span className="text-orange-400 font-semibold">
                            Real-time Log Monitoring:
                        </span>{" "}
                        Instantly view and filter network events as they occur.
                    </li>
                    <li>
                        <span className="text-orange-400 font-semibold">
                            Threat Detection:
                        </span>{" "}
                        Automated identification of suspicious IPs, unusual
                        activity, and known attack patterns.
                    </li>
                    <li>
                        <span className="text-orange-400 font-semibold">
                            Interactive Dashboard:
                        </span>{" "}
                        Modern UI with dark theme and orange highlights for
                        clarity and focus.
                    </li>
                    <li>
                        <span className="text-orange-400 font-semibold">
                            Export & Reset Logs:
                        </span>{" "}
                        Easily export logs for reporting or reset the system for
                        fresh monitoring.
                    </li>
                    <li>
                        <span className="text-orange-400 font-semibold">
                            Extensible Architecture:
                        </span>{" "}
                        Designed for easy integration of new detection rules and
                        machine learning models.
                    </li>
                </ul>

                {/* Tasks Completed */}
                <h2 className="text-2xl font-semibold text-orange-300 mb-1">
                    Tasks Completed
                </h2>
                <div className="border-t border-gray-600 mb-4 w-full" />
                <ul className="list-disc list-inside mb-6 space-y-2">
                    <li>Implemented packet capture and log parsing</li>
                    <li>
                        Developed rule-based detection logic for common threats
                    </li>
                    <li>
                        Built a responsive, interactive dashboard for real-time
                        monitoring
                    </li>
                    <li>Enabled log export and system reset functionality</li>
                    <li>Designed a modular backend for future enhancements</li>
                </ul>

                {/* Challenges & Roadblocks */}
                <h2 className="text-2xl font-semibold text-orange-300 mb-1">
                    Challenges & Roadblocks
                </h2>
                <div className="border-t border-gray-600 mb-4 w-full" />
                <ul className="list-disc list-inside mb-6 space-y-2">
                    <li>
                        <span className="text-orange-400 font-semibold">
                            Performance Optimization:
                        </span>{" "}
                        Ensuring smooth real-time updates under high network
                        loads.
                    </li>
                    <li>
                        <span className="text-orange-400 font-semibold">
                            Detection Accuracy:
                        </span>{" "}
                        Reducing false positives while maintaining sensitivity
                        to threats.
                    </li>
                    <li>
                        <span className="text-orange-400 font-semibold">
                            Scalability:
                        </span>{" "}
                        Designing the system to handle large volumes of traffic
                        and logs.
                    </li>
                </ul>

                {/* Future Scope */}
                <h2 className="text-2xl font-semibold text-orange-300 mb-1">
                    Future Scope
                </h2>
                <div className="border-t border-gray-600 mb-4 w-full" />
                <ul className="list-disc list-inside mb-6 space-y-2">
                    <li>
                        <span className="text-orange-400 font-semibold">
                            Machine Learning Integration:
                        </span>{" "}
                        Detect unknown or evolving threats using lightweight ML
                        models.
                    </li>
                    <li>
                        <span className="text-orange-400 font-semibold">
                            Enhanced Visualization:
                        </span>{" "}
                        Add traffic graphs, heatmaps, and timeline-based threat
                        tracking.
                    </li>
                    <li>
                        <span className="text-orange-400 font-semibold">
                            Improved Scalability:
                        </span>{" "}
                        Optimize for high-volume environments and extended
                        monitoring sessions.
                    </li>
                    <li>
                        <span className="text-orange-400 font-semibold">
                            Cross-Platform Deployment:
                        </span>{" "}
                        Package with Docker for easy deployment on any OS.
                    </li>
                    <li>
                        <span className="text-orange-400 font-semibold">
                            Security Features:
                        </span>{" "}
                        Add user authentication and access control for
                        organizational use.
                    </li>
                    <li>
                        <span className="text-orange-400 font-semibold">
                            Protocol & Rule Expansion:
                        </span>{" "}
                        Support more network protocols and dynamic rule updates.
                    </li>
                </ul>

                {/* Project Outcome */}
                <h2 className="text-2xl font-semibold text-orange-300 mb-1">
                    Project Outcome
                </h2>
                <div className="border-t border-gray-600 mb-4 w-full" />
                <ul className="list-disc list-inside mb-6 space-y-2">
                    <li>
                        A fully functional IDS dashboard for real-time threat
                        monitoring
                    </li>
                    <li>Modular codebase for easy extension and integration</li>
                    <li>
                        Detailed documentation and project report for future
                        development
                    </li>
                </ul>

                {/* Technology Stack */}
                <h2 className="text-2xl font-semibold text-orange-300 mb-1">
                    Technology Stack
                </h2>
                <div className="border-t border-gray-600 mb-4 w-full" />
                <p className="mb-6">
                    The dashboard leverages modern web technologies including{" "}
                    <span className="text-orange-400">React</span> and{" "}
                    <span className="text-orange-400">Tailwind CSS</span> for
                    the frontend, with a scalable backend in{" "}
                    <span className="text-orange-400">Python</span> for
                    real-time log ingestion and analysis, both connected through
                    API made with{" "}
                    <span className="text-orange-400">ExpressJS</span>. The
                    system is designed for extensibility and rapid response.
                </p>

                {/* Team Section with Tooltips */}
                <h2 className="text-2xl font-semibold text-orange-300 mt-10 mb-1">
                    Our Team
                </h2>
                <div className="border-t border-gray-600 mb-4 w-full" />
                <div className="flex justify-center mt-8">
                    <AnimatedTooltip items={people} />
                </div>

                {/* GitHub Button */}
                <div className="flex justify-center mt-12">
                    <a
                        href="https://github.com/GitShivamNauriyal/Smart-Inventory-Management-System"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button
                            icon="pi pi-github"
                            label="View on GitHub"
                            className="p-button-rounded p-button-secondary text-lg"
                        />
                    </a>
                </div>

                {/* Download Project Report */}
                <h2 className="text-2xl font-semibold text-orange-300 mt-14 mb-1">
                    Project Report
                </h2>
                <div className="border-t border-gray-600 mb-4 w-full" />
                <p className="mb-4">
                    Download the detailed project report for an in-depth look at
                    our IDS architecture, detection algorithms, results, and
                    future enhancements.
                </p>
                <div className="flex justify-center">
                    <a
                        href="/report.pdf"
                        download
                        className="inline-flex items-center gap-2 text-orange-400 hover:underline text-lg"
                    >
                        <i className="pi pi-file-pdf" />
                        Download Report
                    </a>
                </div>
            </div>
        </div>
    );
};

export default About;
