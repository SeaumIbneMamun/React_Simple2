import React from 'react';
function About() {
    return(
<div id='about'>
    <div className='block lg:flex p-14'>
        <img  className='h-[545px]' src="../../../public/images/About.jpg" alt="" />
        <div className='p-6'>
        <h1 className='text-4xl font-bold'>About us</h1>
        <p className='text-2xl font-normal'>We believe in work. Customer satisfaction is our first priority.</p>
        </div>
    </div>
</div>
    )
}
export default About