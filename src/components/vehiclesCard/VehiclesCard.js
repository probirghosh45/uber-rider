import React from 'react';
import { Link } from 'react-router-dom';
import './VehiclesCard.css';
const VehiclesCard = (props) => {
    console.log(props); 
    
    //vehiclesCard nilam ar Home.js ar modhe array map ar fakdata k pathano data akhane props ar madhome receive korlam....tarpor console log kore check korlam....

    const {id,name,icon,strId}=props.vehicle
    return (
        <div>
            <Link to={`/Destination/${strId}`} className="vehicle__card">
                <img src={icon} alt={name} className="vehicle__icon"/>
                <h2 className="vehicles__name">{name}</h2>
            </Link>
        </div>
    );
};

export default VehiclesCard;