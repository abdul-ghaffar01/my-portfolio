import React from 'react';
import Slider from 'react-infinite-logo-slider';

const Followers = (followers) => {
  return (
    <Slider
      width="100vw"
      duration={60}
      pauseOnHover={true}
      blurBorders={false}
      className="bg-purple-50"
    >
      <Slider.Slide>
        {/* <img src="/path-to-logo1.png" alt="Company 1" /> */}
        first
      </Slider.Slide>
      <Slider.Slide>
        second
        {/* <img src="/path-to-logo2.png" alt="Company 2" /> */}
      </Slider.Slide><Slider.Slide>
        second
        {/* <img src="/path-to-logo2.png" alt="Company 2" /> */}
      </Slider.Slide><Slider.Slide>
        second
        {/* <img src="/path-to-logo2.png" alt="Company 2" /> */}
      </Slider.Slide><Slider.Slide>
        second
        {/* <img src="/path-to-logo2.png" alt="Company 2" /> */}
      </Slider.Slide><Slider.Slide>
        second
        {/* <img src="/path-to-logo2.png" alt="Company 2" /> */}
      </Slider.Slide><Slider.Slide>
        second
        {/* <img src="/path-to-logo2.png" alt="Company 2" /> */}
      </Slider.Slide>
      {/* Add more slides as needed */}
    </Slider>
  );
};

export default Followers;
