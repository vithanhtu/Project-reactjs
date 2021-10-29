import React, { useState } from 'react';
import data from '../data/tours' 
import TourItem from './TourItem';

const AboutTour = () => {
    const [tours, setTours] = useState(data)

    return (
        <>
        {tours.map((tour, index) => {
            return (
                <div key={index}>
                    <TourItem tour={tour}></TourItem>
                </div>)
        })}
        </>       
    );
};

export default AboutTour;