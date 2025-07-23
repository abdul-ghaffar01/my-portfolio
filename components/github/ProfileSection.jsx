"use client"
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import Loader from '../Loader'
const ProfileSection = () => {
    const [profileData, setProfileData] = useState({
        avatar_url: "",
    })
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const profileData = await fetch("/api/github/profile");
                const data = await profileData.json()
                setProfileData(data)
                setLoading(false)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData();
    }, [])
    // url https://api.github.com/users/abdul-ghaffar01
    return (<>
        <motion.div className='max-w-[600px] w-fit h-fit flex flex-col justify-between mt-5 px-3 bg-slate-900 border border-slate-700 p-2 mx-1'>
            {/* Top section */}
            <div div className='flex h-fit gap-[10px]'>
                {/* Image of github profile */}
                <div className='h-full shadow-md shadow-slate-700 rounded-md overflow-hidden bg-slate-900 w-[130px] h-[130px]'>
                    <Image
                        src={profileData.avatar_url || ""}
                        width={130}
                        height={130}
                        alt='Github Profile'
                        className=''
                    />
                </div>

                {/* Github information */}
                <div className='flex flex-col justify-between'>
                    <h1 className='font-bold text-color-gray-500'>{profileData.name}</h1>
                    <p className='text-color-gray-500 text-sm'>Username: {profileData.login} </p>
                    <p className='text-color-gray-500 text-sm'>Followers: {profileData.followers} </p>
                    <p className='text-color-gray-500 text-sm'>Following: {profileData.following} </p>
                    <p className='text-color-gray-500 text-sm'>Repos count: {profileData.public_repos} </p>
                    <p className='text-color-gray-500 text-sm'>Joined on: {profileData.created_at && profileData.created_at.split("T")[0]} </p>
                </div>
            </div>

            {/* middle section / bio section  */}
            <div className='mt-2 text-color-gray-500'>
                {profileData.bio}
            </div>

            <Link href={profileData.html_url ? profileData.html_url : ""} target='_blank' className='bg-slate-700 p-2 mt-2 text-center md:w-fit text-slate-400 px-6'>
                Visit profile
            </Link>

        </motion.div >
    </>
    )
}

export default ProfileSection