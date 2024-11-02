import React from 'react';
import { TfiArrowCircleRight } from 'react-icons/tfi';
import HeroImage from '../assets/HeroImage1.png';

const classData = [
    {
        title: 'Weekend Yoga Retreat',
        description: 'Build strength and endurance with a dynamic flow.',
    },
    {
        title: 'Mindful Workshop',
        description: 'Target core muscles while working on balancing postures.',
    },
    {
        title: 'Movement Mastery',
        description: 'A challenging, fast-paced flow that tests strength and stamina.',
    },
    {
        title: 'Breath & Balance',
        description: 'Enhance your practice with focused breath work and balance exercises.',
    },
    {
        title: 'Core Strength Bootcamp',
        description: 'Intensive core training to improve your stability and power.',
    },
    {
        title: 'Yoga for All Levels',
        description: 'A welcoming class for beginners and experienced yogis alike.',
    },
];


const ExploreClasses = () => {
    return (
        <div className='m-5'>
            <div className='d-flex justify-content-between'>
                <div className='title'>Explore Our Other Classes</div>
                <button className='primary-button'>
                    Explore <TfiArrowCircleRight size="18" />
                </button>
            </div>
            <div className='description'>Lot more to learn and explore</div>

            <div className='my-5'>
                <div className='row'>
                    {classData.map((classItem, index) => (
                        <div className='col-md-4 my-3' key={index}>
                            <div className='exploreclasses-card'>
                                <div className='discover-image-container'>
                                    <img src={HeroImage} alt='hero image' className='discover-image' width="100%" height="100%" />
                                    <div className='discover-content'>
                                        <div className='discover-title'>{classItem.title}</div>
                                        <TfiArrowCircleRight size="15" />
                                    </div>
                                </div>
                                <div className='exploreclasses-description'>
                                    {classItem.description}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ExploreClasses;
