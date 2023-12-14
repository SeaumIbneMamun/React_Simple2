import React from 'react';
import './blog.css';
import BannerImage from '../../assets/images/Primary.png'
const Blog = () => {
    return (
        <div className='banner-main'>
             <div className="banner-items left-side">
                <div className='text-box'>
                <h1>Grow your brand through digital</h1>
                <p>If the path is beautiful, let us not ask where it leads. my religion is very simple. my religion is kindness. each of us has within our power the ability to disrupt</p>
                <button>learn more</button>
                </div>
             </div>
             <div className="banner-items">
                <img src={BannerImage} alt="" />
             </div>
        </div>
    );
};

export default Blog;