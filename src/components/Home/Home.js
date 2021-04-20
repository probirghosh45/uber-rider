import React from 'react';
import vehiclesData from '../../fakeData/vehiclesData.json'
import VehiclesCard from '../vehiclesCard/VehiclesCard';
import './Home.css';

const Home = () => {
    const vehicles=vehiclesData; 
    console.log(vehicles)
    return (
        <div>
            {/* This is Home */}
             <section className="home">
                 <div className="container">
                     <div className="vehicles">
                                {
                                  vehicles.map(vcl => <VehiclesCard vehicle={vcl} key={vcl.id}></VehiclesCard>)
                                }               
                     </div>
                 </div>
             </section>
        </div>
    );
};

export default Home;