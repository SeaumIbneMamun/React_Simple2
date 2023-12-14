import React from 'react';
import './Services.css'
import Service from './Service';
const Services = () => {
   const servicesData = [
    {
        id: 1,
        name: "Web Development." ,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing."
    },
    {
        id: 2,
        name: "Digital marketing." ,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing."
    },
    {
        id: 3,
        name: "Web Design." ,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing."
    },
    {
        id: 4,
        name: "UX Design." ,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing."
    }
   ]

   return (
    <div>
        <div className="service-section">
            <h1>We are always ready for challanges.</h1>
            <div className="service">
                

{
    servicesData.map(service => <Service></Service>)
}

            </div>
        </div>
    </div>
   );
};

export default Services;