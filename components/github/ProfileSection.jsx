"use client"
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const ProfileSection = () => {
  const [profileData, setProfileData] = useState({
    avatar_url: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const profileData = await fetch("/api/github/profile");
        const data = await profileData.json();
        setProfileData(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }}
      viewport={{ once: true }}
      className="relative max-w-[650px] w-full mx-auto bg-gray-900/50 backdrop-blur-lg border border-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-[0_0_25px_rgba(59,130,246,0.2)] transition-all"
    >
      {/* Top Section */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
        {/* Profile Image */}
        <div className="flex-shrink-0 rounded-full overflow-hidden border-4 border-blue-500/30 shadow-lg">
          <Image
            src={profileData.avatar_url || "/profile.png"}
            width={130}
            height={130}
            alt="Github Profile"
            className="rounded-full"
          />
        </div>

        {/* Info Section */}
        <div className="flex flex-col text-center sm:text-left">
          <h1 className="text-2xl font-bold text-white">{profileData.name}</h1>
          <p className="text-gray-400 text-sm">@{profileData.login}</p>
          <div className="flex flex-wrap justify-center sm:justify-start gap-3 mt-3 text-sm text-gray-400">
            <span className="bg-gray-800/50 px-3 py-1 rounded-full">Followers: {profileData.followers}</span>
            <span className="bg-gray-800/50 px-3 py-1 rounded-full">Following: {profileData.following}</span>
            <span className="bg-gray-800/50 px-3 py-1 rounded-full">Repos: {profileData.public_repos}</span>
          </div>
          <p className="mt-2 text-xs text-gray-500">
            Joined on: {profileData.created_at && profileData.created_at.split("T")[0]}
          </p>
        </div>
      </div>

      {/* Bio Section */}
      {profileData.bio && (
        <p className="mt-5 text-gray-300 text-center sm:text-left leading-relaxed">
          {profileData.bio}
        </p>
      )}

      {/* Visit Profile Button */}
      <div className="mt-6 flex justify-center sm:justify-start">
        <Link
          href={profileData.html_url || ""}
          target="_blank"
          className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition"
        >
          Visit Profile →
        </Link>
      </div>
    </motion.div>
  );
};

export default ProfileSection;
