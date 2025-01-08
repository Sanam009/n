import React, { useEffect } from 'react';
import './footer.scss';
import video2 from '../../Assets/0.mp4';
import { FiChevronRight, FiSend } from 'react-icons/fi';
import { MdOutlineTravelExplore } from 'react-icons/md';
import { AiOutlineTwitter, AiFillYoutube, AiFillInstagram } from 'react-icons/ai';
import { FaTripadvisor } from 'react-icons/fa';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className='footer'>
      <div className="videoDiv">
        <video src={video2} loop autoPlay muted type="video/mp4"></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex" data-aos="fade-left">
          <div className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>

          <div className="inputDiv flex">
            <input type="text" placeholder='Enter Email Address' />
            <button className='btn flex' type='submit'>
              SEND <FiSend className="icon" />
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex" data-aos="fade-left">
            <div className="logoDiv">
              <a href="#" className='logo flex'>
                <MdOutlineTravelExplore className="icon" />Travel.
              </a>
            </div>

            <div className="footerParagraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullam inventore eos fuga hic cum voluptatem minima, tempore non odio provident nobis ipsam at, doloremque sed cupiditate ipsum in, atque soluta?
            </div>

            <div className="footerSocials">
              <AiOutlineTwitter className="icon" />
              <AiFillYoutube className="icon" />
              <AiFillInstagram className="icon" />
              <FaTripadvisor className="icon" />
            </div>
          </div>

          <div className="footerLinks grid" data-aos="fade-left">
            <div className="linkGroup">
              <span className="groupTitle">
                OUR AGENCY
              </span>
              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Services
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Insurance
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Agency
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Tourism
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Payment
              </li>
            </div>

            <div className="linkGroup">
              <span className="groupTitle">
                PARTNERS
              </span>
              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Bookings
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Rentcars
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                HostelWorld
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Trivago
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                TripAdvisor
              </li>
            </div>

            <div className="linkGroup">
              <span className="groupTitle">
                LAST MINUTE
              </span>
              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                London
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                California
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Indonesia
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Europe
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Oceania
              </li>
            </div>
          </div>

          <div className="footerDiv flex" data-aos="fade-left">
            <small>BEST TRAVEL WEBSITE THEME</small>
            <small>COPYRIGHTS RESERVED - ISRATECH 2022</small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
