import { useState, useEffect } from "react";
import axios from "axios";
import LogSection from "./components/LogsSection";

function Dashboard() {
    const [status, setStatus] = useState("Stopped");
    const [message, setMessage] = useState("");
    const [logs, setLogs] = useState([]);
    const [blockedIps, setBlockedIps] = useState([]);
    const [rules, setRules] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [blockIp, setBlockIp] = useState("");
    const [unblockIp, setUnblockIp] = useState("");
    const [ruleType, setRuleType] = useState("");
    const [ruleThreshold, setRuleThreshold] = useState("");
    const [ruleDescription, setRuleDescription] = useState("");
    const apiUrl = "http://localhost:3000";

    // Start IDS
    const startIDS = async () => {
        if (isLoading || status === "Running") return;
        setIsLoading(true);
        setMessage("");
        try {
            const response = await axios.post(`${apiUrl}/start`);
            setStatus("Running");
            setMessage(response.data.message);
        } catch (error) {
            setStatus("Stopped");
            setMessage(error.response?.data?.error || "Failed to start IDS");
        } finally {
            setIsLoading(false);
        }
    };

    // Stop IDS
    const stopIDS = async () => {
        if (isLoading || status === "Stopped") return;
        setIsLoading(true);
        setMessage("");
        try {
            const response = await axios.post(`${apiUrl}/stop`);
            setStatus("Stopped");
            setMessage(response.data.message);
        } catch (error) {
            setMessage(error.response?.data?.error || "Failed to stop IDS");
        } finally {
            setIsLoading(false);
        }
    };

    // Shutdown IDS
    const shutdownIDS = async () => {
        if (isLoading) return;
        setIsLoading(true);
        setMessage("");
        try {
            const response = await axios.post(`${apiUrl}/shutdown`);
            setStatus("Stopped");
            setMessage(response.data.message);
            setBlockedIps([]);
            setRules([]);
            setLogs([]);
        } catch (error) {
            setMessage(error.response?.data?.error || "Failed to shutdown IDS");
        } finally {
            setIsLoading(false);
        }
    };

    // Fetch Status
    const fetchStatus = async () => {
        try {
            const res = await axios.get(`${apiUrl}/status`);
            setStatus(res.data.status || "Stopped");
        } catch (error) {
            setStatus("Stopped");
        }
    };

    // Fetch Logs
    const fetchLogs = async () => {
        try {
            const response = await axios.get(`${apiUrl}/logs`);
            console.log("API Response:", response.data); // Debug log
            const parsedLogs = Array.isArray(response.data.logs)
                ? response.data.logs
                : [];
            setLogs(parsedLogs);
            console.log("Updated Logs State:", parsedLogs); // Debug state
        } catch (error) {
            console.error("Fetch Logs Error:", error); // Debug error
            setMessage("Failed to fetch logs");
            setLogs([]);
        }
    };

    // Fetch Blocked IPs
    const fetchBlockedIps = async () => {
        try {
            const response = await axios.get(`${apiUrl}/blocked-ips`);
            setBlockedIps(response.data.blockedIps || []);
        } catch (error) {
            setMessage("Failed to fetch blocked IPs");
            setBlockedIps([]);
        }
    };

    // Fetch Rules
    const fetchRules = async () => {
        try {
            const response = await axios.get(`${apiUrl}/rules`);
            setRules(response.data.rules || []);
        } catch (error) {
            setMessage("Failed to fetch rules");
            setRules([]);
        }
    };

    // Block IP
    const blockIP = async () => {
        if (!blockIp || isLoading) return;
        setIsLoading(true);
        setMessage("");
        try {
            const response = await axios.post(`${apiUrl}/block-ip`, {
                ip: blockIp,
            });
            setMessage(response.data.message);
            fetchBlockedIps();
            setBlockIp("");
        } catch (error) {
            setMessage(error.response?.data?.error || "Failed to block IP");
        } finally {
            setIsLoading(false);
        }
    };

    // Unblock IP
    const unblockIP = async () => {
        if (!unblockIp || isLoading) return;
        setIsLoading(true);
        setMessage("");
        try {
            const response = await axios.post(`${apiUrl}/unblock-ip`, {
                ip: unblockIp,
            });
            setMessage(response.data.message);
            fetchBlockedIps();
            setUnblockIp("");
        } catch (error) {
            setMessage(error.response?.data?.error || "Failed to unblock IP");
        } finally {
            setIsLoading(false);
        }
    };

    // Add Rule
    const addRule = async () => {
        if (!ruleType || !ruleThreshold || isLoading) return;
        setIsLoading(true);
        setMessage("");
        try {
            const response = await axios.post(`${apiUrl}/rules`, {
                type: ruleType,
                threshold: parseInt(ruleThreshold),
                description: ruleDescription || "",
            });
            setMessage(response.data.message);
            fetchRules();
            setRuleType("");
            setRuleThreshold("");
            setRuleDescription("");
        } catch (error) {
            setMessage(error.response?.data?.error || "Failed to add rule");
        } finally {
            setIsLoading(false);
        }
    };

    // Delete Rule
    const deleteRule = async (ruleId) => {
        if (isLoading) return;
        setIsLoading(true);
        setMessage("");
        try {
            const response = await axios.delete(`${apiUrl}/rules/${ruleId}`);
            setMessage(response.data.message);
            fetchRules();
        } catch (error) {
            setMessage(error.response?.data?.error || "Failed to delete rule");
        } finally {
            setIsLoading(false);
        }
    };

    // Reset Logs
    const resetLogs = async () => {
        if (isLoading) return;
        setIsLoading(true);
        setMessage("");
        try {
            const response = await axios.post(`${apiUrl}/reset`);
            setMessage(response.data.message);
            setLogs([]);
        } catch (error) {
            setMessage(error.response?.data?.error || "Failed to reset logs");
        } finally {
            setIsLoading(false);
        }
    };

    // Export Logs
    const exportLogs = async () => {
        try {
            const response = await axios.get(`${apiUrl}/logs/export`, {
                responseType: "blob",
            });
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", "logs.json");
            document.body.appendChild(link);
            link.click();
            link.remove();
            setMessage("Logs exported successfully");
        } catch (error) {
            setMessage("Failed to export logs");
        }
    };

    // Fetch data periodically
    useEffect(() => {
        fetchStatus();
        fetchLogs();
        fetchBlockedIps();
        fetchRules();
        const interval = setInterval(() => {
            fetchLogs();
            fetchStatus();
            fetchBlockedIps();
            fetchRules();
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-gray-100 font-sans px-4 py-8">
            <div className="w-full max-w-3xl mx-auto shadow-xl rounded-3xl bg-gray-900/80 p-8">
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-orange-400 tracking-tight text-center">
                    IDS Control Panel
                </h1>
                <div className="flex justify-center items-center mb-6">
                    <span className="mr-2 font-medium">Status:</span>
                    <span
                        className={
                            "px-3 py-1 rounded-full text-sm font-bold " +
                            (status === "Running"
                                ? "bg-green-600 text-white"
                                : "bg-gray-700 text-orange-300")
                        }
                    >
                        {status}
                    </span>
                </div>
                {message && (
                    <div className="mb-6 p-3 rounded-lg bg-orange-900/70 text-orange-200 text-center font-semibold">
                        {message}
                    </div>
                )}

                {/* Start/Stop/Shutdown */}
                <div className="flex flex-wrap gap-4 justify-center mb-8">
                    <button
                        onClick={startIDS}
                        className="px-6 py-2 bg-orange-500 hover:bg-orange-600 rounded-lg font-semibold shadow transition disabled:opacity-60"
                        disabled={isLoading || status === "Running"}
                    >
                        Start IDS
                    </button>
                    <button
                        onClick={stopIDS}
                        className="px-6 py-2 bg-orange-700 hover:bg-orange-800 rounded-lg font-semibold shadow transition disabled:opacity-60"
                        disabled={isLoading || status === "Stopped"}
                    >
                        Stop IDS
                    </button>
                    <button
                        onClick={shutdownIDS}
                        className="px-6 py-2 bg-gray-800 hover:bg-red-600 rounded-lg font-semibold shadow transition disabled:opacity-60"
                        disabled={isLoading}
                    >
                        Shutdown IDS
                    </button>
                </div>

                {/* Block IP */}
                <Section title="Block an IP">
                    <div className="flex gap-2">
                        <input
                            type="text"
                            placeholder="IP Address"
                            value={blockIp}
                            onChange={(e) => setBlockIp(e.target.value)}
                            className="px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-orange-400 outline-none text-gray-100 w-full"
                        />
                        <button
                            onClick={blockIP}
                            className="px-4 py-2 bg-orange-500 hover:bg-orange-600 rounded-lg font-semibold transition disabled:opacity-60"
                            disabled={isLoading}
                        >
                            Block
                        </button>
                    </div>
                </Section>

                {/* Unblock IP */}
                <Section title="Unblock an IP">
                    <div className="flex gap-2">
                        <input
                            type="text"
                            placeholder="IP Address"
                            value={unblockIp}
                            onChange={(e) => setUnblockIp(e.target.value)}
                            className="px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-orange-400 outline-none text-gray-100 w-full"
                        />
                        <button
                            onClick={unblockIP}
                            className="px-4 py-2 bg-orange-500 hover:bg-orange-600 rounded-lg font-semibold transition disabled:opacity-60"
                            disabled={isLoading}
                        >
                            Unblock
                        </button>
                    </div>
                </Section>

                {/* Add Rule */}
                {/*             
            <Section title="Add Rule">
                <div className="flex flex-col md:flex-row gap-2">
                    <input
                        type="text"
                        placeholder="Rule Type"
                        value={ruleType}
                        onChange={(e) => setRuleType(e.target.value)}
                        className="px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-orange-400 outline-none text-gray-100 w-full"
                    />
                    <input
                        type="number"
                        placeholder="Threshold"
                        value={ruleThreshold}
                        onChange={(e) => setRuleThreshold(e.target.value)}
                        className="px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-orange-400 outline-none text-gray-100 w-full"
                    />
                    <input
                        type="text"
                        placeholder="Description (optional)"
                        value={ruleDescription}
                        onChange={(e) => setRuleDescription(e.target.value)}
                        className="px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-orange-400 outline-none text-gray-100 w-full"
                    />
                    <button
                        onClick={addRule}
                        className="px-4 py-2 bg-orange-500 hover:bg-orange-600 rounded-lg font-semibold transition disabled:opacity-60 w-1/2"
                        disabled={isLoading}
                    >
                        Add Rule
                    </button>
                </div>
            </Section> 
            */}

                {/* Existing Rules */}
                {/*
             <Section title="Existing Rules">
                {rules.length > 0 ? (
                    rules.map((rule) => (
                        <div
                            key={rule.id}
                            className="flex justify-between items-center bg-gray-800 rounded-lg px-4 py-2 mb-2"
                        >
                            <span>
                                {rule.type} - {rule.threshold} -{" "}
                                {rule.description}
                            </span>
                            <button
                                onClick={() => deleteRule(rule.id)}
                                className="px-3 py-1 bg-orange-700 hover:bg-orange-800 rounded-lg font-semibold transition disabled:opacity-60"
                                disabled={isLoading}
                            >
                                Delete
                            </button>
                        </div>
                    ))
                ) : (
                    <div className="text-gray-400 italic">
                        No rules available.
                    </div>
                )}
            </Section> 
            */}

                {/* Blocked IPs */}
                <Section title="Blocked IPs">
                    {blockedIps.length > 0 ? (
                        blockedIps.map((ip, index) => (
                            <div
                                key={index}
                                className="bg-gray-800 rounded-lg px-4 py-2 mb-2"
                            >
                                {ip}
                            </div>
                        ))
                    ) : (
                        <div className="text-gray-400 italic">
                            No blocked IPs.
                        </div>
                    )}
                </Section>

                {/* Logs */}
                <LogSection
                    logs={logs}
                    onResetLogs={resetLogs}
                    onExportLogs={exportLogs}
                />
            </div>
        </div>
    );
}

function Section({ title, children }) {
    return (
        <div className="mb-8">
            <h2 className="text-lg font-bold text-orange-300 mb-2">{title}</h2>
            {children}
        </div>
    );
}

export default Dashboard;
