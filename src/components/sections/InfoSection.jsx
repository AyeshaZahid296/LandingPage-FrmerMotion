import React from 'react'
import AnimatedText from '../ui/AnimatedText'
import Spacer from '../ui/Spacer'
import { div } from 'motion/react-client'

const InfoSection = () => {
    return (
        <div>
            <Spacer len="1" />
            <div className="flex items-center justify-center ">

                <div className="text-center ">

                    <h2 className='flex flex-col text-center' ><AnimatedText
                        text="Smart choices start"
                        lineBreakChar="\n"
                        align='center'
                        className="font-[Neighbor] font-medium h2 leading-[100%]  tracking-[-0.03em] max-w-2xl text-[#212121]"
                    />
                        <AnimatedText
                            text="with good information"
                            lineBreakChar="\n"
                            align='center'
                            className="font-[Neighbor] font-medium h2 leading-[100%]  tracking-[-0.03em] max-w-2xl text-[#212121]"
                        />
                    </h2>
                    <p
                        className="
                    w-full font-normal main  
                    leading-[1.5] text-center tracking-[0em]
                    max-w-xl mx-auto mt-6
                "
                    >
                        We give you clear, unbiased insights so you can make <br /> smarter choices with confidence.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default InfoSection
