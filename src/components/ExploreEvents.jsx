import React, { useState } from 'react';
import HeroImage from '../assets/HeroImage1.png';
import { TfiArrowCircleRight } from 'react-icons/tfi';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

const ExploreEvents = () => {
    // State for the selected category
    const [selectedCategory, setSelectedCategory] = useState('All');

    // Sample events data
    const events = [
        { id: 1, title: 'Full Moon Yoga', category: 'Workshops', image: HeroImage },
        { id: 2, title: 'Meditation Retreat', category: 'Retreats', image: HeroImage },
        { id: 3, title: 'Mindfulness Workshop', category: 'Workshops', image: HeroImage },
        { id: 4, title: 'Yoga for Beginners', category: 'Special Events', image: HeroImage },
        { id: 5, title: 'Weekend Yoga Retreat', category: 'Retreats', image: HeroImage },
        { id: 6, title: 'Outdoor Yoga', category: 'Special Events', image: HeroImage },
    ];

    // Filter events based on the selected category
    const filteredEvents = selectedCategory === 'All'
        ? events
        : events.filter(event => event.category === selectedCategory);

    return (
        <div className='exploreevents-section'>
            <div className='d-sm-flex justify-content-between align-items-center'>
                <div className='title'>Explore Our Upcoming Events</div>
                <div className='d-am-flex gap-2 my-2'>
                    {['All', 'Workshops', 'Retreats', 'Special Events'].map(category => (
                        <button
                            key={category}
                            className={`exploreevents-button ${selectedCategory === category ? 'active' : ''}`}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>
            <div className='row'>
                {filteredEvents.map(event => (
                    <div className='col-md-6' key={event.id}>
                        <div className='exploreevents-image-container'>
                            <img src={event.image} alt='hero image' className='image' width="100%" height="100%" />
                            <div className='exploreevents-image-content'>
                                <div className='d-flex justify-content-end exploreevents-image-title'>
                                    <TfiArrowCircleRight size="15" />
                                </div>
                                <div className='exploreevents-image-title'>{event.title}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className='d-sm-flex justify-content-between my-4 '>
                <b className=''>Don’t Miss out on our updates</b>
                <div className='d-flex gap-5'><FaInstagram size={20} />   <FaWhatsapp size={20} />
                 </div>
            </div>
        </div>
    );
};

export default ExploreEvents;
