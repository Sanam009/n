import React, { useEffect } from 'react';
import './home.scss';
import video from '../../Assets/0.mp4';
import { GrLocation } from 'react-icons/gr';
import { HiFilter } from 'react-icons/hi';
import { FiFacebook } from 'react-icons/fi';
import { AiOutlineInstagram } from 'react-icons/ai';
import { BsListTask } from 'react-icons/bs';
import { TbApps } from 'react-icons/tb';
import { SiTripadvisor } from 'react-icons/si';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className='home'>
      <div className="overlay"></div>
      <video src={video} muted autoPlay loop type="video/mp4"></video>

      <div className="homeContent container">
        <div className="textDiv" data-aos="fade-up">
          <span className="smallText">Our Packages</span>
          <h1 className="homeTitle">Search your Holiday</h1>
        </div>

        <div className="cardDiv grid" data-aos="fade-up">
          <div className="destinationInput">
            <label htmlFor="city">Search your destination:</label>
            <div className="input flex">
              <input type="text" placeholder='Enter name here....' id="city"/>
              <GrLocation className="icon"/>
            </div>
          </div>

          <div className="dateInput">
            <label htmlFor="date">Select your date:</label>
            <div className="input flex">
              <input type="date" id="date"/>
            </div>
          </div>

          <div className="priceInput">
            <div className="label_total flex">
              <label htmlFor="price">Max price:</label>
              <h3 className="total">$5000</h3>
            </div>
            <div className="input flex">
              <input type="range" max="5000" min="1000" id="price"/>
            </div>
          </div>
          
          <div className="searchOptions flex">
            <HiFilter className="icon"/>
            <span>More filters</span>
          </div>
        </div>

        <div className="homeFooterIcons flex" data-aos="fade-up">
          <div className="rightIcons">
            <FiFacebook className="icon"/>
            <AiOutlineInstagram className="icon"/>
            <SiTripadvisor className="icon"/>
          </div>
          <div className="leftIcons">
            <BsListTask className="icon"/>
            <TbApps className="icon"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
