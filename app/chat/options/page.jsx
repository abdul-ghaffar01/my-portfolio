"use client"
import React, { useState } from 'react'
import DownloadIcon from '@mui/icons-material/Download';
import DeleteIcon from '@mui/icons-material/Delete';
import PersonalSettings from '@/components/chatbot/options/PersonalSettings';
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
import DownloadChat from '@/components/chatbot/options/DownloadChat';
import DeleteChat from '@/components/chatbot/options/DeleteChat';

const page = () => {
    const [selectedSection, setSelectedSection] = useState("personal");

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
            case "personal":
                return <PersonalSettings />
            case "download":
                return <DownloadChat />
            case "delete":
                return <DeleteChat setSelectedSection={setSelectedSection} />
            case "account":
                return <p>⚙️ Coming soon</p>;
            case "security":
                return <p>🔒 Coming soon</p>;
            case "notifications":
                return <p>🔔 Coming soon</p>;
            case "billing":
                return <p>💳 Coming soon</p>;
            case "language":
                return <p>🌐 Coming soon</p>;
            case "appearance":
                return <p>🎨 Coming soon</p>;
            case "help":
                return <p>❓ Coming soon</p>;
            default:
                return <p>Select a section from the menu.</p>;
        }
    };

    return (
        <div className="md:flex h-screen">
            {/* Sidebar */}
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

            {/* Mobile Dropdown */}
            <div className="md:hidden w-full p-4 border-b">
                <select
                    value={selectedSection}
                    onChange={(e) => setSelectedSection(e.target.value)}
                    className="w-full border rounded-md px-3 py-2 outline-none"
                >
                    {menuItems.map((item) => (
                        <option key={item.key} value={item.key}>
                            {item.label}
                        </option>
                    ))}
                </select>
            </div>

            {/* Content Area */}
            <main className="flex-1 p-6 overflow-y-auto">{renderContent()}</main>
        </div>
    );
}

export default page