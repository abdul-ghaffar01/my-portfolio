"use client";
import React, { useEffect, useState } from "react";
import useChatStore from "@/store/chatStore";
import { motion, AnimatePresence } from "framer-motion";

const PersonalSettings = () => {
    const { user } = useChatStore();
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState({});
    const [showModal, setShowModal] = useState(false);
    const [fieldsToUpdate, setFieldsToUpdate] = useState([]);
    const [responseModal, setResponseModal] = useState({ show: false, message: "" });

    // Prefill fields from Zustand/localStorage
    useEffect(() => {
        const localUser = JSON.parse(localStorage.getItem("user") || "{}");
        setFullName(user?.fullName || localUser?.fullName || "");
        setEmail(user?.email || localUser?.email || "");
    }, [user]);

    // Validate form
    const validateForm = () => {
        const newErrors = {};
        if (!fullName.trim()) newErrors.fullName = "Full name is required";
        if (!email.trim()) newErrors.email = "Email is required";
        if (password && password !== confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSave = (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        // Track changed fields dynamically
        const updates = [];
        const localUser = JSON.parse(localStorage.getItem("user") || "{}");

        if (fullName !== (user?.fullName || localUser?.fullName)) updates.push("Full Name");
        if (email !== (user?.email || localUser?.email)) updates.push("Email");
        if (password) updates.push("Password");

        if (!updates.length) {
            setResponseModal({ show: true, message: "No changes detected." });
            return;
        }

        setFieldsToUpdate(updates);
        setShowModal(true);
    };

    const confirmUpdate = async () => {
        setShowModal(false);

        try {
            const token = localStorage.getItem("jwt");
            if (!token) {
                return setResponseModal({ show: true, message: "Authentication required!" });
            }
            console.log({
                ...(fullName !== user?.fullName && { fullName: fullName.trim() }),
                ...(email !== user?.email && { email: email.trim() }),
                ...(password && { password: password.trim() }),
            })

            const res = await fetch(`${process.env.NEXT_PUBLIC_CHATBOT_BACKEND_URL}/update-info`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
                body: JSON.stringify({
                    ...(fullName !== user?.fullName && { fullName: fullName.trim() }),
                    ...(email !== user?.email && { email: email.trim() }),
                    ...(password && { password: password.trim() }),
                }),
            });

            const data = await res.json();

            if (!res.ok) {
                return setResponseModal({ show: true, message: data.message || "Failed to update details" });
            }

            setFieldsToUpdate([])
            setPassword("")
            localStorage.setItem("user", JSON.stringify(data.user));
            setResponseModal({ show: true, message: "✅ Profile updated successfully!" });

        } catch (err) {
            setResponseModal({ show: true, message: "Something went wrong. Please try again later." });
        }
    };

    return (
        <div className="bg-gray-900 p-1 md:p-6 rounded-xl shadow-lg text-gray-100 max-w-xl mx-auto">
            <h2 className="text-2xl font-semibold mb-6 text-gray-200 border-b border-gray-700 pb-3">
                Personal Details
            </h2>

            <form onSubmit={handleSave} className="space-y-6">
                {/* Full Name */}
                <div className="space-y-1">
                    <label className="block text-sm text-gray-400">Full Name</label>
                    <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 focus:ring-2 focus:ring-gray-600 text-gray-100"
                    />
                    {errors.fullName && <p className="text-red-400 text-sm">{errors.fullName}</p>}
                </div>

                {/* Email */}
                <div className="space-y-1">
                    <label className="block text-sm text-gray-400">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 focus:ring-2 focus:ring-gray-600 text-gray-100"
                    />
                    {errors.email && <p className="text-red-400 text-sm">{errors.email}</p>}
                </div>

                {/* Password */}
                <div className="space-y-1">
                    <label className="block text-sm text-gray-400">New Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 focus:ring-2 focus:ring-gray-600 text-gray-100"
                    />
                </div>

                {/* Confirm Password */}
                {password && (
                    <div className="space-y-1">
                        <label className="block text-sm text-gray-400">Confirm Password</label>
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 focus:ring-2 focus:ring-gray-600 text-gray-100"
                        />
                        {errors.confirmPassword && (
                            <p className="text-red-400 text-sm">{errors.confirmPassword}</p>
                        )}
                    </div>
                )}

                {/* Save Button */}
                <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 transition px-4 py-2 rounded-md font-medium text-white"
                >
                    Save Changes
                </button>
            </form>

            {/* Confirmation Modal */}
            <AnimatePresence>
                {showModal && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center"
                    >
                        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setShowModal(false)} />
                        <motion.div
                            initial={{ scale: 0.85 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.85 }}
                            className="relative bg-gray-800 p-6 rounded-lg shadow-xl w-[90%] max-w-md text-gray-100 z-10"
                        >
                            <h3 className="text-lg font-semibold mb-4 text-gray-200">Confirm Changes</h3>
                            <p className="text-gray-400 mb-4">You are about to update the following fields:</p>
                            <ul className="list-disc pl-5 space-y-1 text-gray-300">
                                {fieldsToUpdate.map((field, i) => (
                                    <li key={i}>{field}</li>
                                ))}
                            </ul>
                            <div className="mt-6 flex justify-end gap-3">
                                <button onClick={() => setShowModal(false)} className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-md text-gray-200">
                                    Cancel
                                </button>
                                <button onClick={confirmUpdate} className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-white">
                                    Confirm
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Response Modal */}
            <AnimatePresence>
                {responseModal.show && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center"
                    >
                        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
                        <motion.div
                            initial={{ scale: 0.85 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.85 }}
                            className="relative bg-gray-800 p-6 rounded-lg shadow-xl w-[90%] max-w-md text-gray-100 z-10"
                        >
                            <h3 className="text-lg font-semibold mb-4 text-gray-200">Message</h3>
                            <p className="text-gray-300 mb-6">{responseModal.message}</p>
                            <div className="flex justify-end">
                                <button
                                    onClick={() => setResponseModal({ show: false, message: "" })}
                                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-white"
                                >
                                    OK
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default PersonalSettings;
