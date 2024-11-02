import React, { useState, useEffect } from 'react';
import HeroImage from '../assets/HeroImage1.png';

const Testimonial = () => {
    const [activeIndex, setActiveIndex] = useState(0); // State to track active testimonial

    const testimonials = [
        {
            username: 'Emily R.',
            review: "Youssef’s yoga sessions have been life-changing for me. His personalized approach and deep understanding of yoga have helped me find a new level of peace and strength. I look forward to each class with excitement and gratitude.",
            image: HeroImage,
        },
        {
            username: 'John D.',
            review: "I've been practicing yoga for years, but Youssef's guidance has opened my eyes to new techniques. His classes are both challenging and relaxing, and I've seen significant improvements in my flexibility.",
            image: HeroImage,
        },
        {
            username: 'Sarah L.',
            review: "Youssef is an amazing instructor. His ability to connect with each student and provide personalized feedback has helped me grow in my practice. I can't recommend him enough!",
            image: HeroImage,
        },
        {
            username: 'Michael T.',
            review: "The atmosphere in Youssef's classes is so welcoming. I've not only improved my yoga skills but also made great friends along the way. Each session feels like a retreat.",
            image: HeroImage,
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 5000); // Change testimonial every 5 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, [testimonials.length]);

    return (
        <div className='testimonial-section'>
            <div className='testimonial-title'>Voice of Experience</div>
            <div className='testimonial-description'>Hear from those who have transformed their lives with Yogi Youssef.</div>

            <div className='testimonial-card'>
                <div className='row'>
                    <div className='col-md-4'>
                        <div className='testimonial-image-container'>
                            <img src={testimonials[activeIndex].image} className='image' alt='hero image' width="100%" height="100%" />
                        </div>
                    </div>
                    <div className='col-md-8'>
                        <div className='testimonial-content'>
                            <div className='testimonial-username'>{testimonials[activeIndex].username}</div>
                            <div className='testimonial-review'>{testimonials[activeIndex].review}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='testimonial-indicator'>
                {testimonials.map((_, index) => (
                    <div 
                        key={index} 
                        className={`indicator-dot ${activeIndex === index ? 'active' : ''}`} 
                        onClick={() => setActiveIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
}

export default Testimonial;
