import React from 'react'
import HeroImage from '../assets/HeroImage1.png'
import { TfiArrowCircleRight } from 'react-icons/tfi'

const ConnectCard = () => {
  return (
    <div className='m-5'>
        <div className='connectcard-image-container'>
        <img src={HeroImage} alt='hero image' className='connectcard-image' width="100%" height="100%" />
        <div className='connectcard-content'>
            <div className='connectcard-title'>Start Your Yoga Journey Today</div>
            <div className='connectcard-description'>The Yogi Youssef brand has created a supportive community of practitioners, focused on growth, mindfulness, and well-being.</div>
            <div className='d-flex align-items-center justify-content-center'>
                <button className='secondary-button'>Connect with Yogi Youssef <TfiArrowCircleRight size="15" /></button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default ConnectCard