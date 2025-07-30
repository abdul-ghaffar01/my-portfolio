"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import DownloadIcon from "@mui/icons-material/Download";
import DeleteIcon from "@mui/icons-material/Delete";
import PersonalSettings from "@/components/chatbot/options/PersonalSettings";
import {
    Person as PersonIcon,
    Settings as SettingsIcon,
    Lock as LockIcon,
    Notifications as NotificationsIcon,
    Payment as PaymentIcon,
    Language as LanguageIcon,
    HelpOutline as HelpOutlineIcon,
    Palette as PaletteIcon,
} from "@mui/icons-material";
import DownloadChat from "@/components/chatbot/options/DownloadChat";
import DeleteChat from "@/components/chatbot/options/DeleteChat";

const Page = () => {
    const [selectedSection, setSelectedSection] = useState("personal");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const menuItems = [
        { key: "personal", label: "Personal Details", icon: <PersonIcon /> },
        { key: "download", label: "Download Chat", icon: <DownloadIcon /> },
        { key: "delete", label: "Delete Chat", icon: <DeleteIcon /> },
        { key: "account", label: "Account Settings", icon: <SettingsIcon /> },
        { key: "security", label: "Security", icon: <LockIcon /> },
        { key: "notifications", label: "Notifications", icon: <NotificationsIcon /> },
        { key: "billing", label: "Billing & Payments", icon: <PaymentIcon /> },
        { key: "language", label: "Language & Region", icon: <LanguageIcon /> },
        { key: "appearance", label: "Appearance", icon: <PaletteIcon /> },
        { key: "help", label: "Help & Support", icon: <HelpOutlineIcon /> },
    ];

    const renderContent = () => {
        switch (selectedSection) {
            case "personal": return <PersonalSettings />;
            case "download": return <DownloadChat />;
            case "delete": return <DeleteChat setSelectedSection={setSelectedSection} />;
            default: return <p>🚧 Coming soon...</p>;
        }
    };

    return (
        <div className="md:flex h-screen">
            {/* Sidebar for md+ */}
            <aside className="w-1/4 bg-gray-100 border-r p-4 hidden md:block">
                <h2 className="text-lg font-semibold mb-4">Settings</h2>
                <nav className="space-y-2">
                    {menuItems.map((item) => (
                        <button
                            key={item.key}
                            onClick={() => setSelectedSection(item.key)}
                            className={`flex items-center gap-3 w-full text-left px-3 py-2 rounded-md transition ${selectedSection === item.key
                                ? "bg-blue-600 text-white"
                                : "hover:bg-gray-200"
                                }`}
                        >
                            {item.icon}
                            <span>{item.label}</span>
                        </button>
                    ))}
                </nav>
            </aside>

            {/* Mobile Header */}
            <div className="md:hidden w-full border-b p-4 flex justify-between items-center bg-white">
                <h2 className="text-lg font-semibold">Settings</h2>
                <button onClick={() => setMobileMenuOpen(true)} className="p-2">
                    <MenuIcon fontSize="large" />
                </button>
            </div>

            {/* Mobile Sidebar with Animation */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <>
                        {/* Dark Overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.5 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 bg-black z-40"
                            onClick={() => setMobileMenuOpen(false)}
                        />

                        {/* Sidebar */}
                        <motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ type: "tween", duration: 0.3 }}
                            className="fixed top-0 left-0 w-3/4 h-full bg-white z-50 p-4 shadow-lg"
                        >
                            <button
                                onClick={() => setMobileMenuOpen(false)}
                                className="absolute top-4 right-4"
                            >
                                <CloseIcon fontSize="large" />
                            </button>
                            <h2 className="text-lg font-semibold mb-4">Settings</h2>
                            <nav className="space-y-2">
                                {menuItems.map((item) => (
                                    <button
                                        key={item.key}
                                        onClick={() => {
                                            setSelectedSection(item.key);
                                            setMobileMenuOpen(false);
                                        }}
                                        className={`flex items-center gap-3 w-full text-left px-3 py-2 rounded-md transition ${selectedSection === item.key
                                            ? "bg-blue-600 text-white"
                                            : "hover:bg-gray-200"
                                            }`}
                                    >
                                        {item.icon}
                                        <span>{item.label}</span>
                                    </button>
                                ))}
                            </nav>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* Content */}
            <main className="flex-1 p-6 overflow-y-auto">{renderContent()}</main>
        </div>
    );
};

export default Page;
