import React from 'react'
import SocialMedia from '../social/SocialMedia'
import Heading from "../../../common/Heading/Heading"
import Tpost from "../tpost/Tpost";
import Slider from "react-slick"
import {gallery} from "../../../../dummyData"
import "./side.css"
const side = () => {

  const settings={
    dots:false,
    inifinite:false,
    speed:500,
    slidesToshow:1,
    slidesToScroll:1,
  }







  const catgeory = ["world", "travel", "sport", "fun", "health", "fashion", "business", "technology"]
  return (
    <div>
      <Heading title ='Stay Connected'/>
        
      <SocialMedia/>
      <Heading title='Subscribe'/>
      <section className='subscribe'>
        <h1 className='title'>Subscribe to our New Stories</h1>
      <form action=''>
        <input type='text' placeholder='Email Address..'/>
        <button>
            <i className='fa fa-paper-plane'></i>SUBMIT
        </button>
      </form>
     
      
      
      
      </section>
      <section className='banner'>
        <img src='./images/sidebar-banner-new.jpg' alt=''/>
      </section>

      <Tpost/>


      <section className='catgorys'>
        <Heading title='Catgeorys' />
        {/*<div className='items'>{allCat}</div>*/}
        {catgeory.map((val) => {
          return (
            <div className='category category1'>
              <span>{val}</span>
            </div>
          )
        })}
      </section>

      <section className='gallery'>
        <Heading title='Gallery'/>
          <Slider {...settings}>
            {gallery.map((val)=>{
              return(
                <div className='img'>
                  <img src={val.cover} alt=''/>
                </div>
              )
            })}
          </Slider>
      </section>



    </div>
  )
}

export default side
