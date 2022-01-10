import React from 'react'
import "./About.css"
function About() {
    return (
        <div className='about'>
            <div className='left'>
            <div className='about-card bg'></div>
            <div className='about-card'>
             <img className='about-image' src="https://images.pexels.com/photos/4709288/pexels-photo-4709288.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
            </div>

            </div>
            <div className='right'>
                <h1 className='right-title'>About Me</h1>
                <p className='right-para'>
                Hey, this is Noman. I’m a Computer Engineer having knowledge of most programming languages like JavaScript, C++, C, etc. 
                </p>
                <p className='right-description'>
                I'm an App Developer and Web Developer. I will provide you with the latest and beautiful apps for your business. I will turn your imagination into working prototypes build with quality and hard work. Feel free to reach out to me to discuss your projects.
                </p>
            </div>
        </div>
    )
}

export default About;
