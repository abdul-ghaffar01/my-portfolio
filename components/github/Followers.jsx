import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Slider from 'react-infinite-logo-slider';

const Followers = () => {
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const profileData = await fetch("/api/github/followers");
        const data = await profileData.json();
        setFollowers(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Error fetching followers:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="relative w-full overflow-hidden py-8 bg-transparent">
      {/* Title */}
      <h2 className="text-center text-2xl font-semibold text-blue-400 mb-6">
        Followers
      </h2>

      {/* Slider */}
      <Slider
        duration={followers.length * 2} // Smooth and slow animation
        pauseOnHover={true}
        blurBorders={false}
        className="flex items-center gap-4"
      >
        {followers.map((item, index) => (
          <Slider.Slide key={index} className="w-fit">
            <Link
              href={item.html_url || ""}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-2 bg-gray-800/30 backdrop-blur-md border border-gray-700/50 rounded-xl shadow-md hover:border-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300"
            >
              <Image
                className="rounded-full border border-gray-700"
                src={item.avatar_url || ""}
                width={45}
                height={45}
                alt="Follower profile"
              />
              <p className="text-gray-300 font-medium text-sm">{item.login}</p>
            </Link>
          </Slider.Slide>
        ))}
      </Slider>
    </div>
  );
};

export default Followers;
