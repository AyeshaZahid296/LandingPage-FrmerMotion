import { Card } from "../ui/Card";
import { Group1, Group2, Group3, Group4, GirlImage } from "../../assets";
import AnimatedText from "../ui/AnimatedText";

const CardSection = () => {
    return (
        <>
            <div className="text-left mb-6 md:mt-16 tracking-[-0.02em] px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-24">
                <h1 className="h2 font-[Neighbor] font-medium leading-[1.5] tracking-[-0.02em] text-gray-900" >
                    {/* Line 1 */}
                    <div className="flex flex-wrap items-center">
                        <AnimatedText text="Get your" as="h2" className="text-[#212121]" />

                        {/* Girl Image */}
                        <img
                            src={GirlImage}
                            alt="Girl Illustration"
                            className=" h-8 w-[60px] sm:w-[80px] sm:h-9 md:w-[100px] md:h-10 lg:h-11 lg:w-[120px] xl:w-[133px]  rounded-full object-cover"
                        />

                        {/* Circle with Group4 */}
                        <span className="inline-flex items-center justify-center 
                            w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 
                            rounded-full bg-[#FE65D9]"
                        >
                            <img
                                src={Group4}
                                alt="Group 4"
                                className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 object-contain"
                            />
                        </span>
                    </div>

                    {/* Line 2 */}
                    <div className="flex flex-wrap gap-2 sm:gap-3 mt-2 sm:mt-3">
                        <AnimatedText text="perfect match in" as="h2" />
                    </div>

                    {/* Line 3 (Left Aligned Fix) */}
                    <div className="mt-1 sm:mt-2 flex items-start">
                        <AnimatedText text="3 simple steps" as="h2" />
                    </div>
                </h1 >

                <p
                    className="
      mt-3 sm:mt-4 md:mt-5
      font-[Geist] font-normal 
      text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px]
      leading-[1.4] tracking-[-0.02em] text-left text-gray-700
    "
                >
                    Step-by-Step Process
                </p>
            </div >



            <div className="px-4  grid grid-cols-1   sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6 ">
                <Card
                    icon={<img src={Group1} alt="Step 01" className="w-6 h-6" />}
                    number="Step 01"
                    heading="Tell us what you need"
                    items={[
                        "Quick questions about your situation",
                        "Takes 60 seconds or less",
                        "Your data stays private",
                    ]}
                />

                <Card
                    icon={<img src={Group2} alt="Step 02" className="w-6 h-6" />}
                    number="Step 02"
                    heading="We compare everything"
                    items={[
                        "Real-time pricing from 150+ providers",
                        "Transparent terms, no hidden costs",
                        "Personalized to your specific needs",
                    ]}
                />

                <Card
                    icon={<img src={Group3} alt="Step 03" className="w-6 h-6" />}
                    number="Step 03"
                    heading="Choose & switch instantly"
                    items={[
                        "Direct online application",
                        "We handle the paperwork",
                        "Start saving immediately",
                    ]}
                />
            </div>
        </>

    );
};

export default CardSection;
