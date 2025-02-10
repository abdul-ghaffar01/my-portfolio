'use client'
import { useParams } from 'next/navigation'
import React, { useEffect, useState, useRef } from 'react'

const Page = () => {
    const { project } = useParams();
    const [outputs, setOutputs] = useState([]);
    const [input, setInput] = useState("");
    const [showInput, setShowInput] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const outputRef = useRef(null);

    // Auto-scroll to bottom when outputs change
    useEffect(() => {
        if (outputRef.current) {
            outputRef.current.scrollTop = outputRef.current.scrollHeight;
        }
    }, [outputs]);

    // Fetch output from the backend
    const getOutput = async () => {
        try {
            const resp = await fetch('/api/cpp-server/get-output', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    sessionId: localStorage.getItem("sessionId")
                })
            });
            const result = await resp.json();
            console.log(result)
            const outputsStringToArray = result.output ? result.output.split("\n") : []
            console.log(outputsStringToArray)
            setOutputs(outputsStringToArray);
        } catch (error) {
            console.error("Error fetching output:", error);
        }
    };

    // Start the C++ process
    const startApp = async () => {
        try {
            const resp = await fetch("/api/cpp-server/start-process", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ appName: project })
            });
            const result = await resp.json();
            console.log(result)
            localStorage.setItem("sessionId", result.sessionId);
        } catch (error) {
            console.error("Error starting process:", error);
        }
    };

    // Stop the C++ process
    const stopProcess = async () => {
        try {
            const resp = await fetch("/api/cpp-server/stop-process", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ sessionId: localStorage.getItem("sessionId") })
            });
            const result = await resp.json();
            console.log("Process stopped:", result);
            setOutputs(prev => [...prev, "\n\nYou terminated the session."]);
            setShowInput(false);
        } catch (error) {
            console.error("Error stopping process:", error);
        }
    };

    // Handle component mount
    useEffect(() => {
        const initialize = async () => {
            await startApp();
            await getOutput();
            setIsLoading(false);
        };
        initialize();

        // Add event listener for Ctrl + C
        const handleKeyDown = (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'c') {
                e.preventDefault(); // Prevent default behavior (e.g., copying text)
                stopProcess();
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        // Cleanup event listener on unmount
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    // Handle user input
    const handleInput = async (e) => {
        e.preventDefault();
        if (!input.trim()) return; // Ignore empty input

        try {
            const resp = await fetch("/api/cpp-server/send-input", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ sessionId: localStorage.getItem("sessionId"), input })
            });
            const result = await resp.json();

            if (!result.terminated) {
                await getOutput();
            } else {
                setOutputs((result.history + "\n\nProgram exited with exit code " + result.exitCode).split("\n"));
                setShowInput(false);
            }

            setInput("");
        } catch (error) {
            console.error("Error sending input:", error);
        }
    };

    return (
        <div className="w-screen min-h-[100dvh] bg-black text-slate-300 overflow-x-hidden">
            {isLoading && (
                <div className='fixed w-screen h-[100dvh] flex flex-col items-center justify-center'>
                    <Logo />
                    <p>Starting app</p>
                </div>
            )}
            <div className="bg-slate-400 w-full h-[30px] flex items-center justify-center font-bold text-black">
                Abdul Ghaffar
            </div>

            <div className="w-full h-fit p-2 text-[12px] sm:text-[15px] ">
                <pre ref={outputRef} className="whitespace-pre-wrap">
                    {outputs.map((item, index) => (
                        index < outputs.length - 1 && <span key={index}>{item + "\n"}</span>
                    ))}
                </pre>

                {/* Last line of output and input */}
                <div className="w-full flex">
                    <pre className="whitespace-nowrap">{outputs[outputs.length - 1]}</pre>
                    {showInput && (
                        <form onSubmit={handleInput} className="flex flex-1">
                            <input
                                className="flex-1 bg-transparent outline-none"
                                autoFocus
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                aria-label="Command input"
                                disabled={isLoading}
                            />
                            <button type="submit" className="hidden" aria-label="Submit command"></button>
                        </form>
                    )}
                </div>

            </div>
        </div>
    );
};

export default Page;