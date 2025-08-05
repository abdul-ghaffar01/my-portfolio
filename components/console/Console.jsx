"use client";
import React, { useEffect, useState, useRef } from 'react';
import { io } from "socket.io-client";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ReplayIcon from '@mui/icons-material/Replay';

const SOCKET_URL = "https://exec-server.iabdulghaffar.com";

const Console = ({ project }) => {
    const [outputs, setOutputs] = useState([]);
    const [cleanOutput, setCleanOutput] = useState([]);
    const [input, setInput] = useState("");
    const [showInput, setShowInput] = useState(true);
    const [isLoading, setIsLoading] = useState(true);

    const outputRef = useRef(null);
    const fontContRef = useRef(null);
    const socketRef = useRef(null);
    const sessionIdRef = useRef(null);

    const connectSocket = () => {
        setIsLoading(true);
        setOutputs([]);
        const socket = io(SOCKET_URL, { transports: ["websocket"] });
        socketRef.current = socket;

        socket.on("connect", () => {
            console.log("Connected to exec-server");
            socket.emit("start-process", project);
        });

        socket.on("session-started", ({ sessionId }) => {
            sessionIdRef.current = sessionId;
            setIsLoading(false);
            setShowInput(true);
        });

        socket.on("output", (data) => {
            setOutputs(prev => [...prev, ...data.split("\n")]);
        });

        socket.on("terminated", (info) => {
            setOutputs(prev => [...prev, `[Process ended] ${info.reason || ""}`]);
            setShowInput(false);
        });

        socket.on("disconnect", () => {
            setShowInput(false);
        });

        socket.on("error", (err) => {
            setOutputs(prev => [...prev, `[Error] ${err}`]);
        });
    };

    useEffect(() => {
        connectSocket();

        const handleKeyDown = (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'c') {
                e.preventDefault();
                socketRef.current.emit("stop-process", sessionIdRef.current);
            }
        };
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            socketRef.current?.disconnect();
        };
    }, [project]);

    useEffect(() => {
        const formatted = outputs
            .flatMap(line => line.split("\n"))
            .filter(line => line.trim() !== ">");

        const cleaned = formatted.map(line => ({
            text: line,
            type: line.toLowerCase().includes("error")
                ? "error"
                : line.toLowerCase().includes("warning")
                    ? "warning"
                    : line.toLowerCase().includes("process ended")
                        ? "terminated"
                        : "normal",
        }));

        setCleanOutput(cleaned);
    }, [outputs]);


    const handleInput = (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        // Append input to the last line of outputs (instead of new line)
        setOutputs((prev) => {
            if (prev.length === 0) return ["> " + input];
            const updated = [...prev];
            updated[updated.length - 1] = updated[updated.length - 1] + input;
            return updated;
        });

        // Send input to backend
        socketRef.current.emit("send-input", { sessionId: sessionIdRef.current, input });

        setInput("");
    };


    return (
        <div
            className="w-full min-h-[100vh] bg-gray-900 text-slate-300 font-mono overflow-hidden relative border-r border-gray-600"
            onClick={() => document.querySelector("input")?.focus()}
        >
            {/* Header */}
            <div className="bg-gray-800 w-full h-[35px] flex items-center px-4 border-b border-gray-700 justify-between">
                <div className="flex space-x-2">
                    <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                    <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
                    <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                </div>
                <p className="text-gray-300 text-sm">Abdul Ghaffar</p>

                {/* Restart Button - Always Visible */}
                <button
                    onClick={() => { connectSocket(); }}
                    className="flex items-center space-x-1 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm text-green-400 transition"
                >
                    <ReplayIcon fontSize="small" /> <span>Restart</span>
                </button>
            </div>

            {/* Console Output */}
            <div
                ref={fontContRef}
                className="w-full h-[calc(100vh-120px)] p-4 text-sm overflow-y-auto custom-scrollbar"
            >
                <pre ref={outputRef} className="whitespace-pre-wrap leading-5">
                    {cleanOutput.map((line, idx) => (
                        <div
                            key={idx}
                            className={
                                line.text.includes(">")
                                    ? "text-green-400 tracking-wider" // ✅ Green + wider letter spacing
                                    : line.type === "error"
                                        ? "text-red-400"
                                        : line.type === "warning"
                                            ? "text-yellow-400"
                                            : line.type === "terminated"
                                                ? "text-green-400 italic"
                                                : "text-slate-300"
                            }
                        >
                            {line.text}
                        </div>
                    ))}

                </pre>
            </div>

            {/* Input */}
            {showInput && !isLoading && (
                <form
                    onSubmit={handleInput}
                    className="absolute bottom-[60px] w-full px-4 flex items-center"
                >
                    <span className="text-green-400 pr-2">&gt;</span>
                    <input
                        className="flex-1 bg-transparent outline-none caret-green-400 text-slate-200"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        autoFocus
                    />
                </form>
            )}

            {/* Loading Overlay */}
            {isLoading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900 bg-opacity-95 z-50">
                    <div className="w-8 h-8 border-4 border-gray-500 border-t-green-400 rounded-full animate-spin mb-4"></div>
                    <p className="text-slate-400 text-lg">Starting app...</p>
                </div>
            )}

            {/* Font Controls */}
            <div className="fixed bottom-2 left-2 flex space-x-2">
                <button
                    onClick={() => {
                        if (fontContRef.current) {
                            let size = parseInt(window.getComputedStyle(fontContRef.current).fontSize, 10);
                            fontContRef.current.style.fontSize = `${size - 1}px`;
                        }
                    }}
                    className="bg-gray-800 hover:bg-gray-700 rounded-full w-[40px] h-[40px] flex items-center justify-center shadow"
                >
                    <RemoveIcon />
                </button>
                <button
                    onClick={() => {
                        if (fontContRef.current) {
                            let size = parseInt(window.getComputedStyle(fontContRef.current).fontSize, 10);
                            fontContRef.current.style.fontSize = `${size + 1}px`;
                        }
                    }}
                    className="bg-gray-800 hover:bg-gray-700 rounded-full w-[40px] h-[40px] flex items-center justify-center shadow"
                >
                    <AddIcon />
                </button>
            </div>

            {/* Custom Scrollbar */}
            <style jsx>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 8px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #4b5563;
                    border-radius: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #6b7280;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: #1f2937;
                }
            `}</style>
        </div>
    );
};

export default Console;
