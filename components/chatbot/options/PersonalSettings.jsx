import React from 'react'

const PersonalSettings = () => {
    return (
        <div>
            <h2 className="text-xl font-semibold mb-4">Personal Details</h2>
            <form className="space-y-4">
                <div>
                    <label className="block text-sm font-medium">Full Name</label>
                    <input
                        type="text"
                        placeholder="Enter your name"
                        className="mt-1 w-full border rounded-md px-3 py-2 focus:ring focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium">Email</label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="mt-1 w-full border rounded-md px-3 py-2 focus:ring focus:ring-blue-500"
                    />
                </div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                    Save Changes
                </button>
            </form>
        </div>
    );
}

export default PersonalSettings