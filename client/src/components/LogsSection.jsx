import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// logs: Array<{ id?: string|number, timestamp: string, message: string }>
export default function LogSection({ logs = [], onResetLogs, onExportLogs }) {
    // Reverse logs so the newest is at the top

    const [exporting, setExporting] = useState(false);
    const [resetting, setResetting] = useState(false);

    // Reverse logs so newest is at the top
    const reversedLogs = [...logs].reverse();

    const handleReset = async () => {
        setResetting(true);
        try {
            await onResetLogs?.();
        } finally {
            setResetting(false);
        }
    };

    const handleExport = async () => {
        setExporting(true);
        try {
            await onExportLogs?.();
        } finally {
            setExporting(false);
        }
    };

    return (
        <section className="bg-gray-950 rounded-2xl p-4 mt-8 shadow-lg">
            <h2 className="text-xl font-bold text-orange-400 mb-4">Logs</h2>

            <div className="bg-gray-800 max-h-96 overflow-y-auto flex flex-col gap-2">
                <AnimatePresence initial={false}>
                    {reversedLogs.map((log, idx) => (
                        <motion.div
                            key={log.id ?? idx}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.25 }}
                            className="bg-gray-900 border-l-4 border-orange-500 px-4 py-2 rounded shadow text-gray-100 flex items-center"
                        >
                            <p>
                                <strong className="text-orange-300">
                                    Timestamp:
                                </strong>{" "}
                                {log.timestamp}
                            </p>
                            <p>
                                <strong className="text-orange-300">
                                    Type:
                                </strong>{" "}
                                {log.type}
                            </p>
                            <p>
                                <strong className="text-orange-300">
                                    IP Address:
                                </strong>{" "}
                                {log.ip}
                            </p>
                            <p>
                                <strong className="text-orange-300">
                                    Count:
                                </strong>{" "}
                                {log.count}
                            </p>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
            <div className="flex gap-2 mt-6">
                <button
                    onClick={handleExport}
                    disabled={exporting}
                    className="px-3 py-1 rounded bg-orange-500 hover:bg-orange-400 text-white font-semibold transition disabled:opacity-60"
                >
                    {exporting ? "Exporting..." : "Export Logs"}
                </button>
                <button
                    onClick={handleReset}
                    disabled={resetting}
                    className="px-3 py-1 rounded bg-gray-800 hover:bg-orange-700 text-orange-400 font-semibold border border-orange-400 transition disabled:opacity-60"
                >
                    {resetting ? "Resetting..." : "Reset Logs"}
                </button>
            </div>
        </section>
    );
}
