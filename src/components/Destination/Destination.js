import React, { useState } from "react";
import { useParams } from "react-router";
import "./Destination.css"; 
import VehiclesData from "../../fakeData/vehiclesData.json"


const Destination = () => {
  const [searchVisible,setSearchVisible]=useState(true);
  const [pickFrom,setPickFrom]=useState('TSC');
  const [pickTo,setPickTo]=useState('Hatir Jheel');


  const {rideKey}=useParams();
  const ride = VehiclesData.find(item=> rideKey===item.strId);
  const {name,icon,seat,seatRate}=ride;






  const handleSearch=() => {
    setSearchVisible(false);
  }
  return (
    <section className="destination">
      <div className="container">
        <div className="destination__content">
          <div className="destination__search">
            {
              searchVisible && <form onSubmit={handleSearch} action="" className="destination__form"> 
              <div className="input__group">
                <label htmlFor="pickFrom">Pick Form</label>
                <input onChange={(e)=>setPickFrom(e.target.value)} type="text" placeholder="TSC" id="pickFrom" />
              </div>
              <div className="input__group">
                <label htmlFor="pickTo">Pick Form</label>
                <input onChange={(e)=>setPickTo(e.target.value)} type="text" placeholder="Hatir Jheel" id="pickTo" />
              </div>
              <input className="btn__primary" type="submit" value="Search" />
            </form>
          } 
          {
            !searchVisible &&  <div className="location">
              <div className="location__wrapper">
                <h1 className="location__form">{pickFrom}</h1>
                <h1 className="location__to">{pickTo}</h1>
                  <h1>This is {name}</h1>       
              </div>

            </div>
          }
          </div>
          <div className="destination__map--box">
            <iframe
              className="destination__map"
              title="TSC"
              src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d29215.652590629812!2d90.38589134131558!3d23.748927945422338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x3755b934fecec641%3A0xb98c1080b250d866!2sTSC%2C%20University%20of%20Dhaka%2C%20Dhaka!3m2!1d23.731775199999998!2d90.3956204!4m5!1s0x3755c783c3404f0d%3A0x76ae0d2edabc81df!2sHatir%20Jheel%2C%20Dhaka!3m2!1d23.769423999999997!2d90.41428529999999!5e0!3m2!1sen!2sbd!4v1617618149213!5m2!1sen!2sbd"
              width="600"
              height="450"
              allowFullScreen=""
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destination;
