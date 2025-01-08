import React from 'react';
import "./so.css";

const SocialMedia = () => {
  return (
    <section className='socal'>
      <div className='socBox'>
        <i className='fab fa-facebook-f'></i>
        <span>12,740 Likes</span>
      </div>

      <div className='socBox'>
        <i className='fab fa-pinterest'></i>
        <span>44,890 Fans</span>
      </div>

      <div className='socBox'>
        <i className='fab fa-twitter'></i>
        <span>12,777 Followers</span>
      </div>

      <div className='socBox'>
        <i className='fab fa-instagram'></i>
        <span>12,740 Followers</span>
      </div>

      <div className='socBox'>
        <i className='fab fa-youtube'></i>
        <span>12,740 Subscribers</span>
      </div>
    </section>
  );
};

export default SocialMedia;
