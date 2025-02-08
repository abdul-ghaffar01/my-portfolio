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
    <div className="w-full overflow-hidden bg-black text-white py-4">
      <h1 className='text-center text-lg'>Followers</h1>
      <Slider
        duration={followers.length}  // Smooth animation speed
        pauseOnHover={true}
        blurBorders={false}
        className="flex items-center gap-4 "
      >
        {followers.map((item, index) => (
          <Slider.Slide key={index} className="w-fit">
            <Link
              href={item.html_url || ""}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 min-w-[200px] items-center gap-3 p-2 shadow-md rounded-lg"
            >
              <Image
                className="rounded-full"
                src={item.avatar_url || ""}
                width={40}
                height={40}
                alt="Follower profile"
              />
              <p className="text-white font-medium break-keep">{item.login}</p>
            </Link>
          </Slider.Slide>
        ))}
      </Slider>
    </div>
  );
};

export default Followers;
