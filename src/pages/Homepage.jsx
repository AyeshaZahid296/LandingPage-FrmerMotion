import React from 'react'
import Navbar from '../components/sections/Navbar'
import CompareSection from '../components/sections/CompareSection'
import CardSection from '../components/sections/CardSection'
import InfoSection from '../components/sections/InfoSection'
import InsuranceSection from '../components/sections/InsuranceSection'
import Slider from '../components/ui/Slider'
import sliderData from '../utils/SliderData'
import BrandSection from '../components/sections/BrandSection'
import Footer from '../components/sections/Footer'
import ComparisonSection from '../components/sections/ComparisonSection '
import HeroSection from '../components/sections/HeroSection'
import TestimonialsSection from '../components/sections/TestimonialsSection'
import Spacer from '../components/ui/Spacer'

const Homepage = () => {
    return (
        <div className=' pt-0 p-1 md:p-1 lg:p-3 xl:p-2 xl:pt-0 2xl:p-6  2xl:pt-0 overflow-x-hidden'>
            <HeroSection />
            <br />
            <CardSection />
            <InsuranceSection />
            <ComparisonSection />
            <CompareSection />
            <TestimonialsSection />
            <InfoSection />
            <Spacer len="4" />
            <Slider items={sliderData} />
            <BrandSection />
            <br />
        </div>
    )
}

export default Homepage