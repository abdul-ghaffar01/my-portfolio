"use client"
import { isTokenValid } from '@/utils/checkAdminToken';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react'

const page = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const router = useRouter()



    useEffect(() => {
        const token = localStorage.getItem("adminToken"); // Or whatever key you're using
        if (isTokenValid(token)) {
            router.push("/chat/admin")
        }
    }, []);



    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_CHATBOT_BACKEND_URL}/adminlogin`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            const data = await res.json();
            if (res.ok) {
                setMessage("✅ Login successful!");
                // store token if returned
                localStorage.setItem("adminToken", data.token);
                router.push("/chat/admin")
            } else {
                setMessage(`❌ ${data.message || "Login failed"}`);
            }
        } catch (err) {
            console.error(err);
            setMessage("❌ An error occurred. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">
                    Admin Login
                </h2>
                <form className="flex flex-col gap-4" onSubmit={handleLogin}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    />
                    <button
                        type="submit"
                        disabled={loading}
                        className={`p-2 text-white rounded ${loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
                            }`}
                    >
                        {loading ? "Logging in..." : "Login"}
                    </button>
                </form>
                {message && (
                    <p className="mt-4 text-center text-sm text-gray-700">{message}</p>
                )}
            </div>
        </div>
    );
}

export default page