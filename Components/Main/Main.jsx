import React from 'react';
import './main.scss';
import go from'../../Assets/img/to.jpg'
import go2 from'../../Assets/img/pa.jpg'
import go3 from'../../Assets/img/cap.jpg'
import go4 from'../../Assets/img/new.jpg'
import go5 from'../../Assets/img/7.jpg'
import go6 from'../../Assets/img/sy.jpg'
import go7 from'../../Assets/img/ban.jpg'
import go8 from'../../Assets/img/bra.jpg'
import go9 from'../../Assets/img/p.jpg'



import { HiOutlineClipboard } from 'react-icons/hi';

const Data = [
  {
    id: 1,
    imgSrc: go2, // Placeholder image
    destTitle: 'Paris',
    location: 'France',
    grade: 'Cultural Relax',
    fees: '$1500',
    description: 'The city of lights and love.'
  },
  {
    id: 2,
    imgSrc: go,
    destTitle: 'Tokyo',
    location: 'Japan',
    grade: 'Modern Cultural',
    fees: '$2000',
    description: 'A city that blends tradition with modernity.'
  },
  {
    id: 3,
    imgSrc: go4,
    destTitle: 'New York',
    location: 'USA',
    grade: 'Urban Adventure',
    fees: '$1800',
    description: 'The city that never sleeps.'
  },
  {
    id: 4,
    imgSrc: go5,
    destTitle: 'Rome',
    location: 'Italy',
    grade: 'Historical Exploration',
    fees: '$1300',
    description: 'A city rich in history and culture.'
  },
  {
    id: 5,
    imgSrc:go9,
    destTitle: 'Guanajuato',
    location: 'Mexico',
    grade: 'Cultural Relax',
    fees: '$1100',
    description: 'A city in central Mexico.'
  },
  {
    id: 6,
    imgSrc: go6,
    destTitle: 'Sydney',
    location: 'Australia',
    grade: 'Beach & Sun',
    fees: '$1700',
    description: 'A city known for its beautiful harbour and beaches.'
  },
  {
    id: 7,
    imgSrc: go3,
    destTitle: 'Cape Town',
    location: 'South Africa',
    grade: 'Nature Adventure',
    fees: '$1400',
    description: 'A city with stunning landscapes and rich culture.'
  },
  {
    id: 8,
    imgSrc:go7,
    destTitle: 'Bangkok',
    location: 'Thailand',
    grade: 'Exotic Exploration',
    fees: '$1200',
    description: 'A vibrant city known for its street life and temples.'
  },
 
];



const Main = () => {
  return (
    <section className='main container section'>
      <div className="secTitle">
        <h3 className="title">
          Most Visited Destinations
        </h3>
      </div>

      <div className="secContent grid">
        {Data.map(({ id, imgSrc, destTitle, location, grade, fees, description }) => {
          return (

            <div key={id} className="singleDestination">

              <div className="imageDiv">
                <img src={imgSrc} alt={destTitle} />
              </div>

              <div className="cardInfo">
                <h4 className="destTitle">{destTitle}</h4>

                <span className="continent flex">
                    <HiOutlineClipboard className="icon" />
                    <span className="name">{location}</span>
                </span>
               <div className="fees flex">
                <div className="grade">
                    <span >{grade}<small>+1</small></span>

                </div>
                <div className="price">
                    <h5>{fees}</h5>
                </div>
                </div>

                <div className="desc">
                    <p>{description}</p>
                    </div>

                    <button className='btn-flex'>
                    DETAILS<HiOutlineClipboard className="icon" />
                  </button>



                </div>
                </div>
          )
        })
    }
    </div>
    </section>
  )}

             

export default Main;


 