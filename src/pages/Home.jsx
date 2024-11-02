import React from 'react'
import HeroImage from '../assets/HeroImage1.png'
import YousifYoga from '../assets/YousifYoga.png'
import YousifYoga2 from '../assets/YousifYoga2.png'
import { TfiArrowCircleRight } from 'react-icons/tfi'
import Testimonial from '../components/Testimonial'
import ExploreEvents from '../components/ExploreEvents'
import ExploreClasses from '../components/ExploreClasses'
import ConnectCard from '../components/ConnectCard'



const Home = () => {
  return (
    <div>
      <div className='heroImage-container'>
        <img src={HeroImage} alt='hero image' className='image' width="100%" height="100%" /> 
        <div className='heroImage-content'>
          <div className='heroImage-title'>Discover the Harmony of Body,<br /> Mind & Soul</div>
          <div className='heroImage-description'>Personalized yoga sessions crafted to elevate your mind, body, and spirit</div>
        </div>
      </div>

      <div className='m-5'>
        <div className='title'>Meet Youssef</div>
        <div className='row'>
          <div className='col-md-6'>
            <img src={YousifYoga} alt='hero image' width="100%" height="100%" />

          </div>
          <div className='col-md-6 d-flex flex-column justify-content-between'>
            <img src={YousifYoga2} alt='hero image' width="100%" height="70%" />
            <div className='description'>
              Yoga didn’t just transform my body; it awakened my soul. Through every pose and breath, I found the peace within that I had been seeking all along.
            </div>
          </div>
        </div>
      </div>

      <div className='m-5 '>
        <div className='title'>Discover the Transformative Benefits of Yoga</div>
        <div className='description'>Experience how yoga can enhance your life both physically and mentally.</div>

        <div className='image-container my-4'>
          <img src={HeroImage} alt='hero image' className='image' width="100%" height="100%" />
          <div className='carosel-title'>Restorative Yoga</div>
          <div className='carosel-content'>
            <div className='row'>
              <div className='col-md-4'>
                <div className='carosel-item'>
                  <div className='carosel-card-title'>Stress Relief</div>
                  <div className='carosel-card-description'> Achieve deep relaxation and stress reduction with mindfulness techniques.</div>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='carosel-item'>
                  <div className='carosel-card-title'>Better Sleep Quality</div>
                  <div className='carosel-card-description'>Support improved sleep with gentle, restorative practices.</div>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='carosel-item'>
                  <div className='carosel-card-title'>Emotional Balance</div>
                  <div className='carosel-card-description'>Find emotional calm and resilience through prolonged, supported poses.</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col-md-4'>
            <div className='discover-image-container'>
              <img src={HeroImage} alt='hero image'className='discover-image' width="100%" height="100%" />
              <div className='discover-content'>
                <div className='discover-title'>Mindfulness Yoga</div>
                <TfiArrowCircleRight size="15" />
              </div>
            </div>
          </div>

          <div className='col-md-4'>
            <div className='discover-image-container'>
              <img src={HeroImage} alt='hero image' className='discover-image' width="100%" height="100%" />
              <div className='discover-content'>
                <div className='discover-title'>Vinyasa Flow</div>
                <TfiArrowCircleRight size="15" />
              </div>
            </div>
          </div>

          <div className='col-md-4'>
            <div className='discover-image-container'>
              <img src={HeroImage} alt='hero image' className='discover-image' width="100%" height="100%" />
              <div className='discover-content'>
                <div className='discover-title'>Mindful Meditation</div>
                <TfiArrowCircleRight size="15" />
              </div>
            </div>
          </div>


        </div>
      </div>

      <Testimonial/>

      <ExploreEvents/>

      <ExploreClasses/>

      <ConnectCard/>
    </div>
  )
}

export default Home